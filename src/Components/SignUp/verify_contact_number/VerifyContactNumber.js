import React from "react";
import cx from "classnames";
import _ from "lodash";
import style from "./VerifyContactNumber.module.scss";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, Controller } from "react-hook-form";
import http from "../../../Services/httpService";
import userService from "../../../Services/userService";
import { useLocation, useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
const otpVerificationSchema = Joi.object({
  otp: Joi.string()
    .required()
    .length(6)
    .pattern(/^[0-9]+$/)
    .messages({
      "string.base": `"Verification Code" should be a type of 'Number'`,
      "string.length": `"Verification Code" length should be '6 Character'`,
      "string.empty": `"Verification Code" cannot be an empty field`,
      "any.required": `"Verification Code" is a required field`,
      "string.pattern.base": `"Verification Code" should be a type of 'Number'`,
    }),
});

function VerifyContactNumber({ user, setUser }) {
  const history = useHistory();
  const location = useLocation();
  let { from, reqMinMonthlyIncome, catagory } = location.state || {
    from: { pathname: "/" },
  };

  function handleotp(e) {
    //console.log(e.target.value);
  }
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(otpVerificationSchema),
    // resolver: joiResolver(`${companyReference ? schemaWithReference : schema}`),

    // defaultValues: partnerRepresentativeInfoViewModel,
    //   {
    //   customerName: "",
    //   email: "",
    //   phoneNumber: "",
    // },
    shouldFocusError: true,
  });

  const onFormSubmit = async (data) => {
    //console.log("hello");
    let { from, phone, reqMinMonthlyIncome, catagory } = location.state || {
      from: "/",
      phone: "",
    };
    let { phoneNumber, password } = user;
    try {
      //console.log("user", user);
      if (user && user.id) {
        const loggedInUser = await userService.verifyToken(data.otp, user.id);
        //console.log("response", loggedInUser);
        if (loggedInUser.success) {
          let { token, _id } = loggedInUser.data && loggedInUser.data;
          history.push({
            pathname: "/signin",
            state: {
              reqMinMonthlyIncome,
              catagory,
              phone: phone == "" ? phone : loggedInUser.data.phoneNumber,
              from,
              password,
              isRegistered: true,
            },
          });
          localStorage.setItem("token", token);
          http.setJwt(token);
        } else {
          setError("otp", {
            type: "manual",
            message: "please provide valid otp",
          });
        }

        // //console.log("from", from);
        // localStorage.setItem("token", token);
        // http.setJwt(token);
      }
    } catch (e) {
      if (e.response) {
        //console.log("error in signup", e.response.data);
        // const newUser = { ...user };
        // newUser.error.message = e.response.data && e.response.data.message;
        setError("otp", { type: "manual", message: e.response.data.message });
      }
    }

    // //console.log("state in contract information", application);
    // //console.log("userId for user", userId);
    // if (state) {
    // }
    // delete application.confirmPassword;
    if (_.isEmpty(errors)) {
      //console.log("don't have any erro");
      // //console.log("partner representative info", application);
      //   handleNext();
    }
  };
  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => {
    console.error(errors);
    //console.log("error in contract information", errors);
  };
  return (
    <div class="col-md-10 mx-auto p-2 p-md-5 mt-2 mt-md-5 d-flex justify-content-center align-items-center">
      <div class="card p-2 p-md-5 ">
        <div class="sign-up-form">
          <div class={cx("titel", style.titel)}>
            <label for="title" class="titellabel text-center">
              Contact Verification
            </label>
          </div>
          <div className="row">
            <p className="text-center">
              A Verification Code is sent to {user.phoneNumber}
              <span style={{ color: "blue" }}></span>
            </p>
            <p className="text-center">
              Please Provide that verification code here:
            </p>
          </div>
          {/* <div class={cx("secondtitel", style.secondtitel)}>
            <label for="title" class="titellabel">
              Please Provide that verification code here:
            </label>
          </div> */}
          {/* <Controller
            name="otp"
            control={control}
            render={({ field }) => (
              <input
                className={style.input}
                placeholder="Enter Your Verification Code"
                {...field}
              />
            )}
          /> */}
          <Controller
            render={({ field }) => (
              <TextField
                error={errors.companyName}
                {...field}
                id="standard-error"
                placeholder="Please Enter Your Verification Code"
                label="Verification Code"
                // defaultValue="Hello World"
                variant="standard"
                sx={{ width: "100%" }}
              />
            )}
            control={control}
            name="otp"
          />

          {errors && errors.otp && (
            <p
              className="start"
              style={{
                color: "red",
                fontFamily: "Noto Sans",
                width: "100%",
                margin: "0px",
                padding: "0px",
                textAlign: "center",
              }}
            >
              {errors.otp.message}
            </p>
          )}

          <div className={style.btn_group}>
            <button
              class={cx("btn_group", style.btn_group_button)}
              type="submit"
              value="Submit"
              onClick={handleSubmit(onFormSubmit, onErrors)}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyContactNumber;
