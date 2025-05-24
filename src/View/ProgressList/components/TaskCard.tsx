import React from 'react';
import { Task } from '../ProgressList';

interface TaskCardProps {
  task: Task;
  onDragStart?: (e: React.DragEvent, taskId: string) => void;
}

function TaskCard({ task, onDragStart }:TaskCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Low':
        return 'bg-[#dfa87433] text-[#d58c48]';
      case 'High':
        return 'bg-[#d8727d19] text-[#d8727d]';
      case 'Completed':
        return 'bg-[#83c29d33] text-[#67b266]';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (onDragStart) {
      onDragStart(e, task.id);
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl p-5 mb-5 cursor-grab"
      draggable
      onDragStart={handleDragStart}
    >
      <div className="flex justify-between items-start mb-2">
        <div className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(task.priority)}`}>
          {task.priority}
        </div>
        <span className="text-base font-extrabold text-[#0d062d]">. . .</span>
      </div>
      
      <h3 className="text-lg font-semibold text-[#0d062d] mb-2">{task.title}</h3>
      <p className="text-xs text-[#787486] mb-6">{task.description}</p>
      
      {task.images && task.images.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {task.images.map((image, index) => (
            <img 
              key={index}
              src={image} 
              alt={`Task visual ${index + 1}`} 
              className="rounded-lg object-cover"
              style={{ width: image.includes('unsplashmicqqgydq6w') ? '281px' : '131px', height: image.includes('unsplashmicqqgydq6w') ? '110px' : '79px' }}
            />
          ))}
        </div>
      )}
      
      <div className="flex items-center justify-between mt-4">
        <div className="flex -space-x-2">
          {task.assignees && task.assignees.map((assignee, index) => (
            <img 
              key={index}
              src={assignee} 
              alt="Assignee" 
              className="w-6 h-6 rounded-full border border-white"
            />
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img src="/images/img_message_gray_600.svg" alt="Comments" className="w-4 h-4 mr-1" />
            <span className="text-xs text-[#787486]">{task.comments} comments</span>
          </div>
          
          <div className="flex items-center">
            <img src="/images/img_vuesax_linear_folder2.svg" alt="Files" className="w-4 h-4 mr-1" />
            <span className="text-xs text-[#787486]">{task.files} files</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;