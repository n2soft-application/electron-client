import { useState } from "react";
import useWidth from "../../../hooks/layout/useWidth";

const topfilterList = [
  {
    value: "all",
    name: "My Task",
    icon: "uil:image-v",
  },
  {
    value: "fav",
    name: "Starred",
    icon: "heroicons:star",
  },
  {
    value: "done",
    name: "Completed",
    icon: "heroicons:document-check",
  },
  {
    value: "trash",
    name: "Trash",
    icon: "heroicons:trash",
  },
];

const bottomfilterList = [
  {
    name: "Team",
    value: "team",
  },
  {
    name: "low",
    value: "low",
  },
  {
    name: "medium",
    value: "medium",
  },
  {
    name: "high",
    value: "high",
  },
  {
    name: "update",
    value: "update",
  },
];

function TodoPage() {
  const { width, breakpoints } = useWidth();
  const [isLoading, setLoading] = useState(false);
  return <div>TodoPage</div>;
}

export default TodoPage;
