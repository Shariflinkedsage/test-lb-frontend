import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import style from "./Footer.module.scss";
import { SiFacebook, SiLinkedin } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className={style.Container}>
      <ul
        className={cx(
          "  d-flex flex-column  flex-sm-row align-items-center justify-content-center",
          style.Container_Learn_More
        )}
      >
        <li>LEARN MORE :</li>
        <li onclick="fireGAforGateway('blogs','Loans')">
          {" "}
          {/* <a
              target="_blank"
              href="https://blog.bankbazaar.com/category/loans/"
              title="Loans blog"
            > */}
          Loans
          {/* </a> */}
        </li>
        <li onclick="fireGAforGateway('blogs','Credit Cards')">
          {" "}
          {/* <a
              target="_blank"
              href="https://blog.bankbazaar.com/category/credit-cards/"
              title="Credit Cards blog"
            > */}
          <Link to="/credit-card">Credit Cards</Link>
          {/* </a> */}
        </li>
        <li onclick="fireGAforGateway('blogs','Investments')">
          {" "}
          {/* <a
              target="_blank"
              href="https://blog.bankbazaar.com/category/investment/"
              title="Investments blog"
            > */}
          Investments
          {/* </a> */}
        </li>
        <li onclick="fireGAforGateway('blogs','Money Management')">
          {" "}
          {/* <a
              target="_blank"
              href="https://blog.bankbazaar.com/category/money-management/"
              title="Money Management blog"
            > */}
          Money Management
          {/* </a> */}
        </li>
      </ul>
      <div className="container">
        <nav className={cx("navbar clearfix ", style.Container_Navigation)}>
          <ul
            className={cx(
              "col-12 col-sm-4 col-lg-2 bb-navbar-nav  text-center text-sm-start",
              style.Container_Navigation_Nav
            )}
          >
            <div
              className={cx(" clearfix ", style.Container_Navigation_Nav_Title)}
            >
              Home Loan
            </div>
            <Link to="/loan/details/6225ded6b834dde8fb810013">
              The City Bank Home Loan
            </Link>
            <li href="/sbi-home-loan.html">BRAC Bank Home Loan</li>
            <li href="/hdfc-home-loan.html">EBL Home Loan</li>
            <li href="/axis-home-loan.html">DBBL Home Loan</li>
            <li href="/axis-home-loan.html">MTBL Home Loan</li>
          </ul>
          <ul
            className={cx(
              "col-12 col-sm-4 col-lg-2 bb-navbar-nav  text-center text-sm-start",
              style.Container_Navigation_Nav
            )}
          >
            <div
              className={cx(" clearfix ", style.Container_Navigation_Nav_Title)}
            >
              Personal Loan
            </div>
            <Link to="/loan/details/620145f7e346b86d2889a309">
              SCB Personal Loan
            </Link>
            <li href="/sbi-home-loan.html">BRAC Personal Loan</li>
            <Link to="/loan/details/6225ded6b834dde8fb81000d">
              The City Bank Personal Loan
            </Link>
            <li href="/hdfc-home-loan.html">EBL Personal Loan</li>
            <li href="/axis-home-loan.html">DBBL Personal Loan</li>
            <li href="/axis-home-loan.html">MTBL Personal Loan</li>
          </ul>
          <ul
            className={cx(
              "col-12 col-sm-4 col-lg-2 bb-navbar-nav  text-center text-sm-start",
              style.Container_Navigation_Nav
            )}
          >
            <div
              className={cx(" clearfix ", style.Container_Navigation_Nav_Title)}
            >
              Car Loan
            </div>
            <Link to="/loan/details/6225ded6b834dde8fb810010">
              The City Bank Car Loan
            </Link>
            <li href="/sbi-home-loan.html">BRAC Bank Car Loan</li>
            <li href="/hdfc-home-loan.html">EBL Car Loan</li>
            <li href="/axis-home-loan.html">DBBL Car Loan</li>
            <li href="/axis-home-loan.html">MTBL Car Loan</li>
          </ul>
          <ul
            className={cx(
              "col-12 col-sm-4 col-lg-2 bb-navbar-nav  text-center text-sm-start",
              style.Container_Navigation_Nav
            )}
          >
            <div
              className={cx(" clearfix ", style.Container_Navigation_Nav_Title)}
            >
              Credit Card
            </div>
            <Link to={{ pathname: "/credit-card", search: "bankName=scb" }}>
              SCB Credit Card{" "}
            </Link>
            <li href="/sbi-home-loan.html">MTBL Credit Card </li>
            <Link to={{ pathname: "/credit-card", search: "bankName=city" }}>
              The City Credit Card{" "}
            </Link>
            <li href="/axis-home-loan.html">BRAC Bank Credit Card </li>
            <li href="/axis-home-loan.html">DBBL Credit Card </li>
          </ul>
          <ul
            className={cx(
              "col-12 col-sm-4 col-lg-2 bb-navbar-nav  text-center text-sm-start",
              style.Container_Navigation_Nav
            )}
          >
            <div
              className={cx(" clearfix ", style.Container_Navigation_Nav_Title)}
            >
              CASA & FD
            </div>
            <li href="/icici-home-loan.html">MTBL Fixed Deposit </li>
            <li href="/sbi-home-loan.html">MTBL Current Account </li>
            <li href="/hdfc-home-loan.html">MTBL Savings Account </li>
          </ul>
          <ul
            className={cx(
              "col-12 col-sm-4 col-lg-2 bb-navbar-nav  text-center text-sm-start",
              style.Container_Navigation_Nav
            )}
          >
            <div
              className={cx(" clearfix ", style.Container_Navigation_Nav_Title)}
            >
              Insurance
            </div>
            <li href="/icici-home-loan.html">General Insurance</li>
            <li href="/sbi-home-loan.html">Life Insurance</li>
            <li href="/hdfc-home-loan.html">Motor Insurance</li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col">
            <div className="row g-0 ">
              {/* <div className="col text-center">
                  <h4 className="footer-title">Mobile Apps</h4>
                  <a href="#" title="Apple Store" target="_blank">
                    <span className="footer-sprite bbicons-ios"></span>
                  </a>
                </div> */}
              <div
                className={cx(
                  "col-12 col-md-4 text-center text-md-start",
                  style.Container_Contact__Us
                )}
              >
                {" "}
                <span
                  className={cx(
                    "text-white",
                    style.Container_Contact__Us_Title
                  )}
                >
                  Contact Us
                </span>
                <p className="text-center text-md-start">
                  House-5/A,A2, First floor,
                  <br />
                  Road-136-137, Gulshan-1.
                  <br />
                  Mobile: +8801729058150
                  <br />
                  Email: info@loanerbazar.com
                </p>
              </div>
              <div className="col-12 col-md-4 text-center text-md-start">
                <span
                  className={cx(
                    "footer-title text-white mt-1",
                    style.Container_Contact__Us_Title
                  )}
                >
                  Follow Us
                </span>
                <div className="mt-1">
                  <a href="https://www.facebook.com/Loaner-Bazar-107159201458947/">
                    <SiFacebook color="white" size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/loaner-bazar/?viewAsMember=true"
                    className="m-2"
                  >
                    <TiSocialLinkedin
                      color="white"
                      size={20}
                      style={{
                        borderRadius: "50%",
                        color: "#34495e",
                        backgroundColor: "white",
                      }}
                      className={style.Container_linkedIn_logo}
                    />
                  </a>
                </div>
              </div>
              {/* <div className="col  text-center">
                  <h4 className="footer-title text-white">Contact Us</h4>
                </div> */}
              {/* <div className="col text-center">
                  <h4 className="footer-title">Follow Us</h4>
                  <a
                    target="_blank"
                    href="https://twitter.com/"
                    title="Loaner bazar Twitter"
                  >
                    <span className="footer-sprite bbicons-ft-tt"></span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company"
                    title="Loaner bazar Linkedin"
                  >
                    <span className="footer-sprite bbicons-ft-in"></span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/"
                    title="Loaner bazar Facebook"
                  >
                    <span className="footer-sprite bbicons-ft-fb"></span>
                  </a>
                  <a
                    target="_blank"
                    href="https://instagram.com/"
                    title="Loaner bazar Instagram"
                  >
                    <span className="footer-sprite bbicons-ft-instg"></span>
                  </a>
                </div> */}
            </div>
          </div>
          {/* <div className="col-md-4"></div> */}
        </div>
      </div>
      <div
        className={cx(
          "d-flex flex-column  flex-md-row justify-content-center align-items-center mt-3 ",
          style.Container_Bottom_Navigattion
        )}
      >
        <li href="#" target="_blank" title="About">
          About
        </li>
        <li href="#" target="_blank" title="Careers">
          Careers
        </li>
        <li href="#" target="_blank" title="Contact Us">
          Contact Us
        </li>
        <li href="#" target="_blank" title="Blog">
          Blog
        </li>
        <li href="#" target="_blank" title="Terms">
          Terms
        </li>
        <li href="#" target="_blank" title="Notice to customer">
          Notice to customer
        </li>
      </div>
      <div
        className={cx(
          "d-flex flex-column  flex-md-row justify-content-center align-items-center",
          style.Container_Copyright
        )}
      >
        <p className={cx("font-sm  mt-3")}>
          Copyright&nbsp;© 2021 &nbsp; loanerbazar.com&nbsp;&nbsp;
          <span className={cx(style.Container_Copyright_policy)}>
            <Link to="/policy">Privacy Policy</Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
