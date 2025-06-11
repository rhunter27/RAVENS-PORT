import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { GoCommentDiscussion, GoGoal } from "react-icons/go";
import { PiHandHeartDuotone } from "react-icons/pi";
import "../global.css";

const Sidebar = () => {
  const [mini, setMini] = useState(true);
  const iconSize = mini ? 36 : 24;

  return (
    <div
      className={`sidebar ${mini ? "collapsed" : ""}`}
      onMouseEnter={() => setMini(false)}
      onMouseLeave={() => setMini(true)}
      style={{
        width: mini ? "85px" : "250px",
        transition: "width 0.3s ease",
      }}
    >
      <nav className="sidebar-nav">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active-link" : ""}`
          }
        >
          <IoHome size={iconSize} />
          <span
            className="icon-text"
            style={{ display: mini ? "none" : "inline", marginLeft: "10px" }}
          >
            Home
          </span>
        </NavLink>

        <NavLink
          to="/feedback"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active-link" : ""}`
          }
        >
          <GoCommentDiscussion size={iconSize} />
          <span
            className="icon-text"
            style={{ display: mini ? "none" : "inline", marginLeft: "10px" }}
          >
            Feedback
          </span>
        </NavLink>

        <NavLink
          to="/special-thanks"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active-link" : ""}`
          }
        >
          <PiHandHeartDuotone size={iconSize} />
          <span
            className="icon-text"
            style={{ display: mini ? "none" : "inline", marginLeft: "10px" }}
          >
            Special Thanks
          </span>
        </NavLink>

        <NavLink
          to="/goals"
          className={({ isActive }) =>
            `sidebar-link ${isActive ? "active-link" : ""}`
          }
        >
          <GoGoal size={iconSize} />
          <span
            className="icon-text"
            style={{ display: mini ? "none" : "inline", marginLeft: "10px" }}
          >
            Goals
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
