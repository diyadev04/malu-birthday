import React, { useState } from 'react';
import { HIDDEN_SURPRISE } from '../data/websiteData';
import confetti from 'canvas-confetti';
import { X, Sparkles, Heart } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './HiddenSurpriseModal.css';

export default function HiddenSurpriseModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    soundEngine.playSparkle();
    setIsOpen(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#E8B4B8', '#FCE9DF', '#E3D5E8', '#722F37', '#FFFDF9'],
    });
  };

  return (
    <>
      {/* Secret Trigger Area */}
      <div className="secret-diary-trigger-area">
        <button className="btn-waittt-surprise" onClick={handleOpen}>
          <span className="sparkle-doodle">✦</span>
          <span>Waittt, one more thing! ♡</span>
          <span className="sparkle-doodle">✦</span>
        </button>
        <p className="secret-diary-hint">before you close this tab, tap here ✿</p>
      </div>

      {/* Secret Modal */}
      {isOpen && (
        <div className="secret-diary-overlay" onClick={() => setIsOpen(false)}>
          <div className="secret-diary-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="secret-diary-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close note"
            >
              <X size={16} />
            </button>

            {/* Top Washi Tape */}
            <div className="tape-strip"></div>

            <span className="secret-badge-pill">{HIDDEN_SURPRISE.badge}</span>
            <h3 className="secret-diary-title">{HIDDEN_SURPRISE.title}</h3>
            <p className="secret-diary-subtitle">{HIDDEN_SURPRISE.subtitle}</p>

            <div className="secret-note-paper">
              <p className="secret-main-message">{HIDDEN_SURPRISE.message}</p>
              <p className="secret-ps-line">{HIDDEN_SURPRISE.ps}</p>
            </div>

            <div className="secret-card-bottom">
              <span>Always in your corner • Happy Birthday Malu ♡</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
