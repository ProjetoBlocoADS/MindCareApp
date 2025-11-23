import { Funnel, CircleArrowDown, Search } from 'lucide-react';

export default function SearchBar({ onChangeValue, inputValue, placeholder }) {

  const handleChange = (e) => {
    onChangeValue(e.target.value);
  };

  return (
    <div
      className="
        w-full max-w-md
        h-12
        flex items-center 
        px-4 mt-6 
        bg-[#134496]
        mx-auto 
        rounded-2xl
      "
    >
      <div className="relative flex items-center flex-1">
        <Search
          className="absolute left-3 text-gray-400 w-4 h-4"
        />

        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          className="
            w-full
            bg-white
            pl-10 pr-3 py-2
            rounded-2xl
            text-sm
            outline-none
            placeholder-gray-500
          "
        />
      </div>

      {/* Divisão */}
      <div className="h-6 w-px bg-white/30 mx-3"></div>

      {/* Ícones */}
      <div className="flex items-center gap-3">
        <Funnel className="cursor-pointer text-white" size={20} />
        <CircleArrowDown className="cursor-pointer text-white" size={20} />
      </div>
    </div>
  );
}
