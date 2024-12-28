import React from "react";
import TaskCard from "./TaskCard";

interface Task {
  id: number;
  title: string;
  color: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: number, currentStatus: boolean) => Promise<void>;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onToggleComplete,
  onDelete,
}) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          {...task}
          onToggleComplete={() => onToggleComplete(task.id, task.completed)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
