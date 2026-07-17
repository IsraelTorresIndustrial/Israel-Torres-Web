import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, AlertTriangle, CheckCircle, Clock, ChevronRight, User, Briefcase, TrendingUp, DollarSign } from 'lucide-react';

// --- Preview Component ---

export function LegalPreview() {
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between bg-white">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-exec" />
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Gestión de Cartera</span>
        </div>
      </div>
      
      <div className="flex-1 py-4 flex flex-col justify-center gap-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase">Casos Críticos</p>
            <p className="text-xl font-display font-bold text-red-600">12</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-gray-500 font-bold uppercase">Monto en Riesgo</p>
            <p className="text-xl font-display font-bold text-night">$1.2M</p>
          </div>
        </div>
        
        <div className="space-y-2">
          {[
            { rit: 'C-120-2023', risk: 'Alto Riesgo', color: 'bg-red-100 text-red-700' },
            { rit: 'C-452-2022', risk: 'Estable', color: 'bg-green-100 text-green-700' }
          ].map((c) => (
            <div key={c.rit} className="bg-gray-50 p-2 rounded flex justify-between items-center border border-gray-100">
              <span className="font-mono text-xs font-bold">{c.rit}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${c.color}`}>{c.risk}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Expanded Modal Content ---

type StatusType = 'Normal' | 'Alerta' | 'Crítico';

interface Cause {
  id: string;
  type: string;
  responsible: string;
  region: string;
  daysUnchanged: number;
  status: StatusType;
  amount: string;
  nextAction: string;
}

const MOCK_CAUSES: Cause[] = [
  { id: 'C-1432-2022', type: 'Cobro Pagaré', responsible: 'A. Silva', region: 'RM', daysUnchanged: 45, status: 'Crítico', amount: '$45.000', nextAction: 'Solicitar embargo inmediato.' },
  { id: 'C-890-2023', type: 'Ejecutivo', responsible: 'M. Ríos', region: 'Biobío', daysUnchanged: 28, status: 'Alerta', amount: '$12.500', nextAction: 'Revisar notificación receptor.' },
  { id: 'C-2104-2023', type: 'Cobro Pagaré', responsible: 'A. Silva', region: 'RM', daysUnchanged: 12, status: 'Normal', amount: '$8.200', nextAction: 'Esperar plazo contestación.' },
  { id: 'C-55-2024', type: 'Ordinario', responsible: 'J. Pérez', region: 'Valparaíso', daysUnchanged: 5, status: 'Normal', amount: '$110.000', nextAction: 'Preparar audiencia preparatoria.' },
  { id: 'C-302-2021', type: 'Ejecutivo', responsible: 'M. Ríos', region: 'Biobío', daysUnchanged: 60, status: 'Crítico', amount: '$85.000', nextAction: 'Tramitar exhorto pendiente.' },
];

const STATUS_CONFIG = {
  'Crítico': { icon: <AlertTriangle className="w-4 h-4 text-red-600"/>, bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700' },
  'Alerta': { icon: <Clock className="w-4 h-4 text-amber-600"/>, bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
  'Normal': { icon: <CheckCircle className="w-4 h-4 text-green-600"/>, bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
};

export function LegalDemoExpanded() {
  const [selectedCause, setSelectedCause] = useState<Cause | null>(MOCK_CAUSES[0]);

  return (
    <div className="p-4 md:p-8 flex flex-col gap-6 h-full bg-gray-50/50">
      
      {/* Portfolio Overview Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Total Casos</p>
            <p className="text-2xl font-display font-bold text-night mt-1">1,245</p>
          </div>
          <div className="p-2 bg-gray-100 rounded-lg"><Briefcase className="w-5 h-5 text-gray-600" /></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-red-200 shadow-sm flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Casos Críticos</p>
            <p className="text-2xl font-display font-bold text-red-600 mt-1">84</p>
          </div>
          <div className="p-2 bg-red-50 rounded-lg"><AlertTriangle className="w-5 h-5 text-red-600" /></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Monto Demandado</p>
            <p className="text-2xl font-display font-bold text-night mt-1">$4.2M</p>
          </div>
          <div className="p-2 bg-gray-100 rounded-lg"><DollarSign className="w-5 h-5 text-gray-600" /></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-green-200 shadow-sm flex items-center justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
          <div>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Recupero Mes</p>
            <p className="text-2xl font-display font-bold text-green-600 mt-1">$350K</p>
          </div>
          <div className="p-2 bg-green-50 rounded-lg"><TrendingUp className="w-5 h-5 text-green-600" /></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
        
        {/* Table Area */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
            <h3 className="text-sm font-bold text-night">Listado de Causas (Filtro: Activas)</h3>
          </div>
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-1 text-center">St</div>
            <div className="col-span-3">RIT / Causa</div>
            <div className="col-span-3 hidden sm:block">Responsable</div>
            <div className="col-span-3 hidden sm:block">Monto</div>
            <div className="col-span-2 text-right">Días inact.</div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {MOCK_CAUSES.map((cause) => {
              const conf = STATUS_CONFIG[cause.status];
              const isSelected = selectedCause?.id === cause.id;
              
              return (
                <div 
                  key={cause.id}
                  onClick={() => setSelectedCause(cause)}
                  className={`px-4 py-3 grid grid-cols-12 gap-2 items-center border-b border-gray-100 cursor-pointer transition-colors
                    ${isSelected ? 'bg-exec/5 border-l-2 border-l-exec' : 'hover:bg-gray-50 border-l-2 border-l-transparent'}
                  `}
                >
                  <div className="col-span-1 flex justify-center">
                    {conf.icon}
                  </div>
                  <div className="col-span-11 sm:col-span-3">
                    <p className="text-sm font-mono font-medium text-night">{cause.id}</p>
                    <p className="text-[10px] text-gray-500 sm:hidden">{cause.responsible} · {cause.daysUnchanged} días</p>
                  </div>
                  <div className="col-span-3 hidden sm:block text-sm text-gray-600">
                    {cause.responsible}
                  </div>
                  <div className="col-span-3 hidden sm:block text-sm text-gray-600 font-mono">
                    {cause.amount}
                  </div>
                  <div className="col-span-2 hidden sm:block text-right">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${conf.bg} ${conf.text}`}>
                      {cause.daysUnchanged}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Side Panel (Details & Timeline) */}
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {selectedCause && (
              <motion.div
                key={selectedCause.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full overflow-hidden"
              >
                <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-mono font-bold text-night text-lg">{selectedCause.id}</h4>
                    <div className={`p-2 rounded-full ${STATUS_CONFIG[selectedCause.status].bg}`}>
                      {STATUS_CONFIG[selectedCause.status].icon}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Monto</p>
                      <p className="text-sm font-semibold font-mono text-night">{selectedCause.amount}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wide">Región</p>
                      <p className="text-sm font-semibold text-night">{selectedCause.region}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-5 border-b border-gray-100">
                  <div className={`p-3 rounded-lg border ${STATUS_CONFIG[selectedCause.status].border} ${STATUS_CONFIG[selectedCause.status].bg}`}>
                    <p className={`text-xs font-bold mb-1 ${STATUS_CONFIG[selectedCause.status].text}`}>
                      {selectedCause.status === 'Crítico' ? 'Acción Inmediata Requerida' : 'Próxima Acción'}
                    </p>
                    <p className="text-sm text-gray-800 font-medium">{selectedCause.nextAction}</p>
                  </div>
                </div>

                <div className="p-5 flex-1 overflow-y-auto">
                  <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-4">Historial Reciente</h5>
                  <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:to-transparent">
                    
                    <div className="relative flex items-center">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-exec text-white shadow shrink-0 absolute left-0"></div>
                      <div className="w-[calc(100%-1.5rem)] ml-6 p-3 rounded border border-gray-100 bg-white shadow-sm">
                         <p className="text-[10px] text-gray-400 font-bold">Hace 15 días</p>
                         <p className="text-xs text-night font-medium">Notificación rechazada por cambio de domicilio.</p>
                      </div>
                    </div>

                    <div className="relative flex items-center">
                      <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-gray-300 shadow shrink-0 absolute left-0"></div>
                      <div className="w-[calc(100%-1.5rem)] ml-6 p-3 rounded border border-gray-100 bg-gray-50">
                         <p className="text-[10px] text-gray-400 font-bold">Hace 45 días</p>
                         <p className="text-xs text-gray-600">Demanda ingresada a distribución.</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  <button className="w-full py-2.5 bg-night text-white text-sm font-semibold rounded-lg hover:bg-exec transition-colors">
                    Registrar Gestión
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}
