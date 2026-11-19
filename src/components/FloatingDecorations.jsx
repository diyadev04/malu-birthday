import React from 'react';
import './FloatingDecorations.css';

export default function FloatingDecorations() {
  return (
    <div className="cute-ambient-container" aria-hidden="true">
      {/* Light pink & soft pastel glowing orbs */}
      <div className="pink-orb orb-1" />
      <div className="pink-orb orb-2" />
      <div className="pink-orb orb-3" />

      {/* Tiny floating cute doodles */}
      <div className="cute-doodle d-1">🌸</div>
      <div className="cute-doodle d-2">💖</div>
      <div className="cute-doodle d-3">✨</div>
      <div className="cute-doodle d-4">✿</div>
      <div className="cute-doodle d-5">🎀</div>
      <div className="cute-doodle d-6">♡</div>
    </div>
  );
}
