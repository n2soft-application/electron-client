import "assets/css/MiniCalendar.css";
import Card from "components/card";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MiniCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Card extra="flex w-full h-full flex-col px-3 py-3">
        <Calendar
          onChange={(value: Value, event) => {
            onChange(new Date(value.toLocaleString()))
          }}
          value={value}
          prevLabel={<MdChevronLeft className="w-6 h-6 ml-1 " />}
          nextLabel={<MdChevronRight className="w-6 h-6 ml-1 " />}
          view={"month"}
        />
      </Card>
    </div>
  );
};

export default MiniCalendar;
