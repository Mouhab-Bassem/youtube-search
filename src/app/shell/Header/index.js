import React from "react";
import SearchInput from "./componentes/SearchInput";
import YoutubeLogo from "./componentes/YoutubeLogo";

const Header = () => {
  return (
    <>
      <div className="header-contain">
        <div className="header-wrap">
          <div className="header-logo">
            <YoutubeLogo />
          </div>
          <div className="header-search">
            <SearchInput />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
