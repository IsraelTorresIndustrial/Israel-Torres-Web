import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Smartphone, Bell, Target, ArrowRight, Activity, MapPin, Search } from 'lucide-react';

// --- Preview Component ---

export function CRMPreview() {
  const stages = ['Adquisición', 'Activación', 'Uso', 'Reactivación'];
  
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col gap-4 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-exec" />
          <span className="text-xs font-semibold text-night">Regional LATAM</span>
        </div>
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-exec"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan"></span>
        </div>
      </div>
      
      {/* Lifecycle Flow */}
      <div className="flex items-center justify-between mt-2 relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10"></div>
        {stages.map((stage, idx) => (
          <div key={stage} className="flex flex-col items-center gap-1.5 bg-white px-1">
            <div className={`w-3 h-3 rounded-full border-2 ${idx === 2 ? 'border-exec bg-exec' : 'border-gray-300 bg-white'}`}></div>
            <span className={`text-[10px] font-medium ${idx === 2 ? 'text-exec' : 'text-gray-500'}`}>{stage}</span>
          </div>
        ))}
      </div>

      {/* Campaigns */}
      <div className="flex-1 flex flex-col gap-2.5 mt-4">
        {[
          { name: 'Onboarding 7 Días', status: 'Implementada', type: 'Email + Push', color: 'bg-green-100 text-green-700' },
          { name: 'Upsell Tarjeta', status: 'Validación', type: 'Banner App', color: 'bg-amber-100 text-amber-700' },
          { name: 'Winback Inactivos', status: 'Diseño', type: 'Email', color: 'bg-gray-100 text-gray-600' }
        ].map((camp, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 bg-gray-50/50">
            <div>
              <p className="text-xs font-bold text-night mb-0.5">{camp.name}</p>
              <p className="text-[10px] text-gray-500 flex items-center gap-1">
                <Target className="w-3 h-3" /> {camp.type}
              </p>
            </div>
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-md ${camp.color}`}>
              {camp.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Expanded Modal Content ---

type Country = 'Chile' | 'Argentina';
type Stage = 'Adquisición' | 'Activación' | 'Uso' | 'Retención' | 'Reactivación';

const DATA = {
  Chile: {
    'Activación': [
      { id: 1, name: 'Bienvenida Tarjeta Digital', status: 'Implementada', channels: ['email', 'push'], lift: '+15%' },
      { id: 2, name: 'Primera Compra Cashback', status: 'Validación', channels: ['app'], lift: '-' },
    ],
    'Uso': [
      { id: 3, name: 'Campaña Supermercados', status: 'Implementada', channels: ['push', 'banner'], lift: '+8%' },
      { id: 4, name: 'Cross-sell Seguros', status: 'Diseño', channels: ['email'], lift: '-' },
    ]
  },
  Argentina: {
    'Activación': [
      { id: 5, name: 'Alta Cuenta Sueldo', status: 'Implementada', channels: ['email', 'banner'], lift: '+22%' },
    ],
    'Uso': [
      { id: 6, name: 'Cuotas Sin Interés', status: 'Validación', channels: ['push', 'email'], lift: '-' },
      { id: 7, name: 'Promo Combustible', status: 'Implementada', channels: ['app', 'push'], lift: '+12%' },
    ]
  }
};

const CHANNEL_ICONS: Record<string, React.ReactNode> = {
  email: <Mail className="w-4 h-4" />,
  push: <Bell className="w-4 h-4" />,
  banner: <Search className="w-4 h-4" />,
  app: <Smartphone className="w-4 h-4" />
};

export function CRMDemoExpanded() {
  const [country, setCountry] = useState<Country>('Chile');
  const [stage, setStage] = useState<Stage>('Activación');
  
  const STAGES: Stage[] = ['Adquisición', 'Activación', 'Uso', 'Retención', 'Reactivación'];
  
  // Safe access with fallback
  const campaigns = (DATA[country] as any)[stage] || [];

  return (
    <div className="p-4 md:p-8 flex flex-col gap-8 h-full">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          <div className="flex bg-gray-100 rounded-lg p-1">
            {(['Chile', 'Argentina'] as Country[]).map(c => (
              <button
                key={c}
                onClick={() => setCountry(c)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-md transition-all ${country === c ? 'bg-white shadow-sm text-exec' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex overflow-x-auto pb-1 md:pb-0 gap-1 hide-scrollbar">
          {STAGES.map(s => (
            <button
              key={s}
              onClick={() => setStage(s)}
              className={`px-4 py-1.5 text-sm whitespace-nowrap font-medium rounded-full transition-all border ${stage === s ? 'bg-night text-white border-night' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main flow & campaigns */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="text-sm font-bold text-night mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-exec" /> 
              Pipeline de Campañas ({country} - {stage})
            </h4>
            
            <AnimatePresence mode="popLayout">
              {campaigns.length > 0 ? (
                <div className="space-y-3">
                  {campaigns.map((camp: any) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={camp.id}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-gray-100 bg-gray-50"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h5 className="font-bold text-night">{camp.name}</h5>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            camp.status === 'Implementada' ? 'bg-green-100 text-green-700' :
                            camp.status === 'Validación' ? 'bg-amber-100 text-amber-700' :
                            'bg-gray-200 text-gray-700'
                          }`}>
                            {camp.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                          <div className="flex items-center gap-1.5">
                            {camp.channels.map((ch: string) => (
                              <div key={ch} className="p-1 bg-white rounded border border-gray-200" title={ch}>
                                {CHANNEL_ICONS[ch]}
                              </div>
                            ))}
                          </div>
                          {camp.lift !== '-' && (
                            <span className="font-mono text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                              Lift: {camp.lift}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <button className="text-xs font-semibold text-exec hover:text-exec/80 flex items-center gap-1">
                        Ver flujo <ArrowRight className="w-3 h-3" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 text-center text-gray-500 text-sm border border-dashed border-gray-200 rounded-lg">
                  No hay campañas activas en esta etapa para la región seleccionada.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Visual Strategy Flow */}
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
             <h4 className="text-sm font-bold text-night mb-4">Estructura Base de Campaña</h4>
             <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-between">
                {['Segmento', 'Mecánica', 'Canales', 'Medición'].map((step, i) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center text-center p-3 w-full sm:w-1/4 bg-gray-50 rounded-lg border border-gray-100">
                      <span className="text-[10px] font-mono text-gray-400 mb-1">0{i+1}</span>
                      <span className="text-xs font-bold text-night">{step}</span>
                    </div>
                    {i < 3 && <ArrowRight className="w-4 h-4 text-gray-300 hidden sm:block shrink-0" />}
                  </React.Fragment>
                ))}
             </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="text-sm font-bold text-night mb-4">Benchmark Competitivo</h4>
            <div className="space-y-4">
              <div className="border-l-2 border-exec pl-3">
                <p className="text-xs font-bold text-gray-700">Banco Competidor A</p>
                <p className="text-[11px] text-gray-500 mt-1">Oferta de bienvenida aggressively comunicada vía Push (D+1).</p>
              </div>
              <div className="border-l-2 border-cyan pl-3">
                <p className="text-xs font-bold text-gray-700">Fintech B</p>
                <p className="text-[11px] text-gray-500 mt-1">Gamificación en primeros 30 días para fomentar recurrencia.</p>
              </div>
            </div>
            <button className="w-full mt-4 py-2 text-xs font-semibold text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
              Ver reporte completo
            </button>
          </div>
          
          <div className="bg-night text-white p-5 rounded-xl shadow-sm">
            <h4 className="text-sm font-bold text-white mb-2">Métricas Regionales</h4>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">Resumen simulado del impacto de las automatizaciones activas.</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-display font-bold text-cyan">42</p>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">Automatizaciones</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-exec">1.2M</p>
                <p className="text-[10px] uppercase tracking-wide text-gray-400">Impactos / mes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
