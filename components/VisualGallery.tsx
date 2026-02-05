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
        <Reveal width="100%" className="md:h-full relative">
          {/* En móvil mantenemos la altura fija 60vh. En PC usamos h-full para llenar la columna verticalmente */}
          <div className="w-full h-[60vh] md:h-full relative bg-[#051130]">
             {/* Overlay sutil */}
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
        </Reveal>

        {/* Columna 2: Grid de Imágenes 2x2 */}
        <div className="grid grid-cols-2">
          {images.map((img, index) => (
            <Reveal key={index} delay={index * 150} width="100%" duration={1200} className="h-full">
              <div className="aspect-square relative overflow-hidden group w-full h-full">
                <img 
                  src={img} 
                  alt={`Galería Visual ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#051130]/30 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VisualGallery;