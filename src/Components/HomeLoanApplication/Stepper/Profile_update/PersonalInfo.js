import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landlord from "../../../../images/profession/Landlord.svg";
import Salaried from "../../../../images/profession/Salaried.svg";
import Businessman from "../../../../images/profession/Businessman.svg";
import cx from "classnames";
import styles from "./PersonalInfo.module.scss";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory, useLocation } from "react-router-dom";
import httpService from "../../../../Services/httpService";

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
  presentAddressDetails: Joi.string().required(),
  permanentAddressDetails: Joi.string().required(),
  nameEn: Joi.string().required(),
  fatherEn: Joi.string().required(),
  motherEn: Joi.string().required(),
  gender: Joi.string().required(),
  // phote: Joi.string().required(),
  dob: Joi.date().required(),
});

export default function Profession({
  userId,
  state,
  handleNext,
  dispathch,
  handleBack,
}) {
  //console.log("state in contract information 111", state);
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [profession, setProfession] = useState("empty");
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),


    defaultValues: {
      presentAddressDetails: state.presentAddressDetails,
      permanentAddressDetails:state.permanentAddressDetails,
      nameEn:state.name,
      fatherEn:state.fathersName,
      motherEn:state.mothersName,
      dob:state.dateOfBirth,
      gender:state.gender,
    },
    // shouldFocusError: true,
  });
  const onFormSubmit = async (data) => {
    //console.log("zzzzzzzzz",data)
    dispathch({ type: "increments", payload: data });
    handleNext();
    
  };
  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => console.error(errors);

  useEffect(() => {
    window.scroll(0,0)
  },[])

  return (
    <div className="container personal-info">
      
      <Form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="pl-5 pr-5"
      >
        <Form.Group controlId="salary" className="mt-3">
          <div className="row">
            <div className="col-sm-1 phone-none"></div>

            <div className="col-sm-10 d-flex"  class={state.name?cx("nameee",styles.container_nameee) : cx("write",styles.container_write)}>
              <label>Name:</label>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Name"
                    isInvalid={!!errors.nameEn}
                    disabled = {state.name? true : false}
                    // size="lg"
                  />
                )}
                control={control}
                name="nameEn"
              />
              {errors.nameEn && (
                <Form.Control.Feedback type="invalid">
                  {errors.nameEn.message || "Name is not valid"}
                </Form.Control.Feedback>
              )}
            </div>
            <div className="col-sm-10 d-flex"  class={state.fathersName?cx("nameee",styles.container_nameee) : cx("write",styles.container_write)}>
              <label>Father's name:</label>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Father's Name"
                    isInvalid={!!errors.fatherEn}
                    disabled = {state.fathersName? true : false}
                    // size="lg"
                  />
                )}
                control={control}
                name="fatherEn"
              />
              {errors.fatherEn && (
                <Form.Control.Feedback type="invalid">
                  {errors.fatherEn.message || "Father's Name is not valid"}
                </Form.Control.Feedback>
              )}
            </div>
            <div className="col-sm-10 d-flex"  class={state.mothersName?cx("nameee",styles.container_nameee) : cx("write",styles.container_write)}>
              <label>Mother's name:</label>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Mother's Name"
                    isInvalid={!!errors.motherEn}
                    disabled = {state.mothersName? true : false}
                    // size="lg"
                  />
                )}
                control={control}
                name="motherEn"
              />
              {errors.motherEn && (
                <Form.Control.Feedback type="invalid">
                  {errors.motherEn.message || "Mother's Name is not valid"}
                </Form.Control.Feedback>
              )}
            </div>
            <div className="col-sm-10 d-flex"  class={state.gender?cx("nameee",styles.container_nameee) : cx("write",styles.container_write)}>
              <label>Gender:</label>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Gender"
                    isInvalid={!!errors.gender}
                    disabled = {state.gender? true : false}
                    // size="lg"
                  />
                )}
                control={control}
                name="gender"
              />
              {errors.gender && (
                <Form.Control.Feedback type="invalid">
                  {errors.gender.message || "Gender is not valid"}
                </Form.Control.Feedback>
              )}
            </div>
            <div className="col-sm-10 d-flex"  class={state.dateOfBirth?cx("nameee",styles.container_nameee) : cx("write",styles.container_write)}>
              <label>Date of Birth (mm/dd/yy):</label>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Date of Birth"
                    isInvalid={!!errors.dob}
                    disabled = {state.dateOfBirth? true : false}
                    // size="lg"
                  />
                )}
                control={control}
                name="dob"
              />
              {errors.dob && (
                <Form.Control.Feedback type="invalid">
                  {errors.dob.message || "Date of Birth is not valid"}
                </Form.Control.Feedback>
              )}
            </div>
            <div className="col-sm-10 d-flex"  class={state.permanentAddressDetails?cx("nameee",styles.container_nameee) : cx("write",styles.container_write)}>
              <label>Permanent Address:</label>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Permanent Address"
                    isInvalid={!!errors.permanentAddressDetails}
                    disabled = {state.permanentAddressDetails? true : false}
                    // size="lg"
                  />
                )}
                control={control}
                name="permanentAddressDetails"
              />
              {errors.permanentAddressDetails && (
                <Form.Control.Feedback type="invalid">
                  {errors.permanentAddressDetails.message || "Permanent Address is not valid"}
                </Form.Control.Feedback>
              )}
            </div> 
              <div className="col-sm-10 d-flex" class={cx("write",styles.container_write)}>
              <label>Current Address:</label>
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Current Address"
                    isInvalid={!!errors.presentAddressDetails}
                    // size="lg"
                  />
                )}
                control={control}
                name="presentAddressDetails"
              />
              {errors.presentAddressDetails && (
                <Form.Control.Feedback type="invalid">
                  {errors.presentAddressDetails.message || "Current Address is not valid"}
                </Form.Control.Feedback>
              )}
            </div>
                   
            
            <div className="col-sm-1"></div>
          </div>
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
