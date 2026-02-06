import React, { useState } from 'react';
import { Reveal } from './Reveal';

const LoadedImage = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gray-100 ${className}`}>
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

const GreaseExtractionSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden" id="grease-extraction">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-100 -skew-x-12 translate-x-32 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative mb-12 lg:mb-0 order-1 lg:order-1">
            <Reveal direction="right" width="100%">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square bg-gradient-to-tr from-gray-200/50 to-transparent rounded-full -z-10"></div>
                
                <img 
                  src="https://i.imgur.com/3qQ462J.png" 
                  alt="Sistema de extracción para cocinas profesionales" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 25px 25px rgba(0,0,0,0.15))' }}
                />

                <div className="absolute bottom-10 left-0 bg-white p-4 shadow-xl border-l-4 border-[#E62E2E]">
                  <p className="text-[11px] font-black text-[#051130] uppercase tracking-tighter leading-none">Especialidad en</p>
                  <p className="text-xl font-black text-[#E62E2E] uppercase tracking-tighter">cocina</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-2 lg:order-2">
            <Reveal width="100%" direction="left">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#E62E2E]"></span>
                <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#051130]">Uso Industrial y comercial</span>
              </div>
            </Reveal>

            <Reveal width="100%" delay={100} direction="left">
              <h2 className="text-4xl md:text-6xl font-black text-[#051130] leading-[0.95] tracking-tighter uppercase mb-8">
                Sistema completo para <br />
                <span className="text-[#E62E2E]">extracción de grasa</span>
              </h2>
            </Reveal>

            <Reveal width="100%" delay={200} direction="left">
              <div className="space-y-6 mb-8">
                <p className="text-xl text-gray-700 font-medium leading-relaxed">
                  Proteja su cocina y espacios de trabajo de plagas, suciedad impregnada y malos olores, utilizando sistemas de extracción de grasa de alto rendimiento.
                </p>
                <div className="bg-[#E62E2E]/5 border-l-4 border-[#E62E2E] p-5 rounded-r-lg">
                  <p className="text-[#051130] font-black uppercase text-sm tracking-widest leading-relaxed">
                    El sistema incluye Campana, ducto en acero inoxidable y extractor a la medida.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal width="100%" delay={250} direction="left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <LoadedImage 
                  src="https://i.imgur.com/PrTVdVi.jpeg" 
                  alt="Instalación profesional de extracción de grasa 1" 
                  className="rounded-xl border border-gray-200 shadow-lg aspect-[4/3]"
                />
                <LoadedImage 
                  src="https://i.imgur.com/tbNRXH8.jpeg" 
                  alt="Instalación profesional de extracción de grasa 2" 
                  className="rounded-xl border border-gray-200 shadow-lg aspect-[4/3]"
                />
              </div>
            </Reveal>

            <Reveal width="100%" delay={300} direction="left">
              <div className="flex items-start gap-4 bg-[#051130] p-6 rounded-lg text-white">
                <div className="mt-1 text-[#E62E2E]">
                  <i className="fa-solid fa-shield-check text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-[14px] font-black uppercase tracking-widest mb-1">Normativa Sanitaria</h4>
                  <p className="text-[13px] text-gray-300 font-medium leading-relaxed">
                    Trabajos personalizados que cumplen con los requerimientos obligatorios solicitados por el <strong>Ministerio de Salud</strong>. Garantice la higiene y legalidad de su establecimiento.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreaseExtractionSection;