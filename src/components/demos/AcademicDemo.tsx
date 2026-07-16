import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Clock, Users, Calendar, Flag, ChevronRight, FileText } from 'lucide-react';

// --- Preview Component ---

export function AcademicPreview() {
  return (
    <div className="absolute inset-0 p-4 md:p-6 flex flex-col gap-3 bg-gray-50/50">
      {[
        { name: 'Equipo Alpha', progress: 75, next: 'Entrega Fase 2', pending: 1 },
        { name: 'Equipo Beta', progress: 40, next: 'Revisión Avance', pending: 3 },
        { name: 'Equipo Gamma', progress: 90, next: 'Presentación Final', pending: 0 }
      ].map((team, i) => (
        <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-night flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-exec" /> {team.name}
            </span>
            <span className="text-[10px] font-mono text-gray-500">{team.progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-exec rounded-full" style={{ width: `${team.progress}%` }}></div>
          </div>
          <div className="flex justify-between items-end mt-1">
            <span className="text-[10px] text-gray-500 flex items-center gap-1">
              <Flag className="w-3 h-3 text-amber-500" /> {team.next}
            </span>
            {team.pending > 0 && (
              <span className="text-[9px] bg-red-50 text-red-600 px-1.5 py-0.5 rounded font-semibold">
                {team.pending} Pendientes
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Expanded Modal Content ---

type Status = 'Pendiente' | 'En curso' | 'Validado' | 'Completado';
type Team = 'Equipo Alpha' | 'Equipo Beta' | 'Equipo Gamma';

interface Task {
  id: string;
  title: string;
  team: Team;
  status: Status;
}

const INITIAL_TASKS: Task[] = [
  { id: 'T1', title: 'Definir alcance del proyecto', team: 'Equipo Alpha', status: 'Completado' },
  { id: 'T2', title: 'Recopilar bibliografía', team: 'Equipo Alpha', status: 'Validado' },
  { id: 'T3', title: 'Redactar introducción', team: 'Equipo Alpha', status: 'En curso' },
  { id: 'T4', title: 'Diseñar encuestas', team: 'Equipo Alpha', status: 'Pendiente' },
  
  { id: 'T5', title: 'Definir alcance', team: 'Equipo Beta', status: 'Validado' },
  { id: 'T6', title: 'Revisión literatura', team: 'Equipo Beta', status: 'En curso' },
  { id: 'T7', title: 'Diseñar metodología', team: 'Equipo Beta', status: 'Pendiente' },
  { id: 'T8', title: 'Aplicar encuestas', team: 'Equipo Beta', status: 'Pendiente' },
];

const COLUMNS: Status[] = ['Pendiente', 'En curso', 'Validado', 'Completado'];

export function AcademicDemoExpanded() {
  const [activeTeam, setActiveTeam] = useState<Team>('Equipo Alpha');
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  
  const teamTasks = useMemo(() => tasks.filter(t => t.team === activeTeam), [tasks, activeTeam]);
  
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

  const progress = useMemo(() => {
    if (teamTasks.length === 0) return 0;
    const completed = teamTasks.filter(t => t.status === 'Completado').length;
    return Math.round((completed / teamTasks.length) * 100);
  }, [teamTasks]);

  return (
    <div className="p-4 md:p-6 flex flex-col h-full bg-gray-50/30">
      
      {/* Header & Selectors */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-6">
        <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
          {(['Equipo Alpha', 'Equipo Beta', 'Equipo Gamma'] as Team[]).map(team => (
            <button
              key={team}
              onClick={() => setActiveTeam(team)}
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                activeTeam === team ? 'bg-white shadow-sm text-exec' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {team}
            </button>
          ))}
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex-1 md:flex-none bg-white px-4 py-2 rounded-lg border border-gray-200 flex flex-col justify-center">
            <span className="text-[10px] text-gray-500 font-bold uppercase mb-1">Avance Global</span>
            <div className="flex items-center gap-3">
              <div className="h-2 w-24 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-exec transition-all duration-500" style={{ width: `${progress}%` }}></div>
              </div>
              <span className="text-sm font-mono font-bold text-night">{progress}%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        
        {/* Kanban Board */}
        <div className="flex-1 flex flex-col min-h-0 overflow-x-auto hide-scrollbar bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <div className="flex gap-4 h-full min-w-[700px]">
            {COLUMNS.map(col => {
              const colTasks = teamTasks.filter(t => t.status === col);
              return (
                <div key={col} className="flex-1 flex flex-col bg-gray-50/50 rounded-lg border border-gray-100">
                  <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700">{col}</span>
                    <span className="text-[10px] font-mono bg-white px-1.5 py-0.5 rounded text-gray-500 border border-gray-200">{colTasks.length}</span>
                  </div>
                  
                  <div className="flex-1 p-2 flex flex-col gap-2 overflow-y-auto">
                    <AnimatePresence>
                      {colTasks.map(task => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          key={task.id}
                          onClick={() => moveTask(task.id)}
                          className={`bg-white p-3 rounded-lg border shadow-sm cursor-pointer hover:shadow-md transition-all group ${
                            col === 'Completado' ? 'border-green-200 bg-green-50/30' : 'border-gray-200'
                          }`}
                          title={col !== 'Completado' ? 'Clic para avanzar de estado' : ''}
                        >
                          <p className={`text-xs font-medium ${col === 'Completado' ? 'text-gray-500 line-through' : 'text-night'}`}>
                            {task.title}
                          </p>
                          {col !== 'Completado' && (
                            <div className="mt-2 text-[10px] text-exec font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end">
                              Avanzar <ChevronRight className="w-3 h-3" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lateral Info */}
        <div className="w-full lg:w-80 flex-shrink-0 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h4 className="text-sm font-bold text-night mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-exec" /> Próximos Hitos
            </h4>
            <div className="space-y-3">
              <div className="border-l-2 border-amber-500 pl-3">
                <p className="text-xs font-bold text-night">Entrega 1er Borrador</p>
                <p className="text-[11px] text-gray-500">En 3 días</p>
              </div>
              <div className="border-l-2 border-gray-300 pl-3">
                <p className="text-xs font-bold text-night text-gray-500">Revisión de pares</p>
                <p className="text-[11px] text-gray-400">En 2 semanas</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <h4 className="text-sm font-bold text-night mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-exec" /> Bitácora Reciente
            </h4>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent hidden"></div>
            
            <div className="relative pl-4 border-l border-gray-100 space-y-4">
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-exec ring-4 ring-white"></div>
                <p className="text-[10px] font-mono text-gray-400 mb-0.5">Hace 2 horas</p>
                <p className="text-xs text-gray-700">Se validó la bibliografía con el profesor guía.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300 ring-4 ring-white"></div>
                <p className="text-[10px] font-mono text-gray-400 mb-0.5">Ayer</p>
                <p className="text-xs text-gray-700">Reunión de coordinación semanal completada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
