import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, ArrowDown, Sparkles } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './IntroductionModal.css';

export default function IntroductionModal({ isOpen, onClose }) {
  const [isOpened, setIsOpened] = useState(false);
  const [envelopeUnfolding, setEnvelopeUnfolding] = useState(false);

  const handleOpen = () => {
    soundEngine.playPop();
    setEnvelopeUnfolding(true);

    setTimeout(() => {
      soundEngine.playSparkle();
      setIsOpened(true);

      // Cute small confetti celebration
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#E8B4B8', '#FCE9DF', '#E3D5E8', '#722F37', '#FFFDF9'],
      });
    }, 450);
  };

  const handleEnter = () => {
    soundEngine.playSparkle();
    onClose();
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="open-screen-overlay">
      <div className="open-screen-card">
        {/* Cute top washi tape */}
        <div className="tape-strip"></div>

        {!isOpened ? (
          <div className="envelope-teaser-box">
            {/* Minimal aesthetic envelope icon */}
            <div className={`minimal-envelope-doodle ${envelopeUnfolding ? 'unfolding' : ''}`}>
              <div className="envelope-icon-wrap">
                <span className="envelope-doodle-icon">✉️</span>
                <span className="envelope-heart-stamp">♡</span>
              </div>
            </div>

            <p className="pssst-text">pssst... Malu!</p>
            <h2 className="teaser-phrase">I made a little something for you.</h2>

            <button className="btn-open-envelope" onClick={handleOpen}>
              <span>Open it ♡</span>
            </button>
          </div>
        ) : (
          <div className="revealed-greeting-box">
            <span className="doodle-flower-top">✿</span>
            <h1 className="birthday-cheer-title">
              HAPPY BIRTHDAY, MALU!
            </h1>
            <p className="pretty-girl-text">
              "Today is all about you, pretty girl!"
            </p>
            <p className="greeting-subtext">
              A little digital scrapbook of smiles, memories, and warm wishes gathered just for you.
            </p>

            <button className="btn-enter-diary" onClick={handleEnter}>
              <span>Come on in ♡</span>
              <ArrowDown size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
