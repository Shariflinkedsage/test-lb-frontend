function accordionHeaderText(keyName) {
  let accordionHeaderText;
  switch (keyName) {
    case "welcomeOffer":
      accordionHeaderText = "Welcome Offer";
      break;
    case "travelBenifits":
      accordionHeaderText = "Travel Offer";
      break;
    case "lifeStyleBenifit":
      accordionHeaderText = "Lifestyle Benifits";
      break;
    case "membershipReward":
      accordionHeaderText = "Membership Reward";
      break;
    case "exclusiveDiscount":
      accordionHeaderText = "Exclusive Discount";
      break;
    case "insuranceBenifit":
      accordionHeaderText = "Insurance Benifits";
      break;
    case "otherBenefits":
      accordionHeaderText = "Other Benifits";
      break;
    case "requiredDocuments":
      accordionHeaderText = "Required Documents";
      break;
    case "cardFacilities":
      accordionHeaderText = "Card Facilities";
      break;
    case "cashBack":
      accordionHeaderText = "Cash Back";
      break;
    case "accelaratedRewardPoint":
      accordionHeaderText = "Accelerated Reward Points!";
      break;
    case "priorityPass":
      accordionHeaderText = "Priority Pass";
      break;
    case "airportLougeAccess":
      accordionHeaderText = "Airport Lounge Access";
      break;
    case "flexibilityTalk":
      accordionHeaderText = "More flexibility as you talk!";
      break;
    case "balanceTransfer":
      accordionHeaderText = "Balance Transfer";
      break;
    case "dinningOffer":
      accordionHeaderText = "Dining Offers";
      break;
    case "instaBuysFacility":
      accordionHeaderText = "InstaBuys Facility";
      break;
    case "freeSimReplacement":
      accordionHeaderText = "Free SIM Replacement";
      break;
    case "suplementaryCard":
      accordionHeaderText = "Supplementary card";
      break;
    case "cardCheque":
      accordionHeaderText = "Card cheque";
      break;
    case "autoBillpay":
      accordionHeaderText = "Auto Billspay";
      break;
    case "onlineBanking":
      accordionHeaderText = "Online Banking";
      break;
    case "eStatements":
      accordionHeaderText = "E-Statements";
      break;
    case "clientService":
      accordionHeaderText = "24-Hour Client Center";
      break;
    case "wideAcceptance":
      accordionHeaderText = "Wide Acceptance";
      break;
    case "dinnerOffer":
      accordionHeaderText = "Dinner Offer";
      break;
    // eslint-disable-next-line no-fallthrough
    case "financialFlexibility":
      accordionHeaderText = "Financial Flexibility";
      break;
    // eslint-disable-next-line no-fallthrough
    case "maxCarditLimit":
      accordionHeaderText = "Max Credit Limit";
      break;
    // eslint-disable-next-line no-fallthrough
    default:
      break;
  }
  return accordionHeaderText;
}

export default accordionHeaderText;
