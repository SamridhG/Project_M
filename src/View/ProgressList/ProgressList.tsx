import { useState } from "react";
import TaskCard from "./components/TaskCard";

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'Low' | 'High' | 'Completed';
  comments: number;
  files: number;
  assignees?: string[];
  images?: string[];
}

export interface Column {
  id: string;
  title: string;
  color: string;
  count: number;
  tasks: Task[];
}
interface ProgressListProps {
  columns: Column[];
}

function ProgressList({ columns: initialColumns }:ProgressListProps) {
   const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTaskId(taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, columnId: string) => {
    e.preventDefault();
    
    if (draggedTaskId) {
      // Find the task and its source column
      let sourceColumnIndex = -1;
      let taskToMove: Task | null = null;
      
      for (let i = 0; i < columns.length; i++) {
        const taskIndex = columns[i].tasks.findIndex(task => task.id === draggedTaskId);
        if (taskIndex !== -1) {
          sourceColumnIndex = i;
          taskToMove = columns[i].tasks[taskIndex];
          break;
        }
      }
      
      if (sourceColumnIndex !== -1 && taskToMove) {
        // Create a new columns array
        const newColumns = [...columns];
        
        // Remove the task from the source column
        newColumns[sourceColumnIndex].tasks = newColumns[sourceColumnIndex].tasks.filter(
          task => task.id !== draggedTaskId
        );
        newColumns[sourceColumnIndex].count = newColumns[sourceColumnIndex].tasks.length;
        
        // Add the task to the target column
        const targetColumnIndex = newColumns.findIndex(col => col.id === columnId);
        if (targetColumnIndex !== -1) {
          newColumns[targetColumnIndex].tasks.push(taskToMove);
          newColumns[targetColumnIndex].count = newColumns[targetColumnIndex].tasks.length;
        }
        
        // Update the state
        setColumns(newColumns);
      }
      
      setDraggedTaskId(null);
    }
  };

  return (
    <div className="flex space-x-4">
      {columns.map(column => (
        <div 
          key={column.id}
          className="bg-[#f5f5f5] rounded-2xl p-5 flex-1 min-w-0 h-[480px] "
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column.id)}
        >
          <div className="flex items-center mb-6">
            <div className={`w-2 h-2 rounded-full bg-[${column.color}] mr-2`}></div>
            <h2 className="text-base font-medium text-[#0d062d]">{column.title}</h2>
            <div className="ml-2 bg-[#e0e0e0] rounded-full px-2 py-0.5 text-xs text-[#615e6d]">
              {column.count}
            </div>
            
            {column.title === 'To Do' && (
              <button className="ml-auto">
                <img src="/images/img_addsquare_deep_purple_a400.svg" alt="Add task" className="w-6 h-6" />
              </button>
            )}
          </div>
          
          <div className={`h-0.5 bg-[${column.color}] mb-2`}></div>
          
          <div className="space-y-5 h-[380px] overflow-y-auto hide-scrollbar">
            {column.tasks.map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onDragStart={handleDragStart}
              />
            ))}
            
            {column.id === 'todo' && (
              <div className="border border-dashed border-[#4f2fe596] bg-[#4f2fe50f] rounded-lg h-[314px] flex items-center justify-center">
                {/* Placeholder for new task */}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgressList
