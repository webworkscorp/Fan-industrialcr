import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#051130] border-b border-white/5 h-10 flex items-center justify-between px-6 md:px-12">
      {/* Esquina Izquierda: Redes Sociales, Email y WhatsApp */}
      <div className="flex items-center gap-5">
        <a 
          href="https://www.facebook.com/share/1b5dNFdrt1/?mibextid=wwXIfr" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-[#E62E2E] transition-colors text-sm"
          aria-label="Facebook"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=extractoresindustrialesfanca@gmail.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-[#E62E2E] transition-colors text-sm"
          aria-label="Gmail"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a 
          href="https://wa.me/50660013108" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-[#E62E2E] transition-colors text-sm"
          aria-label="WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      {/* Esquina Derecha: Contacto */}
      <div className="flex items-center gap-3">
        <i className="fa-solid fa-phone text-[#E62E2E] text-xs"></i>
        <span className="text-white text-[13px] font-black tracking-[0.15em]">
          6001-3108
        </span>
      </div>
    </div>
  );
};

export default TopBar;