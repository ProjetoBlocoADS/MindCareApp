import { Funnel, CircleArrowDown } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-[328px] h-[52px] flex gap-2 justify-center items-center mt-6 bg-[#134496] mx-auto rounded-[26px]">
      <input
        type="text"
        placeholder="Search"
        className="px-6 py-2 w-[223px] h-[34px] rounded-[26px]"
      />
      <div className="bg-zinc-400"></div>
      <Funnel color='white' />
      <CircleArrowDown color='white' />
    </div>
  );
}
