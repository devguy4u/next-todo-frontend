import Image from "next/image";
import React from "react";
import Trash from "../assets/trash.png";
import CustomCheckBox from "./CustomCheckBox";

export type TaskCardProps = {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  onToggleComplete: () => void;
  onDelete: () => void;
};

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  color,
  completed,
  onToggleComplete,
  onDelete,
}) => {
  const onClickCard = (id: number) => {
    window.location.href = "/edit/" + id;
  };

  return (
    <div
      className={`p-4 border border-[#333333] rounded-lg shadow-md bg-[#262626] font-normal text-sm leading-[19.6px] cursor-pointer`}
    >
      <div className="relative flex items-center gap-3">
        <CustomCheckBox
          id={`task-${id}`}
          checked={completed}
          onChange={onToggleComplete}
        />
        <div
          className={`${completed ? "line-through" : ""} grow`}
          style={{ color }}
          onClick={() => onClickCard(id)}
        >
          {title}
        </div>
        <button onClick={onDelete} className="text-red-500">
          <Image src={Trash} alt="Delete" height={24} width={24} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
