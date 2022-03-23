import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import creditScore from "../../images/credit-score-free.gif";
import creditCard from "../../images/credit-card.jpg";
import freeScoreCredit from "../../images/credit-score-v4.jpg";
import financialTolls from "../../images/finance-tools-v1.jpg";
import personal_loan from "../../images/personal-loan.jpg";
import homeLoan from "../../images/home-loan.jpg";
import { MdSync, MdCreditCard } from "react-icons/md";
import { BsStopwatch, BsFillArchiveFill } from "react-icons/bs";
import { FaGift, FaCalculator, FaHome, FaCar } from "react-icons/fa";
import { IoCalculatorOutline } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { AiFillCaretRight } from "react-icons/ai";
import credit_rating from "../../images/credit_rating.png";
import whyLoanerBazarImage from "../../images/LB-banner.png";
import personal_finance from "../../images/personal_finance1.png";

export default function Home() {
  return (
    <div className={cx("container-fluid", style.Container)}>
      <div
        id="phone_view_none"
        className={cx("row g-0", style.Container_Bgimg)}
      >
        <div className="col-lg-6"></div>
        <div className="col-12 col-lg-6">
          <div className="">
            <div>
              <p
                style={{
                  textAlign: "center",
                  // paddingTop: 20,
                  // marginTop: 70,
                  fontWeight: 1700,
                  fontSize: 25,
                }}
              >
                A credit score of 750+ may qualify you for <br /> fantastic
                personal loan and credit card !
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: 10,
                fontWeight: 1700,
                fontSize: 25,
              }}
            >
              <img src={creditScore} className={style.Container_creditScore} />
            </div>
            {/* <div
              style={{
                textAlign: "center",
                padding: 10,
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              <img
                src={laurel}
                alt="Award"
                title="Award"
                className={style.Container_Laurel_Icon}
              />
              <strong>FICO enable</strong> lenders worldwide to safely expand
              financial inclusion.
            </div> */}
          </div>
        </div>
      </div>
      <div id="phone_view_none" className={style.Container_Bottom_border}>
        <div style={{ position: "relative", minHeight: "60px !important" }}>
          <ul className={cx(style.Container_Bottom_Border_List)}>
            <li>
              <span className={style.Container_Bottom_Border_Icon}>
                <MdSync size={32} />
              </span>
              <span>2+ Banks</span>
            </li>
            <li>
              <span className={style.Container_Bottom_Border_Icon}>
                <BsStopwatch size={30} />
              </span>
              <span>Contractless KYC & Paperless Approval</span>
            </li>
            <li>
              <span className={style.Container_Bottom_Border_Icon}>
                <BsFillArchiveFill size={28} />
              </span>
              {/* <span>50000+ Happy Customers</span> */}
              <span>Product: 15+ products</span>
            </li>
            <li>
              <span className={style.Container_Bottom_Border_Icon}>
                <FaGift size={30} />
              </span>
              <span>Exclusive Offers</span>
            </li>
          </ul>
        </div>
      </div>
      {/* feature icon section */}
      <div className="container-fluid link-cards">
        <div className="row p-3">
        <Link
            to="/credit-card"
            className="col text-center p-5"
            style={{
              borderRight: "1px solid #eee",
              borderBottom: "1px solid #eee",
              margin: "1px",
              cursor: "pointer",
              textDecoration: "none",
              color: "#0b4376",
            }}
          >
            <div className="col text-center mb-2 not-hover">
              <MdCreditCard size={40} color={"rgb(11, 67, 118)"} />
            </div>
            <div className="col text-center mb-2 on-hover">
              <MdCreditCard size={40} color={"rgb(255, 255, 255)"} />
            </div>
            Credit Card
          </Link>
          <Link
            to="/personal-loan"
            className="col text-center p-5"
            style={{
              borderRight: "1px solid #eee",
              borderBottom: "1px solid #eee",
              margin: "1px",
              cursor: "pointer",
              textDecoration: "none",
              color: "#0b4376",
            }}
          >
            <div className="col text-center mb-2 not-hover">
              <GiMoneyStack size={40} color={"rgb(11, 67, 118)"} />
            </div>
            <div className="col text-center mb-2 on-hover">
              <GiMoneyStack size={40} color={"rgb(255, 255, 255)"} />
            </div>
            Personal Loan
          </Link>
          
          <Link
            to="/"
            className="col text-center p-5"
            style={{
              borderRight: "1px solid #eee",
              borderBottom: "1px solid #eee",
              margin: "1px",
              cursor: "pointer",
              textDecoration: "none",
              color: "#0b4376",
            }}
          >
            <div className="col text-center mb-2 not-hover">
              <FaHome size={40} color={"rgb(11, 67, 118)"} />
            </div>
            <div className="col text-center mb-2 on-hover">
              <FaHome size={40} color={"rgb(255, 255, 255)"} />
            </div>
            Home Loan
            <span className="comming-soon">Comming soon!!!</span>
          </Link>
          <Link
            to="/"
            className="col text-center p-5"
            style={{
              borderRight: "1px solid #eee",
              borderBottom: "1px solid #eee",
              margin: "1px",
              cursor: "pointer",
              textDecoration: "none",
              color: "#0b4376",
            }}
          >
            <div className="col text-center mb-2 not-hover">
              <FaCar size={40} color={"rgb(11, 67, 118)"} />
            </div>
            <div className="col text-center mb-2 on-hover">
              <FaCar size={40} color={"rgb(255, 255, 255)"} />
            </div>
            Car Loan
            <span className="comming-soon">Comming soon!!!</span>
          </Link>
          <Link
            to="/"
            className="col text-center p-5"
            style={{
              borderRight: "1px solid #eee",
              borderBottom: "1px solid #eee",
              margin: "1px",
              cursor: "pointer",
              textDecoration: "none",
              color: "#0b4376",
            }}
          >
            <div className="col text-center mb-2 not-hover">
              <IoCalculatorOutline size={40} color={"rgb(11, 67, 118)"} />
            </div>
            <div className="col text-center mb-2 on-hover">
              <IoCalculatorOutline size={40} color={"rgb(255, 255, 255)"} />
            </div>
            DBR Calculator
            <span className="comming-soon">Comming soon!!!</span>
          </Link>

          <Link
            to="/"
            className="col text-center p-5"
            style={{
              borderRight: "1px solid #eee",
              borderBottom: "1px solid #eee",
              margin: "1px",
              cursor: "pointer",
              textDecoration: "none",
              color: "#0b4376",
            }}
          >
            <div className="col text-center mb-2 not-hover">
              <FaCalculator size={40} color={"rgb(11, 67, 118)"} />
            </div>
            <div className="col text-center mb-2 on-hover">
              <FaCalculator size={40} color={"rgb(255, 255, 255)"} />
            </div>
            Credit Score
            <span className="comming-soon">Comming soon!!!</span>
          </Link>
          
        </div>
      </div>

      {/* credit score section */}
      <div
        style={{
          backgroundColor: "rgb(238, 238, 238)",
          paddingTop: "30px",
          // paddingBottom: "10px",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <h2> Get your most recent credit score for free.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center fw-light fs-5 fs-md-6">
              Credit Score that puts you in command.
            </div>
          </div>
        </div>
        <div className="container-fluid mt-5 mb-5">
          <div className="row g-0">
            <div className="col-lg g-0 d-none d-md-block"></div>
            <div className="col-12 col-lg-8">
              <div className="row">
                <div className="col-12 col-lg-5 text-center">
                  <img
                    // src={latest_credit2}
                    src={credit_rating}
                    // src="https://static.bankbazaar.com/images/gateway/bb-gateway-cs-v3.png"
                    // width="450"
                    // height="360"
                    className={style.Container_loanerbazar}
                    alt="smart phone image"
                  />
                </div>
                <div
                  className={cx(
                    "col-12 col-lg-7 align-items-center",
                    style.Container_loanerbazar_text
                  )}
                >
                  <div>
                    <div className="row justify-content-center">
                      <div className="col-1 d-flex mt-1 justify-content-center">
                        {/* <img
                          src="https://static.bankbazaar.com/images/gateway/bb-gateway-feature-icon-v1.png"
                          style={{ width: 22, height: 22 }}
                        /> */}
                        <AiFillCaretRight size={20} />
                      </div>
                      <div className="col-10 p-0">
                        Boost your chances of getting your application approved.
                        A credit score of 750 or higher increases your chances
                        of acquiring a loan or credit card.
                      </div>
                    </div>
                    <div className="row mt-2 justify-content-center">
                      <div className="col-1 d-flex mt-1 justify-content-center">
                        {/* <img
                          src="https://static.bankbazaar.com/images/gateway/bb-gateway-feature-icon-v1.png"
                          style={{ width: 22, height: 22 }}
                        /> */}
                        <AiFillCaretRight size={20} />
                      </div>
                      <div className="col-10 p-0">
                        Offers that are better You'll be eligible for more
                        offers if you have a higher score.
                      </div>
                    </div>
                    <div className="row mt-3 justify-content-center">
                      <div className="col-1 d-flex mt-1 justify-content-center">
                        {/* <img
                          src="https://static.bankbazaar.com/images/gateway/bb-gateway-feature-icon-v1.png"
                          style={{ width: 22, height: 22 }}
                        /> */}
                        <AiFillCaretRight size={20} />
                      </div>
                      <div className="col-10 p-0">
                        Take charge of your financial situation. Understanding
                        your score will assist you in taking the appropriate
                        next steps.
                      </div>
                    </div>
                    <div
                      className={cx(
                        "row justify-content-center justify-content-lg-start",
                        style.Container_free_credit_container
                      )}
                    >
                      <div
                        className={cx(
                          "ml-2 ",
                          style.Container_free_credit_container_banner
                        )}
                      >
                        Get your FREE Credit Score
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg g-0 d-none d-md-block"></div>
          </div>
        </div>
      </div>
      {/* trending product section */}
      <div className="container-fluid trending-product">
        <div className="row">
          <div className="col-12 text-center display-6">
            <h2>Trending Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center fs-5 fs-md-6 fw-light ">
            <p className="text-center">
              Our picks for the hottest offers and coolest deals all in one
              place
            </p>
          </div>
        </div>
        <div className="container-fluid mt-5 mb-5 ">
          <div className="row g-0">
            <div className="col g-0 d-none d-md-block"></div>
            <div className="col-12 col-lg-8">
              <div className="row justify-content-center">
                <div className={cx("col-12 col-sm-6 col-md-4 p-3")}>
                  <Link to="/credit-card">
                    <div className={style.Container_cardContainer}>
                      <img
                        src={creditCard}
                        alt="credit card"
                        width="100%"
                        className={
                          style.Container_cardContainer_creditCardImage
                        }
                      />
                    </div>

                    <div className="row mt-2">
                      <div
                        className="col-12"
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "rgb(11, 67, 118)",
                        }}
                      >
                        Credit Cards
                      </div>
                    </div>
                    <div className="row mt-1 text-dark">
                      <div
                        className={cx("col-12 fw-light")}
                        style={{ fontSize: 14 }}
                      >
                        Credit Cards The best of lifetime-free, cashback cards &
                        more with contactless KYC process.
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={cx("col-12 col-sm-6 col-md-4 p-3")}>
                  <Link to="/personal-loan">
                    <div className={style.Container_cardContainer}>
                      <img
                        src={personal_loan}
                        alt="credit card"
                        width="100%"
                        className={
                          style.Container_cardContainer_creditCardImage
                        }
                      />
                    </div>

                    <div className="row mt-2">
                      <div
                        className="col-12"
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "rgb(11, 67, 118)",
                        }}
                      >
                        Quick Personal Loans
                      </div>
                    </div>
                    <div className="row mt-1 text-dark">
                      <div
                        className={cx("col-12 fw-light")}
                        style={{ fontSize: 14 }}
                      >
                        Instant approval and paperless process
                      </div>
                    </div>
                  </Link>
                </div>
                <div className={cx("col-12 col-sm-6 col-md-4 p-3")}>
                  <div
                    id="card-container"
                    className={style.Container_cardContainer}
                  >
                    <img
                      src={freeScoreCredit}
                      alt="credit card"
                      width="100%"
                      className={style.Container_cardContainer_creditCardImage}
                    />

                    <div className="cardOverLay">Comming Soon</div>
                  </div>

                  <div className="row mt-2">
                    <div
                      className="col-12"
                      style={{
                        fontWeight: 500,
                        fontSize: 15,
                        color: "rgb(11, 67, 118)",
                      }}
                    >
                      Free Credit Score
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div
                      className={cx("col-12 fw-light")}
                      style={{ fontSize: 14 }}
                    >
                      Get your free score in less than 3 minutes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className={cx("col-12 col-sm-6 col-md-4 p-3")}>
                  <div
                    id="card-container"
                    className={style.Container_cardContainer}
                  >
                    <img
                      src={financialTolls}
                      alt="credit card"
                      width="100%"
                      className={style.Container_cardContainer_creditCardImage}
                    />
                    <div className="cardOverLay">Comming Soon</div>
                  </div>

                  <div className="row mt-2">
                    <div
                      className="col-12"
                      style={{
                        fontWeight: 500,
                        fontSize: 15,
                        color: "rgb(11, 67, 118)",
                      }}
                    >
                      Finance Calculators
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div
                      className={cx("col-12 fw-light")}
                      style={{ fontSize: 14 }}
                    >
                      Smart resources to help you reach your financial goals
                    </div>
                  </div>
                </div>
                <div className={cx("col-12 col-sm-6 col-md-4 p-3")}>
                  <div
                    id="card-container"
                    className={style.Container_cardContainer}
                  >
                    <img
                      src={personal_finance}
                      alt="credit card"
                      width="100%"
                      className={style.Container_cardContainer_creditCardImage}
                    />
                    <div className="cardOverLay">Comming Soon</div>
                  </div>

                  <div className="row mt-2">
                    <div
                      className="col-12"
                      style={{
                        fontWeight: 500,
                        fontSize: 15,
                        color: "rgb(11, 67, 118)",
                      }}
                    >
                      Personal Finance
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div
                      className={cx("col-12 fw-light")}
                      style={{ fontSize: 14 }}
                    >
                      Your pocket-sized personal money manager.
                    </div>
                  </div>
                </div>
                <div className={cx("col-12 col-sm-6 col-md-4 p-3")}>
                  <div
                    id="card-container"
                    className={style.Container_cardContainer}
                  >
                    <img
                      src={homeLoan}
                      alt="credit card"
                      width="100%"
                      className={style.Container_cardContainer_creditCardImage}
                    />
                    <div className="cardOverLay">Comming Soon</div>
                  </div>

                  <div className="row mt-2">
                    <div
                      className="col-12"
                      style={{
                        fontWeight: 500,
                        fontSize: 15,
                        color: "rgb(11, 67, 118)",
                      }}
                    >
                      Home Loans
                    </div>
                  </div>
                  <div className="row mt-1">
                    <div
                      className={cx("col-12 fw-light")}
                      style={{ fontSize: 14 }}
                    >
                      Low-interest Home Loans from popular banks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col g-0 d-none d-md-block"></div>
          </div>
        </div>
      </div>

      {/* why loanerbazar section*/}
      <div
        className={
          ("container-fluid", style.Container_why_loaner_bazar_background)
        }
      >
        <div
          className={cx("row g-0", style.Container_why_loaner_bazar)}
          // style={{ height: "60vh" }}
        >
          {/* <div className="row g-0 justify-content-center">
            <div className="col-12">
              <h2 className="text-center text-white">Why LoanerBazaar</h2>
              <p className="text-center text-white d-none d-lg-block">
                There's more than one reason to sign up with confidence
              </p>
            </div>
          </div> */}
          <img
            src={whyLoanerBazarImage}
            // style={{ width: "100%" }}
            className={style.Container_why_loaner_bazar_image}
          />
        </div>
        <div
          class="bb-investors text-center pt-3 pb-3"
          style={{
            backgroundColor: "rgba(176,226,255,1)",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
            // position: "absolute",
          }}
        >
          FUNDED BY :
          <span className="sprite-bb-patners bbicons-amazon">
            <div className="logo">
              <img src="/linkedsage.png" width="160" height="50" />
            </div>{" "}
          </span>
          PARTNERS:
          <span className="sprite-bb-patners bbicons-experian">
            <div className="logo">
              <img src="/log-Standard-Chartered.png" width="160" height="80" />
            </div>
          </span>
          <span className="sprite-bb-patners bbicons-walden">
            <div className="logo">
              <img src="/logo-bdjobs.png" width="150" height="80" />
            </div>
          </span>
          <span className="sprite-bb-patners bbicons-sequoia-capital">
            <div className="logo">
              <img src="/logo-ajkedeal.png" width="150" height="80" />
            </div>
          </span>
          <span className="sprite-bb-patners bbicons-eight-roads">
            <div className="logo">
              <img src="/logo-nationalFL.png" width="230" height="60" />
            </div>
          </span>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
