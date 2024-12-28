import React from "react";
import Image from "next/image";
import empty from "../assets/Empty.png";

const EmptyTask = () => {
  return (
    <div className="flex flex-col justify-center items-center py-16 px-6 rounded-lg border-t border-t-[#333333] text-center text-base  leading-[22.4px]">
      <Image src={empty} alt="Empty" width={56} height={56} />
      <p className="mt-4 font-bold">You don't have any tasks registered yet.</p>
      <p className="mt-2">Create tasks and organize your to-do items.</p>
    </div>
  );
};

export default EmptyTask;
