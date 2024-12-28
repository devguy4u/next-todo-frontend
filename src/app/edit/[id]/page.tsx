"use client";

import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import CustomButton from "../../components/CustomButton";
import ColorPicker from "../../components/ColorPicker";
import { SERVER_URL } from "../../../../helpers/constants";
import LeftArrow from "../../assets/arrow-left.png";
import Tick from "@/app/assets/tick.png";

const EditTask: React.FC = () => {
  const router = useRouter();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the task details by ID
  useEffect(() => {
    if (id) {
      fetch(`${SERVER_URL}/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch the task");
          }
          return response.json();
        })
        .then((data) => {
          const { title, color } = data;
          setTitle(title);
          setColor(color);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTask = { title, color };

    fetch(`${SERVER_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    }).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div className="w-[736px] mx-auto pt-[91px] flex flex-col gap-12 text-[#4EA8DE]">
      <a href="/" className="">
        <Image src={LeftArrow} alt="Left Arrow" height={24} width={24} />
      </a>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
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
            <ColorPicker setColor={setColor} color={color} />
          </div>
          <CustomButton
            text="Save Task"
            img={Tick}
            handleClick={handleSubmit}
          />
        </form>
      )}
    </div>
  );
};
export default EditTask;
