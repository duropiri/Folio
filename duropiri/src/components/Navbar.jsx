import React from "react";
import Logo from "@/components/Logo";
import InfoPane from "@/components/InfoPane";
import Menu from "@/components/Menu";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="nav-container flex flex-row min-h-[100px] items-center justify-between bg-light-background dark:bg-dark-background">
        <Logo />
        {/* Hide InfoPane on xl screens and larger */}
        <div className="hidden xl:block">
          <InfoPane all={true} dropdown={false}/>
        </div>
        {/* Show Menu on xl screens and larger, hide on smaller screens */}
        <div className="xl:hidden">
          <Menu />
        </div>
      </div>
      <div className="bg-dark-primary h-[2px] w-full"></div>
    </div>
  );
};

export default Navbar;
