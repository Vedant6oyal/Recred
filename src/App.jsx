import { MotionConfig } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Audience from './components/Audience';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Proof />
        <Problem />
        <HowItWorks />
        <Audience />
        <Team />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </MotionConfig>
  );
}
