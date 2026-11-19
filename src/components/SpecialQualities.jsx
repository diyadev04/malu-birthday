import React, { useState } from 'react';
import { APPRECIATION_NOTES } from '../data/websiteData';
import { soundEngine } from '../utils/soundEffects';
import './SpecialQualities.css';

export default function SpecialQualities() {
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (id) => {
    soundEngine.playSparkle();
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="appreciation" className="appreciation-section">
      <div className="appreciation-container">
        {/* Section Header */}
        <div className="diary-section-header">
          <span className="diary-badge">♡ Dear Malu ♡</span>
          <h2 className="diary-heading">Things We Love About You</h2>
          <p className="diary-subtitle">
            Just a few honest little reminders of why you are so deeply appreciated.
          </p>
        </div>

        {/* Scrapbook Sticky Notes Corkboard Grid */}
        <div className="notes-corkboard-grid">
          {APPRECIATION_NOTES.map((note) => {
            const isActive = activeId === note.id;

            return (
              <div
                key={note.id}
                className={`scrapbook-note-card ${isActive ? 'note-toggled' : ''}`}
                style={{
                  '--paper-bg': note.paperColor,
                  '--tape-color': note.tapeColor,
                  '--tilt-deg': note.rotation,
                }}
                onClick={() => handleCardClick(note.id)}
              >
                {/* Washi Tape Pin */}
                <div className="note-washi-tape"></div>

                {/* Top Doodle & Number */}
                <div className="note-top-bar">
                  <span className="note-doodle">{note.doodle}</span>
                  <span className="note-tag">note #{note.id}</span>
                </div>

                {/* Title */}
                <h3 className="note-title">{note.title}</h3>

                {/* Genuine handwritten body */}
                <p className="note-body-text">{note.text}</p>

                {/* Footer cue */}
                <div className="note-footer-cue">
                  <span>always true ♡</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
