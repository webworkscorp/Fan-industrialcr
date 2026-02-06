import React from 'react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href="https://wa.me/50660013108" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group border-2 border-white"
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 duration-1000"></div>
      <i className="fa-brands fa-whatsapp text-3xl md:text-4xl"></i>
    </a>
  );
};

export default FloatingWhatsApp;