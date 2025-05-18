import SideList from './SideList';

export default function Sidebar({ closeBar }) {
  return (
    <div className="sidebar fixed left-0 top-0 z-[9999999] h-screen w-72 border bg-gray-50 transition">
      <div className="flex items-center justify-between border-b border-green-400 px-4 py-3 text-green-600">
        <h1 className=" text-base font-bold uppercase">Smart Route</h1>
        <span
          className="cursor-pointer rounded-full px-3 py-1 font-bold transition-all hover:border-4 hover:border-green-600"
          onClick={closeBar}
        >
          X
        </span>
      </div>
      <SideList closeBar={closeBar} />
    </div>
  );
}
