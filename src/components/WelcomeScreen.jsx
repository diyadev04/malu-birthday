import React, { useState, useEffect } from 'react'
import './WelcomeScreen.css'

/* ── Floating particle data ── */
const HEARTS   = ['💗', '💕', '💖', '💝', '🩷', '❤️']
const FLOWERS  = ['🌸', '🌺', '🌷', '🌼', '🪷', '💐']
const BOWS     = ['🎀']
const SPARKLES = ['✨', '⭐', '🌟']

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

function generateParticles(count) {
  const pool = [...HEARTS, ...HEARTS, ...FLOWERS, ...FLOWERS, ...BOWS, ...SPARKLES]
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    emoji: pool[Math.floor(Math.random() * pool.length)],
    left: randomBetween(0, 100),         // %
    size: randomBetween(14, 30),          // px
    duration: randomBetween(8, 20),       // s
    delay: randomBetween(0, 15),          // s
    opacity: randomBetween(0.45, 0.85),
    drift: randomBetween(-60, 60),        // horizontal drift in px
  }))
}

const PARTICLES = generateParticles(38)

export default function WelcomeScreen() {
  const [clicked, setClicked] = useState(false)
  const [burst, setBurst] = useState(false)

  const handleOpen = () => {
    setBurst(true)
    setTimeout(() => setClicked(true), 600)
  }

  /* Sparkle burst particles on button click */
  const burstParticles = burst
    ? Array.from({ length: 12 }, (_, i) => ({
        id: i,
        angle: (360 / 12) * i,
        emoji: [...HEARTS, ...FLOWERS, ...BOWS][i % 9],
      }))
    : []

  return (
    <section className="welcome">
      {/* Gradient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      {/* Floating ambient particles */}
      <div className="particles" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              fontSize: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              opacity: p.opacity,
              '--drift': `${p.drift}px`,
            }}
          >
            {p.emoji}
          </span>
        ))}
      </div>

      {/* Main card */}
      <div className={`card ${clicked ? 'card--opened' : ''}`}>
        {/* Decorative corner bows */}
        <span className="corner corner-tl">🎀</span>
        <span className="corner corner-tr">🎀</span>
        <span className="corner corner-bl">🎀</span>
        <span className="corner corner-br">🎀</span>

        {/* Floral header row */}
        <div className="floral-row" aria-hidden="true">
          🌸 🌷 🪷 🌺 🌸
        </div>

        {/* Subtitle */}
        <p className="subtitle">with all my love ✨</p>

        {/* Main heading */}
        <h1 className="heading">
          A Little World
          <br />
          <span className="heading--script">of Malu</span>
        </h1>

        {/* Divider */}
        <div className="divider">
          <span>💕</span>
        </div>

        {/* Tagline */}
        <p className="tagline">
          Something special was made just for you,<br />
          because you deserve every beautiful thing 🌸
        </p>

        {/* CTA button */}
        {!clicked && (
          <div className="btn-wrap">
            {burstParticles.map((bp) => (
              <span
                key={bp.id}
                className="burst-particle"
                style={{ '--angle': `${bp.angle}deg` }}
              >
                {bp.emoji}
              </span>
            ))}
            <button
              className={`btn-open ${burst ? 'btn-open--burst' : ''}`}
              onClick={handleOpen}
            >
              <span className="btn-text">Open Your Surprise 🎁</span>
              <span className="btn-shine" />
            </button>
          </div>
        )}

        {/* Post-click message */}
        {clicked && (
          <div className="opened-msg">
            <p className="opened-emoji">🎉💖🎀</p>
            <p className="opened-text">More magic is on the way, Malu! 🌸</p>
          </div>
        )}

        {/* Floral footer row */}
        <div className="floral-row floral-row--bottom" aria-hidden="true">
          🌼 💐 🌺 💐 🌼
        </div>
      </div>

      {/* Footer note */}
      <p className="footer-note">Made with 💗 especially for Vinaya</p>
    </section>
  )
}
