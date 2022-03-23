import React, { useContext } from "react";
import {  Link, useHistory } from "react-router-dom";
import cx from "classnames";
import style from "./Dropdown.module.scss";
import authService from "../../../Services/authService";
import userContext from "../../../Contexts/UserContexts";
function Dropdown({ CardMenuItems, onClick, onNavCollapsed }) {
  const history = useHistory();
  const [loggedInUser, setloggedInUser] = useContext(userContext);

  return (
    <div className={style.Container}>
      <ul className="">
        {CardMenuItems.map((item, index) => (
          //   <li className="dropdown-item">
          <Link
            to={item && item.path}
            // activeClassName={style.Container_selected}
            className={cx(style.Container_nav_link)}
            onClick={(e) => {
              onClick(false);
              onNavCollapsed(false);
              signOut(e.target);
            }}
            key={index}
          >
            <li className={cx(style.Container_nav_link_list)} key={index}>
              {item && item.name}
            </li>
          </Link>

          //   </li>
        ))}
      </ul>
    </div>
  );
  function signOut({ innerHTML }) {
    //console.log("clicked item", innerHTML);
    if (innerHTML === "Sign Out") {
      authService.logout();
      setloggedInUser({});
      history.push("/signin");
    }
  }
}

export default Dropdown;
