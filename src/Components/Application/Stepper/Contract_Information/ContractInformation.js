import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import "react-phone-number-input/style.css";
import Input from "react-phone-number-input/input";
import cx from "classnames";
import { useParams, useHistory } from "react-router-dom";
import style from "./ContractInformation.module.scss";
import http from "../../../../Services/httpService";
import { TextField, FormHelperText } from "@material-ui/core";
import Usercontext from "../../../../Contexts/UserContexts";
import Preloader from "../../../Common/PreLoader";

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
  customerName: Joi.string().required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phoneNumber: Joi.any().required(),
});

const schemaWithReference = Joi.object({
  customerName: Joi.any(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  phoneNumber: Joi.string()
    .length(11)
    .pattern(/^(?=.*[0-9])[- +()0-9]+$/)
    .required(),
});

export default function ContractInformation({
  state,
  handleNext,
  dispathch,
  handleBack,
  companyReference,
  userId,
  setuserId,
}) {
  const [loggedInUser, setloggedInUser] = useContext(Usercontext);
  let { cardId } = useParams(); // getting id from url params
  const [generalError, setGeneralError] = useState("");
  const history = useHistory();
  const [preloaderVar, setPreloaderVar] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: companyReference
      ? joiResolver(schemaWithReference)
      : joiResolver(schema),
    // resolver: joiResolver(`${companyReference ? schemaWithReference : schema}`),

    defaultValues: {
      customerName: state.customerName || "",
      email: state.email || "",
      phoneNumber: state.phoneNumber || "",
    },
    // shouldFocusError: true,
  });
  const { city, profession, organizationName, salary, customerName } = state;
  const onFormSubmit = async (data) => {
    // //console.log("hello");
    let application = { ...state, ...data };
    //console.log("state in contract information", application);
    //console.log("userId for user", userId);
    if (state) {
    }
    //  //console.log("logged in user", loggedInUser);
    // registering user for using user information
    if (application && application.email) {
      const isVerified = false;
      let customerResponse;
      try {
        setPreloaderVar(true);
        if (companyReference) {
          const { data } = await http.post(
            `${process.env.REACT_APP_API_URL}/user-staging`,
            {
              email: application.email,
              phoneNumber: application.phoneNumber,
              companyReference,
              // loggedInUserPhoneNumber: loggedInUser.phoneNumber,
            }
          );
          customerResponse = data;
        } else {
          const { data } = await http.post(
            `${process.env.REACT_APP_API_URL}/applications`,
            {
              applicationFor: "card",
              product: { name: "SCB Credit Card", id: cardId },
              customer: {
                companyReference,
                userId,
                name: application.customerName,
                city: city,
                profession: profession,
                organizationName,
                salary,
                email: application.email,
                phoneNumber:
                  loggedInUser.phoneNumber || application.phoneNumber,
              },
            }
          );
          customerResponse = data;
        }
      } catch (error) {
        //console.log("error from user creatiob api", error);
      }

      if (customerResponse) setPreloaderVar(false);

      if (
        customerResponse &&
        customerResponse.success &&
        customerResponse.data
      ) {
        setuserId(customerResponse.data && customerResponse.data._id);
        dispathch({ type: "increment", payload: application });
        handleNext();
      } else {
        setGeneralError(customerResponse.message);
        var delayInMilliseconds = 2000; //1 second
        setTimeout(function () {
          history.push("/user-dashboard");
        }, delayInMilliseconds);
        //console.log("error from user creation api", customerResponse.message);
      }
    }
  };
  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => console.error(errors);
  useEffect(() => {
    window.scroll(0, 0);
    //console.log("state in contract information", state);
  }, []);
  return (
    <div className="container application_page">
      {preloaderVar ? <Preloader /> : null}
      <Form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="pl-5 pr-5"
      >
        <FormHelperText
          focused="true"
          error="true"
          className="text-center"
          style={{ width: "100%", fontSize: "18px" }}
        >
          {generalError && generalError}
        </FormHelperText>
        {!companyReference && (
          <Form.Group controlId="customerName" className="">
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-12 col-sm-6">
                <div className="row">
                  <h5 className="text-start">Name:</h5>
                </div>
                <Controller
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      placeholder="Enter Your Name"
                      // isInvalid={!!errors.customerName}
                      size="lg"
                    />
                  )}
                  control={control}
                  name="customerName"
                />
                {errors.customerName && (
                  // <Form.Control.Feedback type="invalid">
                  //   {errors.customerName.message || "customerName is not valid"}
                  // </Form.Control.Feedback>
                  <p
                    className="text-center"
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontFamily: "Noto Sans",
                    }}
                  >
                    {errors.customerName.message || "customerName is not valid"}
                  </p>
                )}
              </div>
              <div className="col-sm-3"></div>
            </div>
          </Form.Group>
        )}
        {/* {companyReference && (
          <Form.Group controlId="phoneNumber" className="mt-3">
            <div className="row">
              <div className="col-sm-3"></div>

              <div className="col-12 col-sm-6">
                <div className="row">
                  <h5 className="text-start">Mobile Number:</h5>
                </div>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    // <PhoneInput
                    //   defaultCountry="BD"
                    //   defaultValue="01"
                    //   placeholder="Enter phone number"
                    //   value={value}
                    //   isInvalid={!!errors.phoneNumber}
                    //   onChange={onChange}
                    // />
                    // <Input
                    // country="BD"
                    // international
                    // withCountryCallingCode
                    //   placeholder="Enter Your Phone Number (Ex. 01)"
                    //   isInvalid={!!errors.phoneNumber}
                    //   value={value}
                    //   onChange={onChange}
                    // />
                    // <Form.Control
                    //   {...field}
                    //   placeholder="Enter Your Monthly Income"
                    //   isInvalid={!!errors.phoneNumber}
                    //   size="lg"
                    // />
                    <Controller
                      render={({ field }) => (
                        <Form.Control
                          {...field}
                          placeholder="Enter Your Mobile Number"
                          // isInvalid={!!errors.email}
                          size="lg"
                          className={cx(style.container_formControl)}
                        />
                      )}
                      control={control}
                      name="phoneNumber"
                    />
                  )}
                  control={control}
                  name="phoneNumber"
                  // rules={{ required: true }}
                />
                {errors.phoneNumber && (
                  // <Form.Control.Feedback type="invalid">
                  //   {errors.phoneNumber.message || "phoneNumber is not valid"}
                  // </Form.Control.Feedback>
                  <p
                    className="text-center"
                    style={{
                      color: "red",
                      fontSize: "14px",
                      fontFamily: "Noto Sans",
                    }}
                  >
                    {errors.phoneNumber.message || "phoneNumber is not valid"}
                  </p>
                )}
              </div>
              <div className="col-3"></div>
            </div>
          </Form.Group>
        )} */}
        <Form.Group controlId="email" className="mt-3">
          <div className="row">
            <div className="col-sm-3"> </div>
            <div className="col-12 col-sm-6">
              <div className="row">
                <h5 className="text-start">Email:</h5>
              </div>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Email Address"
                    // isInvalid={!!errors.email}

                    size="lg"
                    className={cx(style.container_formControl)}
                  />
                )}
                control={control}
                name="email"
              />
              {errors.email && (
                // <Form.Control.Feedback type="invalid">
                //   {errors.email.message || "customerName is not valid"}
                // </Form.Control.Feedback>
                <p
                  className="text-center"
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Noto Sans",
                  }}
                >
                  {errors.email.message || "customerName is not valid"}
                </p>
              )}
            </div>
            <div className="col-sm-3"></div>
          </div>
        </Form.Group>
        <Form.Group controlId="phoneNumber" className="mt-3">
          <div className="row">
            <div className="col-sm-3"> </div>
            <div className="col-12 col-sm-6">
              <div className="row">
                <h5 className="text-start">Phone Number:</h5>
              </div>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Phone Number"
                    // isInvalid={!!errors.email}

                    size="lg"
                    className={cx(style.container_formControl)}
                  />
                )}
                control={control}
                name="phoneNumber"
              />
              {errors.phoneNumber && (
                // <Form.Control.Feedback type="invalid">
                //   {errors.email.message || "customerName is not valid"}
                // </Form.Control.Feedback>
                <p
                  className="text-center"
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Noto Sans",
                  }}
                >
                  {errors.phoneNumber.message || "Phone Number is not valid"}
                </p>
              )}
            </div>
            <div className="col-sm-3"></div>
          </div>
        </Form.Group>
      </Form>
      <div className="row  mt-4">
        <div className="col-sm-1"></div>
        {!companyReference && (
          <div
            className={`col justify-content-${
              companyReference ? "center" : "start"
            }`}
            style={{ display: "flex", justifyContent: "start" }}
          >
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
        )}
        <div
          className={`col justify-content-${
            companyReference ? "center mt-3" : "end"
          }`}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit(onFormSubmit, onErrors)}
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
            Submit
          </Button>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
}
