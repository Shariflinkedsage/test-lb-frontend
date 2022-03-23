import React, { useState } from "react";
import cx from "classnames";
import userService from '../../Services/userService'
import style from "./VerifyContactNumber.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import authService from "../../Services/authService";
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


function VerifyContactNumber() {
  const {
    setError,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(otpVerificationSchema),
    shouldFocusError: true,
  });
  const history = useHistory()
  const [otp, setOtp] = useState("")
  function handleotp(e) {
    setOtp(e.target.value)
    //console.log(e.target.value);
  }
  const onFormSubmit = async (data) => {
    try {
      if (data.otp && data.user._id) {
        const loggedInUser = await userService.verifyToken(data.otp, data.user._id);
        //console.log("response", loggedInUser);
        if (loggedInUser.success) {

          authService.logout();
          history.replace("/signin");
        } else {
          setError("otp", {
            type: "manual",
            message: "please provide valid otp",
          });
        }
      }
    } catch (e) {
      if (e.response) {
        //console.log("error in signup", e.response.data);
        setError("otp", { type: "manual", message: e.response.data.message });
      }
    }
    if (_.isEmpty(errors)) {
      //console.log("don't have any erro");
    }
  };
  const location = useLocation()
  //console.log("hello here")
  //console.log(location.state)
  return (
    <div class="col-md-10 mx-auto p-5 d-flex justify-content-center">
      <div class="card p-5" style={{ width: "50%" }}>
        <div class="sign-up-form">
          <div class={cx("titel", style.titel)}>
            <label for="title" class="titellabel">
              Contact Verification
            </label>
          </div>
          <div className="row">
            <p className="text-center">
              A Verification Code is sent to {location.state.user.phoneNumber}
              <span style={{ color: "blue" }}></span>
            </p>
            <p className="text-center">
              Please Provide that verification code here:
            </p>
          </div>
          <div class={cx("group", style.input)}>
            <input
              id="otp"
              type="number"
              data-type="text"
              class={cx("input", style.input)}
              placeholder="Please Provid Your Verification Code"
              onChange={(e) => { handleotp(e) }}
            />
          </div>

          <div className={style.btn_group}>
            <button
              class={cx("btn_group", style.btn_group_button)}
              type="submit"
              value="Submit"
              onClick={() => { onFormSubmit({ otp: otp, user: location.state.user }) }}
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
