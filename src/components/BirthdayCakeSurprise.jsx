import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Flame, RotateCcw } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './BirthdayCakeSurprise.css';

export default function BirthdayCakeSurprise() {
  const [candlesLit, setCandlesLit] = useState(true);
  const [wishMade, setWishMade] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const handleMakeWish = () => {
    if (!candlesLit) return;
    setIsBlowing(true);
    soundEngine.playBlowCandle();

    setTimeout(() => {
      setCandlesLit(false);
      setIsBlowing(false);
      setWishMade(true);

      // Cute, tasteful confetti celebration
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#E8B4B8', '#FCE9DF', '#E3D5E8', '#722F37', '#FFFDF9', '#F9D8C9'],
      });
    }, 600);
  };

  const handleRelight = () => {
    soundEngine.playSparkle();
    setCandlesLit(true);
    setWishMade(false);
  };

  return (
    <section id="wish" className="wish-section">
      <div className="wish-container">
        {/* Section Header */}
        <div className="diary-section-header">
          <span className="diary-badge">🎂 Make a Wish 🎂</span>
          <h2 className="diary-heading">Blow Out the Candles, Malu!</h2>
          <p className="diary-subtitle">
            Close your eyes, think of the sweetest wish, and tap the button.
          </p>
        </div>

        {/* Minimalist Aesthetic Cake Display */}
        <div className="cozy-cake-stage">
          <div className="cake-doodle-card">
            {/* Top Tape */}
            <div className="tape-strip"></div>

            {/* Candle row */}
            <div className="cozy-candles-row">
              {[0, 1, 2].map((idx) => (
                <div key={idx} className={`cozy-candle candle-${idx}`}>
                  {candlesLit ? (
                    <div className="candle-flame-flicker"></div>
                  ) : (
                    <span className="candle-smoke-puff">💨</span>
                  )}
                  <div className="candle-wick-line"></div>
                  <div className="candle-stripe-stick"></div>
                </div>
              ))}
            </div>

            {/* Cake Tiers (Cream & Peach Minimalist Aesthetic) */}
            <div className="minimal-cake-stack">
              <div className="cake-layer-top">
                <span className="cake-hand-name">Malu ♡</span>
              </div>
              <div className="cake-layer-bottom">
                <div className="strawberry-dots">
                  <span>🍓</span><span>✿</span><span>🍓</span><span>✿</span><span>🍓</span>
                </div>
              </div>
              <div className="cake-ceramic-stand"></div>
            </div>

            {/* Action Button */}
            <div className="cake-button-wrap">
              {candlesLit ? (
                <button className="btn-make-wish" onClick={handleMakeWish}>
                  <Flame size={16} className="flame-icon" />
                  <span>Make a Wish, Malu! ♡</span>
                </button>
              ) : (
                <button className="btn-relight-candles" onClick={handleRelight}>
                  <RotateCcw size={14} />
                  <span>Relight the candles 🕯️</span>
                </button>
              )}
            </div>

            {/* Revealed Heartfelt Wish Card */}
            {wishMade && (
              <div className="revealed-wish-note">
                <span className="wish-doodle-star">✦</span>
                <h4 className="wish-note-title">May All Your Wishes Come True ♡</h4>
                <p className="wish-note-text">
                  May every dream you hold in your heart find its way into reality. 
                  May your M.Tech journey bring you confidence, pride, and wonderful breakthroughs. 
                  And may you always be surrounded by genuine friends, good health, and peace of mind.
                </p>
                <p className="wish-note-sign">
                  Happy Birthday, sweet Malu! ✿
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
