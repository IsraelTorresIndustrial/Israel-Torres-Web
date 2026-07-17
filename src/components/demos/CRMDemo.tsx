import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Smartphone, Target, ArrowRight, Activity, MapPin, CheckCircle2, ChevronRight, Play, Check } from 'lucide-react';

// --- Preview Component ---

export function CRMPreview() {
  const steps = ['Segmento', 'Mecánica', 'Canales', 'Lanzamiento'];
  
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between bg-white">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-exec" />
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Builder Regional</span>
        </div>
        <span className="text-[9px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">
          Borrador
        </span>
      </div>
      
      <div className="flex-1 flex flex-col justify-center gap-4">
        <h4 className="text-sm font-bold text-night text-center">Campaña Onboarding 7 Días</h4>
        <div className="flex justify-between relative mt-2 px-2">
          <div className="absolute top-1/2 left-2 right-2 h-px bg-gray-200 -z-10"></div>
          {steps.map((step, idx) => (
            <div key={step} className="flex flex-col items-center gap-2 bg-white px-1">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center border-2 ${idx <= 1 ? 'border-exec bg-exec text-white' : 'border-gray-300 bg-white'}`}>
                {idx <= 1 && <Check className="w-2.5 h-2.5" />}
              </div>
              <span className={`text-[9px] font-bold ${idx <= 1 ? 'text-exec' : 'text-gray-400'}`}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Expanded Modal Content ---

type CampaignStep = 'Segmento' | 'Mecánica' | 'Canales' | 'Lanzamiento';

export function CRMDemoExpanded() {
  const [activeStep, setActiveStep] = useState<CampaignStep>('Segmento');
  const steps: CampaignStep[] = ['Segmento', 'Mecánica', 'Canales', 'Lanzamiento'];

  const handleNext = () => {
    const currentIndex = steps.indexOf(activeStep);
    if (currentIndex < steps.length - 1) {
      setActiveStep(steps[currentIndex + 1]);
    }
  };

  const [channels, setChannels] = useState<string[]>(['email']);

  return (
    <div className="p-4 md:p-8 flex flex-col md:flex-row gap-8 h-full bg-gray-50/50">
      {/* Sidebar: Campaign Info & Progress */}
      <div className="w-full md:w-64 flex-shrink-0 flex flex-col gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide mb-1">Campaña Activa</p>
          <h3 className="text-lg font-bold text-night">Onboarding Digital</h3>
          <p className="text-xs text-gray-500 mt-2">Flujo automatizado para primeros 7 días de clientes nuevos.</p>
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === step;
              const isPast = steps.indexOf(activeStep) > idx;
              return (
                <div key={step} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2
                    ${isActive ? 'border-exec text-exec bg-white' : 
                      isPast ? 'border-exec bg-exec text-white' : 'border-gray-200 text-gray-400 bg-gray-50'}
                  `}>
                    {isPast ? <Check className="w-3 h-3" /> : idx + 1}
                  </div>
                  <span className={`text-sm font-semibold ${isActive || isPast ? 'text-night' : 'text-gray-400'}`}>
                    {step}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-night text-white p-5 rounded-xl shadow-sm">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Estimación de Impacto</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-300">Público objetivo</p>
              <p className="text-2xl font-display font-bold text-cyan mt-1">45.2K</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-300">Tasa conv. esperada</p>
              <p className="text-2xl font-display font-bold text-exec mt-1">12.5%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area: Builder Workspace */}
      <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <h2 className="text-lg font-bold text-night">Configuración: {activeStep}</h2>
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
            <Activity className="w-4 h-4 text-exec" />
            Simulador Interactivo
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeStep === 'Segmento' && (
              <motion.div key="segmento" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-bold text-night mb-2">País / Región</label>
                  <select className="w-full border border-gray-200 rounded-lg p-3 text-sm text-night bg-gray-50 cursor-pointer focus:ring-2 focus:ring-exec focus:border-exec transition-all">
                    <option>Chile - Nivel Nacional</option>
                    <option>Argentina - Nivel Nacional</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-night mb-2">Reglas de Inclusión</label>
                  <div className="p-4 border border-gray-200 rounded-lg bg-gray-50 flex flex-col gap-3">
                    <div className="flex items-center gap-3 bg-white p-3 rounded shadow-sm border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-exec" />
                      <span className="text-sm font-medium text-gray-700">Antigüedad de cuenta &lt; 7 días</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded shadow-sm border border-gray-100">
                      <CheckCircle2 className="w-4 h-4 text-exec" />
                      <span className="text-sm font-medium text-gray-700">No ha realizado compras</span>
                    </div>
                    <button className="text-xs font-bold text-exec flex items-center gap-1 mt-2 hover:text-exec/80 w-fit">
                      + Agregar regla
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeStep === 'Mecánica' && (
              <motion.div key="mecanica" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-bold text-night mb-2">Tipo de Incentivo</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-exec bg-exec/5 p-4 rounded-xl cursor-pointer">
                      <h4 className="font-bold text-exec mb-1">Cashback Primera Compra</h4>
                      <p className="text-xs text-gray-600">Devolución de porcentaje en la primera transacción.</p>
                    </div>
                    <div className="border border-gray-200 bg-white hover:bg-gray-50 p-4 rounded-xl cursor-pointer transition-colors">
                      <h4 className="font-bold text-gray-700 mb-1">Puntos de Bienvenida</h4>
                      <p className="text-xs text-gray-500">Abono directo de puntos al completar perfil.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-night mb-2">Parámetros</label>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <span className="text-xs text-gray-500 font-medium block mb-1">Porcentaje</span>
                      <input type="text" value="15%" readOnly className="w-full border border-gray-200 rounded-lg p-3 text-sm font-mono text-night bg-gray-50" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-gray-500 font-medium block mb-1">Tope Máximo</span>
                      <input type="text" value="$15.000" readOnly className="w-full border border-gray-200 rounded-lg p-3 text-sm font-mono text-night bg-gray-50" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeStep === 'Canales' && (
              <motion.div key="canales" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 max-w-2xl">
                 <p className="text-sm text-gray-600 mb-4">Selecciona los canales por los que se distribuirá esta campaña.</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'email', name: 'Email Marketing', icon: <Mail className="w-5 h-5"/>, desc: 'Notificación formal' },
                      { id: 'push', name: 'Notificación Push', icon: <Smartphone className="w-5 h-5"/>, desc: 'Alerta inmediata en app' },
                      { id: 'banner', name: 'Banner In-App', icon: <Target className="w-5 h-5"/>, desc: 'Visualización al abrir app' }
                    ].map(ch => {
                      const isSelected = channels.includes(ch.id);
                      return (
                        <div 
                          key={ch.id} 
                          onClick={() => {
                            if (isSelected) setChannels(channels.filter(c => c !== ch.id));
                            else setChannels([...channels, ch.id]);
                          }}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-4
                            ${isSelected ? 'border-exec bg-exec/5' : 'border-gray-200 bg-white hover:border-gray-300'}
                          `}
                        >
                          <div className={`p-2 rounded-lg ${isSelected ? 'bg-exec text-white' : 'bg-gray-100 text-gray-500'}`}>
                            {ch.icon}
                          </div>
                          <div>
                            <h4 className={`font-bold ${isSelected ? 'text-exec' : 'text-gray-700'}`}>{ch.name}</h4>
                            <p className="text-xs text-gray-500 mt-1">{ch.desc}</p>
                          </div>
                        </div>
                      )
                    })}
                 </div>
              </motion.div>
            )}

            {activeStep === 'Lanzamiento' && (
              <motion.div key="lanzamiento" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col items-center justify-center text-center h-full max-w-md mx-auto">
                 <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                   <Play className="w-8 h-8 ml-1" />
                 </div>
                 <h3 className="text-xl font-bold text-night mb-2">Lista para activar</h3>
                 <p className="text-sm text-gray-600 mb-8">La campaña cumple con todas las reglas de negocio y está lista para su despliegue automatizado.</p>
                 <div className="w-full bg-gray-50 p-4 rounded-lg border border-gray-200 text-left mb-8">
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-wide border-b border-gray-200 pb-2 mb-3">Resumen de Configuración</p>
                   <ul className="text-sm space-y-2 text-gray-700">
                     <li><span className="font-semibold">Audiencia:</span> 45.2K Usuarios (Nuevos &lt; 7 días)</li>
                     <li><span className="font-semibold">Mecánica:</span> Cashback 15% (Tope $15k)</li>
                     <li><span className="font-semibold">Canales:</span> {channels.join(', ')}</li>
                   </ul>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
          {activeStep !== 'Lanzamiento' ? (
            <button 
              onClick={handleNext}
              className="bg-exec text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-exec/90 transition-colors"
            >
              Continuar a {steps[steps.indexOf(activeStep) + 1]} <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button 
              onClick={() => setActiveStep('Segmento')}
              className="bg-green-600 text-white px-8 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-green-700 transition-colors"
            >
              Activar Campaña
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

