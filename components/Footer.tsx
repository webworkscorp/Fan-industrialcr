import React from 'react';
import { Reveal } from './Reveal';

const Footer: React.FC = () => {
  const socialLinks = [
    { prefix: 'fa-brands', icon: 'fa-facebook-f', href: 'https://www.facebook.com/share/1b5dNFdrt1/?mibextid=wwXIfr', label: 'Facebook' },
    { prefix: 'fa-brands', icon: 'fa-whatsapp', href: 'https://wa.me/50660013108', label: 'WhatsApp' },
    { prefix: 'fa-solid', icon: 'fa-envelope', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=extractoresindustrialesfanca@gmail.com', label: 'Gmail' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-16" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Reseña de Trayectoria - Diseño Mejorado */}
        <Reveal width="100%" duration={1200}>
          <div className="mb-20 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-block px-3 py-1 bg-gray-50 border-l-2 border-[#E62E2E] mb-6 shadow-sm">
                <span className="text-[12px] font-black uppercase tracking-[0.3em] text-[#051130]">Trayectoria y Confianza</span>
              </div>
              <p className="text-xl md:text-2xl font-bold text-[#051130] leading-tight tracking-tight uppercase">
                Contamos con <span className="text-[#E62E2E]">25 años de experiencia</span> brindando soluciones especializadas que mejoran la calidad del aire, promoviendo la salud y seguridad en espacios industriales y comerciales.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="hidden lg:block w-px h-24 bg-gray-200 mx-12"></div>
              <div className="flex flex-col justify-center">
                <span className="text-5xl font-black text-[#051130] leading-none tracking-tighter">25+</span>
                <span className="text-[12px] font-black uppercase tracking-widest text-gray-600 mt-2">Años de Excelencia</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Encabezado de Sección */}
        <Reveal width="100%" delay={200}>
          <div className="mb-12">
            <h2 className="text-[13px] font-black uppercase tracking-[0.5em] text-[#E62E2E] mb-2">Contáctenos</h2>
            <div className="w-12 h-[2px] bg-[#051130]"></div>
          </div>
        </Reveal>

        {/* Grilla Principal de Información */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          
          {/* Columna: Correo */}
          <Reveal width="100%" delay={300}>
            <div className="space-y-3">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-500">Correo Electrónico</span>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=extractoresindustrialesfanca@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl font-bold text-[#051130] hover:text-[#E62E2E] transition-colors block tracking-tighter"
              >
                extractoresindustrialesfanca@gmail.com
              </a>
            </div>
          </Reveal>

          {/* Columna: Teléfonos */}
          <Reveal width="100%" delay={400}>
            <div className="space-y-3">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-500">Teléfonos</span>
              <div className="flex flex-col gap-1">
                <a href="tel:60013108" className="text-2xl md:text-3xl font-black text-[#051130] hover:text-[#E62E2E] transition-colors tracking-tighter">
                  6001-3108
                </a>
              </div>
            </div>
          </Reveal>

          {/* Columna: Redes Sociales */}
          <Reveal width="100%" delay={500}>
            <div className="space-y-3 lg:text-right">
              <span className="text-[12px] font-black uppercase tracking-[0.2em] text-gray-500">Encuéntrenos</span>
              <div className="flex gap-4 lg:justify-end">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="w-10 h-10 flex items-center justify-center border border-gray-200 text-gray-700 hover:text-[#E62E2E] hover:border-[#E62E2E] transition-all duration-300 shadow-sm"
                    aria-label={social.label}
                  >
                    <i className={`${social.prefix} ${social.icon} text-base`}></i>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

        </div>

        {/* Línea Final y Copyright */}
        <Reveal width="100%" delay={600}>
          <div className="mt-20 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <img 
                src="https://i.imgur.com/Ai2rvKO.png" 
                alt="FAN INDUSTRIAL CR" 
                className="h-28 w-auto object-contain"
              />
              <div className="h-12 w-[1px] bg-gray-200"></div>
              <p className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">Costa Rica</p>
            </div>
            
            <p className="text-[12px] font-bold text-gray-600 uppercase tracking-widest">
              © 2026 Todos los derechos reservados
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;