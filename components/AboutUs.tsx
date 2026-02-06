import React from 'react';
import { Reveal } from './Reveal';

const AboutUs: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden" id="about">
      {/* Elemento Decorativo Sutil de Fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -z-10 transform skew-x-12 translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Cabecera de Sección Minimalista */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="space-y-4">
            <Reveal width="100%">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#E62E2E]"></span>
                <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#051130]">Sobre nosotros</span>
              </div>
            </Reveal>
            <Reveal width="100%" delay={100}>
              <h2 className="text-6xl md:text-8xl font-black text-[#051130] leading-[0.8] tracking-tighter uppercase">
                Nuestra <br />
                <span className="text-[#E62E2E]">Historia</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Bloque de Imagen - Con Reveal de entrada, sin zoom */}
          <div className="lg:col-span-7 relative">
            <Reveal width="100%" direction="right">
              <div className="relative z-10 p-2 border border-gray-100 bg-white">
                <div className="overflow-hidden bg-gray-100 relative">
                  <img 
                    src="https://i.imgur.com/rg1UhFu.jpeg" 
                    alt="Trabajo de calidad en FAN" 
                    className="w-full h-auto object-contain shadow-sm"
                  />
                </div>
              </div>
            </Reveal>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-[#E62E2E]/20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#051130] -z-10"></div>
          </div>

          {/* Bloque de Contenido Narrativo */}
          <div className="lg:col-span-5 space-y-12">
            <Reveal direction="left" delay={400} width="100%">
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl font-bold text-[#051130] leading-tight tracking-tight border-l-4 border-[#E62E2E] pl-8">
                  Somos una empresa orgullosamente costarricense que cuenta con <span className="text-[#E62E2E]">25 años de experiencia</span> proporcionando soluciones a nuestros clientes.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed font-medium">
                  Motivados en la excelencia y el compromiso, nos esforzamos por ofrecer servicios y productos de alta eficiencia y fiabilidad, superando las expectativas de nuestros clientes a través de una atención personalizada y un enfoque en la innovación. Trabajamos por un futuro donde cada espacio industrial y comercial cuente con sistemas de ventilación optimizados.
                </p>
              </div>
            </Reveal>

            {/* Grid de Capacidades Simplificado */}
            <div className="grid grid-cols-1 gap-8">
              <Reveal delay={600} width="100%">
                <div className="space-y-3">
                  <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#E62E2E]">Nuestro Objetivo</h4>
                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    Implementar sistemas de ventilación de alto desempeño que aseguren la renovación constante del aire, protegiendo la salud ocupacional y optimizando la operatividad en cada instalación.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={700} width="100%">
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#051130]">Dónde estamos</h4>
                  <p className="text-base text-gray-700 leading-relaxed font-medium mb-4">
                    Trabajamos en toda Costa Rica y Centroamérica. Vamos hasta donde usted nos necesite.
                  </p>
                  
                  {/* Calidad Asegurada */}
                  <div className="pt-2">
                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#E62E2E] block mb-2">Excelencia Garantizada</span>
                    <div className="flex gap-1 text-[#E62E2E] text-xs">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;