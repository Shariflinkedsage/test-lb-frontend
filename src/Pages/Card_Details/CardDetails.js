import React, { useState, useEffect } from "react";
import styled from "styled-components";
import device from "../../Utils/breakpoints_devices";
import style from "./CardDetails.module.scss";
import cx from "classnames";
import Accordion from "../../Components/CardDetails/Accordion/Accordion";
import { Link, useParams, useLocation } from "react-router-dom";
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

function CardDetails() {
  const location = useLocation()
  const { id } = useParams();
  const [cardDetailsInfo, setCardDetailsInfo] = useState(null);
  const [companyReference, setCompanyReference] = useState();
  const screenWidth = useWindowWidth();
  const { reference } = useQuery();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    //console.log("iii,id", location.state)
    window.scroll(0, 0)
    const cardDetailsInfo = await cardService.getCardDetailsById(id);
    //console.log("api call", cardDetailsInfo)
    setCardDetailsInfo(cardDetailsInfo);
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
  }, []);
  useEffect(async () => {
    const keys =
      cardDetailsInfo &&
      Object.entries(cardDetailsInfo).map(([key, value]) => {
        // //console.log(key, value);
      });
  }, [cardDetailsInfo]);

  return (
    <div
      className="main single-card-page"
      id="page-content"
      style={{ marginTop: "60px" }}
    >
      <div className="page-overlay"></div>
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

            {
              location.state && location.state.reqMinMonthlyIncome && location.state.clientSalary && location.state.reqMinMonthlyIncome > location.state.clientSalary ?
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
                :
                <Link
                  to={{
                    pathname: `/${
                      location.state.catagory === "Home Loan"
                    ? "home-loan-application"
                    : "application"
                }/${id}${companyReference ? `?reference=${companyReference}` : ``
                      }`,
                    state: {
                      reqMinMonthlyIncome: location.state && location.state.reqMinMonthlyIncome || cardDetailsInfo && cardDetailsInfo.cardEligibilityInfo && cardDetailsInfo.cardEligibilityInfo.minIncome,
                      catagory: location.state && location.state.catagory || cardDetailsInfo && cardDetailsInfo.catagory,
                    },
                  }}
                  className={cx("btn btn-ghost", style.Container_Apply__Button)}
                >
                  Apply Now
                </Link>
            }


          </div>
        </div>
      </Container>
      <div className={cx("container", style.Container_Content)}>
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
              {cardDetailsInfo &&
                cardDetailsInfo.cardRequiredDocs && cardDetailsInfo.cardRequiredDocs.mandatryDocs ?

                <div className="row mt-4" style={{ cursor: "pointer" }}>
                  <Accordion
                    headerText={"Required Documents"}
                    bodyText={cardDetailsInfo.cardRequiredDocs.mandatryDocs}
                  />
                </div>
                : null
              }
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
            {
              location.state && location.state.reqMinMonthlyIncome && location.state.clientSalary && location.state.reqMinMonthlyIncome > location.state.clientSalary ?
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
                :
                <Link
                  to={{
                    pathname: `/${
                      location.state.catagory === "Home Loan"
                    ? "home-loan-application"
                    : "application"
                }/${id}${companyReference ? `?reference=${companyReference}` : ``
                      }`,
                    state: {
                      reqMinMonthlyIncome: location.state && location.state.reqMinMonthlyIncome || cardDetailsInfo && cardDetailsInfo.cardEligibilityInfo && cardDetailsInfo.cardEligibilityInfo.minIncome,
                      catagory: location.state && location.state.catagory || cardDetailsInfo && cardDetailsInfo.catagory,
                    },
                  }}
                  className={cx("btn btn-ghost", style.Container_Apply__Button)}
                >
                  Apply Now
                </Link>
            }
          </div>
        </div>
      </div>
      <a className="chat-babble" href="#"></a>
    </div>
  );
}

export default CardDetails;
