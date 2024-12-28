import { useState } from "react";
import { Colors } from "../../../helpers/constants";

export type ColorPickerProps = {
  color?: string;
  setColor: (color: string) => void;
};

const ColorPicker = ({ color, setColor }: ColorPickerProps) => {
  const onClick = (color: string) => {
    setColor(color);
  };

  return (
    <div className="flex gap-4">
      {Object.values(Colors).map((el) => (
        <div
          key={el}
          className={`w-[52px] h-[52px] rounded-full cursor-pointer transition-all 
            ${
              el === color
                ? "border-4 border-[#f2f2f2]" // Border when selected
                : "border-2 border-transparent" // Transparent border when not selected
            }`}
          style={{ backgroundColor: el }}
          onClick={() => onClick(el)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPicker;
