import React, { useState, useEffect } from "react";
import Card from "../../Components/Cards/Card/Card";
import cardService from "../../Services/cardService";
import { useLocation } from "react-router-dom";
import Preloader from "../../Components/Common/PreLoader";
function CreditCard() {
  const [cards, setCards] = useState([]);
  const location = useLocation();
  const [preloaderVar, setPreloaderVar] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    setPreloaderVar(true)
  }, [])

  useEffect(async () => {
    
      window.scroll(0,0)
    let bankName
    if(location && location.search) bankName = location.search
    //console.log("hello hi",location)
    const creditCards = await cardService.getAllCreditCards("Credit Card",location.search);
    if(creditCards)setPreloaderVar(false)
    //console.log("aap",creditCards)
    if (creditCards && creditCards.length > 0) {
      setCards(creditCards);
    }
  }, [location.search]);
  return (
    <div style={{ marginTop: 80 }}>
      {
        preloaderVar?
        <Preloader />:null
      }
      {cards &&
        cards.length > 0 &&
        cards.map((card, index) => {
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
  );
}

export default CreditCard;
