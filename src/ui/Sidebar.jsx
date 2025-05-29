import SideList from './SideList';
import Close from './Close';

export default function Sidebar({ closeBar }) {
  return (
    <div
      className="sidebar bg-green fixed left-0 top-0 z-[9999999] h-screen w-72 border bg-gray-100 transition"
      // className="sidebar fixed left-0 top-0 z-[9999999] h-screen w-72 border bg-cover bg-center bg-no-repeat transition"
      // style={{ backgroundImage: "url('/img/road-bg-3.jpg')" }}
    >
      <div className="flex items-center justify-between border-b border-green-400 px-4 py-3 text-green-600">
        <h1 className=" text-base font-bold uppercase">Smart Route</h1>
        <Close closeBar={closeBar} />
      </div>
      <SideList closeBar={closeBar} />
    </div>
  );
}
