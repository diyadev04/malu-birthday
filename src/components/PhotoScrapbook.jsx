import React, { useState } from 'react';
import { PHOTO_DIARY } from '../data/websiteData';
import { Eye, Image as ImageIcon, CheckCircle } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './PhotoScrapbook.css';

export default function PhotoScrapbook() {
  const [photos, setPhotos] = useState(PHOTO_DIARY);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editUrl, setEditUrl] = useState('');

  const categories = ['All', 'College', 'Fests', 'Portraits', 'Smiles', 'Family'];

  const filteredPhotos = activeCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === activeCategory);

  const handleEdit = (photo) => {
    setEditingId(photo.id);
    setEditUrl(photo.photo);
  };

  const handleSave = (id) => {
    if (editUrl.trim()) {
      setPhotos((prev) =>
        prev.map((p) => (p.id === id ? { ...p, photo: editUrl.trim() } : p))
      );
    }
    setEditingId(null);
    soundEngine.playPop();
  };

  return (
    <section id="diary" className="photo-diary-section">
      <div className="diary-container">
        {/* Section Header */}
        <div className="diary-section-header">
          <span className="diary-badge">📷 Film & Memories 📷</span>
          <h2 className="diary-heading">Little Moments, Big Memories</h2>
          <p className="diary-subtitle">
            A visual journal of sweet smiles, campus walks, and moments frozen in time.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="diary-filters-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`diary-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat);
                soundEngine.playSparkle();
              }}
            >
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* Film-Style Photo Scrapbook Grid */}
        <div className="film-scrapbook-grid">
          {filteredPhotos.map((item, index) => {
            const tilt = index % 3 === 0 ? '-1.5deg' : index % 3 === 1 ? '1.5deg' : '-0.5deg';

            return (
              <div
                key={item.id}
                className="film-frame-card"
                style={{ '--tilt': tilt }}
              >
                {/* Washi tape strip */}
                <div className="tape-strip"></div>

                {/* Paper Sticker */}
                <span className="paper-sticker">{item.sticker}</span>

                {/* Film Image Box */}
                <div
                  className="film-photo-wrapper"
                  onClick={() => {
                    soundEngine.playSparkle();
                    setSelectedPhoto(item);
                  }}
                >
                  <img src={item.photo} alt={item.title} loading="lazy" />
                  <div className="film-overlay">
                    <Eye size={16} />
                    <span>Expand Photo</span>
                  </div>
                </div>

                {/* Handwritten Caption Area */}
                <div className="film-caption-area">
                  <div className="film-meta-bar">
                    <span className="film-date">{item.date}</span>
                    <span className="film-cat-tag">#{item.category}</span>
                  </div>

                  <h4 className="film-title">{item.title}</h4>
                  <p className="film-handwritten-note">"{item.note}"</p>

                  <div className="film-action-bar">
                    <button
                      className="btn-film-edit"
                      onClick={() => handleEdit(item)}
                    >
                      <ImageIcon size={11} />
                      <span>Replace Photo</span>
                    </button>
                  </div>

                  {editingId === item.id && (
                    <div className="film-edit-box">
                      <input
                        type="text"
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        placeholder="Image URL..."
                        className="film-input"
                      />
                      <button
                        className="film-save-btn"
                        onClick={() => handleSave(item.id)}
                      >
                        <CheckCircle size={12} />
                        <span>Save</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="journal-lightbox-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="journal-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedPhoto(null)}>✕</button>
            <div className="lightbox-img-wrapper">
              <img src={selectedPhoto.photo} alt={selectedPhoto.title} />
            </div>
            <div className="lightbox-text-pane">
              <span className="lightbox-stamp">{selectedPhoto.sticker}</span>
              <h3>{selectedPhoto.title}</h3>
              <p className="lightbox-note">"{selectedPhoto.note}"</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
