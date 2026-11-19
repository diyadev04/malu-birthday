import React from 'react';
import { ArrowDown, Heart, Sparkles, BookOpen, Mail } from 'lucide-react';
import { soundEngine } from '../utils/soundEffects';
import './HeroSection.css';

export default function HeroSection() {
  const scrollTo = (id) => {
    soundEngine.playSparkle();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="journal-hero-section">
      <div className="journal-hero-container">
        {/* Left Editorial Narrative */}
        <div className="hero-diary-text">
          <div className="hero-mini-tag">
            <span className="mini-tag-dot">🌸</span>
            <span>A birthday journal for Vinaya</span>
          </div>

          <h1 className="hero-diary-heading">
            Hey Malu, <br />
            <span className="heading-highlight">it's YOUR day!</span>
          </h1>

          <p className="hero-diary-subtitle">
            "A little corner of the internet, made with lots of love, just for you."
          </p>

          <p className="hero-diary-lead">
            We put together some of your favorite memories, brightest smiles, and 
            the sweetest reasons why having you around makes life so much better. 
            Grab a warm drink, make yourself comfortable, and explore your little scrapbook!
          </p>

          {/* Action pills */}
          <div className="hero-diary-actions">
            <button className="btn-journal-primary" onClick={() => scrollTo('story')}>
              <BookOpen size={16} />
              <span>Read Her Story ✿</span>
            </button>

            <button className="btn-journal-secondary" onClick={() => scrollTo('letter')}>
              <Mail size={16} />
              <span>Open Your Letter 💌</span>
            </button>
          </div>

          {/* Cute micro details */}
          <div className="hero-micro-notes">
            <span className="micro-tag">🎓 M.Tech Scholar</span>
            <span className="micro-tag">☀️ Warmest Smile</span>
            <span className="micro-tag">♡ Kind Soul</span>
          </div>
        </div>

        {/* Right Pinterest-Style Polaroid Photo & Sticky Note */}
        <div className="hero-diary-visual">
          <div className="pinterest-photo-card">
            {/* Cute pink washi tape */}
            <div className="tape-strip"></div>

            {/* Polaroid Frame */}
            <div className="polaroid-frame-box">
              <img
                src="/photos/malu-new-main.jpeg"
                alt="Vinaya (Malu)"
                className="hero-polaroid-img"
              />
              <div className="polaroid-hand-caption">
                <span>Vinaya • Birthday Girl ✿</span>
              </div>
            </div>

            {/* Cute Handwritten Sticky Note */}
            <div className="attached-sticky-note">
              <div className="sticky-pin">📍</div>
              <p className="sticky-handwriting">
                look at that smile! <br />
                keep shining, birthday girl ♡
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="hero-scroll-cue" onClick={() => scrollTo('story')}>
        <span className="scroll-cue-text">flip to her story</span>
        <ArrowDown size={16} className="scroll-cue-arrow" />
      </div>
    </section>
  );
}
