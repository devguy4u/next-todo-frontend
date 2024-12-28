"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import EmptyTask from "./components/EmptyTask";
import TaskList from "./components/TaskList";
import { SERVER_URL } from "../../helpers/constants";
import CustomButton from "./components/CustomButton";

import Plus from "./assets/plus.png";

// Define types for the task data
export type Task = {
  id: number;
  title: string;
  color: string;
  completed: boolean;
};

const HomePage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch tasks from the Back-End API on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}`);
      setTasks(response.data);
    } catch (err) {
      setError("Error fetching tasks.");
    } finally {
      setLoading(false);
    }
  };

  const toggleTaskCompletion = async (id: number, currentStatus: boolean) => {
    try {
      await axios.put(`${SERVER_URL}/${id}`, {
        completed: !currentStatus,
      });

      // Update the task completion status locally after the API call
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !currentStatus } : task
        )
      );
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      await axios.delete(`${SERVER_URL}/${id}`);

      // Remove the deleted task from the list locally
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <main className="w-full md:w-[736px] flex flex-col justify-center -mt-[27px] mx-auto px-6 md:px-0 text-[14px]">
      <CustomButton text="Add Task" img={Plus} href="/create" />

      <div className="mt-[66px] flex flex-col gap-6">
        <div className="flex justify-between font-bold leading-[17px]">
          <div className="flex align-baseline gap-2 text-[#4EA8DE]">
            <span>Tasks</span>
            <span className="rounded-full px-2 py-0.5 bg-[#333333] leading-[14.5px] text-xs text-[#D9D9D9]">
              {tasks.length}
            </span>
          </div>
          <div className="flex align-baseline gap-2 text-[#8284FA]">
            <span>Completed</span>
            <span className="rounded-full px-2 py-0.5 bg-[#333333] leading-[14.5px] text-xs text-[#D9D9D9]">
              {tasks.length === undefined || tasks.length === 0
                ? 0
                : tasks.filter((task) => task.completed).length +
                  " de " +
                  tasks.length}
            </span>
          </div>
        </div>
        <ul>
          {loading ? (
            <div className="py-16 px-6 rounded-lg border-t border-t-[#333333] text-center">
              Loading tasks...
            </div>
          ) : error ? (
            <div className="py-16 px-6 rounded-lg border-t border-t-[#333333] text-center text-red-600">
              {error}
            </div>
          ) : tasks.length === 0 ? (
            <EmptyTask />
          ) : (
            <TaskList
              tasks={tasks}
              onToggleComplete={toggleTaskCompletion}
              onDelete={deleteTask}
            />
          )}
        </ul>
      </div>
    </main>
  );
};

export default HomePage;
