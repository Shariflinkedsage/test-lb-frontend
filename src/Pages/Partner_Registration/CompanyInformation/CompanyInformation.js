import React, { useState } from "react";
import _ from "lodash";
import { Link} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import Button from "@mui/material/Button";
import style from "./CompanyInformation.module.scss";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { makeStyles } from "@material-ui/core/styles";
import "./GlobalCssSlider.scss";
import cx from "classnames";

const companySchema = Joi.object({
  companyName: Joi.string().required(),
  companyAddress: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  phoneNumber: Joi.string()
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
  location: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});

function CompanyInformation({
  activeStep,
  steps,
  handleNext,
  state,
  dispatch,
}) {
  const useStyles = makeStyles((theme) => ({
    button: {
      position: "relative",
      width: "100%",
      height: "4rem",
      border: "1px solid black",
      borderRadius: "2rem",
      margin: "auto",
    },
    button_text: {
      margin: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    button_icon: {
      width: "4rem",
      height: "4rem",
      padding: ".5rem",
      zIndex: "200",
      position: "absolute",
      margin: "0",
      top: "50%",
      left: ".2rem",
      transform: "translate(0%, -50%)",
    },
    input: {
      minHeight: "100px",
    },
    datepicker: {
      // padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();
  const [representativeData, setrepresentativeData] = useState({
    ...state,
    location: "Please Select Your Location",
  });
  //   const [partnerBasicInfo, setPartnerBasicInfo] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(companySchema),
    // resolver: joiResolver(`${companyReference ? schemaWithReference : schema}`),
    //   {
    //   customerName: "",
    //   email: "",
    //   phoneNumber: "",
    // },
    shouldFocusError: true,
  });

  const onFormSubmit = async (data) => {
    //console.log("hello");
    // let application = { ...state, ...data };
    // //console.log("state in contract information", application);
    // //console.log("userId for user", userId);
    // if (state) {
    // }
    // dispathch({ type: "increment", payload: application });
    // handleNext();
    let partnerBasicInfo = { ...state, ...data };
    //console.log(" error", errors);

    if (_.isEmpty(errors)) {
      //console.log("don't have any erro");
      //console.log("partner basic info", partnerBasicInfo);
      dispatch({ type: "saveCompanyInfo", payload: partnerBasicInfo });
      handleNext();
    }
  };
  // const onBackButtonPress = async (data) => {
  // handleBack();
  // };
  const onErrors = (errors) => {
    console.error(errors);
    //console.log(errors);
  };

  //   useEffect(() => {}, [representativeData]);

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit, onErrors)}
      className={cx(style.row)}
    >
      {/* <div className={style.row_group}>
        <label for="name" className={style.label}>
          Name:
        </label>
        <br></br>
        <input
          id="name"
          type="text"
          className={style.input}
          placeholder="Enter Your Name"
          {...register("name")}
          // onChange={handlename}
        />
      </div> */}
      {/* <div className={style.row_group}>
        <label for="mobile" className={style.label}>
          Mobile:
        </label>
        <br></br>
        <input
          id="pass"
          type="text"
          className={style.input}
          data-type="number"
          placeholder="Enter Your Mobile no."
          // onChange={handleMobile}
        />{" "}
      </div> */}
      <div className={style.row_group}>
        {/* <label for="location" className={style.label}>
          Organization Name:
        </label>
        <br></br> */}
        {/* <input
          id="address"
          type="text"
          className={style.input}
          placeholder="Enter Your Organization Name"
          {...register("companyName")}
        /> */}
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.companyName}
              {...field}
              id="standard-error"
              placeholder="Enter Your Organization Name"
              label="Organization Name"
              // defaultValue="Hello World"
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="companyName"
        />
        {errors && errors.companyName && (
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
            {errors.companyName.message}
          </p>
        )}
      </div>
      <div className={style.row_group}>
        {/* <label for="location" className={style.label}>
          Organization Address:
        </label>
        <br></br>
        <input
          id="address"
          type="text"
          className={style.input}
          placeholder="Enter Your Organization Address"
          {...register("companyAddress")}
          // onChange={handlecompanyaddres}
        />{" "} */}
        <br />
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.companyAddress}
              {...field}
              id="standard-error"
              placeholder="Enter Your Organization Address"
              label="Organization Address"
              // defaultValue="Hello World"
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="companyAddress"
        />
        {errors && errors.companyAddress && (
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
            {errors.companyAddress.message}
          </p>
        )}
      </div>
      <div className={style.row_group}>
        {/* <label for="location" className={style.label}>
          Organization Email:
        </label>
        <br></br>
        <input
          id="address"
          type="text"
          className={style.input}
          placeholder="Enter Your Organization Email"
          {...register("email")}
          // onChange={handlecompanyaddres}
        />{" "} */}
        <br />
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.email}
              {...field}
              id="standard-error"
              placeholder="Enter Your Organization email"
              label="Organization Email"
              // defaultValue="Hello World"
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="email"
        />
        {errors && errors.email && (
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
            {errors.email.message}
          </p>
        )}
      </div>
      <br />
      <div className={style.row_group}>
        {/* <label for="location" className={style.label}>
          Organization Mobile:
        </label>
        <br></br>
        <input
          id="address"
          type="text"
          className={style.input}
          placeholder="Enter Your Organization Email"
          {...register("phoneNumber")}
          // onChange={handlecompanyaddres}
        />{" "} */}
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.email}
              {...field}
              id="standard-error"
              placeholder="Enter Your Organization mobile number"
              label="Organization Mobile No."
              // defaultValue="Hello World"
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="phoneNumber"
        />
        {errors && errors.phoneNumber && (
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
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <br />
      <div className={style.row_group}>
        {/* <label for="location" className={style.label}>
          Location:
        </label>
        <br></br> */}
        {/* <select
          className={style.location}
          name="location"
          defaultValue={representativeData.location}
          value={representativeData.location}
          {...register("location")}
        >
          <MenuItem value="Barisal">Barisal</MenuItem>
          <MenuItem value="Chittagong">Chittagong</MenuItem>
          <MenuItem value="Dhaka">Dhaka</MenuItem>
          <MenuItem value="Khulna">Khulna</MenuItem>
          <MenuItem value="Mymensingh">Mymensingh</MenuItem>
          <MenuItem value="Rajshahi">Rajshahi</MenuItem>
          <MenuItem value="Rangpur">Rangpur</MenuItem>
          <MenuItem value="Sylhet">Sylhet</MenuItem>
        </select> */}
        <Controller
          render={({ field }) => (
            <FormControl
              variant="standard"
              sx={{ ps: 2, width: "100%" }}
              {...field}
            >
              <InputLabel id="demo-simple-select-standard-label" {...field}>
                Location
              </InputLabel>
              <Select
                {...field}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                // value={age}
                // onChange={handleChange}
                label="Age"
                sx={{ display: "flex", flexDirection: "column" }}
                error={errors.location}
              >
                <MenuItem value="Barisal">Barisal</MenuItem>
                <MenuItem value="Chittagong">Chittagong</MenuItem>
                <MenuItem value="Dhaka">Dhaka</MenuItem>
                <MenuItem value="Khulna">Khulna</MenuItem>
                <MenuItem value="Mymensingh">Mymensingh</MenuItem>
                <MenuItem value="Rajshahi">Rajshahi</MenuItem>
                <MenuItem value="Rangpur">Rangpur</MenuItem>
                <MenuItem value="Sylhet">Sylhet</MenuItem>
              </Select>
            </FormControl>
          )}
          control={control}
          name="location"
          defaultValue="Dhaka"
        />
        {errors && errors.location && (
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
            {errors.location.message}
          </p>
        )}
      </div>
      <br />
      <div className={style.row_group}>
        {/* <label for="pass" className={style.label}>
          Password:
        </label>
        <br></br>
        <input
          id="pass"
          type="password"
          className={style.input}
          data-type="password"
          placeholder="Enter your Password"
          {...register("password")}
          // onChange={handlepassword}
        /> */}
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.password}
              {...field}
              id="standard-error"
              placeholder="Enter Your Password"
              label="Password"
              // defaultValue={partnerData && partnerData.companyName}
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="password"
        />
        {errors && errors.password && (
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
            {errors.password.message}
          </p>
        )}
      </div>
      <br />
      <div className={style.row_group}>
        {/* <label for="pass" className={style.label}>
          Confirm Password:
        </label>
        <br></br> */}
        {/* <input
          id="pass"
          type="password"
          className={style.input}
          data-type="password"
          placeholder="Enter your Password"
          {...register("confirmPassword")}
          // onChange={handlepassword}
        /> */}
        <Controller
          render={({ field }) => (
            <TextField
              error={errors.confirmPassword}
              {...field}
              id="standard-error"
              placeholder="Confirm Your Password"
              label="Password"
              // defaultValue={partnerData && partnerData.companyName}
              variant="standard"
              sx={{ width: "100%" }}
            />
          )}
          control={control}
          name="confirmPassword"
        />
        {errors && errors.confirmPassword && (
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
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      {/* <div className={style.row_group}>
        <label for="location" className={style.label}>
          Address:
        </label>
        <br></br>
        <input
          id="address"
          type="text"
          className={style.input}
          placeholder="Enter Your Address"
          // onChange={handleaddress}
        />{" "}
      </div> */}

      <Button
        variant="contained"
        onClick={handleSubmit(onFormSubmit, onErrors)}
        sx={{ mt: 3, ml: 1 }}
        style={{ marginTop: "24px" }}
      >
        {activeStep === steps.length - 1 ? "Register" : "Next"}
      </Button>
      <div className="d-flex justify-content-center mt-4">
        <div className="text-center mr-3">Have an account?</div>
        <Link to="/signin" className="ml-3">
          Sign In
        </Link>
      </div>
      <div className="d-flex justify-content-center mt-1">
        <div className="text-center mr-3">Don't have an account?</div>
        <Link to="/signup" className="ml-3">
          Create an user account
        </Link>
      </div>
      {/* <button
        class="btn_group mt-5"
        type="submit"
        value="Submit"
        onClick={handleSubmit(onFormSubmit, onErrors)}
      >
        Sign Up
      </button> */}
    </form>
  );

  function handlelocation(e) {
    //console.log(e.target.value);
    setrepresentativeData(e.target.value);
  }
}

export default CompanyInformation;
