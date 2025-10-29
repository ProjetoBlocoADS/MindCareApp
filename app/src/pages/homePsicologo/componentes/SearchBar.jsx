import { Funnel, CircleArrowDown, Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-[328px] h-[52px] flex items-center px-4 mt-6 bg-[#134496] mx-auto rounded-[26px]">
      <div className="relative flex items-center ">
        <Search className="absolute left-3 text-[#134496] w-4 h-4" />
        <input
          type="text"
          placeholder="Search"
          className="px-6 pl-10 py-2 w-[223px] h-[34px] rounded-[26px] outline-none"
        />
      </div>
      <div className="h-[24px] w-[1px] bg-white/30 mx-2"></div>
      <div className="flex items-center gap-2">
        <Funnel className="cursor-pointer" color='white' size={20} />
        <CircleArrowDown className="cursor-pointer" color='white' size={20} />
      </div>
    </div>
  );
}
