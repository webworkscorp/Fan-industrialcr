import React, { useState } from 'react';
import { Reveal } from './Reveal';

const TechnicalTable = ({ headers, data }: { headers: string[], data: any[] }) => (
  <div className="mt-6">
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-gray-200">
          {headers.map((h, i) => (
            <th key={i} className="py-2 text-[12px] font-black uppercase tracking-widest text-gray-600">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b border-gray-100 last:border-0">
            {Object.values(row).map((val: any, j) => (
              <td key={j} className="py-2.5 text-[13px] font-bold text-[#051130] uppercase">{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ProductImage = ({ src, alt, fit = 'contain' }: { src: string, alt: string, fit?: 'contain' | 'cover' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="relative w-full h-full bg-white flex items-center justify-center">
      {!isLoaded && <div className="absolute inset-0 bg-gray-50 animate-pulse" />}
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        className={`w-full h-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} group-hover:scale-105 transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

const ProductBox = ({ 
  title, 
  subtitle, 
  image, 
  children, 
  imagePadding = "p-2",
  imageFit = "contain",
  aspect = "aspect-square",
  className = ""
}: { 
  title: string, 
  subtitle?: string, 
  image: string | string[], 
  children?: React.ReactNode, 
  imagePadding?: string,
  imageFit?: "contain" | "cover",
  aspect?: string,
  className?: string
}) => (
  <div className={`bg-white border border-gray-200 p-8 flex flex-col h-full hover:border-[#E62E2E]/20 transition-all duration-500 group shadow-sm ${className}`}>
    <div className={`${aspect} mb-8 overflow-hidden bg-white relative border border-gray-100 flex items-center justify-center ${imagePadding}`}>
      {Array.isArray(image) ? (
        <div className="flex w-full h-full gap-2">
          {image.map((img, idx) => (
            <div key={idx} className="flex-1 h-full flex items-center justify-center overflow-hidden bg-gray-50/50">
              <ProductImage src={img} alt={`${title} - ${idx}`} fit={imageFit} />
            </div>
          ))}
        </div>
      ) : (
        <ProductImage src={image} alt={title} fit={imageFit} />
      )}
    </div>
    <div className="flex-grow">
      <h3 className="text-2xl font-black text-[#051130] uppercase tracking-tighter mb-1 leading-none">{title}</h3>
      {subtitle && <p className="text-[12px] font-black text-[#E62E2E] uppercase tracking-[0.2em] mb-4">{subtitle}</p>}
      <div className="mt-2">
        {children}
      </div>
    </div>
  </div>
);

const SectionNumber = ({ id, label }: { id: string, label: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="w-16 h-8 overflow-hidden relative flex items-center bg-gray-100 rounded-lg px-2">
      <span className="text-sm font-black text-[#E62E2E] tracking-widest animate-slide-infinite">
        {id}
      </span>
    </div>
    <div className="h-[1px] w-8 bg-gray-300"></div>
    <h4 className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-500">{label}</h4>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-24">
          <Reveal width="100%">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#E62E2E]"></span>
              <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#051130]">Soluciones de Excelencia</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#051130] leading-[0.85] tracking-tighter uppercase">
              Productos & <br />
              <span className="text-[#E62E2E]">Soluciones</span>
            </h2>
          </Reveal>
        </div>

        {/* 01. Sistemas Axiales */}
        <div className="mb-24">
          <Reveal width="100%">
            <SectionNumber id="01." label="Extracción Axial" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProductBox title="Axial de Transmisión" subtitle="Poleas y Fajas" image={["https://i.imgur.com/KCisyXq.png", "https://i.imgur.com/stDiIMW.png"]}>
              <TechnicalTable headers={['Medida', 'Potencia', 'Corriente']} data={[{ m: '30"', p: '1 HP', c: 'Mono / Tri' }, { m: '36"', p: '1.5 HP', c: 'Mono / Tri' }, { m: '42"', p: '2 HP', c: 'Mono / Tri' }, { m: '48"', p: '3 HP', c: 'Mono / Tri' }]} />
            </ProductBox>
            <ProductBox title="Axial de Transmisión Importado" subtitle="Poleas y Fajas" image={["https://i.imgur.com/zapuYQd.png", "https://i.imgur.com/JbF0Q7m.png"]} />
            <ProductBox title="Axial Nacional" subtitle="Fabricación" image={["https://i.imgur.com/gJCfCUA.png", "https://i.imgur.com/ALsFcwS.png"]}>
              <TechnicalTable headers={['Medida', 'Voltaje', 'Corriente']} data={[{ m: '14"', v: '110/220V', c: 'Monofásico' }, { m: '16"', v: '110/220V', c: 'Monofásico' }, { m: '18"', v: '110/220V', c: 'Monofásico' }, { m: '20"', v: '110/220V', c: 'Monofásico' }, { m: '22"', v: '110/220V', c: 'Monofásico' }, { m: '24"', v: '110/220V', c: 'Monofásico' }]} />
            </ProductBox>
            <ProductBox title="Axial Importado" subtitle="Voltaje 110V" image={["https://i.imgur.com/T5cQi0f.png", "https://i.imgur.com/PNBhC4r.png"]}>
              <TechnicalTable headers={['Medida', 'Pot.', 'Caudal', 'RPM']} data={[{ m: '12"', p: '130W', c: '1130 CFM', r: '1400' }, { m: '16"', p: '200W', c: '2400 CFM', r: '1400' }, { m: '18"', p: '380W', c: '3530 CFM', r: '1400' }, { m: '24"', p: '380W', c: '3530 CFM', r: '1400' }]} />
            </ProductBox>
            <ProductBox title="Ventiladores Industriales de Pared y Piso" subtitle="Alto Desempeño" image={["https://i.imgur.com/CjHYYPm.png", "https://i.imgur.com/vtAhpwH.png"]} className="lg:col-span-2" aspect="aspect-[21/9] md:aspect-[16/7]" imagePadding="p-0" />
          </div>
        </div>

        {/* 02. Techo & Especialidades */}
        <div className="mb-24">
          <Reveal width="100%">
            <SectionNumber id="02." label="Techo & Especialidades" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProductBox title="Hongo Eólico" subtitle="Ventilación Ambiental" image={["https://i.imgur.com/vbrhehk.png", "https://i.imgur.com/hRHmNG5.png"]}>
              <TechnicalTable headers={['Medida', 'Material', 'Peso', 'Caudal']} data={[{ m: '12"', mt: 'Alu', p: '2 kg', c: '350 CFM' }, { m: '14"', mt: 'Alu', p: '3 kg', c: '600 CFM' }, { m: '24"', mt: 'Galv', p: '15 kg', c: '2350 CFM' }, { m: '28"', mt: 'Acero', p: '20 kg', c: '2850 CFM' }]} />
            </ProductBox>
            <ProductBox title="Hongo Eléctrico" image={["https://i.imgur.com/YXT6lve.png", "https://i.imgur.com/x2It4rc.png"]}>
              <div className="pt-4"><p className="text-[14px] font-bold text-[#051130] uppercase leading-tight">• Extractor centrifugo tipo hongo eléctrico de aluminio</p></div>
            </ProductBox>
            <ProductBox title="Extractor Centrífugo" subtitle="Turbina Alta Presión" image={["https://i.imgur.com/Mpjw8YB.png", "https://i.imgur.com/bTbmgeg.png"]}>
              <div className="space-y-4 pt-4">
                <p className="text-[12px] font-bold text-[#051130] uppercase">Motores Disponibles:</p>
                <div className="flex flex-wrap gap-2">
                  {['1 HP', '2 HP', '3 HP', '4 HP', '5 HP'].map(hp => (
                    <span key={hp} className="px-3 py-1 bg-gray-50 border border-gray-200 text-[11px] font-black rounded text-[#051130]">{hp}</span>
                  ))}
                </div>
              </div>
            </ProductBox>
            <ProductBox title="Filtros Sintéticos" image={["https://i.imgur.com/MKE9WTP.png", "https://i.imgur.com/KY82Zuz.png"]} />
          </div>
        </div>

        {/* 03. Ductería & Rejillas */}
        <div className="mb-20">
          <Reveal width="100%">
            <SectionNumber id="03." label="Ductería & Rejillas" />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ProductBox title="Ductos" image={["https://i.imgur.com/XNgkR3U.png", "https://i.imgur.com/CY4HzsM.png", "https://i.imgur.com/zweP36Y.png"]} imagePadding="p-0" aspect="aspect-video">
              <div className="space-y-4 pt-2">
                <p className="text-[12px] font-black text-[#E62E2E] uppercase tracking-widest mb-2">Fabricación:</p>
                <div className="space-y-3">
                  <p className="text-[14px] font-bold text-[#051130] uppercase">• Ducto redondo</p>
                  <p className="text-[14px] font-bold text-[#051130] uppercase">• Ducto cuadrado</p>
                </div>
              </div>
            </ProductBox>
            <ProductBox title="Ductos & Rejillas" subtitle="Sistema Reflector" image={["https://i.imgur.com/47QAgkx.png", "https://i.imgur.com/l8bF8Kz.png", "https://i.imgur.com/zweP36Y.png"]} imagePadding="p-0" aspect="aspect-video">
              <div className="space-y-4 pt-2">
                <p className="text-[12px] font-black text-[#E62E2E] uppercase tracking-widest mb-2">Función:</p>
                <ul className="text-[12px] font-bold text-gray-600 uppercase space-y-4">
                  <li><span className="text-[#E62E2E] mr-2 font-black">•</span>Desvían el flujo de aire</li>
                  <li><span className="text-[#E62E2E] mr-2 font-black">•</span>Adecuada circulación</li>
                </ul>
              </div>
            </ProductBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;