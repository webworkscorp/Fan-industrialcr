import React from 'react';
import { Reveal } from './Reveal';

const VisualGallery: React.FC = () => {
  const videoUrl = "https://mqajxigehitkgdtepqzi.supabase.co/storage/v1/object/public/Video%20surf/FDownloader.Net_AQOssFtC5Z3XBS1d_jG-1OY55NF8Hday0bgyFgh5NRaJHcHImY62P4NDvmNVOreUnxz9aTWFWwGZRUeo8ipzWw-n8CvnJZq_xiTGNF6sRVEvZQ_720p_(HD).mov";
  
  const images = [
    "https://i.imgur.com/zXvCbXh.jpeg",
    "https://i.imgur.com/qU3x9aP.jpeg",
    "https://i.imgur.com/PsFxVNu.jpeg",
    "https://i.imgur.com/7ZA7NxH.jpeg"
  ];

  return (
    <section className="bg-[#051130] overflow-hidden">
      {/* Layout Split: Video a un lado (Vertical), Imágenes al otro */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Columna 1: Video (Vertical en PC, Top en Móvil) */}
        <div className="md:h-full relative w-full h-[60vh] bg-[#051130]">
          <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>
          <video 
            src={videoUrl} 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>

        {/* Columna 2: Grid de Imágenes 2x2 - Con Reveal de entrada */}
        <div className="grid grid-cols-2">
          {images.map((img, index) => (
            <Reveal key={index} width="100%" delay={index * 100} direction="none">
              <div className="aspect-square relative overflow-hidden w-full h-full">
                <img 
                  src={img} 
                  alt={`Galería Visual ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#051130]/30"></div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisualGallery;