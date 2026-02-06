import React, { useState } from 'react';
import { Reveal } from './Reveal';

const VisualGallery: React.FC = () => {
  const videoUrl = "https://mqajxigehitkgdtepqzi.supabase.co/storage/v1/object/public/Video%20surf/FDownloader.Net_AQOssFtC5Z3XBS1d_jG-1OY55NF8Hday0bgyFgh5NRaJHcHImY62P4NDvmNVOreUnxz9aTWFWwGZRUeo8ipzWw-n8CvnJZq_xiTGNF6sRVEvZQ_720p_(HD).mov";
  
  const images = [
    "https://i.imgur.com/vjrIu8g.jpeg",
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
      <div className="grid grid-cols-1 lg:grid-cols-12">
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
          <div className="absolute bottom-10 left-10 z-20">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60 mb-2 block">Evidencia de Calidad</span>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Nuestro Trabajo</h3>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3">
          {images.map((img, index) => (
            /* Fix: Explicitly providing key and using React.FC for the component ensures key prop compatibility */
            <GalleryItem key={index} src={img} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* Fix: Using React.FC properly types the component to accept a key prop in JSX maps */
const GalleryItem: React.FC<{ src: string; index: number }> = ({ src, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Reveal width="100%" delay={index * 30} direction="none">
      <div className="aspect-square relative overflow-hidden border-[0.5px] border-white/5 bg-[#0a183d]">
        {/* Placeholder mientras carga */}
        {!loaded && (
          <div className="absolute inset-0 bg-[#0a183d] animate-pulse flex items-center justify-center">
            <i className="fa-solid fa-fan text-white/10 text-2xl animate-spin-slow"></i>
          </div>
        )}
        <img 
          src={src} 
          alt={`Proyecto FAN ${index + 1}`} 
          onLoad={() => setLoaded(true)}
          loading="lazy"
          className={`w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 bg-[#051130]/30 hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
      </div>
    </Reveal>
  );
};

export default VisualGallery;