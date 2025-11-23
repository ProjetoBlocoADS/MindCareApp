import { Brain } from "lucide-react";

export default function LogoMindCare({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 text-blue-400 cursor-pointer select-none pl-2"
    >
      <Brain size={30} />
      <h1 className="text-[1.4rem] font-semibold">MindCare</h1>
    </div>
  );
}
