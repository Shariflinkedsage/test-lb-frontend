import React, { useState, useEffect } from "react";
import styled from "styled-components";
import device from "../../Utils/breakpoints_devices";
import style from "./CardDetails.module.scss";
import cx from "classnames";
import Preloader from "../../Components/Common/PreLoader";

// import Accordion from "../../Components/CardDetails/Accordion/Accordion";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link, useLocation, useParams } from "react-router-dom";
import cardService from "../../Services/cardService";
import cardDetailsBl from "./cardDetailsBl";
import { useWindowWidth, useQuery } from "../../Services/hooks";

const Container = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;
  margintop: 90px;
  // @media ${device.laptop} {
  //   max-width: 800px;
  // }
  @media ${device.desktop} {
    max-width: 1400px;
  }

  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background: backgroundImage;
  `}
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function LoanDetails() {
  const location = useLocation();
  const { id } = useParams();
  console.log("LOANNNNNNNNNNNNN", id);
  const [cardDetailsInfo, setCardDetailsInfo] = useState(null);
  const [companyReference, setCompanyReference] = useState();
  const screenWidth = useWindowWidth();
  const { reference } = useQuery();
  const [preloaderVar, setPreloaderVar] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    window.scroll(0, 0);
    setPreloaderVar(true);
    const cardDetailsInfo = await cardService.getLoanDetailsById(id);
    //console.log("api call",cardDetailsInfo)
    if (cardDetailsInfo) setPreloaderVar(false);
    setCardDetailsInfo(cardDetailsInfo);
    // //console.log("screen width", screenWidth);
    // setting and getting company reference id conditiinally
    if (reference) {
      const localStorage = window.localStorage;
      localStorage.setItem("reference", reference);
      setCompanyReference(reference);
      //console.log("reference", reference);
    } else {
      let companyReference = localStorage.getItem("reference", reference);
      //console.log("companyReference", companyReference);
      setCompanyReference(companyReference);
    }
  }, [id]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const keys =
      cardDetailsInfo &&
      Object.entries(cardDetailsInfo).map(([key, value]) => {
        //console.log(key, value);
      });
  }, [cardDetailsInfo]);

  return (
    <div
      className="main single-card-page"
      id="page-content"
      style={{ marginTop: "60px" }}
    >
      {preloaderVar ? <Preloader /> : null}
      <div className="page-overlay"></div>
      {/* </div> */}
      <Container
        className={cx("banner container-fluid ", style.Container)}
        style={{
          backgroundImage:
            screenWidth > 600
              ? `url(${cardDetailsInfo && cardDetailsInfo.largeImageUrl})`
              : `url(${cardDetailsInfo && cardDetailsInfo.smallImageUrl})`,

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        backgroundImage={
          screenWidth > 600
            ? cardDetailsInfo && cardDetailsInfo.largeImageUrl
            : ""
        }
      >
        <div className={cx("content")} style={{ marginTop: "-50px" }}>
          <div className={style.Container_card}>
            <div className={style.Container_card_text}>
              <h2 className="text-center">
                {cardDetailsInfo &&
                  cardDetailsInfo.name &&
                  cardDetailsInfo.name}
              </h2>
              <br></br>
              <p className="text-start">
                {cardDetailsInfo &&
                  cardDetailsInfo.description &&
                  cardDetailsInfo.description}
              </p>
            </div>

            {/* <button
              className={style.Container_card_button}
              type="submit"
              value="Submit"
            >
              Apply Now
            </button> */}
            {location.state &&
            location.state.reqMinMonthlyIncome &&
            location.state.clientSalary &&
            location.state.reqMinMonthlyIncome > location.state.clientSalary ? (
              <Link
                to={{
                  pathname: `/suggested-products`,
                  state: {
                    clientSalary: location.state.clientSalary,
                    catagory: location.state.catagory,
                  },
                }}
                className={cx("btn btn-ghost", style.Container_Apply__Button)}
              >
                Apply Now
              </Link>
            ) : (
              <Link
                to={{
                  pathname: `/${
                    location.state.catagory === "Home Loan"
                      ? "home-loan-application"
                      : "application"
                  }/${id}${
                    companyReference ? `?reference=${companyReference}` : ``
                  }`,
                  state: {
                    reqMinMonthlyIncome:
                      (location.state && location.state.reqMinMonthlyIncome) ||
                      (cardDetailsInfo &&
                        cardDetailsInfo.cardEligibilityInfo &&
                        cardDetailsInfo.cardEligibilityInfo.minIncome),
                    catagory:
                      (location.state && location.state.catagory) ||
                      (cardDetailsInfo && cardDetailsInfo.catagory),
                  },
                }}
                className={cx("btn btn-ghost", style.Container_Apply__Button)}
              >
                Apply Now
              </Link>
            )}
          </div>
          {/* <h1 className="title">Amex Platinum</h1> */}
          {/* <p className="detail">gfcycfgyfc</p> */}
          {/* <img src={imageService("bd_platinum_bannercard")} alt="" srcset="" /> */}
        </div>
      </Container>
      {/* <div className={cx("container", style.Container_Content)}>
                <div className={cx(style.Container_Content_Detail)}>
                </div>
                <div
                    className={cx(
                        "container-fluid ",
                        style.Container_Accordion__Container
                    )}
                >
                    <div className="title-container">
                        <h2 className=" text-center fs-1 fw-bold">Overview</h2>
                        <div className="row mt-5">
                            {cardDetailsInfo &&
                                cardDetailsInfo.details &&
                                Object.entries(cardDetailsInfo.details).map(([key, value]) => {
                                    const accordionHeaderText = cardDetailsBl(key);
                                    return value && key != "imageName" ? (
                                        <div className="row mt-4" style={{ cursor: "pointer" }}>
                                            <Accordion
                                                headerText={accordionHeaderText}
                                                bodyText={value}
                                            />
                                        </div>
                                    ) : (
                                        ""
                                    );
                                })}
                        </div>
                    </div>
                    <div className="accordion br-accordion">
                        <div className="question-container items"></div>
                    </div>
                </div>
                <div className="cta-container">
                    <div className="cta-get-in-touch text-center d-flex flex-column align-items-center flex-sm-row justify-content-center">
                        <h5 className="title text-center mt-2 fs-3">
                            Interested to take this card? &nbsp;
                        </h5>
                        <Link
                            to={`/${
                  catagory === "Home Loan"
                    ? "home-loan-application"
                    : "application"
                }/${id}${companyReference ? `?reference=${companyReference}` : ``
                                }`}
                            className={cx("btn btn-ghost", style.Container_Apply__Button)}
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div> */}
      <div className={style.benefit_section}>
        <h2 className=" text-center fs-1 fw-bold">Benefits</h2>
        <div className="row g-3 justify-content-center p-4">
          <div className="text-center col-xs-12 col-sm-10 col-md-6 col-lg-3">
            <div class="fs-4"> Experience </div>
            <div class="fw-bold fs-1"> Fastest </div>
            <div class="fs-5"> processing time in the market </div>
          </div>

          <div className="text-center col-xs-12 col-sm-10 col-md-6 col-lg-3">
            <div class="fs-4"> Enjoy </div>
            <div class="fw-bold fs-1"> Attractive </div>
            <div class="fs-5"> interest Rates </div>
          </div>
          <div className="text-center col-xs-12 col-sm-10 col-md-6 col-lg-3">
            <div class="fs-4"> Feel Secure with </div>
            <div class="fw-bold fs-1"> Insurance </div>
            <div class="fs-5"> with 200% coverage </div>
          </div>
        </div>
      </div>
      {/* <div className="card p-5 bg-primary more-benefit-section"> */}
      <div className={cx("card p-5 bg-primary", style.more_benefit_section)}>
        <div className="row p-2 bg-white ">
          <div class="row">
            <div class="col-sm-6">
              <div class="card-body">
                <h5 class="card-title">Any purpose loan</h5>
                <p class="card-text">
                  Be it your marriage expenditure, house or office renovation,
                  vacations aboard or emergency medical needs – Our Personal
                  Loan is there to help you meet all your financial needs.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card-body">
                <h5 class="card-title">Convenience</h5>
                <p class="card-text">
                  We prioritise your time & urgency. That is why we have a wide
                  range of channels where you can apply for a Personal Loan.
                  Just visit any of our branches or simply call our Client
                  Centre.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card-body">
                <h5 class="card-title">Employee banking privilege</h5>
                <p class="card-text">
                  If you have your salary account with us, then you have the
                  privilege of getting preferential treatment on our personal
                  loans. If you already have a Personal Loan with another bank,
                  you can still benefit by transferring your Personal Loan to
                  our bank.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card-body">
                <h5 class="card-title">Easy repayment</h5>
                <p class="card-text">
                  You don’t have an account with Our Bank and thinking how to
                  repay your loan? No need of Post-Dated Cheques and the hassle
                  of collecting those. Just give us an instruction and we will
                  collect the EMI from your account with other bank directly
                  through Bangladesh Electronic Fund Transfer Network (BEFTN).
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card-body">
                <h5 class="card-title">Peace of mind</h5>
                <p class="card-text">
                  You have the option to avail insurance coverage for your
                  Personal Loan and leave your loved ones at peace. Leading
                  Insurance providers will take care of your repayment in the
                  event of un-foreseeable incidents.
                </p>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card-body">
                <h5 class="card-title">Top-up loans</h5>
                <p class="card-text">
                  If you need additional finance during the tenure of your
                  existing loan, we are here to help you out. By using a Top-up
                  on your Personal Loan, you can get more funds from us as long
                  as your repayments have been regular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-5">
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Eligibility Criteria</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                {" "}
                Minimum Age:{" "}
                {cardDetailsInfo &&
                  cardDetailsInfo.cardEligibilityInfo &&
                  cardDetailsInfo.cardEligibilityInfo.minAge}{" "}
              </p>
              <p>
                {" "}
                Maximum Age:{" "}
                {cardDetailsInfo &&
                  cardDetailsInfo.cardEligibilityInfo &&
                  cardDetailsInfo.cardEligibilityInfo.maxAge}{" "}
              </p>
              <p>
                Profession:{" "}
                {cardDetailsInfo &&
                  cardDetailsInfo.cardEligibilityInfo &&
                  cardDetailsInfo.cardEligibilityInfo.eligibleClient.toString()}
              </p>
              <p>
                {" "}
                Minimum Income:{" "}
                {cardDetailsInfo &&
                  cardDetailsInfo.cardEligibilityInfo &&
                  cardDetailsInfo.cardEligibilityInfo.income}{" "}
              </p>
              <p>
                Locations:{" "}
                {cardDetailsInfo &&
                  cardDetailsInfo.cardEligibilityInfo &&
                  cardDetailsInfo.cardEligibilityInfo.location.toString()}
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Required Documents</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Mandatory Documents</p>
              <ul>
                {cardDetailsInfo &&
                  cardDetailsInfo.cardRequiredDocs.mandatryDocs &&
                  cardDetailsInfo.cardRequiredDocs.mandatryDocs.map(
                    (x, key) => <li>{x}</li>
                  )}
              </ul>
              <p>Income Related Documents</p>
              <ul>
                {cardDetailsInfo &&
                  cardDetailsInfo.cardRequiredDocs.incomeDocs &&
                  cardDetailsInfo.cardRequiredDocs.incomeDocs.map((x, key) => (
                    <li>{x}</li>
                  ))}
              </ul>
              <p>For Business and Self Employed Person</p>
              <ul>
                {cardDetailsInfo &&
                  cardDetailsInfo.cardRequiredDocs
                    .forBusinessAndSelfEmployeedClientDocs &&
                  cardDetailsInfo.cardRequiredDocs.forBusinessAndSelfEmployeedClientDocs.map(
                    (x, key) => <li>{x}</li>
                  )}
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={cx("container", style.Container_Content)}>
        <div className={cx(style.Container_Content_Detail)}></div>
        <div
          className={cx(
            "container-fluid ",
            style.Container_Accordion__Container
          )}
        >
          <div className="title-container">
            <h2 className=" text-center fs-1 fw-bold">Overview</h2>
          </div>
          <div className="accordion br-accordion">
            <div className="question-container items">
              {cardDetailsInfo &&
                cardDetailsInfo.description &&
                cardDetailsInfo.description}
            </div>
          </div>
        </div>
        <div className="cta-container">
          <div className="cta-get-in-touch text-center d-flex flex-column align-items-center flex-sm-row justify-content-center">
            <h5 className="title text-center mt-2 fs-3">
              Interested to take this card? &nbsp;
            </h5>
            {location.state &&
            location.state.reqMinMonthlyIncome &&
            location.state.clientSalary &&
            location.state.reqMinMonthlyIncome > location.state.clientSalary ? (
              <Link
                to={{
                  pathname: `/suggested-products`,
                  state: {
                    clientSalary: location.state.clientSalary,
                    catagory: location.state.catagory,
                  },
                }}
                className={cx("btn btn-ghost", style.Container_Apply__Button)}
              >
                Apply Now
              </Link>
            ) : (
              <Link
                to={{
                  pathname: `/${
                    location.state.catagory === "Home Loan"
                      ? "home-loan-application"
                      : "application"
                  }/${id}${
                    companyReference ? `?reference=${companyReference}` : ``
                  }`,
                  state: {
                    reqMinMonthlyIncome:
                      (location.state && location.state.reqMinMonthlyIncome) ||
                      (cardDetailsInfo &&
                        cardDetailsInfo.cardEligibilityInfo &&
                        cardDetailsInfo.cardEligibilityInfo.minIncome),
                    catagory:
                      (location.state && location.state.catagory) ||
                      (cardDetailsInfo && cardDetailsInfo.catagory),
                  },
                }}
                className={cx("btn btn-ghost", style.Container_Apply__Button)}
              >
                Apply Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoanDetails;
