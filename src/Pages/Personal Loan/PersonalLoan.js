import React from "react";
import cx from "classnames";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import style from "./PersonalLoan.module.scss";
import "react-accessible-accordion/dist/fancy-example.css";
import { Link } from "react-router-dom";
function PersonalLoan() {
  return (
    <div
      className="personal-loan-page"
      id="page-content"
      style={{ marginTop: "60px" }}
    >
      <div class={cx("personalLoan-img", style.Container)}>
        {/* <img src="/personal-loan.jpg" alt="" width="100%" height="400" /> */}
        <div className={cx("content")} style={{ marginTop: "-50px" }}>
          <div className={style.Container_card}>
            <div className={style.Container_card_text}>
              <h2 className="text-center">gjklsgoklidhjsogl</h2>
              <br></br>
              <p className="text-start">dsfkjdhsgfdhsgfkjhdas</p>
            </div>
            {/* <button
              className={style.Container_card_button}
              type="submit"
              value="Submit"
            >
              Apply Now
            </button> */}
            {/* link to application process */}
            {/* to=
            {`/${
                  catagory === "Home Loan"
                    ? "home-loan-application"
                    : "application"
                }/${id}${
              companyReference ? `?reference=${companyReference}` : ``
            }`} */}
            <Link
              to="/"
              className={cx("btn btn-ghost", style.Container_Apply__Button)}
            >
              Apply Now
            </Link>
          </div>
          {/* <h1 className="title">Amex Platinum</h1> */}
          {/* <p className="detail">gfcycfgyfc</p> */}
          {/* <img src={imageService("bd_platinum_bannercard")} alt="" srcset="" /> */}
        </div>
      </div>
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
      <div className="card p-5 bg-primary">
        <div className="row p-2 bg-white ">
          <div class="row">
            <div class="col-sm-6">
              <div class="card-body">
                <h5 class="card-title">Any purpose loan</h5>
                <p class="card-text">
                  Be it your marriage expenditure, house or office renovation,
                  vacations aboard or emergency medical needs – Our Personal Loan is there to help you meet all your
                  financial needs.
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
                  You don’t have an account with Our Bank and thinking
                  how to repay your loan? No need of Post-Dated Cheques and the
                  hassle of collecting those. Just give us an instruction and we
                  will collect the EMI from your account with other bank
                  directly through Bangladesh Electronic Fund Transfer Network
                  (BEFTN).
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
              <AccordionItemButton>Eligibility & Documents</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>FAQs</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Terms&Conditions</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default PersonalLoan;
