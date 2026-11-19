import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import FloatingDecorations from './components/FloatingDecorations';
import IntroductionModal from './components/IntroductionModal';
import HeroSection from './components/HeroSection';
import JourneyTimeline from './components/JourneyTimeline';
import SpecialQualities from './components/SpecialQualities';
import SiblingBond from './components/SiblingBond';
import BirthdayLetter from './components/BirthdayLetter';
import BirthdayCakeSurprise from './components/BirthdayCakeSurprise';
import HiddenSurpriseModal from './components/HiddenSurpriseModal';
import Footer from './components/Footer';
import { soundEngine } from './utils/soundEffects';
import './App.css';

export default function App() {
  const [introModalOpen, setIntroModalOpen] = useState(true);
  const [heartCount, setHeartCount] = useState(0);

  const handleSendLove = () => {
    soundEngine.playSparkle();
    setHeartCount((prev) => prev + 1);

    confetti({
      particleCount: 25,
      spread: 50,
      origin: { x: 0.9, y: 0.85 },
      colors: ['#FF6B95', '#FFB7CE', '#FFA3BE', '#F0E6FF', '#FFE27D'],
    });
  };

  return (
    <div className="diary-app">
      {/* Cute ambient light pink glow & floating doodles */}
      <FloatingDecorations />

      {/* Sweet light pink navigation bar */}
      <Navbar />

      {/* Section 1: Opening Screen ("pssst... Malu!") */}
      <IntroductionModal
        isOpen={introModalOpen}
        onClose={() => setIntroModalOpen(false)}
      />

      <main className="diary-main-flow">
        {/* Section 2: Pinterest-inspired Hero ("Hey Malu, it's YOUR day!") */}
        <HeroSection />

        {/* Section 3: Her Story Timeline ("Look How Far You've Come!") */}
        <JourneyTimeline />

        {/* Section 4: A Little Appreciation ("Things We Love About You") */}
        <SpecialQualities />

        {/* Section 5: Her Favourite People ("Family, Love & Little Memories") */}
        <SiblingBond />

        {/* Section 6: Open When You Have a Moment (Personal Letter) */}
        <BirthdayLetter />

        {/* Section 7: Make a Wish! (Minimalist Birthday Cake) */}
        <BirthdayCakeSurprise />

        {/* Section 8: One Last Thing... (Hidden Personal Message) */}
        <HiddenSurpriseModal />
      </main>

      {/* Interactive Floating Love Button */}
      <div className="floating-love-pill" onClick={handleSendLove} title="Tap to send love to Malu!">
        <span className="love-pill-icon">💖</span>
        <span className="love-pill-text">Send Love {heartCount > 0 ? `(${heartCount})` : ''}</span>
      </div>

      {/* Cute light pink Footer */}
      <Footer onReopenGift={() => setIntroModalOpen(true)} />
    </div>
  );
}
