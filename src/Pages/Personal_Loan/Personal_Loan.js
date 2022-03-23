import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loan from "../../Components/Cards/Card/Loan";
import cardService from "../../Services/cardService";
import Preloader from "../../Components/Common/PreLoader";
function PersonalLoans() {
  const [loans, setLoans] = useState([]);
  const location = useLocation();
  const [preloaderVar, setPreloaderVar] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setPreloaderVar(true)
    const personalLoans = await cardService.getAllCreditCards("Personal Loan",location.search);
    if(personalLoans) setPreloaderVar(false)
    if (personalLoans && personalLoans.length > 0) {
      setLoans(personalLoans);
    }
  }, []);
  return (
    <div style={{ marginTop: 80 }}>
      {
        preloaderVar?
        <Preloader />:null
      }
      {loans &&
        loans.length > 0 &&
        loans.map((x, index) => {
          return (
            <Loan
              name={x.name}
              imageUrl={x.imageUrl}
              minAge={x.cardEligibilityInfo.minAge}
              maxAge={x.cardEligibilityInfo.maxAge}
              minMonthlyIncome={x.cardEligibilityInfo.minIncome}
              maxMonthlyIncome={x.cardEligibilityInfo.maxIncome}
              availableFor={x.cardEligibilityInfo.eligibleClient}
              key={index}
              id={x._id}
              details={x && x.cardDetailsInfo}
              catagory={x.catagory}
            />
          );
        })}
    </div>
  );
}

export default PersonalLoans;
