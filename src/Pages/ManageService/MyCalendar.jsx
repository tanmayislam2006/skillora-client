import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MyCalendar = () => {
  const [selected, setSelected] = useState();
  const formatingDate = selected ? selected.toLocaleDateString("en-CA") : "";
  return (
    <div className="flex justify-center">
      <div className="">
        <DayPicker mode="single" selected={selected} onSelect={setSelected} />
        <div className="mt-2 text-center font-semibold">
          {selected ? `Selected: ${formatingDate}` : "Pick a day."}
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
