import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutVision from './components/AboutVision';
import FounderSection from './components/FounderSection';
import LeadersSection from './components/LeadersSection';
import ProgramsSection from './components/ProgramsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

// Import assets

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <Header logo="/image/logo.png" />

      {/* Hero Section */}
      <Hero />

      {/* About & Vision/Mission */}
      <AboutVision />

      {/* Founder Section */}
      <FounderSection />

      {/* Meet Our Leaders */}
      <LeadersSection />

      {/* Upcoming Programs with Volunteer Form */}
      <ProgramsSection flyerImage="/image/upcoming.jpeg" />

      {/* Gallery */}
      <GallerySection />

      {/* Contact & Footer */}
      <ContactSection />
    </div>
  );
}

export default App;
