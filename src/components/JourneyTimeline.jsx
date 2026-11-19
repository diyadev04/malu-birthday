import React, { useState, useEffect } from 'react';
import { HER_STORY_TIMELINE } from '../data/websiteData';
import { Calendar, Image as ImageIcon, CheckCircle, Eye } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './JourneyTimeline.css';

export default function JourneyTimeline() {
  const [timelineItems, setTimelineItems] = useState(HER_STORY_TIMELINE);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editUrl, setEditUrl] = useState('');

  useEffect(() => {
    setTimelineItems(HER_STORY_TIMELINE);
  }, []);

  const handleEdit = (e, item) => {
    e.stopPropagation();
    setEditingId(item.id);
    setEditUrl(item.photo);
  };

  const handleSave = (id) => {
    if (editUrl.trim()) {
      setTimelineItems((prev) =>
        prev.map((it) => (it.id === id ? { ...it, photo: editUrl.trim() } : it))
      );
    }
    setEditingId(null);
    soundEngine.playPop();
  };

  return (
    <section id="story" className="story-section">
      <div className="story-container">
        {/* Section Header */}
        <div className="diary-section-header">
          <span className="diary-badge">✿ Life Chapters ✿</span>
          <h2 className="diary-heading">Look How Far You've Come!</h2>
          <p className="diary-subtitle">
            A little scrapbook of your sweet milestones, hard work, and cherished memories.
          </p>
        </div>

        {/* Timeline Scrapbook Entries */}
        <div className="scrapbook-timeline-list">
          <div className="stitch-line"></div>

          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`story-row ${isEven ? 'story-left' : 'story-right'}`}
              >
                {/* Center chapter stamp */}
                <div className="story-pin-node">
                  <span className="node-stamp">{item.stamp}</span>
                </div>

                {/* Scrapbook Entry Card */}
                <div className="story-card">
                  {/* Washi tape */}
                  <div
                    className="tape-strip"
                    style={{ background: item.tapeColor }}
                  ></div>

                  {/* Header Meta */}
                  <div className="story-card-top">
                    <span className="story-chapter-label">{item.chapter}</span>
                    <span className="story-date-badge">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <h3 className="story-item-title">{item.title}</h3>
                  <span className="story-handwritten-tag">{item.tag}</span>

                  {/* Polaroid Photo Box */}
                  <div
                    className="story-polaroid-box"
                    onClick={() => {
                      soundEngine.playSparkle();
                      setSelectedPhoto(item);
                    }}
                  >
                    <img
                      src={item.photo}
                      alt={item.title}
                      className="story-img"
                      style={{ objectPosition: item.objectPosition || 'center center' }}
                    />
                    <div className="story-photo-view-cue">
                      <Eye size={16} />
                      <span>Click to view</span>
                    </div>
                  </div>

                  {/* Handwritten Cute Note */}
                  <div className="story-hand-note">
                    <p>"{item.note}"</p>
                  </div>

                  {/* Description */}
                  <p className="story-description">{item.desc}</p>

                  {/* Edit Photo Action */}
                  <div className="story-card-footer">
                    <button
                      className="btn-story-edit-photo"
                      onClick={(e) => handleEdit(e, item)}
                    >
                      <ImageIcon size={12} />
                      <span>Replace Photo</span>
                    </button>
                  </div>

                  {/* Inline edit */}
                  {editingId === item.id && (
                    <div className="story-edit-field" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="text"
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        placeholder="Image URL..."
                        className="story-input"
                      />
                      <button
                        className="story-save-btn"
                        onClick={() => handleSave(item.id)}
                      >
                        <CheckCircle size={13} />
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
              <span className="lightbox-stamp">{selectedPhoto.stamp}</span>
              <h3>{selectedPhoto.title}</h3>
              <p className="lightbox-note">"{selectedPhoto.note}"</p>
              <p className="lightbox-desc">{selectedPhoto.desc}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
