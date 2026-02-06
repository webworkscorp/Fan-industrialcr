import React from 'react';
import { Reveal } from './Reveal';

const VisualGallery: React.FC = () => {
  const videoUrl = "https://mqajxigehitkgdtepqzi.supabase.co/storage/v1/object/public/Video%20surf/FDownloader.Net_AQOssFtC5Z3XBS1d_jG-1OY55NF8Hday0bgyFgh5NRaJHcHImY62P4NDvmNVOreUnxz9aTWFWwGZRUeo8ipzWw-n8CvnJZq_xiTGNF6sRVEvZQ_720p_(HD).mov";
  
  // Lista de 12 imágenes de proyectos (completando el grid)
  const images = [
    "https://i.imgur.com/vjrIu8g.jpeg", // Última imagen agregada
    "https://i.imgur.com/X1kQ4AP.jpeg",
    "https://i.imgur.com/eBJRfum.jpeg",
    "https://i.imgur.com/Dp53zKP.jpeg",
    "https://i.imgur.com/IqgkDFc.jpeg",
    "https://i.imgur.com/CHG9rE7.jpeg",
    "https://i.imgur.com/kewEsFX.jpeg",
    "https://i.imgur.com/1ueBxGu.jpeg",
    "https://i.imgur.com/zXvCbXh.jpeg",
    "https://i.imgur.com/qU3x9aP.jpeg",
    "https://i.imgur.com/PsFxVNu.jpeg",
    "https://i.imgur.com/7ZA7NxH.jpeg"
  ];

  return (
    <section className="bg-[#051130] overflow-hidden border-y border-white/5">
      {/* Layout Split: Video a un lado, Imágenes al otro */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Columna 1: Video Vertical */}
        <div className="lg:col-span-5 relative h-[60vh] lg:h-auto bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none"></div>
          <video 
            src={videoUrl} 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
          {/* Label flotante sobre video */}
          <div className="absolute bottom-10 left-10 z-20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-2 block">Evidencia de Calidad</span>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Nuestro Trabajo</h3>
          </div>
        </div>

        {/* Columna 2: Grid de Imágenes (12 fotos para un grid perfecto) */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3">
          {images.map((img, index) => (
            <Reveal key={index} width="100%" delay={index * 50} direction="none">
              <div className="aspect-square relative overflow-hidden border-[0.5px] border-white/5 bg-[#0a183d]">
                <img 
                  src={img} 
                  alt={`Proyecto FAN ${index + 1}`} 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay sutil sin interactividad de clic ni escala */}
                <div className="absolute inset-0 bg-[#051130]/30 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisualGallery;