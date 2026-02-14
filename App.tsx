
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Marquee from './components/Marquee.tsx';
import FeaturedDestinations from './components/FeaturedDestinations.tsx';
import Testimonials from './components/Testimonials.tsx';
import Benefits from './components/Benefits.tsx';
import Footer from './components/Footer.tsx';
import ChatWidget from './components/ChatWidget.tsx';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <FeaturedDestinations />
        <Testimonials />
        <Benefits />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
