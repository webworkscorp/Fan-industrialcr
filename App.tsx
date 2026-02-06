import React from 'react';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import WorkProcess from './components/WorkProcess';
import AboutUs from './components/AboutUs';
import VisualGallery from './components/VisualGallery';
import Services from './components/Services';
import GreaseExtractionSection from './components/GreaseExtractionSection';
import WhyChooseUs from './components/WhyChooseUs';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden w-full">
      <TopBar />
      <main className="flex-grow w-full">
        <Hero />
        <WorkProcess />
        <AboutUs />
        <VisualGallery />
        <Services />
        <GreaseExtractionSection />
        <WhyChooseUs />
        <ConsultationForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;