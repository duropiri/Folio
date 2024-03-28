import React from "react";
import Logo from "@/components/Logo";
import InfoPane from "@/components/InfoPane";
import Menu from "@/components/Menu";
import GsapMagnetic from "./GsapMagnetic";

const Navbar = () => {
  return (
    <div className="flex flex-col px-[25px] lg:px-[50px] z-50 navigationbar">
      <div className="nav-container justify-between">
        <Logo />
        {/* Hide InfoPane on xl screens and larger */}
        <div className="hidden xl:block">
          <InfoPane all={true} dropdown={false} />
        </div>
        {/* Show Menu on xl screens and larger, hide on smaller screens */}
        <div className="xl:hidden px-[-25px] lg:px-[-50px] z-50">
          <Menu />
        </div>
      </div>

      <div className="bg-dark-primary h-[2px] w-full"></div>
    </div>
  );
};

export default Navbar;
