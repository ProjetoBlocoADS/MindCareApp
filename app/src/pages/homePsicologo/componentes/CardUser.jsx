import { Calendar, Clock } from "lucide-react";

export default function CardUser({ nome, profissao, avatar }) {
  return (
    <div
      className="
        flex flex-col items-center text-white mx-auto
        w-full max-w-md
        rounded-2xl bg-[#4483CC]
        py-5 px-4
      "
    >
      {/* Avatar + Nome */}
      <div className="flex gap-4 items-center">
        <img
          src={avatar}
          alt={nome}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{nome}</h2>
          <h4 className="text-sm -mt-1 opacity-90">{profissao}</h4>
        </div>
      </div>

      {/* Disponibilidade */}
      <div
        className="
          w-full mt-4 bg-[#669AF0]
          rounded-2xl text-white
          flex justify-evenly items-center
          py-3
        "
      >
        <div className="flex items-center gap-2 text-sm">
          <Calendar size={18} />
          <p>Seg - Sex</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock size={18} />
          <p>09:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
}
