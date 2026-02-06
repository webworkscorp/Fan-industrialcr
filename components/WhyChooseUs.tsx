import React from 'react';
import { Reveal } from './Reveal';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="why">
      {/* Fondo con detalles sutiles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#E62E2E]/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Reveal width="100%" direction="down">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#E62E2E]"></span>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#051130]">Ventilación Natural</span>
              <span className="h-[1px] w-8 bg-[#E62E2E]"></span>
            </div>
          </Reveal>
          
          <Reveal width="100%" delay={200}>
            <h2 className="text-4xl md:text-6xl font-black text-[#051130] leading-none tracking-tighter uppercase mb-8">
              Hongos eólicos: <br />
              <span className="text-[#E62E2E]">una buena decisión</span>
            </h2>
          </Reveal>

          <Reveal width="100%" delay={400}>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Al elegir nuestros extractores para techos, está invirtiendo en espacios más eficientes y en un planeta más limpio. Además está ayudando a que su local sea más fresco y agradable.
              <span className="text-[#051130] font-black block mt-2 uppercase text-sm tracking-widest">Ventilación natural sin consumo eléctrico.</span>
            </p>
          </Reveal>
        </div>

        {/* Visual de Producto - Con Reveal, sin zoom */}
        <div className="w-full max-w-5xl mx-auto">
          <Reveal width="100%" direction="up">
            <div className="relative">
              <div className="w-full overflow-hidden border border-gray-100 bg-white shadow-xl aspect-video md:aspect-[21/9]">
                <img 
                  src="https://i.imgur.com/8zwtHJx.jpeg" 
                  alt="Sistema de Extracción Eólica FAN Industrial" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Listado de Beneficios */}
        <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {[
            'Ahorro energético',
            'Cuidado del medio ambiente',
            'Mejor calidad del aire',
            'Fácil instalación y mantenimiento'
          ].map((benefit, i) => (
            <Reveal key={i} delay={400 + (i * 100)} width="100%">
              <div className="flex items-start gap-4 group">
                <div className="mt-1">
                  <i className="fa-solid fa-square-check text-[#E62E2E] text-xl"></i>
                </div>
                <p className="text-[13px] font-black text-[#051130] uppercase tracking-wider leading-tight">
                  {benefit}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;