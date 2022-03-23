import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import http from "../../../../Services/httpService";
import Usercontext from "../../../../Contexts/UserContexts";
import Preloader from "../../../Common/PreLoader";

const schema = Joi.object({
  verificationCode: Joi.string()
    .length(6)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.base": `"Verification Code" should be a type of 'Number'`,
      "string.length": `"Verification Code" length should be '6 Character'`,
      "string.empty": `"Verification Code" cannot be an empty field`,
      "any.required": `"Verification Code" is a required field`,
    }),
});

export default function ContactVerification({
  state,
  handleNext,
  dispathch,
  handleBack,
  userId,
  setIsVerified,
  isVerified,
  companyReference,
  setuserId,
}) {
  const [loggedInUser, setloggedInUser] = useContext(Usercontext);
  const [verified, setVerified] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [preloaderVar, setPreloaderVar] = useState(false)
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),

    defaultValues: {
      verificationCode: "",
    },
    // shouldFocusError: true,
  });
  const onFormSubmit = async (data) => {
    setPreloaderVar(true)
    // //console.log("hello");
    // //console.log(data);
    // //console.log("userId", userId);
    // //console.log("verification", verificationCode);
    setDisabled(true);
    const { data: applicationResponse } = await http.post(
      `${process.env.REACT_APP_API_URL}/users/verify-otp`,
      {
        token: data.verificationCode,
        userId: userId,
        companyReference,
        loggedInUserPhoneNumber: loggedInUser.phoneNumber,
      }
    );
    if(preloaderVar) setPreloaderVar(false)
    // let application = { ...state, ...data };
    //console.log("verify api response", applicationResponse);
    // dispathch({ type: "increment", payload: application });
    /*if  otp is verified and data is found in bdjobs database 
    then user id will be updated and application will be submitted otherwise  */
    if (applicationResponse.success) {
      const { data: userId } = applicationResponse;
      /*if  otp is verified but data is not found in bdjobs database 
    then no user will be created . and 
    user id will be null  */
      if (userId) {
        setuserId(userId);
      }
      handleNext();
      setVerified(true);
      setIsVerified(true);
      setDisabled(false);
    } else {
      setVerified(false);
      setIsVerified(false);
      setDisabled(false);
    }
  };
  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => console.error(errors);

  return (
    <div className="container">
      {
        preloaderVar?
        <Preloader />:null
      }
      {/* <div className={"list list row d-flex justify-content-center"}>
        <p
          style={{
            marginBottom: 10,
            fontWeight: 500,
            textAlign: "center",
            fontSize: 26,
            color: "black",
          }}
        >
          Please Seletct your Profession
        </p>
        {!profession ? (
          <p
            className="text-center"
            style={{ color: "red", fontSize: "14px", fontFamily: "Noto Sans" }}
          >
            A Profession must be selected
          </p>
        ) : (
          ""
        )}
      </div> */}

      <Form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="pl-5 pr-5"
      >
        <Form.Group controlId="verificationCode" className="mt-3">
          <div className="row">
            <div className="col-sm-3"></div>

            <div className="col">
              <div className="row">
                <p className="text-center">
                  A Verification Code is sent to{" "}
                  <span style={{ color: "blue" }}>
                    {companyReference ? state.phoneNumber : state.email}
                  </span>
                </p>
                <p className="text-center">
                  Please Provide that verification code here:
                </p>
              </div>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your OTP Here"
                    isInvalid={!!errors.verificationCode}
                    size="lg"
                  />
                )}
                control={control}
                name="verificationCode"
              />
              {errors.verificationCode && (
                <Form.Control.Feedback type="invalid">
                  {errors.verificationCode.message ||
                    "verificationCode is not valid"}
                </Form.Control.Feedback>
              )}
              {!verified && !errors.verificationCode && (
                <p
                  className="text-center"
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Noto Sans",
                  }}
                >
                  {"Please Provide Valid Verification Code"}
                </p>
              )}
            </div>
            <div className="col-sm-3"></div>
          </div>
        </Form.Group>
      </Form>
      <div className="row  mt-4">
        <div className="col-1"></div>
        {/* <div
          className="col justify-content-start"
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
        </div> */}
        <div
          className="col justify-content-center"
          style={{ display: "flex", justifyContent: "end" }}
        >
          {" "}
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit(onFormSubmit, onErrors)}
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
            disabled={disabled}
          >
            Verify
          </Button>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
