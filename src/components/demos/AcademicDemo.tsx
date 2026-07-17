import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, CheckSquare, Clock, ChevronRight, Calendar, FileText, LayoutDashboard, Flag, AlertCircle } from 'lucide-react';

// --- Preview Component ---

export function AcademicPreview() {
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between bg-white">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <LayoutDashboard className="w-4 h-4 text-exec" />
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Scrum Board</span>
        </div>
      </div>
      
      <div className="flex-1 py-3 flex flex-col justify-center gap-4">
        <h4 className="text-xs font-bold text-night mb-2">Estado del Sprint 3</h4>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-[10px] font-bold mb-1">
              <span className="text-gray-500">Equipo Alpha</span>
              <span className="text-exec">75%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-exec w-[75%] rounded-full"></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[10px] font-bold mb-1">
              <span className="text-gray-500">Equipo Beta</span>
              <span className="text-cyan">40%</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-cyan w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-2 pt-3 border-t border-gray-100">
          <div className="flex -space-x-1">
             <div className="w-5 h-5 rounded-full bg-gray-200 border-2 border-white"></div>
             <div className="w-5 h-5 rounded-full bg-gray-300 border-2 border-white"></div>
             <div className="w-5 h-5 rounded-full bg-exec border-2 border-white text-[8px] flex items-center justify-center text-white font-bold">+2</div>
          </div>
          <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
            5 Días Restantes
          </span>
        </div>
      </div>
    </div>
  );
}

// --- Expanded Modal Content ---

type Status = 'To Do' | 'In Progress' | 'Review' | 'Done';
type Team = 'Equipo Alpha' | 'Equipo Beta';

interface Task {
  id: string;
  title: string;
  team: Team;
  status: Status;
  points: number;
  isBlocker?: boolean;
}

const INITIAL_TASKS: Task[] = [
  { id: 'T-101', title: 'Definir arquitectura de base de datos', team: 'Equipo Alpha', status: 'Done', points: 5 },
  { id: 'T-102', title: 'Implementar autenticación de usuarios', team: 'Equipo Alpha', status: 'Review', points: 8 },
  { id: 'T-103', title: 'Integrar pasarela de pagos', team: 'Equipo Alpha', status: 'In Progress', points: 13, isBlocker: true },
  { id: 'T-104', title: 'Diseñar dashboard principal', team: 'Equipo Alpha', status: 'To Do', points: 5 },
  { id: 'T-105', title: 'Configurar entorno CI/CD', team: 'Equipo Alpha', status: 'To Do', points: 3 },
  
  { id: 'T-201', title: 'Revisión de estado del arte', team: 'Equipo Beta', status: 'Review', points: 5 },
  { id: 'T-202', title: 'Redactar capítulo metodología', team: 'Equipo Beta', status: 'In Progress', points: 8 },
  { id: 'T-203', title: 'Análisis de datos cualitativos', team: 'Equipo Beta', status: 'To Do', points: 13 },
];

const COLUMNS: Status[] = ['To Do', 'In Progress', 'Review', 'Done'];

export function AcademicDemoExpanded() {
  const [activeTeam, setActiveTeam] = useState<Team>('Equipo Alpha');
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  
  const teamTasks = useMemo(() => tasks.filter(t => t.team === activeTeam), [tasks, activeTeam]);
  
  const totalPoints = useMemo(() => teamTasks.reduce((sum, t) => sum + t.points, 0), [teamTasks]);
  const completedPoints = useMemo(() => teamTasks.filter(t => t.status === 'Done').reduce((sum, t) => sum + t.points, 0), [teamTasks]);
  const progressPercent = Math.round((completedPoints / totalPoints) * 100) || 0;

  const moveTask = (taskId: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const currentIndex = COLUMNS.indexOf(t.status);
        if (currentIndex < COLUMNS.length - 1) {
          return { ...t, status: COLUMNS[currentIndex + 1] };
        }
      }
      return t;
    }));
  };

  return (
    <div className="p-4 md:p-6 flex flex-col h-full bg-gray-50/50">
      
      {/* Header & Selectors */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
          {(['Equipo Alpha', 'Equipo Beta'] as Team[]).map(team => (
            <button
              key={team}
              onClick={() => setActiveTeam(team)}
              className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${
                activeTeam === team ? 'bg-white shadow-sm text-exec' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {team}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Sprint Activo</p>
            <p className="text-sm font-bold text-night">Sprint 3 (Nov 1 - Nov 14)</p>
          </div>
          <div className="w-px h-8 bg-gray-200 hidden sm:block"></div>
          <div>
            <div className="flex items-center gap-2 mb-1 justify-end">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Avance Sprint</span>
              <span className="text-xs font-mono font-bold text-exec">{progressPercent}%</span>
            </div>
            <div className="h-1.5 w-32 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-exec transition-all duration-500" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        
        {/* Kanban Board */}
        <div className="flex-1 flex flex-col min-h-0 overflow-x-auto hide-scrollbar bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <div className="flex gap-4 h-full min-w-[700px]">
            {COLUMNS.map(col => {
              const colTasks = teamTasks.filter(t => t.status === col);
              return (
                <div key={col} className="flex-1 flex flex-col bg-gray-50/80 rounded-xl border border-gray-100">
                  <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-gray-100/50 rounded-t-xl">
                    <span className="text-xs font-bold text-gray-700 uppercase tracking-wide">{col}</span>
                    <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-full text-gray-500 border border-gray-200 shadow-sm">
                      {colTasks.reduce((sum, t) => sum + t.points, 0)} pts
                    </span>
                  </div>
                  
                  <div className="flex-1 p-3 flex flex-col gap-3 overflow-y-auto">
                    <AnimatePresence>
                      {colTasks.map(task => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          key={task.id}
                          onClick={() => moveTask(task.id)}
                          className={`bg-white p-3.5 rounded-lg border shadow-sm cursor-pointer hover:shadow-md hover:border-gray-300 transition-all group ${
                            col === 'Done' ? 'border-green-200 bg-green-50/10' : 'border-gray-200'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[9px] font-mono text-gray-400">{task.id}</span>
                            {task.isBlocker && (
                              <span className="text-[9px] font-bold bg-red-100 text-red-600 px-1.5 py-0.5 rounded flex items-center gap-1">
                                <AlertCircle className="w-2.5 h-2.5" /> Blocker
                              </span>
                            )}
                          </div>
                          <p className={`text-xs font-semibold leading-relaxed mb-3 ${col === 'Done' ? 'text-gray-500 line-through' : 'text-night'}`}>
                            {task.title}
                          </p>
                          <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                            <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                              {task.points} pts
                            </span>
                            {col !== 'Done' && (
                              <div className="text-[10px] text-exec font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                Avanzar <ChevronRight className="w-3 h-3" />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar: Sprint Metrics */}
        <div className="w-full lg:w-72 flex-shrink-0 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h4 className="text-sm font-bold text-night mb-4 flex items-center gap-2">
              <Flag className="w-4 h-4 text-exec" /> Sprint Metrics
            </h4>
            
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-[9px] font-bold text-gray-500 uppercase">Story Points</p>
                  <p className="text-lg font-mono font-bold text-night mt-1">{completedPoints} / {totalPoints}</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                  <p className="text-[9px] font-bold text-amber-600 uppercase">Tiempo Restante</p>
                  <p className="text-lg font-mono font-bold text-amber-700 mt-1">5 Días</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-700 mb-2">Burn-down Chart (Simulado)</p>
                <div className="h-32 bg-gray-50 rounded-lg border border-gray-100 relative p-2 flex items-end">
                   {/* Simulated Chart Grid */}
                   <div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-20">
                     {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-gray-400"></div>)}
                   </div>
                   {/* Simulated Line */}
                   <svg className="w-full h-full" preserveAspectRatio="none">
                     <path d="M 0 0 L 20 20 L 40 30 L 60 30 L 80 50 L 100 80" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke"/>
                     <path d="M 0 0 L 20 25 L 40 40 L 60 45" fill="none" stroke="#2563EB" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
                   </svg>
                   <div className="absolute left-[60%] top-[45%] w-2 h-2 bg-exec rounded-full ring-2 ring-white translate-x-[-4px] translate-y-[-4px]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-night text-white rounded-xl shadow-sm p-5">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan" /> Daily Standup
            </h4>
            <p className="text-xs text-gray-400 mb-4">Resumen de bloqueos reportados por el equipo.</p>
            <div className="space-y-3 border-l-2 border-red-500 pl-3">
               <p className="text-xs font-bold text-white">Integración API Pagos</p>
               <p className="text-[11px] text-gray-400">Credenciales de sandbox expiradas. Esperando respuesta de soporte de Stripe.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
