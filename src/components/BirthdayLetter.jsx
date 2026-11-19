import React, { useState } from 'react';
import { BIRTHDAY_LETTER } from '../data/websiteData';
import { Mail, Edit3, Copy, Check, RotateCcw } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './BirthdayLetter.css';

export default function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [salutation, setSalutation] = useState(BIRTHDAY_LETTER.salutation);
  const [paragraphs, setParagraphs] = useState(BIRTHDAY_LETTER.paragraphs);
  const [signoff, setSignoff] = useState(BIRTHDAY_LETTER.signoff);
  const [author, setAuthor] = useState(BIRTHDAY_LETTER.author);
  const [copied, setCopied] = useState(false);

  const handleToggle = () => {
    soundEngine.playPop();
    setIsOpen(!isOpen);
    if (!isOpen) {
      setTimeout(() => soundEngine.playSparkle(), 350);
    }
  };

  const handleCopy = () => {
    const fullText = `${salutation}\n\n${paragraphs.join('\n\n')}\n\n${signoff}\n${author}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    soundEngine.playSparkle();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleParagraphChange = (index, value) => {
    const updated = [...paragraphs];
    updated[index] = value;
    setParagraphs(updated);
  };

  return (
    <section id="letter" className="letter-diary-section">
      <div className="letter-diary-container">
        {/* Section Header */}
        <div className="diary-section-header">
          <span className="diary-badge">✉️ A Note for You ✉️</span>
          <h2 className="diary-heading">Open When You Have a Moment</h2>
          <p className="diary-subtitle">
            A little personal letter, written with so much warmth and sincerity.
          </p>
        </div>

        {/* Envelope / Letter Interactive Box */}
        <div className="letter-stage">
          {!isOpen ? (
            /* Closed Cute Envelope */
            <div className="cozy-envelope-envelope" onClick={handleToggle}>
              <div className="cozy-envelope-body">
                <div className="cozy-envelope-flap">
                  <div className="cozy-heart-seal">♡</div>
                </div>

                <div className="cozy-envelope-front">
                  <span className="envelope-to-label">For: Malu ✿</span>
                  <span className="envelope-doodle-stamp">🌸</span>
                </div>
              </div>

              <div className="envelope-tap-prompt">
                <Mail size={16} />
                <span>Tap to open your letter ♡</span>
              </div>
            </div>
          ) : (
            /* Opened Letter on Notebook Paper */
            <div className="opened-notebook-sheet">
              {/* Action Toolbar */}
              <div className="sheet-toolbar">
                <button className="sheet-btn" onClick={handleCopy}>
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied! ♡' : 'Copy Letter'}</span>
                </button>

                <button
                  className="sheet-btn"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit3 size={14} />
                  <span>{isEditing ? 'Preview Mode' : 'Edit Note'}</span>
                </button>

                <button className="sheet-btn" onClick={handleToggle}>
                  <RotateCcw size={14} />
                  <span>Fold back</span>
                </button>
              </div>

              {/* Notebook Paper Sheet */}
              <div className="notebook-paper">
                <div className="tape-strip"></div>

                {/* Salutation */}
                {isEditing ? (
                  <input
                    type="text"
                    value={salutation}
                    onChange={(e) => setSalutation(e.target.value)}
                    className="journal-edit-input"
                  />
                ) : (
                  <h3 className="notebook-salutation">{salutation}</h3>
                )}

                {/* Paragraphs */}
                <div className="notebook-body">
                  {paragraphs.map((p, index) => (
                    <div key={index} className="notebook-para-wrap">
                      {isEditing ? (
                        <textarea
                          rows={3}
                          value={p}
                          onChange={(e) => handleParagraphChange(index, e.target.value)}
                          className="journal-edit-textarea"
                        />
                      ) : (
                        <p className="notebook-para">{p}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Sign-off */}
                <div className="notebook-signoff-wrap">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={signoff}
                        onChange={(e) => setSignoff(e.target.value)}
                        className="journal-edit-input"
                      />
                      <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="journal-edit-input"
                      />
                    </>
                  ) : (
                    <>
                      <p className="notebook-signoff">{signoff}</p>
                      <p className="notebook-author">{author}</p>
                    </>
                  )}
                </div>

                <div className="notebook-footer-doodle">
                  <span>✿ ✦ ♡ ✦ ✿</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
