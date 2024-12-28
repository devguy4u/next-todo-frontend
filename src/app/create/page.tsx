"use client";

import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import LeftArrow from "../assets/arrow-left.png";
import Image from "next/image";
import ColorPicker from "../components/ColorPicker";
import Plus from "../assets/plus.png";
import { SERVER_URL } from "../../../helpers/constants";

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("blue");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { title, color };
    console.log({ newTask });

    fetch(`${SERVER_URL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    }).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div className="w-[736px] mx-auto pt-[91px] flex flex-col gap-12 text-[#4EA8DE]">
      {/* Left Arrow Button (Redirect to Home without saving) */}
      <a href="/" className="">
        <Image src={LeftArrow} alt="Left Arrow" height={24} width={24} />
      </a>

      {/* Create Task Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border border-[#333333] rounded-lg p-4 gap-3 bg-[#262626] text-[#F2F2F2] leading-[19.6px] placeholder-opacity-40 "
            placeholder="Ex. Brush you teeth"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="block">Color</div>
          <ColorPicker setColor={setColor} />
        </div>
        <CustomButton text="Add Task" img={Plus} handleClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CreateTask;
