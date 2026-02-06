import React, { useState } from 'react';
import { Reveal } from './Reveal';

const ConsultationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir el mensaje formateado para WhatsApp
    const message = `*SOLICITUD DE COTIZACIÓN - WEB*%0A%0A` +
                    `*Nombre/Empresa:* ${formData.name}%0A` +
                    `*Teléfono:* ${formData.phone}%0A` +
                    `*Correo:* ${formData.email}%0A` +
                    `*Detalles del proyecto:* ${formData.details}`;

    // Abrir WhatsApp con el mensaje prellenado
    const whatsappUrl = `https://wa.me/50660013108?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white border-t border-gray-200" id="consultation">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Encabezado Directo y Persuasivo */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <Reveal width="100%">
              <h2 className="text-5xl md:text-6xl font-black text-[#051130] uppercase tracking-tighter leading-[0.9]">
                Cotice su <br />
                <span className="text-[#E62E2E]">Proyecto Hoy</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:text-right">
            <Reveal width="100%" delay={200}>
              <p className="text-[#051130] text-[13px] font-black uppercase tracking-widest">
                Reciba su propuesta personalizada hoy mismo.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Estructura de Formulario Profesional */}
        <Reveal width="100%" delay={300} duration={1000} direction="up">
          <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-lg shadow-sm">
            <form className="space-y-8" onSubmit={handleSubmit}>
              
              {/* Fila 1: Datos Personales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[13px] font-black uppercase tracking-widest text-[#051130]">
                    Nombre del Contacto / Empresa
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej: Constructora ABC / Juan Pérez"
                    className="w-full bg-white border border-gray-300 rounded-md px-5 py-4 text-[#051130] text-sm font-bold focus:outline-none focus:border-[#E62E2E] focus:ring-1 focus:ring-[#E62E2E] transition-all placeholder:text-gray-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[13px] font-black uppercase tracking-widest text-[#051130]">
                    Número de Teléfono
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+506 0000-0000"
                    className="w-full bg-white border border-gray-300 rounded-md px-5 py-4 text-[#051130] text-sm font-bold focus:outline-none focus:border-[#E62E2E] focus:ring-1 focus:ring-[#E62E2E] transition-all placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Fila 2: Correo */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[13px] font-black uppercase tracking-widest text-[#051130]">
                    Correo Electrónico
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="extractoresindustrialesfanca@gmail.com"
                    className="w-full bg-white border border-gray-300 rounded-md px-5 py-4 text-[#051130] text-sm font-bold focus:outline-none focus:border-[#E62E2E] focus:ring-1 focus:ring-[#E62E2E] transition-all placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Fila 3: Mensaje Detallado */}
              <div className="space-y-2">
                <label htmlFor="details" className="block text-[13px] font-black uppercase tracking-widest text-[#051130]">
                  Especificaciones del Proyecto / Requerimiento
                </label>
                <textarea 
                  id="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Por favor, detalle las dimensiones de su bodega o el producto de su interés..."
                  className="w-full bg-white border border-gray-300 rounded-md px-5 py-4 text-[#051130] text-sm font-bold focus:outline-none focus:border-[#E62E2E] focus:ring-1 focus:ring-[#E62E2E] transition-all resize-none placeholder:text-gray-400"
                  required
                ></textarea>
              </div>

              {/* Botón de Envío Persuasivo y Centrado */}
              <div className="pt-4 flex justify-center w-full">
                <button 
                  type="submit" 
                  className="w-full md:w-auto bg-[#051130] text-white px-8 md:px-12 py-5 rounded-md font-black uppercase text-sm tracking-[0.3em] hover:bg-[#E62E2E] transition-all flex items-center justify-center gap-4 group shadow-lg"
                >
                  Enviar consulta
                  <i className="fa-solid fa-arrow-right text-lg group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ConsultationForm;