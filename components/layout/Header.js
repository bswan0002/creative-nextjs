// Next/React
import Image from "next/image";
import { useState, useRef } from "react";
// Components
import HeaderButton from "./HeaderButton";
import NavItems from "./NavItems";
// Hooks
import useOnClickOutside from "../../hooks/useOnClickOutside";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  // initialize nav items invisible to fix weird bug where
  // nav items float across screen on initial page load
  const [navItemsVisible, setNavItemsVisible] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => setIsExpanded(false));

  return (
    <div ref={ref} className="z-10">
      <div className="fixed top-0 z-20 flex justify-center w-full h-auto py-2 bg-white bg-opacity-100 shadow backdrop-filter backdrop-blur-lg">
        <div className="flex flex-col w-full max-w-screen-md">
          <div className="flex flex-row justify-between">
            <div className="w-16 h-16 ml-3">Logo</div>
            <HeaderButton
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              setNavItemsVisible={setNavItemsVisible}
            />
          </div>
        </div>
      </div>
      <NavItems
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        navItemsVisible={navItemsVisible}
      />
    </div>
  );
}
