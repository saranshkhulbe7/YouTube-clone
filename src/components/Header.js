import React, { useState } from "react";
import "../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
        <div className="built">
          {" "}
          Built with ❤️ by <span className="built__name">Saransh Khulbe</span>
        </div>
      </div>

      <div className="header__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt=""
          src="https://media-exp1.licdn.com/dms/image/C4E03AQEeNb-8sShnmw/profile-displayphoto-shrink_200_200/0/1629444992623?e=2147483647&v=beta&t=ww4p5ukag4n1CnEnujlSMv_CsHi0Xfu6AN5299tJdXc"
        />
      </div>
    </div>
  );
}

export default Header;
