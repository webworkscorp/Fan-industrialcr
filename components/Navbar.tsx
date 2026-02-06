import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Productos', href: '#services' },
    { name: 'Extractores', href: '#why' },
    { name: 'Contacto', href: '#footer' },
  ];

  return (
    <nav className="w-full z-[100] py-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-[#051130] p-2.5 rounded-2xl shadow-lg">
                <i className="fa-solid fa-fan text-[#E62E2E] text-2xl"></i>
            </div>
            <div>
              <span className="text-2xl font-black text-[#051130] block leading-none uppercase tracking-tighter">FAN INDUSTRIAL</span>
              <span className="text-[12px] tracking-[0.4em] text-[#E62E2E] font-black uppercase">Costa Rica</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-black uppercase tracking-[0.2em] text-[#051130] hover:text-[#E62E2E] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#E62E2E] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=extractoresindustrialesfanca@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#051130] text-white px-8 py-4 rounded-2xl text-[12px] font-black uppercase tracking-widest transition-all hover:bg-[#E62E2E] hover:shadow-xl hover:shadow-[#E62E2E]/20"
            >
              Pedir información
            </a>
          </div>

          {/* Contacto Directo en Mobile */}
          <div className="lg:hidden">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=extractoresindustrialesfanca@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#051130] text-white p-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;