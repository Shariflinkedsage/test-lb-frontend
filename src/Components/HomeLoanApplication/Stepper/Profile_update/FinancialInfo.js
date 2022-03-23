import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landlord from "../../../../images/profession/Landlord.svg";
import Salaried from "../../../../images/profession/Salaried.svg";
import Businessman from "../../../../images/profession/Businessman.svg";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import styles from "./FinancialInfo.module.scss";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory, useLocation } from "react-router-dom";
import httpService from "../../../../Services/httpService";
import authServices from "../../../../Services/authService";
import { __bankName } from "../../../../Utils/Data";
import Select from "react-select";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const schema = Joi.object({
  salary: Joi.number().required(),
  profession: Joi.string().required(),
  lengthOfService: Joi.number().required(),
  designation: Joi.string().required(),
  organizationName: Joi.string().required(),

  // bn1:Joi.string().required(),
  // bn2:Joi.string().required(),
  // bn3:Joi.string().required(),
  // bn4:Joi.string().required(),
  // ct1:Joi.string().required(),
  // ct2:Joi.string().required(),
  // ct3:Joi.string().required(),
  // ct4:Joi.string().required(),
  // limit:Joi.number().required(),
  // limit2:Joi.number().required(),
  // limit3:Joi.number().required(),
  // limit4:Joi.number().required(),
});

export default function Profession({
  userId,
  state,
  handleNext,
  dispathch,
  handleBack,
}) {
  //console.log("case 2: ", state);
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [profession, setProfession] = useState("empty");
  const [paySlip, setPaySlip] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),

    defaultValues: {
      salary: state.salary,
      profession: state.profession,
      organizationName: state.organizationName,
      designation: state.designation,
      lengthOfService: state.lengthOfService,
    },
    // shouldFocusError: true,
  });
  const [creditCardData, setCreditCardData] = useState();
  const [loanData, setLoanData] = useState();
  useEffect(() => {
    window.scroll(0,0)
    if (
      state &&
      state.existingLiabilities &&
      state.existingLiabilities.creditCards &&
      state.existingLiabilities.creditCards.length > 0
    ) {
      let creditCards = state.existingLiabilities.creditCards;
      let tempCountField = [];
      for (let i = 1; i <= creditCards.length; i++) {
        tempCountField.push(i);
      }
      setCreditCardData(creditCards);
      setCount(creditCards.length + 1);

      setCreditCardYes(true);
      setCreditCardNo(false);
      setCCNoOfField(tempCountField);
      // setFieldDefaultValue(creditoans);
      var delayInMilliseconds = 1000;
      // setTimeout(function () {
      //   setFieldDefaultValue(creditoans);
      // }, delayInMilliseconds);
    } else {
      setCreditCardYes(false);
      setCreditCardNo(true);
    }

    if (
      state &&
      state.existingLiabilities &&
      state.existingLiabilities.loans &&
      state.existingLiabilities.loans.length > 0
    ) {
      let loans = state.existingLiabilities.loans;
      let tempCountField = [];
      for (let i = 1; i <= loans.length; i++) {
        tempCountField.push(i);
      }
      setLoanData(loans);
      setCountLoan(loans.length + 1);

      setLoanYes(true);
      setLoanNo(false);
      setLoanNoOfField(loans);
      // setFieldDefaultValueLoan(loans);

      // var delayInMilliseconds = 1000;
      // setTimeout(function () {
      //   setFieldDefaultValueLoan(loans);
      // }, delayInMilliseconds);
    } else {
      setLoanYes(false);
      setLoanNo(true);
    }
  }, []);

  function setFieldDefaultValue(temp) {
    //console.log("tempCountField", temp);
    for (let i = 1; i <= temp.length; i++) {
      document.getElementById(`bankName-${i}`).value = temp[i - 1].bankName;
      document.getElementById(`cardType-${i}`).value = temp[i - 1].cardType;
      document.getElementById(`limit-${i}`).value = temp[i - 1].limit;
    }
  }

  function setFieldDefaultValueLoan(temp) {
    //console.log("tempCountField", temp);
    for (let i = 1; i <= temp.length; i++) {
      document.getElementById(`currentOutstandings-${i}`).value =
        temp[i - 1].currentOutstandings;
      document.getElementById(`dateOfDis-${i}`).value = temp[i - 1].dateOfDis;
      document.getElementById(`emiAmount-${i}`).value = temp[i - 1].emiAmount;
      document.getElementById(`loanAmount-${i}`).value = temp[i - 1].loanAmount;
      document.getElementById(`loanName-${i}`).value = temp[i - 1].loanName;
      document.getElementById(`loanBankName-${i}`).value = temp[i - 1].bankName;
      document.getElementById(`tenor-${i}`).value = temp[i - 1].tenor;
    }
  }

  const onFormSubmit = (data) => {
    dispathch({ type: "increments", payload: data });
          handleNext();
    // let flag = true;
    // let existingLiabilities = {
    //   creditCards: [],
    //   loans: [],
    // };
    // //console.log("document.getElementById(`bankName-${i}`).value)",document.getElementById(`bankName-1`).value)

    // if (creditCardYes) {
    //   for (let i = 1; i < count; i++) {
    //     //console.log("let", i);
    //     //console.log(
    //       "document.getElementById(`bankName-${i}`).value)",
    //       document.getElementsByName(`bankName-${i}`)[0].value
    //     );
    //     let ccBank, cardType, limit;
    //     if (!document.getElementsByName(`bankName-${i}`)[0].value) {
    //       document.getElementById(`ccBankNotification${i}`).innerText =
    //         "Name cannot be empty";
    //       flag = false;
    //     } else {
    //       ccBank = __bankName.filter(
    //         (x) =>
    //           x.value == document.getElementsByName(`bankName-${i}`)[0].value
    //       );
    //       ccBank = ccBank[0].label;
    //       //console.log("ccBank", ccBank);
    //       document.getElementById(`ccBankNotification${i}`).innerText = "";
    //     }

    //     if (!document.getElementById(`cardType-${i}`).value) {
    //       document.getElementById(`ccCardTypeNotification${i}`).innerText =
    //         "Card type cannot be empty";
    //       flag = false;
    //     } else {
    //       cardType = document.getElementById(`cardType-${i}`).value;
    //       document.getElementById(`ccCardTypeNotification${i}`).innerText = "";
    //     }

    //     if (!document.getElementById(`limit-${i}`).value) {
    //       document.getElementById(`ccLimitNotification${i}`).innerText =
    //         "Limit cannot be empty";
    //       flag = false;
    //     } else {
    //       limit = document.getElementById(`limit-${i}`).value;
    //       document.getElementById(`ccLimitNotification${i}`).innerText = "";
    //     }
    //     //console.log("ccBank && cardType && limit", ccBank, cardType, limit);
    //     if (ccBank && cardType && limit) {
    //       let temp = {
    //         bankName: ccBank,
    //         cardType: cardType,
    //         limit: limit,
    //       };
    //       existingLiabilities.creditCards.push(temp);
    //     }
    //   }
      // let bank = document.getElementById("bankName-0").value
      // if(bank){
      //   document.getElementById("notification").innerText = ""
      // }
      // else{
      //   document.getElementById("notification").innerText = "anything"
      // }
      // //console.log("baaa",bank)
    // }

    // if (loanYes) {
    //   for (let i = 1; i < countLoan; i++) {
    //     let bankName,
    //       loanName,
    //       loanAmount,
    //       currentOutstandings,
    //       emiAmount,
    //       dateOfDis,
    //       tenor;
    //     if (!document.getElementById(`loanBankName-${i}`).value) {
    //       document.getElementById(`loanBankNotification${i}`).innerText =
    //         "Bank name cannot be empty";
    //       flag = false;
    //     } else {
    //       bankName = document.getElementById(`loanBankName-${i}`).value;
    //       document.getElementById(`loanBankNotification${i}`).innerText = "";
    //     }

    //     if (!document.getElementById(`loanName-${i}`).value) {
    //       document.getElementById(`loanNameNotification${i}`).innerText =
    //         "Loan name cannot be empty";
    //       flag = false;
    //     } else {
    //       loanName = document.getElementById(`loanName-${i}`).value;
    //       document.getElementById(`loanNameNotification${i}`).innerText = "";
    //     }

    //     if (!document.getElementById(`loanAmount-${i}`).value) {
    //       document.getElementById(`loanAmountNotification${i}`).innerText =
    //         "Amount cannot be empty";
    //       flag = false;
    //     } else {
    //       loanAmount = document.getElementById(`loanAmount-${i}`).value;
    //       document.getElementById(`loanAmountNotification${i}`).innerText = "";
    //     }

    //     if (!document.getElementById(`currentOutstandings-${i}`).value) {
    //       document.getElementById(
    //         `currentOutstandingsNotification${i}`
    //       ).innerText = "Outstandings cannot be empty";
    //       flag = false;
    //     } else {
    //       currentOutstandings = document.getElementById(
    //         `currentOutstandings-${i}`
    //       ).value;
    //       document.getElementById(
    //         `currentOutstandingsNotification${i}`
    //       ).innerText = "";
    //     }

    //     //
    //     if (!document.getElementById(`emiAmount-${i}`).value) {
    //       document.getElementById(`emiAmountNotification${i}`).innerText =
    //         "EMI Amount cannot be empty";
    //       flag = false;
    //     } else {
    //       emiAmount = document.getElementById(`emiAmount-${i}`).value;
    //       document.getElementById(`emiAmountNotification${i}`).innerText = "";
    //     }
    //     if (!document.getElementById(`dateOfDis-${i}`).value) {
    //       document.getElementById(`dateOfDisNotification${i}`).innerText =
    //         "Date Of Dis cannot be empty";
    //       flag = false;
    //     } else {
    //       dateOfDis = document.getElementById(`dateOfDis-${i}`).value;
    //       document.getElementById(`dateOfDisNotification${i}`).innerText = "";
    //     }

    //     if (!document.getElementById(`tenor-${i}`).value) {
    //       document.getElementById(`tenorNotification${i}`).innerText =
    //         "Tenor cannot be empty";
    //       flag = false;
    //     } else {
    //       tenor = document.getElementById(`tenor-${i}`).value;
    //       document.getElementById(`tenorNotification${i}`).innerText = "";
    //     }

    //     if (
    //       bankName &&
    //       loanName &&
    //       loanAmount &&
    //       currentOutstandings &&
    //       emiAmount &&
    //       dateOfDis &&
    //       tenor
    //     ) {
    //       let temp = {
    //         bankName: bankName,
    //         loanName: loanName,
    //         loanAmount: loanAmount,
    //         currentOutstandings: currentOutstandings,
    //         emiAmount: emiAmount,
    //         dateOfDis: dateOfDis,
    //         tenor: tenor,
    //       };
    //       existingLiabilities.loans.push(temp);
    //     }
    //   }
    // }
    // //console.log("ex", existingLiabilities);

    // if (
    //   creditoanYes &&
    //   existingLiabilities.creditoans &&
    //   existingLiabilities.creditoans.length < 1
    // ) {
    //   existingLiabilities.creditoans = state.existingLiabilities.creditoans;
    // }

    // if (
    //   creditoanYes &&
    //   existingLiabilities.loans &&
    //   existingLiabilities.loans.length < 1
    // ) {
    //   existingLiabilities.loans = state.existingLiabilities.loans;
    // }
    // if (flag) {
    //   if (creditCardYes || creditCardNo) {
    //     if (loanNo || loanYes) {
    //       //console.log("flag", flag);
    //       data.existingLiabilities = existingLiabilities;
    //       dispathch({ type: "increments", payload: data });
    //       handleNext();
    //     } else {
    //       document.getElementById(`loanNotification`).innerText =
    //         "Please enter your response";
    //     }
    //   } else {
    //     document.getElementById(`creditCardNotification`).innerText =
    //       "Please enter your response";
    //   }
    // }
  };
  const uploadImg = (e) => {
    const file = e.target.files[0];
    setPaySlip(file);
  };
  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => console.error(errors);

  const [creditCardYes, setCreditCardYes] = useState(false);
  const [creditCardNo, setCreditCardNo] = useState(false);
  const [loanYes, setLoanYes] = useState(false);
  const [loanNo, setLoanNo] = useState(false);

  const [ccNoOfField, setCCNoOfField] = useState([]);
  const [count, setCount] = useState(1);

  const [loanNoOfField, setLoanNoOfField] = useState([]);
  const [countLoan, setCountLoan] = useState(1);

  const CCYesFun = (e) => {
    //console.log("1111", ccNoOfField);

    if (creditCardData && creditCardData.length > 0) {
      let tempCountField = [];
      for (let i = 1; i <= creditCardData.length; i++) {
        tempCountField.push(i);
      }
      setCount(creditCardData.length + 1);
      setCreditCardYes(true);
      setCreditCardNo(false);
      setCCNoOfField(tempCountField);
    } else if (count == 1) {
      let temp = ccNoOfField;
      setCount(count + 1);
      temp.push(count);
      setCCNoOfField(temp);
      setCreditCardYes(true);
      setCreditCardNo(false);
      let tempCard = [];
      tempCard.push({
        bankName: "",
        cardType: "",
        limit: "",
      });
      //console.log("temp", tempCard);
      setCreditCardData(tempCard);
      document.getElementById(`creditCardNotification`).innerText = "";
    }
  };
  const cardAddFieldFun = (e) => {
    let temp = ccNoOfField;
    //console.log("ccNoOfField", ccNoOfField, count);
    setCount(count + 1);
    temp.push(count);
    setCCNoOfField(temp);
    setCreditCardYes(true);
    setCreditCardNo(false);
    let tempCard = [];
    tempCard.push({
      bankName: "",
      cardType: "",
      limit: "",
    });
    //console.log("temp", tempCard);
    setCreditCardData(tempCard);
    document.getElementById(`creditCardNotification`).innerText = "";
  };

  const cardDeleteFieldFun = (id) => {
    // if (id >= creditoanData.length) {
    //   let temp = ccNoOfField;
    //   //console.log("ccNoOfField1", ccNoOfField, count, id);
    //   setCount(count - 1);
    //   temp.splice(-1);
    //   setCCNoOfField(temp);
    // } else {
    let temp = ccNoOfField;
    //console.log("ccNoOfField", ccNoOfField, count, id);

    let tempArr = creditCardData.filter((item, key) => key != id);
    //console.log("tempa", tempArr, temp);
    setCreditCardData(tempArr);
    setCount(count - 1);
    temp.splice(-1);
    setCCNoOfField(temp);
    setFieldDefaultValue(tempArr);
    if (tempArr.length < 1) {
      setCreditCardNo(true);
      setCreditCardYes(false);
      setCount(1);
      setCCNoOfField([]);
    }

    // }
  };

  const LoanDeleteFieldFun = (id) => {
    let temp = loanNoOfField;
    //console.log("ccNoOfField", loanNoOfField, countLoan, id);

    let tempArr = loanData.filter((item, key) => key != id);
    //console.log("tempa", tempArr, temp);
    setLoanData(tempArr);
    setCountLoan(countLoan - 1);
    temp.splice(-1);
    setLoanNoOfField(temp);
    setFieldDefaultValueLoan(tempArr);
    if (tempArr.length < 1) {
      setLoanNo(true);
      setLoanYes(false);
      setCountLoan(1);
      setLoanNoOfField([]);
    }
  };

  const LoanAddFieldFun = (e) => {
    let temp = loanNoOfField;
    setCountLoan(countLoan + 1);
    temp.push(countLoan);
    setLoanNoOfField(temp);
    setLoanYes(true);
    setLoanNo(false);
    document.getElementById(`loanNotification`).innerText = "";
    let tempLoan = [];
    tempLoan.push({
      bankName: "",
      currentOutstandings: "",
      dateOfDis: "",
      emiAmount: "",
      loanAmount: "",
      loanName: "",
      tenor: "",
    });
    //console.log("temp", tempLoan);
    setLoanData(tempLoan);
  };

  const CCNoFun = (e) => {
    setCreditCardNo(true);
    setCreditCardYes(false);
    setCount(1);
    setCCNoOfField([]);
    document.getElementById(`creditCardNotification`).innerText = "";
  };
  const loanYesFun = (e) => {
    if (loanData && loanData.length > 0) {
      let tempCountField = [];
      for (let i = 1; i <= loanData.length; i++) {
        tempCountField.push(i);
      }
      setCountLoan(loanData.length + 1);

      setLoanYes(true);
      setLoanNo(false);
      setLoanNoOfField(tempCountField);
    } else if (countLoan == 1) {
      let temp = loanNoOfField;
      setCountLoan(countLoan + 1);
      temp.push(countLoan);
      setLoanNoOfField(temp);
      setLoanYes(true);
      setLoanNo(false);
      document.getElementById(`loanNotification`).innerText = "";
      let tempLoan = [];
      tempLoan.push({
        bankName: "",
        currentOutstandings: "",
        dateOfDis: "",
        emiAmount: "",
        loanAmount: "",
        loanName: "",
        tenor: "",
      });
      //console.log("temp", tempLoan);
      setCreditCardData(tempLoan);
    }
  };
  const loanNoFun = (e) => {
    setLoanNo(true);
    setLoanYes(false);
    setCountLoan(1);
    setLoanNoOfField([]);
    document.getElementById(`loanNotification`).innerText = "";
  };

  return (
    <div className="container personal-info">
      <Form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="pl-5 pr-5"
      >
        <Form.Group controlId="salary" className="mt-3">
          {/* <div className="row"> */}
          <div className="col-sm-1 phone-none"></div>

          <div
            className="col-sm-10 d-flex"
            class={cx("nameee", styles.container_nameee)}
          >
            <label>Profession:</label>
            <Controller
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder="Enter Your Profession"
                  isInvalid={!!errors.profession}
                  // size="lg"
                />
              )}
              control={control}
              name="profession"
            />
            {errors.profession && (
              <Form.Control.Feedback type="invalid">
                {errors.profession.message || "Profession is not valid"}
              </Form.Control.Feedback>
            )}
          </div>
          <div
            className="col-sm-10 d-flex"
            class={cx("nameee", styles.container_nameee)}
          >
            <label>Organization:</label>
            <Controller
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder="Enter Your Organization"
                  isInvalid={!!errors.organizationName}
                  // size="lg"
                />
              )}
              control={control}
              name="organizationName"
            />
            {errors.organizationName && (
              <Form.Control.Feedback type="invalid">
                {errors.organizationName.message || "Organization is not valid"}
              </Form.Control.Feedback>
            )}
          </div>
          <div
            className="col-sm-10 d-flex"
            class={cx("nameee", styles.container_nameee)}
          >
            <label>Designation:</label>
            <Controller
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder="Enter Your Designation"
                  isInvalid={!!errors.designation}
                  // size="lg"
                />
              )}
              control={control}
              name="designation"
            />
            {errors.designation && (
              <Form.Control.Feedback type="invalid">
                {errors.designation.message || "Designation is not valid"}
              </Form.Control.Feedback>
            )}
          </div>
          <div
            className="col-sm-10 d-flex"
            class={cx("nameee", styles.container_nameee)}
          >
            <label>Salary: </label>
            <Controller
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder="Enter Your Salary"
                  isInvalid={!!errors.salary}
                  // size="lg"
                />
              )}
              control={control}
              name="salary"
            />
            {errors.salary && (
              <Form.Control.Feedback type="invalid">
                {errors.salary.message || "Salary is not valid"}
              </Form.Control.Feedback>
            )}
          </div>
          <div
            className="col-sm-10 d-flex"
            class={cx("nameee", styles.container_nameee)}
          >
            <label>Length of Service:</label>
            <Controller
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder="Enter Your Job Experience"
                  isInvalid={!!errors.lengthOfService}
                  // size="lg"
                />
              )}
              control={control}
              name="lengthOfService"
            />
            {errors.lengthOfService && (
              <Form.Control.Feedback type="invalid">
                {errors.lengthOfService.message ||
                  "Job Experience is not valid"}
              </Form.Control.Feedback>
            )}
          </div>

          {/* {creditCardYes &&
            ccNoOfField &&
            ccNoOfField.map((item, key) => {
              return (
                <div
                  className="row pt-1 pb-1"
                  id={key % 2 == 0 ? "" : "color-bg"}
                >
                  <div className="col-sm-1"></div>
                  <div
                    className="col-sm-10 d-flex"
                    class={cx("ccSection", styles.container_ccSection)}
                  >
                    <div
                      class={cx("deleteField", styles.container_deleteField)}
                    >
                      <button
                        type="button"
                        onClick={() => cardDeleteFieldFun(key)}
                      >
                        x
                      </button>
                    </div>
                    <div class={cx("ccRow", styles.container_ccRow)}>
                      <label>Bank Name</label>
                      
                      <Select 
                        placeholder={
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <div className="plaseholder__">
                              <span>Search Bank</span>
                            </div>{" "}
                            <i className="fas fa-search"></i>
                          </div>
                        }
                        className="w-100"
                        name={`bankName-${key + 1}`}
                        options={__bankName}
                        id={`bankName-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`ccBankNotification${key + 1}`}
                      ></label>
                    </div>
                    <div class={cx("ccRow", styles.container_ccRow)}>
                      <label>Card Type</label>
                      <input
                        type="text"
                        defaultValue={
                          creditCardData &&
                          creditCardData[key] &&
                          creditCardData[key].cardType
                            ? creditCardData[key].cardType
                            : ""
                        }
                        id={`cardType-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`ccCardTypeNotification${key + 1}`}
                      ></label>
                    </div>
                    <div class={cx("ccRow", styles.container_ccRow)}>
                      <label>Limit</label>
                      <input
                        type="number"
                        defaultValue={
                          creditCardData &&
                          creditCardData[key] &&
                          creditCardData[key].limit
                            ? creditCardData[key].limit
                            : ""
                        }
                        id={`limit-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`ccLimitNotification${key + 1}`}
                      ></label>
                    </div>{" "}
                    {item === ccNoOfField[ccNoOfField.length - 1] ? (
                      <div class={cx("addField", styles.container_addField)}>
                        <button type="button" onClick={cardAddFieldFun}>
                          +
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })} */}

         

          {/* {loanYes &&
            loanNoOfField &&
            loanNoOfField.map((item, key) => {
              return (
                <div
                  className="row pt-1 pb-1"
                  id={key % 2 == 0 ? "" : "color-bg"}
                >
                  <div className="col-sm-1"></div>
                  <div
                    className="col-sm-10 d-flex"
                    class={cx("ccSection", styles.container_ccSection)}
                  >
                    <div
                      class={cx("deleteField", styles.container_deleteField)}
                    >
                      <button
                        type="button"
                        onClick={() => LoanDeleteFieldFun(key)}
                      >
                        x
                      </button>
                    </div>
                    <div class={cx("ccRow", styles.container_ccRow50)}>
                      <label>Bank Name</label>
                      <input
                        type="text"
                        defaultValue={
                          loanData && loanData[key] && loanData[key].bankName
                            ? loanData[key].bankName
                            : ""
                        }
                        id={`loanBankName-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`loanBankNotification${key + 1}`}
                      ></label>
                    </div>
                    <div class={cx("ccRow", styles.container_ccRow50)}>
                      <label>Loan Name</label>
                      <input
                        type="text"
                        defaultValue={
                          loanData && loanData[key] && loanData[key].loanName
                            ? loanData[key].loanName
                            : ""
                        }
                        id={`loanName-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`loanNameNotification${key + 1}`}
                      ></label>
                    </div>
                  </div>
                  <div className="col-sm-1"></div>
                  <div
                    className="col-sm-10 d-flex"
                    class={cx("ccSection", styles.container_ccSection)}
                  >
                    <div class={cx("ccRow", styles.container_ccRow)}>
                      <label>Loan Amount</label>
                      <input
                        type="number"
                        defaultValue={
                          loanData && loanData[key] && loanData[key].loanAmount
                            ? loanData[key].loanAmount
                            : ""
                        }
                        id={`loanAmount-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`loanAmountNotification${key + 1}`}
                      ></label>
                    </div>
                    <div class={cx("ccRow", styles.container_ccRow)}>
                      <label>Current Outstandings</label>
                      <input
                        type="number"
                        defaultValue={
                          loanData &&
                          loanData[key] &&
                          loanData[key].currentOutstandings
                            ? loanData[key].currentOutstandings
                            : ""
                        }
                        id={`currentOutstandings-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`currentOutstandingsNotification${key + 1}`}
                      ></label>
                    </div>
                    <div class={cx("ccRow", styles.container_ccRow)}>
                      <label>EMI Amount</label>
                      <input
                        type="number"
                        defaultValue={
                          loanData && loanData[key] && loanData[key].emiAmount
                            ? loanData[key].emiAmount
                            : ""
                        }
                        id={`emiAmount-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`emiAmountNotification${key + 1}`}
                      ></label>
                    </div>
                  </div>
                  <div className="col-sm-1"></div>
                  <div
                    className="col-sm-10 d-flex"
                    class={cx("ccSection", styles.container_ccSection)}
                  >
                    <div class={cx("ccRow", styles.container_ccRow40)}>
                      <label>Date Of Disbursement</label>
                      <input
                        type="date"
                        defaultValue={
                          loanData && loanData[key] && loanData[key].dateOfDis
                            ? loanData[key].dateOfDis
                            : ""
                        }
                        id={`dateOfDis-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`dateOfDisNotification${key + 1}`}
                      ></label>
                    </div>
                    <div class={cx("ccRow", styles.container_ccRow40)}>
                      <label>Tenor</label>
                      <input
                        type="number"
                        defaultValue={
                          loanData && loanData[key] && loanData[key].tenor
                            ? loanData[key].tenor
                            : ""
                        }
                        id={`tenor-${key + 1}`}
                      />
                      <label
                        className="txt-red"
                        id={`tenorNotification${key + 1}`}
                      ></label>
                    </div>
                    
                    {item === loanNoOfField[loanNoOfField.length - 1] ? (
                      <div class={cx("addField", styles.container_addField)}>
                        <button type="button" onClick={LoanAddFieldFun}>
                          +
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })} */}

          <div className="col-sm-1"></div>
          {/* </div> */}
          {/* {
            ccYes == 2?
            <div class={cx("ccSection",styles.container_ccSection)}>
              <div class={cx("ccRow",styles.container_ccRow)}>
                <button class={cx("closeBtn",styles.container_closeBtn)} type="button" onClick={()=>setCcYes(false)}>X</button>
              </div>
            </div>

            :null

          } */}
        </Form.Group>
      </Form>
      <div className="row  mt-5">
        <div className="col-sm-1"></div>

        <div
          className="col justify-content-start"
          style={{ display: "flex", justifyContent: "start" }}
        >
          {" "}
          <Button
            style={{
              background: "rgb(185, 214, 242)",
              color: "black",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </Button>
        </div>

        <div
          className="col justify-content-end"
          style={{ display: "flex", justifyContent: "end" }}
        >
          {" "}
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit(onFormSubmit, onErrors)}
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
            Submit
          </Button>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
