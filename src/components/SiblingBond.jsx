import React, { useState, useEffect } from 'react';
import { FAVOURITE_PEOPLE } from '../data/websiteData';
import { Image as ImageIcon, CheckCircle, Heart, Eye } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './SiblingBond.css';

export default function SiblingBond() {
  const [photos, setPhotos] = useState(FAVOURITE_PEOPLE.photos);
  const [editingId, setEditingId] = useState(null);
  const [editUrl, setEditUrl] = useState('');
  const [activePhotoModal, setActivePhotoModal] = useState(null);

  useEffect(() => {
    setPhotos(FAVOURITE_PEOPLE.photos);
  }, []);

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
    <section id="family" className="favourite-people-section">
      <div className="favourite-container">
        {/* Section Header */}
        <div className="diary-section-header">
          <span className="diary-badge">✿ Family & Sibling Love ✿</span>
          <h2 className="diary-heading">{FAVOURITE_PEOPLE.heading}</h2>
          <p className="diary-subtitle">{FAVOURITE_PEOPLE.subtitle}</p>
        </div>

        <div className="favourite-scrapbook-spread">
          {/* Subtle Top Tape */}
          <div className="tape-strip"></div>

          {/* Sibling Quote */}
          <div className="family-quote-banner">
            <p className="quote-text">{FAVOURITE_PEOPLE.note}</p>
          </div>

          {/* Two Polaroids Side by Side */}
          <div className="family-polaroids-row">
            {photos.map((item) => (
              <div
                key={item.id}
                className="family-polaroid-item"
                style={{ '--rot': item.rotation }}
              >
                <div className="polaroid-pin">📌</div>

                <div
                  className={`family-img-wrap ${item.isEmojiCard ? 'family-emoji-wrap' : ''}`}
                  onClick={() => {
                    soundEngine.playSparkle();
                    setActivePhotoModal(item);
                  }}
                >
                  {item.isEmojiCard ? (
                    <div className="sibling-emoji-display">
                      <div className="sibling-top-sparkles">✨ 🌸 ⭐</div>
                      <div className="sibling-main-emojis">
                        <span className="sibling-boy-emoji">👦🏻</span>
                        <span className="sibling-heart-pulsing">💖</span>
                        <span className="sibling-girl-emoji">👧🏻</span>
                      </div>
                      <div className="sibling-best-badge">
                        <span>BEST BROTHER EVER 🤜🤛</span>
                      </div>
                      <div className="sibling-fun-row">
                        <span>🎮</span>
                        <span>🍕</span>
                        <span>🧃</span>
                        <span>⭐</span>
                        <span>🎈</span>
                      </div>
                      <p className="sibling-doodle-text">
                        partner in crime &amp; forever protector ♡
                      </p>
                    </div>
                  ) : (
                    <>
                      <img
                        src={item.photo}
                        alt={item.title}
                        style={{ objectPosition: item.objectPosition || 'center center' }}
                      />
                      <div className="family-img-hover">
                        <Eye size={16} />
                        <span>View photo</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="family-polaroid-meta">
                  <span className="family-tag-pill">{item.tag}</span>
                  <h4 className="family-photo-title">{item.title}</h4>
                  <p className="family-photo-caption">"{item.caption}"</p>

                  <button
                    className="btn-family-edit"
                    onClick={() => handleEdit(item)}
                  >
                    <ImageIcon size={12} />
                    <span>Replace Photo</span>
                  </button>

                  {editingId === item.id && (
                    <div className="family-edit-input-row">
                      <input
                        type="text"
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        placeholder="Image URL..."
                        className="family-input"
                      />
                      <button
                        className="family-save-btn"
                        onClick={() => handleSave(item.id)}
                      >
                        <CheckCircle size={13} />
                        <span>Save</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Sibling & Family Message */}
          <div className="sibling-letter-card">
            <h3 className="sibling-message-title">To Malu & Her Brother — A Forever Bond ♡</h3>
            <p className="sibling-message-text">
              From silly childhood arguments and shared laughs to standing strong by each other's 
              side through every phase of life, having a brother means you always have a protector, 
              a confidant, and a constant anchor. 
              <br /><br />
              Together with the warmth of mom and dad, you are blessed with a foundation of genuine 
              love that travels with you everywhere. Here's to this beautiful bond that only grows sweeter with time!
            </p>
            <div className="sibling-signature">
              <span>Always in your corner • With endless love and pride ✿</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhotoModal && (
        <div className="journal-lightbox-overlay" onClick={() => setActivePhotoModal(null)}>
          <div className="journal-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setActivePhotoModal(null)}>✕</button>
            <div className="lightbox-img-wrapper">
              <img src={activePhotoModal.photo} alt={activePhotoModal.title} />
            </div>
            <div className="lightbox-text-pane">
              <h3>{activePhotoModal.title}</h3>
              <p className="lightbox-note">"{activePhotoModal.caption}"</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
