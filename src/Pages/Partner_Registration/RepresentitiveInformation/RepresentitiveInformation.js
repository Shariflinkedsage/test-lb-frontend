import React from "react";
import { useForm, Controller } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import style from "./RepresentitiveInformation.module.scss";
import { partnerRepresentativeInfoViewModel } from "../partner_model";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import _ from "lodash";
import TextField from "@mui/material/TextField";

const representativeSchema = Joi.object({
  representativeName: Joi.string().required(),
  // representativeMobile: Joi.string().required(),
  // representativeEmail: Joi.string().required(),
  representativeEmail: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  representativeMobile: Joi.string()
    .pattern(/^[0-9]+$/)
    .length(11)
    .required()
    .messages({
      "string.base": `phoneNumber should be a type of Number`,
      "string.length": `phoneNumber length should be 11 Character`,
      "string.empty": `phoneNumber cannot be an empty field`,
      "any.required": `phoneNumber is a required field`,
      "string.pattern.base": `phoneNumber should be a type of Number`,
    }),
  representativeAddress: Joi.string().required(),
});

function RepresentitiveInformation({
  activeStep,
  steps,
  handleNext,
  state,
  dispatch,
  handleBack,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(representativeSchema),
    // resolver: joiResolver(`${companyReference ? schemaWithReference : schema}`),

    defaultValues: partnerRepresentativeInfoViewModel,
    //   {
    //   customerName: "",
    //   email: "",
    //   phoneNumber: "",
    // },
    shouldFocusError: true,
  });

  const onFormSubmit = async (data) => {
    //console.log("hello");
    let application = { ...state, ...data };
    // //console.log("state in contract information", application);
    // //console.log("userId for user", userId);
    // if (state) {
    // }
    delete application.confirmPassword;
    if (_.isEmpty(errors)) {
      //console.log("don't have any erro");
      //console.log("partner representative info", application);
      dispatch({
        type: "saveCompanyRepresentativeInfo",
        payload: application,
      });
      //   handleNext();
    }
  };
  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => {
    console.error(errors);
    //console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)} className={style.row}>
      <div className={style.row_group}>
        {/* <label for="name" className={style.label}>
          Representative Name:
        </label>
        <br></br> */}
        {/* <input
          id="name"
          type="text"
          className={style.input}
          placeholder="Enter Your Name"
          {...register("representativeName")}
          // onChange={handlename}
        /> */}
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.representativeName}
              {...field}
              id="standard-error"
              placeholder="Enter Your Representative Name"
              label="Representative Name"
              // defaultValue="Hello World"
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="representativeName"
        />
        {errors && errors.representativeName && (
          <p
            className="start"
            style={{
              color: "red",
              fontFamily: "Noto Sans",
              width: "100%",
              margin: "0px",
              padding: "0px",
            }}
          >
            {errors.representativeName.message}
          </p>
        )}
      </div>
      <br />
      <div className={style.row_group}>
        {/* <label for="mobile" className={style.label}>
          Representative Mobile:
        </label>
        <br></br> */}
        {/* <input
          id="pass"
          type="text"
          className={style.input}
          data-type="number"
          placeholder="Enter Your Mobile no."
          {...register("representativeMobile")}
          // onChange={handleMobile}
        />{" "} */}
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.representativeName}
              {...field}
              id="standard-error"
              placeholder="Enter Your Representative Mobile No."
              label="Representative Mobile No."
              // defaultValue="Hello World"
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="representativeMobile"
        />
        {errors && errors.representativeMobile && (
          <p
            className="start"
            style={{
              color: "red",
              fontFamily: "Noto Sans",
              width: "100%",
              margin: "0px",
              padding: "0px",
            }}
          >
            {errors.representativeMobile.message}
          </p>
        )}
      </div>
      <br />
      <div className={style.row_group}>
        {/* <label for="email" className={style.label}>
          Representative Email:
        </label>
        <br></br>
        <input
          id="pass"
          type="text"
          className={style.input}
          data-type="number"
          placeholder="Enter Your Email Address"
          {...register("representativeEmail")}
          // onChange={handleMobile}
        />{" "} */}
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.representativeEmail}
              {...field}
              id="standard-error"
              placeholder="Enter Your Representative Email"
              label="Representative Email"
              // defaultValue="Hello World"
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="representativeEmail"
        />
        {errors && errors.representativeEmail && (
          <p
            className="start"
            style={{
              color: "red",
              fontFamily: "Noto Sans",
              width: "100%",
              margin: "0px",
              padding: "0px",
            }}
          >
            {errors.representativeEmail.message}
          </p>
        )}
      </div>
      <br />
      <div className={style.row_group}>
        {/* <label for="location" className={style.label}>
          Representative Address:
        </label>
        <br></br>
        <input
          id="address"
          type="text"
          className={style.input}
          placeholder="Enter Your Address"
          {...register("representativeAddress")}
          // onChange={handleaddress}
        />{" "} */}
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.representativeAddress}
              {...field}
              id="standard-error"
              placeholder="Enter Your Representative Address"
              label="Representative Address"
              // defaultValue="Hello World"
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="representativeAddress"
        />
        {errors && errors.representativeAddress && (
          <p
            className="start"
            style={{
              color: "red",
              fontFamily: "Noto Sans",
              width: "100%",
              margin: "0px",
              padding: "0px",
            }}
          >
            {errors.representativeAddress.message}
          </p>
        )}
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {/* {activeStep !== 0 && (
          <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
            Back
          </Button>
        )}
        {activeStep !== 0 && (
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 3, ml: 1 }}
          >
            {activeStep === steps.length - 1 ? "Register" : "Next"}
          </Button>
        )} */}
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit(onFormSubmit, onErrors)}
          sx={{ mt: 3, ml: 1 }}
        >
          {/* {activeStep === steps.length - 1 ? "Register" : "Next"} */}
          Register
        </Button>
      </Box>
    </form>
  );
}

export default RepresentitiveInformation;
