import http from "./httpService";
import { baseUrl } from "../config";
import axios from "axios";


let BaseUrl = baseUrl();

async function getAllCreditCards(catagory, bankName) {
  // production url
  if (!BaseUrl) {
    return BaseUrl;
    //console.log("baseUlr", BaseUrl);
  }
  //console.log("pronting baseurl", BaseUrl);
  // test server is ruinning on port
  let l = bankName
  let { data: cards } = await axios.get(
    `${process.env.REACT_APP_API_URL}/cards/${catagory}${l}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    }
  );
  return cards;
}
async function getAllCreditCardsBySlary(catagory, salary) {
  // production url
  if (!BaseUrl) {
    return BaseUrl;
    //console.log("baseUlr", BaseUrl);
  }
  //console.log("pronting baseurl", BaseUrl);
  // test server is ruinning on port
  let { data: cards } = await axios.get(
    `${process.env.REACT_APP_API_URL}/cards/${catagory}?salary=${salary}`,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    }
  );
  return cards;
}
const getCardDetailsById = async (cardId) => {
  let { data: cardDetails } = await http.get(
    `${BaseUrl}/cards/details/${cardId}`
  );
  if (!cardDetails && !cardDetails.success) {
    return;
  }
  //console.log("card details", cardDetails);
  const { cardDetailsInfo, cardEligibilityInfo, catagory, imageName, name, cardRequiredDocs } =
    cardDetails.data && cardDetails.data;
  return { ...cardDetailsInfo, cardEligibilityInfo, catagory, imageName, name, cardRequiredDocs };
};
const getLoanDetailsById = async (Id) => {
  let { data: LoanDetails } = await http.get(`${BaseUrl}/cards/details/${Id}`);
  if (!LoanDetails && !LoanDetails.success) {
    return;
  }
  const {
    cardDetailsInfo,
    cardEligibilityInfo,
    cardRequiredDocs,
    imageName,
    name,
    catagory
  } = LoanDetails.data && LoanDetails.data;
  return {
    ...cardDetailsInfo,
    cardEligibilityInfo,
    cardRequiredDocs,
    imageName,
    name,
    catagory
  };
};

export default {
  getAllCreditCards,
  getAllCreditCardsBySlary,
  getCardDetailsById,
  getLoanDetailsById,
};
