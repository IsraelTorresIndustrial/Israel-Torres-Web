import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, AlertCircle, Clock, CheckCircle2, ChevronRight, FileText, User } from 'lucide-react';

// --- Preview Component ---

export function LegalPreview() {
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col bg-gray-50/50">
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-center">
          <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wide">Casos Activos</p>
          <p className="text-lg font-display font-bold text-night mt-0.5">1,248</p>
        </div>
        <div className="bg-red-50 p-2.5 rounded-lg border border-red-100 shadow-sm flex flex-col justify-center">
          <p className="text-[9px] text-red-600 font-bold uppercase tracking-wide">Prioritarios</p>
          <p className="text-lg font-display font-bold text-red-700 mt-0.5">86</p>
        </div>
        <div className="bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm flex flex-col justify-center">
          <p className="text-[9px] text-gray-500 font-bold uppercase tracking-wide">Deuda MM</p>
          <p className="text-lg font-display font-bold text-exec mt-0.5">$3.4K</p>
        </div>
      </div>
      
      <div className="flex-1 bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden flex flex-col">
        <div className="bg-gray-50 border-b border-gray-100 px-3 py-2 flex text-[10px] font-semibold text-gray-500">
          <div className="w-8">Est</div>
          <div className="flex-1">Causa</div>
          <div className="w-16 text-right">Días</div>
        </div>
        <div className="flex-1 p-1 flex flex-col gap-1 overflow-hidden">
          {[
            { id: 'C-102', color: 'bg-red-500', days: 45 },
            { id: 'C-405', color: 'bg-red-500', days: 32 },
            { id: 'C-211', color: 'bg-amber-400', days: 15 },
            { id: 'C-890', color: 'bg-green-500', days: 2 }
          ].map((row, i) => (
            <div key={i} className="flex items-center px-2 py-1.5 hover:bg-gray-50 rounded">
              <div className="w-8 flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${row.color}`}></div>
              </div>
              <div className="flex-1 text-xs font-mono text-night">{row.id}</div>
              <div className="w-16 text-right text-xs text-gray-500">{row.days}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Expanded Modal Content ---

type Status = 'Crítico' | 'Atención' | 'Al día';

interface Cause {
  id: string;
  type: string;
  responsible: string;
  region: string;
  daysUnchanged: number;
  status: Status;
  nextAction: string;
}

const CAUSES: Cause[] = [
  { id: 'C-2023-1450', type: 'Ejecutivo', responsible: 'A. Silva', region: 'Metropolitana', daysUnchanged: 45, status: 'Crítico', nextAction: 'Presentar embargo' },
  { id: 'C-2024-0012', type: 'Ordinario', responsible: 'M. Ríos', region: 'Valparaíso', daysUnchanged: 32, status: 'Crítico', nextAction: 'Notificar demanda' },
  { id: 'C-2023-8890', type: 'Ejecutivo', responsible: 'A. Silva', region: 'Metropolitana', daysUnchanged: 15, status: 'Atención', nextAction: 'Revisar plazos de contestación' },
  { id: 'C-2024-0540', type: 'Ordinario', responsible: 'J. Pérez', region: 'Biobío', daysUnchanged: 8, status: 'Al día', nextAction: 'Esperar resolución' },
  { id: 'C-2023-9001', type: 'Cobranza', responsible: 'M. Ríos', region: 'Metropolitana', daysUnchanged: 62, status: 'Crítico', nextAction: 'Solicitar fuerza pública' },
  { id: 'C-2024-1100', type: 'Cobranza', responsible: 'A. Silva', region: 'Valparaíso', daysUnchanged: 2, status: 'Al día', nextAction: 'Ingresar escrito' },
];

const STATUS_CONFIG = {
  'Crítico': { icon: <AlertCircle className="w-4 h-4 text-red-500" />, bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  'Atención': { icon: <Clock className="w-4 h-4 text-amber-500" />, bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'Al día': { icon: <CheckCircle2 className="w-4 h-4 text-green-500" />, bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' }
};

export function LegalDemoExpanded() {
  const [filterResp, setFilterResp] = useState<string>('Todos');
  const [filterRegion, setFilterRegion] = useState<string>('Todas');
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  const responsibles = ['Todos', ...Array.from(new Set(CAUSES.map(c => c.responsible)))];
  const regions = ['Todas', ...Array.from(new Set(CAUSES.map(c => c.region)))];

  const filteredCauses = useMemo(() => {
    let res = CAUSES;
    if (filterResp !== 'Todos') res = res.filter(c => c.responsible === filterResp);
    if (filterRegion !== 'Todas') res = res.filter(c => c.region === filterRegion);
    return res.sort((a, b) => b.daysUnchanged - a.daysUnchanged);
  }, [filterResp, filterRegion]);

  const stats = useMemo(() => {
    return {
      total: filteredCauses.length,
      criticos: filteredCauses.filter(c => c.status === 'Crítico').length,
      promedio: Math.round(filteredCauses.reduce((acc, curr) => acc + curr.daysUnchanged, 0) / (filteredCauses.length || 1))
    };
  }, [filteredCauses]);

  return (
    <div className="p-4 md:p-6 flex flex-col h-full bg-gray-50/50">
      
      {/* Top Bar - Stats & Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6">
        <div className="flex gap-4">
          <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Casos Mostrados</p>
            <p className="text-xl font-display font-bold text-night">{stats.total}</p>
          </div>
          <div className="bg-red-50 px-4 py-2 rounded-lg border border-red-100 shadow-sm">
            <p className="text-[10px] text-red-600 font-medium uppercase tracking-wide">Críticos</p>
            <p className="text-xl font-display font-bold text-red-700">{stats.criticos}</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm hidden sm:block">
            <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">Promedio sin mov.</p>
            <p className="text-xl font-display font-bold text-night">{stats.promedio} <span className="text-sm font-normal text-gray-400">días</span></p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
          <Filter className="w-4 h-4 text-gray-400" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600">Resp:</span>
            <select 
              className="text-xs font-medium bg-gray-50 border border-gray-200 rounded text-night px-1 py-0.5"
              value={filterResp}
              onChange={(e) => {
                setFilterResp(e.target.value);
                setSelectedCause(null);
              }}
            >
              {responsibles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className="w-px h-4 bg-gray-200 hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600">Región:</span>
            <select 
              className="text-xs font-medium bg-gray-50 border border-gray-200 rounded text-night px-1 py-0.5"
              value={filterRegion}
              onChange={(e) => {
                setFilterRegion(e.target.value);
                setSelectedCause(null);
              }}
            >
              {regions.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0">
        
        {/* Table Area */}
        <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <div className="col-span-1 text-center">Est</div>
            <div className="col-span-3">RIT / Causa</div>
            <div className="col-span-3 hidden sm:block">Responsable</div>
            <div className="col-span-3 hidden sm:block">Región</div>
            <div className="col-span-2 text-right">Días inact.</div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {filteredCauses.map((cause) => {
              const conf = STATUS_CONFIG[cause.status];
              const isSelected = selectedCause?.id === cause.id;
              
              return (
                <div 
                  key={cause.id}
                  onClick={() => setSelectedCause(cause)}
                  className={`px-4 py-3 grid grid-cols-12 gap-2 items-center border-b border-gray-100 cursor-pointer transition-colors
                    ${isSelected ? 'bg-exec/5' : 'hover:bg-gray-50'}
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
                  <div className="col-span-3 hidden sm:block text-sm text-gray-600">
                    {cause.region}
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

        {/* Side Panel (Details) */}
        <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {selectedCause ? (
              <motion.div
                key="details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex-1"
              >
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <h4 className="font-mono font-bold text-night text-lg">{selectedCause.id}</h4>
                  <div className={`p-2 rounded-full ${STATUS_CONFIG[selectedCause.status].bg}`}>
                    {STATUS_CONFIG[selectedCause.status].icon}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5"><FileText className="w-3.5 h-3.5"/> Tipo de Juicio</p>
                    <p className="text-sm font-semibold text-night">{selectedCause.type}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1 flex items-center gap-1.5"><User className="w-3.5 h-3.5"/> Responsable</p>
                    <p className="text-sm font-semibold text-night">{selectedCause.responsible}</p>
                  </div>
                  
                  <div className={`p-3 rounded-lg border ${STATUS_CONFIG[selectedCause.status].border} ${STATUS_CONFIG[selectedCause.status].bg}`}>
                    <p className={`text-xs font-bold mb-1 ${STATUS_CONFIG[selectedCause.status].text}`}>
                      {selectedCause.status === 'Crítico' ? 'Acción Inmediata Requerida' : 'Próxima Acción Recomendada'}
                    </p>
                    <p className="text-sm text-gray-800">{selectedCause.nextAction}</p>
                  </div>
                  
                  <button className="w-full py-2 mt-4 bg-night text-white text-xs font-semibold rounded-lg hover:bg-exec transition-colors">
                    Registrar Avance
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl border border-dashed border-gray-300 shadow-sm p-8 flex-1 flex flex-col items-center text-center text-gray-500"
              >
                <div className="w-full flex flex-col items-center justify-center mb-6 pb-6 border-b border-dashed border-gray-200">
                  <ChevronRight className="w-8 h-8 mb-2 text-gray-300" />
                  <p className="text-sm">Selecciona una causa de la tabla para ver detalles y recomendaciones de acción.</p>
                </div>

                <div className="w-full">
                  <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-4 text-left">Distribución de carga (Total)</h4>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs">
                        <span>A. Silva</span>
                        <span className="font-semibold text-night">50%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-exec w-1/2"></div></div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs">
                        <span>M. Ríos</span>
                        <span className="font-semibold text-night">33%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-cyan w-1/3"></div></div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs">
                        <span>J. Pérez</span>
                        <span className="font-semibold text-night">17%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-gray-400 w-1/6"></div></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}

