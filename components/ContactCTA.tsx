import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-20 relative z-20">
      <div className="bg-[#E62E2E] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center shadow-2xl overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 200 L500 -100 M-100 400 L700 -200" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 relative z-10 w-full">
          <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <i className="fa-solid fa-phone text-[#E62E2E]"></i>
            </div>
            <div>
              <p className="text-white/70 text-xs font-bold uppercase">Atención Directa</p>
              <p className="text-white font-bold text-lg">6001-3108</p>
            </div>
          </div>
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=extractoresindustrialesfanca@gmail.com"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-white text-[#051130] px-8 py-4 rounded-xl font-extrabold hover:bg-[#051130] hover:text-white transition-all shadow-lg self-center text-sm uppercase tracking-widest"
          >
            Enviar Correo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;