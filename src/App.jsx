import React, { useState } from 'react';
import Map from './ui/Map';
import Sidebar from './ui/Sidebar';
import { HiMenu } from 'react-icons/hi';

export default function App() {
  const [showMenu, setShowMenu] = useState(true);
  const closeBar = function () {
    setShowMenu(!showMenu);
  };

  const currHour = new Date().getHours();
  const greetings =
    currHour < 12
      ? 'Morning'
      : currHour >= 12 && currHour < 17
      ? 'Afternoon'
      : 'Evening';

  return (
    <>
      <div className="flex items-center justify-between border border-green-500 px-2  py-4 ">
        <h1 className=" text-base font-bold uppercase">Smart Route</h1>
        <div className="flex items-center gap-20">
          <p>
            Good {greetings}{' '}
            <span className="font-bold text-green-500">Feranmi,</span>
          </p>
          <div
            onClick={closeBar}
            className="cursor-pointer font-bold text-green-500"
          >
            <HiMenu />
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
