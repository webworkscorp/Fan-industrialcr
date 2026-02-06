import React from 'react';
import { Reveal } from './Reveal';

const WorkProcess: React.FC = () => {
  const steps = [
    {
      id: '01',
      title: 'Revisión Inicial',
      desc: 'Realizamos una visita técnica para identificar las necesidades específicas de ventilación y circulación de aire en su espacio.'
    },
    {
      id: '02',
      title: 'Planeamiento',
      desc: 'Diseñamos una solución a medida que garantiza la eficiencia operativa y optimiza el consumo energético.'
    },
    {
      id: '03',
      title: 'Fabricación Propia',
      desc: 'Fabricamos los equipos utilizando materiales de alta resistencia y durabilidad para asegurar una larga vida útil.'
    },
    {
      id: '04',
      title: 'Instalación',
      desc: 'Ejecutamos el montaje y realizamos pruebas para certificar la correcta extracción de calor y contaminantes.'
    }
  ];

  return (
    <section className="py-24 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Encabezado Simple Moderno */}
        <div className="mb-20">
          <Reveal width="100%">
            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-[#E62E2E] mb-4 block">Cómo trabajamos</span>
          </Reveal>
          <Reveal width="100%" delay={100}>
            <h2 className="text-4xl md:text-5xl font-black text-[#051130] uppercase tracking-tighter">
              Nuestro <br />
              <span className="text-gray-400">Proceso</span>
            </h2>
          </Reveal>
        </div>

        {/* Grilla de Pasos Limpia */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 150} width="100%" className="h-full">
              <div className="group h-full">
                <div className="flex flex-col space-y-6">
                  {/* Número Minimalista */}
                  <div className="flex items-center gap-4">
                    <span className="text-base font-black text-[#E62E2E]">{step.id}</span>
                    <div className="h-[1px] flex-grow bg-gray-200 group-hover:bg-[#E62E2E] transition-colors duration-500"></div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#051130] group-hover:text-[#E62E2E] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 text-base leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Botón de Acción Sutil */}
        <div className="mt-20 pt-10 border-t border-gray-100 flex justify-center">
          <Reveal delay={600}>
            <a 
              href="#consultation" 
              className="text-[12px] font-black uppercase tracking-[0.3em] text-[#051130] flex items-center gap-4 hover:text-[#E62E2E] transition-all"
            >
              Más detalles sobre nuestro trabajo
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;