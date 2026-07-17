import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, TrendingUp, DollarSign, Package, Filter, Download, ChevronDown } from 'lucide-react';

// --- Preview Component ---

export function CommercialPreview() {
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between bg-white">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-exec" />
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Inteligencia Comercial</span>
        </div>
        <span className="text-[9px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Live</span>
      </div>
      
      <div className="flex-1 flex flex-col justify-center gap-6 py-2">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase mb-1">Ventas YTD</p>
            <p className="text-xl font-display font-bold text-night">$4.2M</p>
          </div>
          <div>
            <p className="text-[9px] text-gray-400 font-bold uppercase mb-1">Crecimiento</p>
            <p className="text-xl font-display font-bold text-green-600">+12%</p>
          </div>
        </div>
        
        <div className="h-16 w-full flex items-end justify-between gap-1 mt-2">
          {[30, 45, 25, 60, 40, 75, 50, 85].map((val, i) => (
            <div key={i} className="w-full bg-exec/20 rounded-t-sm relative">
              <div className="absolute bottom-0 w-full bg-exec rounded-t-sm" style={{ height: `${val}%` }}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Expanded Modal Content ---

type Period = 'Q1' | 'Q2' | 'Q3' | 'YTD';
type Branch = 'Todas' | 'Norte' | 'Centro' | 'Sur';

const DATA = {
  'Q1': { sales: 124.5, margin: 32.1, units: 12450, growth: 8.4, trend: [40, 45, 55, 50, 65, 60] },
  'Q2': { sales: 145.2, margin: 33.4, units: 14200, growth: 12.2, trend: [55, 60, 50, 75, 70, 80] },
  'Q3': { sales: 168.9, margin: 34.2, units: 16800, growth: 15.8, trend: [70, 65, 80, 85, 90, 95] },
  'YTD': { sales: 438.6, margin: 33.5, units: 43450, growth: 12.5, trend: [45, 55, 50, 70, 80, 90] },
};

export function CommercialDemoExpanded() {
  const [period, setPeriod] = useState<Period>('YTD');
  const [branch, setBranch] = useState<Branch>('Todas');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleFilterChange = (setter: any, val: string) => {
    setIsUpdating(true);
    setter(val);
    setTimeout(() => setIsUpdating(false), 600);
  };

  const currentData = DATA[period];
  const branchMultiplier = branch === 'Todas' ? 1 : branch === 'Centro' ? 0.5 : 0.25;
  const metrics = {
    sales: (currentData.sales * branchMultiplier).toFixed(1),
    margin: (currentData.margin * (branch === 'Todas' ? 1 : 1.05)).toFixed(1),
    units: Math.round(currentData.units * branchMultiplier),
    growth: (currentData.growth * (branch === 'Todas' ? 1 : 1.1)).toFixed(1)
  };

  return (
    <div className="p-4 md:p-8 flex flex-col h-full bg-gray-50/50">
      
      {/* Filters Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-exec" />
            <span className="text-xs font-bold text-gray-700 uppercase">Filtros:</span>
          </div>
          
          <div className="flex bg-gray-100 rounded-lg p-1">
            {(['Q1', 'Q2', 'Q3', 'YTD'] as Period[]).map(p => (
              <button
                key={p}
                onClick={() => handleFilterChange(setPeriod, p)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${period === p ? 'bg-white shadow-sm text-exec' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {p}
              </button>
            ))}
          </div>
          
          <div className="w-px h-6 bg-gray-200 hidden md:block"></div>
          
          <div className="relative">
            <select 
              value={branch}
              onChange={(e) => handleFilterChange(setBranch, e.target.value as Branch)}
              className="appearance-none text-xs font-bold bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-night focus:ring-2 focus:ring-exec focus:border-exec cursor-pointer shadow-sm"
            >
              <option value="Todas">Todas las sucursales</option>
              <option value="Norte">Zona Norte</option>
              <option value="Centro">Zona Centro</option>
              <option value="Sur">Zona Sur</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>
        </div>
        
        <button className="flex items-center gap-2 text-xs font-bold text-gray-600 bg-white border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
          <Download className="w-4 h-4" /> Exportar Reporte
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-y-auto hide-scrollbar">
        
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Venta Neta', value: `$${metrics.sales}M`, icon: <DollarSign className="w-5 h-5 text-exec" />, color: 'bg-blue-50', border: 'border-blue-100' },
            { label: 'Margen Global', value: `${metrics.margin}%`, icon: <BarChart3 className="w-5 h-5 text-cyan" />, color: 'bg-cyan/10', border: 'border-cyan/20' },
            { label: 'Unidades', value: metrics.units.toLocaleString(), icon: <Package className="w-5 h-5 text-indigo-500" />, color: 'bg-indigo-50', border: 'border-indigo-100' },
            { label: 'Crecimiento A/A', value: `+${metrics.growth}%`, icon: <TrendingUp className="w-5 h-5 text-green-500" />, color: 'bg-green-50', border: 'border-green-100' }
          ].map((kpi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`bg-white p-5 rounded-xl border ${kpi.border} shadow-sm relative overflow-hidden`}
            >
              <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full ${kpi.color} opacity-40 blur-xl`}></div>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-3 relative z-10">{kpi.label}</p>
              <div className="flex items-center justify-between relative z-10">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={kpi.value}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="text-2xl md:text-3xl font-display font-bold text-night"
                  >
                    {kpi.value}
                  </motion.p>
                </AnimatePresence>
                <div className={`p-2 rounded-lg ${kpi.color} bg-opacity-50 hidden sm:block shadow-sm`}>
                  {kpi.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[300px]">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <h4 className="text-sm font-bold text-night">Tendencia de Ingresos</h4>
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Proyección Lineal</span>
            </div>
            
            <div className="flex-1 flex items-end gap-2 md:gap-4 pb-6 border-b border-gray-100 relative mt-4">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between border-l border-gray-100 pl-2">
                 <span className="text-[10px] font-bold text-gray-300 -mt-2">100M</span>
                 <span className="text-[10px] font-bold text-gray-300">50M</span>
                 <span className="text-[10px] font-bold text-gray-300 mb-6">0</span>
              </div>
              
              <div className="flex-1 flex items-end justify-between h-full pl-10 z-10">
                {currentData.trend.map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="w-full max-w-[48px] bg-exec/10 hover:bg-exec/20 transition-colors rounded-t-md relative group cursor-crosshair mx-1 border-t-2 border-exec"
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-night text-white text-[10px] font-bold px-2 py-1.5 rounded whitespace-nowrap transition-opacity shadow-lg">
                      ${(val * 1.5 * branchMultiplier).toFixed(1)}M
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-between pl-12 pr-4 mt-3">
              {currentData.trend.map((_, i) => (
                <span key={i} className="text-[10px] font-bold text-gray-400">M{i+1}</span>
              ))}
            </div>
          </div>

          {/* Side Charts */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex-1 flex flex-col">
              <h4 className="text-sm font-bold text-night mb-6">Composición Mix</h4>
              <div className="flex-1 flex flex-col justify-center gap-5">
                {[
                  { name: 'Core Services', pct: 45, color: 'bg-exec' },
                  { name: 'Suscripciones', pct: 35, color: 'bg-cyan' },
                  { name: 'On-Demand', pct: 20, color: 'bg-gray-300' }
                ].map(cat => (
                  <div key={cat.name}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-gray-700">{cat.name}</span>
                      <span className="text-night">{cat.pct}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${cat.pct}%` }}
                        transition={{ duration: 0.5 }}
                        className={`h-full ${cat.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-exec text-white p-6 rounded-xl shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <BarChart3 className="w-24 h-24" />
              </div>
              <h4 className="text-sm font-bold mb-2 relative z-10">Auto-Insights</h4>
              <p className="text-[10px] font-medium text-exec-100 mb-4 tracking-wide uppercase relative z-10">Motor Predictivo Analítico</p>
              <ul className="text-sm space-y-3 relative z-10">
                <li className="flex gap-2">
                  <span className="text-cyan font-bold">→</span>
                  <span className="text-white/90">Suscripciones impulsaron margen neto este Q.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan font-bold">→</span>
                  <span className="text-white/90">Demanda On-Demand por debajo del forecast.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
