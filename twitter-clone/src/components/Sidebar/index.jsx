import React from "react";
import home from "../../assets/home.png";
import bell from "../../assets/bell.png";
import person from "../../assets/person.png";
import message from "../../assets/message.png";
import twitter from "../../assets/twitter.png";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../constants/routes";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container-icons">
        <img src={twitter} alt="" />
      </div>
      <NavLink
        to={routes.HOME}
        className="sidebarOption"
        activeClassName="active"
      >
        <div className="container-icons">
          <img src={home} alt="" />
        </div>
        <h2>Home</h2>
      </NavLink>
      <NavLink
        to={routes.NOTIFICATION}
        className="sidebarOption"
        activeClassName="active"
      >
        <div className="container-icons">
          <img src={bell} alt="" />
        </div>
        <h2>Notifications</h2>
      </NavLink>
      <NavLink
        to={routes.CHAT}
        className="sidebarOption"
        activeClassName="active"
      >
        <div className="container-icons">
          <img src={message} alt="" />
        </div>
        <h2>Messages</h2>
      </NavLink>
      <NavLink
        to={routes.PROFILE}
        className="sidebarOption"
        activeClassName="active"
      >
        <div className="container-icons">
          <img src={person} alt="" />
        </div>
        <h2>Profile</h2>
      </NavLink>
      <Link to={routes.HOME}>
        <button className="sidebar__tweet">
          <h2>Tweet</h2>
        </button>
      </Link>
    </div>
  );
};
