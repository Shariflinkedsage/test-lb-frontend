import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useForm, Controller } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import style from "./CompanyInformation.module.scss";
import cx from "classnames";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import "./GlobalCssSlider.scss";

const companySchema = Joi.object({
  companyName: Joi.string().required(),
  companyAddress: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  location: Joi.string().required(),
});

function CompanyInformation({ partner }) {
  const [partnerData, setPartnerData] = useState();
  //   const [partnerBasicInfo, setPartnerBasicInfo] = useState();
  const {
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
    //console.log(" error", errors);

    if (_.isEmpty(errors)) {
      //console.log("don't have any erro");
    }
  };
  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => {
    console.error(errors);
    //console.log(errors);
  };
  useEffect(() => {
    setPartnerData(partner);
    //console.log("partner in company information", partner);
  }, [partner]);
  return (
    <form
      onSubmit={handleSubmit(onFormSubmit, onErrors)}
      className={style.container}
    >
      <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
        <div class="card p-3 p-md-5" style={{ width: "80%" }}>
          <div class="sign-up-form">
            <div class={cx("titel", style.container_titel)}>
              <label for="title" class="titellabel">
                Please Update Company Information
              </label>
            </div>
            <div>
              {/* <label for="location" className={style.container_label}>
                Organization Name:
              </label>
              <br></br> */}
              <Controller
                render={({ field }) => (
                  <TextField
                    error={errors.companyName}
                    {...field}
                    id="standard-error"
                    placeholder="Enter Your Organization Name"
                    label="Organization Name"
                    // defaultValue={partnerData && partnerData.companyName}
                    variant="standard"
                    sx={{ width: "100%" }}
                  />
                )}
                control={control}
                name="companyName"
                defaultValue={partner.companyName}
              />
              {errors.companyName && (
                // <Form.Control.Feedback type="invalid">
                //   {errors.customerName.message || "customerName is not valid"}
                // </Form.Control.Feedback>
                <p
                  className="start"
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Noto Sans",
                  }}
                >
                  {errors.companyName.message || "customerName is not valid"}
                </p>
              )}
            </div>
            <div>
              {/* <label for="location" className={style.container_label}>
                Organization Address:
              </label>
              <br></br> */}
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
                defaultValue={partner.companyAddress}
              />
              {errors.companyAddress && (
                // <Form.Control.Feedback type="invalid">
                //   {errors.customerName.message || "customerName is not valid"}
                // </Form.Control.Feedback>
                <p
                  className="start"
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Noto Sans",
                  }}
                >
                  {errors.companyAddress.message ||
                    "customerAddress is not valid"}
                </p>
              )}
            </div>
            <div>
              {/* <label for="location" className={style.container_label}>
                Organization Email:
              </label>
              <br></br> */}
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
              {errors.companyName && (
                // <Form.Control.Feedback type="invalid">
                //   {errors.customerName.message || "customerName is not valid"}
                // </Form.Control.Feedback>
                <p
                  className="start"
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Noto Sans",
                  }}
                >
                  {errors.companyName.message || "customerName is not valid"}
                </p>
              )}
            </div>
            <div>
              {/* <label for="location" className={style.container_label}>
                Organization Mobile:
              </label>
              <br></br> */}
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
              {errors.companyName && (
                // <Form.Control.Feedback type="invalid">
                //   {errors.customerName.message || "customerName is not valid"}
                // </Form.Control.Feedback>
                <p
                  className="start"
                  style={{
                    color: "red",
                    fontSize: "14px",
                    fontFamily: "Noto Sans",
                  }}
                >
                  {errors.companyName.message || "customerName is not valid"}
                </p>
              )}
            </div>
            {/* <div>
              <label for="location" className={style.container_label}>
                Location:
              </label>
              <br></br>
              <select
                className={style.container_location}
                name="location"
                defaultValue={representativeData.location}
                {...register("location")}
              >
                <option value="Barisal">Barisal</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
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
            </div> */}
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
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"ten"}>Ten</MenuItem>
                    <MenuItem value={"ofdkvop"}>Twenty</MenuItem>
                    <MenuItem value={"ofdkvop"}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              )}
              control={control}
              name="location"
              defaultValue="ten"
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
            <div className={style.container_btn_group}>
              <button
                variant="contained"
                onClick={handleSubmit(onFormSubmit, onErrors)}
                sx={{ mt: 3, ml: 1 }}
                className={style.container_btn_group_button}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );

  function handlelocation(e) {
    //console.log(e.target.value);
  }
}

export default CompanyInformation;
