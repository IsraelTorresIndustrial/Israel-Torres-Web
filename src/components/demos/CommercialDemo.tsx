import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart3, TrendingUp, Filter, RefreshCw, DollarSign, Package, Users } from 'lucide-react';

// --- Preview Component ---

export function CommercialPreview() {
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col bg-gray-50/50">
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-[10px] text-gray-500 font-bold uppercase">Venta Total</p>
          <p className="text-lg font-display font-bold text-night mt-1">$45.2M</p>
          <p className="text-[10px] text-green-600 font-semibold flex items-center gap-0.5 mt-1">
            <TrendingUp className="w-3 h-3" /> +12%
          </p>
        </div>
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-[10px] text-gray-500 font-bold uppercase">Margen</p>
          <p className="text-lg font-display font-bold text-night mt-1">24.5%</p>
          <p className="text-[10px] text-green-600 font-semibold flex items-center gap-0.5 mt-1">
            <TrendingUp className="w-3 h-3" /> +2.1%
          </p>
        </div>
      </div>
      
      <div className="flex-1 bg-white border border-gray-100 rounded-xl shadow-sm p-3 flex flex-col justify-end relative overflow-hidden">
        <div className="absolute top-3 left-3 text-[10px] font-bold text-gray-400 uppercase">Evolución</div>
        
        {/* CSS Chart */}
        <div className="flex items-end justify-between gap-1 h-16 mt-6">
          {[40, 60, 45, 80, 65, 90, 100].map((val, i) => (
            <div key={i} className="w-full bg-exec/20 rounded-t-sm" style={{ height: `${val}%` }}>
              <div className="w-full bg-exec rounded-t-sm" style={{ height: '2px' }}></div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-1 px-1">
          <span className="text-[8px] text-gray-400">Ene</span>
          <span className="text-[8px] text-gray-400">Jul</span>
        </div>
      </div>
    </div>
  );
}

// --- Expanded Modal Content ---

type Period = 'Q1' | 'Q2' | 'Q3' | 'YTD';
type Branch = 'Todas' | 'Norte' | 'Centro' | 'Sur';

const DATA = {
  'Q1': { sales: 120, margin: 22.4, units: 1450, growth: 5.2, trend: [30, 45, 40] },
  'Q2': { sales: 145, margin: 24.1, units: 1800, growth: 12.5, trend: [45, 60, 55] },
  'Q3': { sales: 160, margin: 25.8, units: 2100, growth: 8.4, trend: [60, 80, 75] },
  'YTD': { sales: 425, margin: 24.3, units: 5350, growth: 15.2, trend: [30, 45, 40, 45, 60, 55, 60, 80, 75] }
};

export function CommercialDemoExpanded() {
  const [period, setPeriod] = useState<Period>('YTD');
  const [branch, setBranch] = useState<Branch>('Todas');
  const [isUpdating, setIsUpdating] = useState(false);
  
  const currentData = DATA[period];
  
  // Simulate branch impact
  const branchMultiplier = branch === 'Todas' ? 1 : branch === 'Centro' ? 0.6 : 0.2;
  const metrics = {
    sales: (currentData.sales * branchMultiplier).toFixed(1),
    margin: (currentData.margin + (branch === 'Todas' ? 0 : 1.2)).toFixed(1),
    units: Math.round(currentData.units * branchMultiplier),
    growth: currentData.growth
  };

  const handleFilterChange = (setter: any, val: any) => {
    setIsUpdating(true);
    setter(val);
    setTimeout(() => setIsUpdating(false), 400);
  };

  return (
    <div className="p-4 md:p-6 flex flex-col h-full bg-gray-50/50">
      
      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-semibold text-gray-600">Periodo:</span>
            <div className="flex bg-gray-100 rounded-lg p-1">
              {(['Q1', 'Q2', 'Q3', 'YTD'] as Period[]).map(p => (
                <button
                  key={p}
                  onClick={() => handleFilterChange(setPeriod, p)}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${period === p ? 'bg-white shadow-sm text-exec' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-px h-6 bg-gray-200 hidden md:block"></div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-600">Sucursal:</span>
            <select 
              value={branch}
              onChange={(e) => handleFilterChange(setBranch, e.target.value as Branch)}
              className="text-xs font-medium bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-night focus:ring-0 focus:border-exec"
            >
              <option value="Todas">Todas las sucursales</option>
              <option value="Norte">Zona Norte</option>
              <option value="Centro">Zona Centro</option>
              <option value="Sur">Zona Sur</option>
            </select>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 bg-green-50 text-green-700 px-3 py-1.5 rounded-full">
          <RefreshCw className={`w-3 h-3 ${isUpdating ? 'animate-spin' : ''}`} />
          Datos actualizados autom.
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-6 min-h-0 overflow-y-auto hide-scrollbar">
        
        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Venta Neta', value: `$${metrics.sales}M`, icon: <DollarSign className="w-5 h-5 text-exec" />, color: 'bg-blue-50' },
            { label: 'Margen Global', value: `${metrics.margin}%`, icon: <BarChart3 className="w-5 h-5 text-cyan" />, color: 'bg-cyan/10' },
            { label: 'Unidades', value: metrics.units.toLocaleString(), icon: <Package className="w-5 h-5 text-indigo-500" />, color: 'bg-indigo-50' },
            { label: 'Crecimiento A/A', value: `+${metrics.growth}%`, icon: <TrendingUp className="w-5 h-5 text-green-500" />, color: 'bg-green-50' }
          ].map((kpi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-4 md:p-5 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden"
            >
              <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full ${kpi.color} opacity-50`}></div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2 relative z-10">{kpi.label}</p>
              <div className="flex items-center gap-3 relative z-10">
                <div className={`p-2 rounded-lg ${kpi.color} bg-opacity-50 hidden sm:block`}>
                  {kpi.icon}
                </div>
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[300px]">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-5 md:p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col">
            <h4 className="text-sm font-bold text-night mb-6">Evolución de Ingresos</h4>
            <div className="flex-1 flex items-end gap-2 md:gap-4 pb-6 border-b border-gray-100 relative mt-4">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between border-l border-gray-100 pl-2">
                 <span className="text-[10px] text-gray-400 -mt-2">100M</span>
                 <span className="text-[10px] text-gray-400">50M</span>
                 <span className="text-[10px] text-gray-400 mb-6">0</span>
              </div>
              
              <div className="flex-1 flex items-end justify-between h-full pl-8 z-10">
                {currentData.trend.map((val, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="w-full max-w-[40px] bg-exec/20 hover:bg-exec/30 transition-colors rounded-t-md relative group cursor-crosshair mx-1"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-exec rounded-t-md"></div>
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-night text-white text-[10px] px-2 py-1 rounded whitespace-nowrap transition-opacity">
                      ${(val * 1.5 * branchMultiplier).toFixed(1)}M
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-between pl-10 pr-4 mt-2">
              {currentData.trend.map((_, i) => (
                <span key={i} className="text-[10px] font-mono text-gray-400">M{i+1}</span>
              ))}
            </div>
          </div>

          {/* Side Charts */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex-1 flex flex-col">
              <h4 className="text-sm font-bold text-night mb-4">Mix de Productos</h4>
              <div className="flex-1 flex flex-col justify-center gap-4">
                {[
                  { name: 'Categoría A', pct: 45, color: 'bg-exec' },
                  { name: 'Categoría B', pct: 35, color: 'bg-cyan' },
                  { name: 'Categoría C', pct: 20, color: 'bg-gray-300' }
                ].map(cat => (
                  <div key={cat.name}>
                    <div className="flex justify-between text-xs font-semibold mb-1.5">
                      <span className="text-gray-700">{cat.name}</span>
                      <span className="text-night">{cat.pct}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
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
            
            <div className="bg-exec text-white p-5 rounded-xl shadow-sm">
              <h4 className="text-sm font-bold mb-1">Insights</h4>
              <p className="text-xs text-blue-100 mb-4 leading-relaxed">Detectado automáticamente</p>
              <ul className="text-sm space-y-2">
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  Categoría A impulsó el margen este periodo.
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan">→</span>
                  Se recomienda revisar stock de Categoría B en Zona Centro.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
