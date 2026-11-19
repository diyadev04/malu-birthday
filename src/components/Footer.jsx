import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './Footer.css';

export default function Footer({ onReopenGift }) {
  const scrollToTop = () => {
    soundEngine.playSparkle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="diary-footer">
      <div className="diary-footer-inner">
        {/* Cute divider doodle */}
        <div className="footer-doodle-row">
          <span>✿</span><span>✦</span><span>♡</span><span>✦</span><span>✿</span>
        </div>

        <h3 className="footer-diary-title">Hey Malu, This One's For You! ♡</h3>
        <p className="footer-diary-desc">
          "Because a sweet soul who brings so much warmth into the world deserves a little place of her own."
        </p>

        {/* Action buttons */}
        <div className="footer-action-buttons">
          <button className="btn-footer-pill" onClick={onReopenGift}>
            <Mail size={14} />
            <span>Open Greeting Card ♡</span>
          </button>

          <button className="btn-footer-pill" onClick={scrollToTop}>
            <ArrowUp size={14} />
            <span>Back to top</span>
          </button>
        </div>

        {/* Credit Note */}
        <div className="footer-credit-note">
          <p>
            Made with lots of love for <strong>Vinaya (Malu)</strong> ✿
          </p>
          <p className="footer-sub-text">
            Keep smiling, keep dreaming, and have the happiest year ahead!
          </p>
        </div>
      </div>
    </footer>
  );
}
