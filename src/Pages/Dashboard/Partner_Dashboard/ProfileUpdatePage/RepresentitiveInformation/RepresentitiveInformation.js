import React from "react";
import { useForm, Controller } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import style from "./RepresentitiveInformation.module.scss";
import _ from "lodash";
import cx from "classnames";

const representativeSchema = Joi.object({
  representativeName: Joi.string().required(),
  representativeMobile: Joi.string().required(),
  representativeEmail: Joi.string().required(),
  representativeAddress: Joi.string().required(),
});

function RepresentativeInfo({
  activeStep,
  steps,
  handleNext,
  state,
  dispatch,
  handleBack,
  partner,
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
    <form
      onSubmit={handleSubmit(onFormSubmit, onErrors)}
      className={style.container}
    >
      <div class={cx("titel", style.container_titel)}>
        <label for="title" class="titellabel">
          Please Update Company Information
        </label>
      </div>
      <div className={style.container_group}>
        <label for="name" className={style.container_label}>
          Representative Name:
        </label>
        {/* <input
          id="name"
          type="text"
          defaultValue={partner.representativeName}
          className={style.container_input}
          placeholder="Enter Your Name"
          {...register("representativeName")}
          // onChange={handlename}
        /> */}
        <Controller
          name="representativeName"
          control={control}
          defaultValue={partner.representativeName}
          render={({ field }) => (
            <input
              className={style.container_input}
              placeholder="Enter Your Name"
              {...field}
            />
          )}
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
      <div className={style.container_group}>
        <label for="mobile" className={style.container_label}>
          Representative Mobile:
        </label>
        {/* <input
          id="pass"
          type="text"
          className={style.container_input}
          data-type="number"
          placeholder="Enter Your Mobile no."
          {...register("representativeMobile")}
          // onChange={handleMobile}
        />{" "} */}
        <Controller
          name="representativeMobile"
          control={control}
          defaultValue={partner.representativeMobile}
          render={({ field }) => (
            <input
              className={style.container_input}
              placeholder="Enter Your Mobile no."
              {...field}
            />
          )}
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
      <div className={style.container_group}>
        <label for="email" className={style.container_label}>
          Representative Email:
        </label>
        {/* <input
          id="pass"
          type="text"
          className={style.container_input}
          data-type="number"
          placeholder="Enter Your Email Address"
          {...register("representativeEmail")}
          // onChange={handleMobile}
        />{" "} */}
        <Controller
          name="representativeEmail"
          control={control}
          defaultValue={partner.representativeEmail}
          render={({ field }) => (
            <input
              className={style.container_input}
              placeholder="Enter Your Email Address"
              {...field}
            />
          )}
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

      <div className={style.container_group}>
        <label for="location" className={style.container_label}>
          Representative Address:
        </label>
        {/* <input
          id="address"
          type="text"
          className={style.container_input}
          placeholder="Enter Your Address"
          {...register("representativeAddress")}
          // onChange={handleaddress}
        />{" "} */}
        <Controller
          name="representativeAddress"
          control={control}
          defaultValue={partner.representativeAddress}
          render={({ field }) => (
            <input
              className={style.container_input}
              placeholder="Enter Your Address"
              {...field}
            />
          )}
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
      <div className={style.container_btn_group}>
        <button
          onClick={handleSubmit(onFormSubmit, onErrors)}
          className={style.container_btn_group_button}
        >
          Update
        </button>
      </div>
    </form>
  );
}

export default RepresentativeInfo;
