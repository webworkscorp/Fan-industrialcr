import React from 'react';
import { Reveal } from './Reveal';

const TechnicalTable = ({ headers, data }: { headers: string[], data: any[] }) => (
  <div className="mt-6">
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-gray-100">
          {headers.map((h, i) => (
            <th key={i} className="py-2 text-[10px] font-black uppercase tracking-widest text-gray-400">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b border-gray-50 last:border-0">
            {Object.values(row).map((val: any, j) => (
              <td key={j} className="py-2.5 text-[12px] font-bold text-[#051130] uppercase">{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ProductBox = ({ title, subtitle, image, children }: { title: string, subtitle?: string, image: string, children?: React.ReactNode }) => (
  <div className="bg-white border border-gray-100 p-8 flex flex-col h-full hover:border-[#E62E2E]/20 transition-all duration-500 group">
    {/* Contenedor de Imagen: Sin recorte (object-contain) y sin animación */}
    <div className="aspect-video mb-8 overflow-hidden bg-white relative border border-gray-100 flex items-center justify-center p-2">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <i className="fa-solid fa-fan text-gray-200 text-4xl animate-spin-slow"></i>
        </div>
      )}
    </div>
    
    <div className="flex-grow">
      <h3 className="text-2xl font-black text-[#051130] uppercase tracking-tighter mb-1 leading-none">{title}</h3>
      {subtitle && <p className="text-[10px] font-black text-[#E62E2E] uppercase tracking-[0.2em] mb-4">{subtitle}</p>}
      <div className="mt-2">
        {children}
      </div>
    </div>
  </div>
);

const SectionNumber = ({ id, label }: { id: string, label: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className="w-16 h-8 overflow-hidden relative flex items-center bg-gray-50 rounded-lg px-2">
      <span className="text-xs font-black text-[#E62E2E] tracking-widest animate-slide-infinite">
        {id}
      </span>
    </div>
    <div className="h-[1px] w-8 bg-gray-200"></div>
    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">{label}</h4>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Encabezado Principal */}
        <div className="mb-24">
          <Reveal width="100%">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#E62E2E]"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#051130]">Soluciones de Excelencia</span>
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
            <Reveal delay={100} width="100%" className="h-full">
              <ProductBox 
                title="Axial de Transmisión" 
                subtitle="Poleas y Fajas" 
                image="https://i.imgur.com/2OgDX2P.jpeg"
              >
                <TechnicalTable headers={['Medida', 'Potencia', 'Corriente']} data={[{ m: '30"', p: '1 HP', c: 'Mono / Tri' }, { m: '36"', p: '1.5 HP', c: 'Mono / Tri' }, { m: '42"', p: '2 HP', c: 'Mono / Tri' }, { m: '48"', p: '3 HP', c: 'Mono / Tri' }]} />
              </ProductBox>
            </Reveal>
            <Reveal delay={200} width="100%" className="h-full">
              <ProductBox 
                title="Axial Nacional" 
                subtitle="Fabricación" 
                image="https://i.imgur.com/p8GHzal.jpeg"
              >
                <TechnicalTable headers={['Medida', 'Voltaje', 'Corriente']} data={[{ m: '14"', v: '110/220V', c: 'Monofásico' }, { m: '16"', v: '110/220V', c: 'Monofásico' }, { m: '18"', v: '110/220V', c: 'Monofásico' }, { m: '20"', v: '110/220V', c: 'Monofásico' }, { m: '22"', v: '110/220V', c: 'Monofásico' }, { m: '24"', v: '110/220V', c: 'Monofásico' }]} />
              </ProductBox>
            </Reveal>
            <Reveal delay={300} width="100%" className="h-full">
              <ProductBox 
                title="Axial Importado" 
                subtitle="Voltaje 110V" 
                image="https://i.imgur.com/Va84NNs.jpeg"
              >
                <TechnicalTable headers={['Medida', 'Pot.', 'Caudal', 'RPM']} data={[{ m: '12"', p: '130W', c: '1130 CFM', r: '1400' }, { m: '16"', p: '200W', c: '2400 CFM', r: '1400' }, { m: '18"', p: '380W', c: '3530 CFM', r: '1400' }, { m: '24"', p: '380W', c: '3530 CFM', r: '1400' }]} />
              </ProductBox>
            </Reveal>
          </div>
        </div>

        {/* 02. Techo & Grasa */}
        <div className="mb-24">
          <Reveal width="100%">
            <SectionNumber id="02." label="Techo & Especialidades" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Reveal delay={100} width="100%" className="h-full">
              <ProductBox 
                title="Hongo Eólico" 
                subtitle="Ventilación Ambiental" 
                image="https://i.imgur.com/7qxXV62.jpeg"
              >
                <TechnicalTable headers={['Medida', 'Material', 'Peso', 'Caudal']} data={[{ m: '12"', mt: 'Alu', p: '2 kg', c: '350 CFM' }, { m: '14"', mt: 'Alu', p: '3 kg', c: '600 CFM' }, { m: '24"', mt: 'Galv', p: '15 kg', c: '2350 CFM' }, { m: '28"', mt: 'Acero', p: '20 kg', c: '2850 CFM' }]} />
              </ProductBox>
            </Reveal>

            <Reveal delay={200} width="100%" className="h-full">
              <ProductBox 
                title="Extractor Centrífugo" 
                subtitle="Turbina Alta Presión" 
                image="https://i.imgur.com/PXB9xI8.jpeg"
              >
                <div className="space-y-4 pt-4">
                  <p className="text-[11px] font-bold text-[#051130] uppercase">Motores Disponibles:</p>
                  <div className="flex flex-wrap gap-2">
                    {['1 HP', '2 HP', '3 HP', '4 HP', '5 HP'].map(hp => (
                      <span key={hp} className="px-3 py-1 bg-gray-50 border border-gray-100 text-[10px] font-black rounded">{hp}</span>
                    ))}
                  </div>
                  <div className="pt-4 mt-2 border-t border-gray-50">
                    <p className="text-[10px] font-black text-[#E62E2E] uppercase mb-1">Hongo Eléctrico</p>
                    <p className="text-[11px] font-bold text-gray-400 uppercase">Centrífugo Eléctrico | Aluminio</p>
                  </div>
                </div>
              </ProductBox>
            </Reveal>

            <Reveal delay={300} width="100%" className="h-full">
              <ProductBox 
                title="Extracción de Grasa" 
                subtitle="Equipamiento Cocinas" 
                image="https://i.imgur.com/tBXnyu7.jpeg"
              >
                <div className="space-y-4 pt-2">
                  <ul className="space-y-2">
                    {['Campana profesional', 'Ducto Inox', 'Extractor a medida'].map(item => (
                      <li key={item} className="text-[12px] font-bold text-[#051130] uppercase flex items-center gap-3">
                        <div className="w-1 h-1 bg-[#E62E2E]"></div> {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-gray-400 font-bold uppercase leading-relaxed pt-4 border-t border-gray-50">
                    Protección total contra plagas, suciedad y olores. Cumple con Ministerio de Salud.
                  </p>
                </div>
              </ProductBox>
            </Reveal>
          </div>
        </div>

        {/* 03. Ductería & Rejillas */}
        <div className="mb-20">
          <Reveal width="100%">
            <SectionNumber id="03." label="Ductería & Rejillas" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Reveal delay={100} width="100%" className="h-full">
              <ProductBox 
                title="Ductos" 
                image="https://i.imgur.com/gwD6mJj.jpeg"
              >
                <div className="space-y-4 pt-2">
                  <p className="text-[10px] font-black text-[#E62E2E] uppercase tracking-widest mb-2">Fabricación:</p>
                  <div className="space-y-3">
                    <p className="text-[13px] font-bold text-[#051130] uppercase">• Ducto redondo</p>
                    <p className="text-[13px] font-bold text-[#051130] uppercase">• Ducto cuadrado</p>
                  </div>
                </div>
              </ProductBox>
            </Reveal>

            <Reveal delay={200} width="100%" className="h-full">
              <ProductBox 
                title="Ductos & Rejillas" 
                subtitle="Sistema Reflector" 
                image="https://i.imgur.com/ZDSWytK.jpeg"
              >
                <div className="space-y-4 pt-2">
                  <p className="text-[10px] font-black text-[#E62E2E] uppercase tracking-widest mb-2">Función:</p>
                  <ul className="text-[11px] font-bold text-gray-500 uppercase space-y-4">
                    <li><span className="text-[#E62E2E] mr-2">•</span>Desvían el flujo de aire</li>
                    <li><span className="text-[#E62E2E] mr-2">•</span>Adecuada circulación</li>
                    <li><span className="text-[#E62E2E] mr-2">•</span>Refrescan y purifican</li>
                  </ul>
                </div>
              </ProductBox>
            </Reveal>

            <Reveal delay={300} width="100%" className="h-full">
              <ProductBox 
                title="Estructura Codo" 
                subtitle="Base Soporte" 
                image="https://i.imgur.com/LW3IXZ1.jpeg"
              >
                <p className="text-[11px] text-gray-400 font-bold uppercase mb-4 leading-tight">Soporte para extractor o inyector.</p>
                <div className="space-y-1">
                  {['Inox 430', 'Inox 304', 'Galvanizado'].map(mat => (
                    <div key={mat} className="text-[12px] font-bold text-[#051130] uppercase py-2.5 border-b border-gray-50">{mat}</div>
                  ))}
                </div>
              </ProductBox>
            </Reveal>

            <Reveal delay={400} width="100%" className="h-full">
              <ProductBox 
                title="Filtro Sintético" 
                image="https://i.imgur.com/vkjDxIn.jpeg"
              >
                <p className="text-[12px] text-[#051130] font-bold uppercase leading-relaxed mb-6">
                  Evita el ingreso de polvo durante el proceso de pintura.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Industrial', 'Automotriz', 'Ebanistería'].map(app => (
                    <span key={app} className="text-[9px] font-black px-2 py-1 bg-gray-50 border border-gray-100 text-gray-400 uppercase tracking-tighter">{app}</span>
                  ))}
                </div>
              </ProductBox>
            </Reveal>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;