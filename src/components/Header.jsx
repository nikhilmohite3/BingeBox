import React from "react";
import { APP_LOGO_URL } from "../utils/imgPaths";

const Header = () => {
    return (
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <img
          className="w-44"
          src={APP_LOGO_URL}
          alt="logo"
        />
      </div>
    );
  };
  export default Header;