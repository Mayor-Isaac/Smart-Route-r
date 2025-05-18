import React, { useState } from 'react';
import Map from './ui/Map';
import Sidebar from './ui/Sidebar';

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const closeBar = function () {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="flex items-center justify-between border border-green-500 px-2  py-4 ">
        <h1 className=" text-base font-bold uppercase">Smart Route</h1>
        <div className="flex items-center gap-20">
          <p>
            Welcome <span className="font-bold text-green-500">Idyllic,</span>
          </p>
          <div
            onClick={closeBar}
            className="cursor-pointer font-bold text-green-500"
          >
            =
          </div>
        </div>
        {showMenu && <Sidebar closeBar={closeBar} />}
      </div>
      <div className="">
        <Map />
      </div>
    </>
  );
}
