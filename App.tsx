
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FeaturedDestinations from './components/FeaturedDestinations';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

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
