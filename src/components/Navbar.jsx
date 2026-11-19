import React, { useState } from 'react';
import { Music, VolumeX, Menu, X } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './Navbar.css';

export default function Navbar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMusic = () => {
    const active = soundEngine.toggleMusic((state) => {
      setIsPlaying(state);
    });
    setIsPlaying(active);
  };

  const navItems = [
    { label: "Today's Day", target: 'hero' },
    { label: 'Her Story', target: 'story' },
    { label: 'Things We Love', target: 'appreciation' },
    { label: 'Favourite People', target: 'family' },
    { label: 'Letter for You', target: 'letter' },
    { label: 'Make a Wish 🎂', target: 'wish' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    soundEngine.playSparkle();
  };

  return (
    <header className="journal-navbar">
      <div className="navbar-pill">
        {/* Brand */}
        <div className="navbar-brand-tag" onClick={() => scrollTo('hero')}>
          <span className="brand-doodle">🌸</span>
          <span className="brand-name">Hey Malu ♡</span>
        </div>

        {/* Desktop Links */}
        <nav className="desktop-nav-links">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="journal-nav-link"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action: Music Box */}
        <div className="navbar-right-controls">
          <button
            onClick={handleToggleMusic}
            className={`journal-music-btn ${isPlaying ? 'music-active' : ''}`}
            title={isPlaying ? 'Pause music' : 'Play cute music box'}
            aria-label="Toggle cozy music"
          >
            {isPlaying ? (
              <>
                <Music size={14} className="music-spin" />
                <span className="music-bars">
                  <span></span><span></span><span></span>
                </span>
                <span className="music-text">Playing</span>
              </>
            ) : (
              <>
                <VolumeX size={14} />
                <span className="music-text">Music Box</span>
              </>
            )}
          </button>

          <button
            className="journal-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="journal-mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="mobile-journal-item"
            >
              <span>{item.label}</span>
              <span className="mobile-doodle-dot">♡</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
