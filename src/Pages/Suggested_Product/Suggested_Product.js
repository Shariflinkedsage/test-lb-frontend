import { dark } from "@material-ui/core/styles/createPalette";
import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Card from "../../Components/Cards/Card/Card";
import cardService from "../../Services/cardService";
import cx from "classnames";
import styles from "./Suggested_Product.module.scss";
function SuggestedProduct() {
  const [cards, setCards] = useState("");
  const location = useLocation();
  const history = useHistory();
  useEffect(async () => {
    const _cards = await cardService.getAllCreditCardsBySlary(
      location.state && location.state.catagory,
      location.state && location.state.clientSalary
    );
    if (_cards && _cards.length > 0) {
      setCards(_cards);
    } else {
      redirectHome();
      setCards(-1);
    }
  }, []);
  // useEffect(async () => {
  //   if (cards === -1) {
  //     history.push("/");
  //   }
  // }, [cards]);

  function redirectHome(){
    var delayInMilliseconds = 2000; //1 second
    setTimeout(function () {
      history.push("/");
    }, delayInMilliseconds);
  }

  return (
    <>
      <div style={{ marginTop: 80 }} className="container cntr">
        {cards && cards.length > 0 ? (
          <div className="mt-5">
            {/* <div className="pt-5 pb-5">
            <div className="loading mb-5">
              <span>Thank you for your interest. Your applied product is not matching
              with your inputted data. However, following products are eligible
              for you !</span>
            </div>
            </div> */}
            <p class={cx("notification", styles.container_notification)}>
              Thank you for your interest. Your applied product is not matching
              with your inputted data. However, following products are eligible
              for you !
            </p>
            {cards.map((card, index) => {
              return (
                <Card
                  name={card.name}
                  imageUrl={card.imageUrl}
                  mainTainCharge={
                    card.cardShortInfo && card.cardShortInfo.mainTainCharge
                  }
                  annualFee={card.cardShortInfo && card.cardShortInfo.annualFee}
                  latePaymentFee={
                    card.cardShortInfo && card.cardShortInfo.latePaymentFee
                  }
                  chargeFreePeriod={
                    card.cardShortInfo && card.cardShortInfo.interestFreePeriod
                  }
                  key={index}
                  id={card._id}
                  details={card && card.cardDetailsInfo}
                  loungeFacility={
                    card.cardShortInfo && card.cardShortInfo.loungeFacility
                  }
                  minMonthlyIncome={card.cardEligibilityInfo.minIncome}
                  eligibleClient={card.cardEligibilityInfo.eligibleClient}
                  catagory={card.catagory}
                />
              );
            })}
          </div>
        ) : (
          <p class={cx("notifications", styles.container_notifications)}>
            Thank you for your interest. Your current profile and credit score
            is not eligible for any Credit Card we have. However, we are
            continuously searching for a credit card for you and will
            immediately let you know once getting somethings special. Please
            keep your profile up to date for better service.
          </p>
        )}
      </div>
    </>
  );
}

export default SuggestedProduct;
