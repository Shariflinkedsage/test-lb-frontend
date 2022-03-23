import React, { useState, useEffect, useRef, useContext } from "react";
import _ from "lodash";
import cx from "classnames";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.jpg";
import { MdMenu, MdClose } from "react-icons/md";
import style from "./Navbar.module.scss";
import CustomDropdown from "../Navbar/Dropdown/Dropdown";
import Usercontext from "../../Contexts/UserContexts";
import {
  userMenuItems,
  partnerMenuItems,
} from "./Dropdown/ProfileItems";
import authService from "../../Services/authService";

const Navbar = () => {
  const appRef = useRef(null);
  const [navBackGround, setNavBackGround] = useState(
    "Nav_BackgroundTransparent"
  );
  appRef.current = navBackGround;
  const history = useHistory();
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [cardsDropDown, setCardsDropDown] = useState(false);
  const [loansDropDown, setLoansDropDown] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [loggedInUser, setloggedInUser] = useContext(Usercontext);
  const [menuItems, setMenuItems] = useState(userMenuItems);

  //console.log("in navbar", loggedInUser);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const onMouseEnter = (e, menuName) => {
    //console.log(e, menuName);
    if (menuName === "cards") setCardsDropDown(true);
    if (menuName === "profile") setProfileDropDown(true);
    if (menuName === "loans") setLoansDropDown(true);
  };
  const onsetDropdownFalse = (e, menuName) => {
    //console.log(e, menuName);
    if (menuName === "cards") setCardsDropDown(false);
    if (menuName === "profile") setProfileDropDown(false);
    if (menuName === "loans") setLoansDropDown(false);
  };
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setNavBackGround("Nav_BackgroundColor");
      } else {
        setNavBackGround("Nav_BackgroundTransparent");
      }
    }

    document.addEventListener("scroll", handleScroll);
    //console.log("loggedInUser.roles", loggedInUser.roles);
    if (!_.isEmpty(loggedInUser) && loggedInUser.roles) {
      //console.log("loggedInUser.roles", loggedInUser.roles);
      if (loggedInUser.roles.includes("admin")) {
        setMenuItems(partnerMenuItems);
        //console.log("loggedInUser.roles", loggedInUser.roles);
      }
    } else {
      setMenuItems(userMenuItems);
    }
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [loggedInUser]);
  /* if user is logged in then profile will be shown to users ,
other wise sign in option will only be seen */

  let signInOrSignOutOption = loggedInUser.phoneNumber ? (
    <ul className={cx("navbar-nav ms-auto me-5 mb-lg-0", style.Nav_Container)}>
      <li
        className={cx("nav-item dropdown", style.Nav_Container_Item)}
        onMouseEnter={(e) => onMouseEnter(e, "profile")}
        onMouseLeave={(e) => onsetDropdownFalse(e, "profile")}
        onClick={() => setDropdown(!profileDropDown)}
      >
        <Link
          className={cx(
            " nav-link m-auto mr-lg-3",
            style.Nav_Container_Item_Link
          )}
          to=""
          id="navbarDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ marginLeft: "45px !important", paddingLeft: "10" }}
        >
          Profile
        </Link>
        <span className={cx("sr-only", style.Nav_Item_Icon, style.Nav_pointer)}>
          <i className={style.Nav_Item_Icon_Arrow_Down}></i>
        </span>
        {/* <button
                  className={cx(style.Nav_Menu_Button, "navbar-toggler")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{ padding: "3px" }}
                >
                  <span class="dropdown-toggle" style={{ color: "white" }}></span>
                </button> */}
        {profileDropDown && (
          <CustomDropdown
            CardMenuItems={menuItems}
            onClick={onsetDropdownFalse}
            onNavCollapsed={setIsNavCollapsed}
          />
        )}
      </li>
      {/* <li>
        <Image
          // src={loggedInUser.email && loggedInUser.photoURL}
          src="https://icon-library.com/images/small-user-icon/small-user-icon-6.jpg"
          alt="hfeh"
          style={{ width: "50px", padding: "10px", color: "white" }}
          roundedCircle
        />
      </li> */}
    </ul>
  ) : (
    // <div> Sign Out</div>
    // <div> Sign In</div>
    <ul className={cx("navbar-nav ms-auto me-5 mb-lg-0", style.Nav_Container)}>
      <li
        className={cx("nav-item dropdown", style.Nav_Container_Item)}
        onMouseEnter={(e) => onMouseEnter(e, "profile")}
        onMouseLeave={(e) => onsetDropdownFalse(e, "profile")}
        onClick={() => setDropdown(!profileDropDown)}
      >
        <Link
          className={cx(
            "nav-item nav-link m-auto mr-lg-3",
            style.Nav_Container_Item_Link
          )}
          to="/signin"
        >
          Sign In
        </Link>
      </li>
    </ul>
  );

  return (
    <nav
      className={cx(
        "navbar navbar-expand-lg navbar-light",
        style.Nav,
        style[navBackGround]
      )}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} className={style.Nav_Logo} alt="Loaner Bazar Logo" />
          {/* <h1 style={{ fontWeight: "900" }}>KrazyIT</h1> */}
        </Link>
        <button
          className={cx(style.Nav_Menu_Button, "navbar-toggler")}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          {!isNavCollapsed ? (
            <MdMenu color="white" size="32" />
          ) : (
            <MdClose color="white" size="32" />
          )}
        </button>
        <div className={cx(" navbar-collapse")} id="navbarNavAltMarkup">
          <ul
            className={cx("navbar-nav me-auto  mb-lg-0", style.Nav_Container, {
              [style.Nav_Container_active]: isNavCollapsed,
            })}
          >
            {/* <li
              className={cx("nav-item dropdown", style.Nav_Container_Item)}
              onMouseEnter={(e) => {
                onMouseEnter(e, "loans");
              }}
              onMouseLeave={(e) => {
                onsetDropdownFalse(e, "loans");
              }}
              onClick={() => setDropdown(!loansDropDown)}
            >
              <Link
                className={cx(
                  " nav-link m-auto mr-lg-3",
                  style.Nav_Container_Item_Link
                )}
                to=""
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginLeft: "45px !important", paddingLeft: "10" }}
              >
                Loans
              </Link>
              <span
                className={cx(
                  "sr-only",
                  style.Nav_Item_Icon,
                  style.Nav_pointer
                )}
              >
                <i className={style.Nav_Item_Icon_Arrow_Down}></i>
              </span>
              <button
                className={cx(style.Nav_Menu_Button, "navbar-toggler")}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ padding: "3px" }}
              >
                <span class="dropdown-toggle" style={{ color: "white" }}></span>
              </button>
              {loansDropDown && (
                <CustomDropdown
                  CardMenuItems={LoanMenuItems}
                  onClick={onsetDropdownFalse}
                  onNavCollapsed={setIsNavCollapsed}
                />
              )}
            </li> */}

            {/* <li
              className={cx("nav-item dropdown", style.Nav_Container_Item)}
              onMouseEnter={(e) => {
                onMouseEnter(e, "cards");
              }}
              onMouseLeave={(e) => {
                onsetDropdownFalse(e, "cards");
              }}
              onClick={() => setDropdown(!cardsDropDown)}
            >
              <Link
                className={cx(
                  " nav-link m-auto mr-lg-3",
                  style.Nav_Container_Item_Link
                )}
                to=""
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginLeft: "45px !important", paddingLeft: "10" }}
              >
                CARDS
              </Link>
              <span
                className={cx(
                  "sr-only",
                  style.Nav_Item_Icon,
                  style.Nav_pointer
                )}
              >
                <i className={style.Nav_Item_Icon_Arrow_Down}></i>
              </span>
              <button
                className={cx(style.Nav_Menu_Button, "navbar-toggler")}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ padding: "3px" }}
              >
                <span class="dropdown-toggle" style={{ color: "white" }}></span>
              </button>
              {cardsDropDown && (
                <CustomDropdown
                  CardMenuItems={CardMenuItems}
                  onClick={onsetDropdownFalse}
                  onNavCollapsed={setIsNavCollapsed}
                />
              )}
            </li> */}
            <li className={cx("nav-item", style.Nav_Container_Item)}>
              <Link
                className={cx(
                  "nav-item nav-link m-auto mr-lg-3",
                  style.Nav_Container_Item_Link
                )}
                to="/personal-loan"
                onClick={handleNavCollapse}
              >
                Personal Loans
              </Link>

              {/* <span className={cx("sr-only", style.Nav_Item_Icon)}>
                <i className={style.Nav_Item_Icon_Arrow_Down}></i>
              </span> */}
            </li>
            <li className={cx("nav-item", style.Nav_Container_Item)}>
              <Link
                className={cx(
                  "nav-item nav-link m-auto mr-lg-3",
                  style.Nav_Container_Item_Link
                )}
                to="/home-loan"
                onClick={handleNavCollapse}
              >
                Home Loans
              </Link>

              {/* <span className={cx("sr-only", style.Nav_Item_Icon)}>
                <i className={style.Nav_Item_Icon_Arrow_Down}></i>
              </span> */}
            </li>
            <li className={cx("nav-item", style.Nav_Container_Item)}>
              <Link
                className={cx(
                  "nav-item nav-link m-auto mr-lg-3",
                  style.Nav_Container_Item_Link
                )}
                to="/auto-loan"
                onClick={handleNavCollapse}
              >
                Auto Loans
              </Link>

              {/* <span className={cx("sr-only", style.Nav_Item_Icon)}>
                <i className={style.Nav_Item_Icon_Arrow_Down}></i>
              </span> */}
            </li>
            <li className={cx("nav-item", style.Nav_Container_Item)}>
              <Link
                className={cx(
                  "nav-item nav-link m-auto mr-lg-3",
                  style.Nav_Container_Item_Link
                )}
                to="/credit-card"
                onClick={handleNavCollapse}
              >
                Credit Cards
              </Link>

              {/* <span className={cx("sr-only", style.Nav_Item_Icon)}>
                <i className={style.Nav_Item_Icon_Arrow_Down}></i>
              </span> */}
            </li>
            {/* <li className={cx("nav-item", style.Nav_Container_Item)}>
              <Link
                className={cx(
                  "nav-item nav-link m-auto mr-lg-3",
                  style.Nav_Container_Item_Link
                )}
                to="/Sme_Finance"
                onClick={handleNavCollapse}
              >
                SME-FINANCE{" "}
              </Link>

              <span className={cx("sr-only", style.Nav_Item_Icon)}>
                <i className={style.Nav_Item_Icon_Arrow_Down}></i>
              </span>
            </li> */}
            {/* <li className={cx("nav-item", style.Nav_Credit_Score_Gif)}>
              <img src={creditRatingGif} alt="credit_rating " />
            </li> */}
            {loggedInUser.phoneNumber ? (
              <div>
                <li
                  className={cx(
                    "nav-item",
                    style.Nav_Container_Item,
                    style.Nav_hidden
                  )}
                >
                  <Link
                    className={cx(
                      "nav-item nav-link m-auto mr-lg-3",
                      style.Nav_Container_Item_Link
                    )}
                    to={
                      loggedInUser &&
                        loggedInUser.roles &&
                        loggedInUser.roles.includes("user")
                        ? "/user-dashboard"
                        : "/partner-dashboard"
                    }
                    onClick={handleNavCollapse}
                  >
                    DashBoard
                  </Link>
                  <span className={cx("sr-only", style.Nav_Item_Icon)}>
                    <i className={style.Nav_Item_Icon_Arrow_Down}></i>
                  </span>
                </li>
                <li
                  className={cx(
                    "nav-item",
                    style.Nav_Container_Item,
                    style.Nav_hidden
                  )}
                >
                  <Link
                    className={cx(
                      "nav-item nav-link m-auto mr-lg-3",
                      style.Nav_Container_Item_Link
                    )}
                    onClick={signOut}
                  >
                    Sign Out
                  </Link>
                  <span className={cx("sr-only", style.Nav_Item_Icon)}>
                    <i className={style.Nav_Item_Icon_Arrow_Down}></i>
                  </span>
                </li>
              </div>
            ) : (
              <li
                className={cx(
                  "nav-item",
                  style.Nav_Container_Item,
                  style.Nav_hidden
                )}
              >
                <Link
                  className={cx(
                    "nav-item nav-link m-auto mr-lg-3",
                    style.Nav_Container_Item_Link
                  )}
                  to="/signin"
                  onClick={handleNavCollapse}
                >
                  Sign In
                </Link>
                <span className={cx("sr-only", style.Nav_Item_Icon)}>
                  <i className={style.Nav_Item_Icon_Arrow_Down}></i>
                </span>
              </li>
            )}
          </ul>
          {signInOrSignOutOption}
        </div>
        {/* this will be added on future */}
        {/* <ul className="navbar-nav ml-auto">
              <span className={cx("sr-only", style.Nav_Item_Icon)}>
                <i className={style.arrow_down}></i>
              </span>
              <Link
                className="nav-item nav-link active m-auto mr-lg-3 text-white"
                to="/customize-image"
              >
                Track Application
              </Link>
            </ul> */}
      </div>
    </nav>
  );

  // function for loging out
  function signOut() {
    //console.log("clicked signout");
    history.replace("/signin");
    authService.logout();
    handleNavCollapse();
    setloggedInUser({});
  }
};

export default Navbar;
