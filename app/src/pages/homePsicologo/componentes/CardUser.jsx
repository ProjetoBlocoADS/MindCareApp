import { Calendar, Clock } from "lucide-react";

export default function CardUser({ nome, profissao, avatar }) {
  return (
    <div
      className="flex flex-col mx-auto text-white items-center w-[356px] h-[164px] rounded-[20px] bg-[#4483CC]
     "
    >
      <div className="flex gap-4 items-center my-4">
        <img
          src={avatar}
          alt={nome}
          className="w-[50px] h-[50px] object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="text-[20px] font-semibold">{nome}</h2>
          <h4 className="text-[16px] relative -top-2">{profissao}</h4>
        </div>
      </div>

      <div className="w-[334px] h-[61px] bg-[#669AF0] rounded-[26px] text-white flex justify-evenly items-center">
        <div className="flex items-center gap-2 ">
          <Calendar />
          <p className="text-white">Seg - Sex</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock />
          <p className="text-white">09:00 - 17:00</p>
        </div>
      </div>
    </div>
  );
}
