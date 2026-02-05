import React, { useState, useEffect, useCallback } from 'react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  const phrase = "FAN INDUSTRIAL CR";
  const typingSpeed = 100;
  const deletingSpeed = 40;
  const pauseTime = 3000;
  const startDelay = 800;

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleType = useCallback(() => {
    const fullText = phrase;
    const nextText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(nextText);

    if (!isDeleting && nextText === fullText) {
      setIsDeleting(true);
    } else if (isDeleting && nextText === '') {
      setIsDeleting(false);
    }
  }, [text, isDeleting]);

  useEffect(() => {
    let timeout: number;
    if (isDeleting && text === phrase) {
      timeout = window.setTimeout(handleType, pauseTime);
    } else if (!isDeleting && text === '') {
      timeout = window.setTimeout(handleType, startDelay);
    } else {
      timeout = window.setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [handleType, text, isDeleting]);

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#051130] overflow-hidden">
      {/* Fondo optimizado con efecto de zoom suave al cargar */}
      <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-transform duration-[2000ms] ease-out ${loaded ? 'scale-100' : 'scale-110'}`}>
        <img 
          src="https://i.imgur.com/ZFEvi3n.jpeg" 
          alt="Ingeniería Industrial" 
          className="w-full h-full object-cover opacity-25 hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#051130] via-[#051130]/95 to-[#051130]/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          <Reveal width="100%" delay={200}>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-10 min-h-[1.8em] md:min-h-[2.1em] flex items-center">
              <span className="inline-flex flex-wrap">
                {text.split(' ').map((word, i, arr) => (
                  <span key={i} className={word === 'CR' ? 'text-[#E62E2E]' : 'text-white'}>
                    {word}{i !== arr.length - 1 ? '\u00A0' : ''}
                  </span>
                ))}
              </span>
              <span className="inline-block w-[4px] md:w-[6px] h-[0.9em] bg-[#E62E2E] ml-4 animate-pulse rounded-full"></span>
            </h1>
          </Reveal>
          
          <Reveal width="100%" delay={400}>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-12 max-w-3xl">
              Proporcionamos soluciones especializadas que mejoran la calidad del aire, promoviendo la salud, seguridad y bienestar en espacios industriales y comerciales.
            </p>
          </Reveal>
          
          <Reveal width="100%" delay={600}>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#about" 
                className="bg-[#E62E2E] text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#051130] transition-all duration-300 shadow-lg shadow-[#E62E2E]/20"
              >
                NUESTRA IDENTIDAD
              </a>
              <a 
                href="#services" 
                className="bg-transparent border border-white/20 text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white transition-all duration-300"
              >
                VER SOLUCIONES
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;