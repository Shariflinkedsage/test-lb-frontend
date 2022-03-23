import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landlord from "../../../../images/profession/Landlord.svg";
import Salaried from "../../../../images/profession/Salaried.svg";
import Businessman from "../../../../images/profession/Businessman.svg";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import style from "./Profession.module.scss";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory, useLocation } from "react-router-dom";
import httpService from "../../../../Services/httpService";
import Preloader from "../../../Common/PreLoader";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { companyName } from "../../../../Utils/companyName";

const filter = createFilterOptions();
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
});

export default function Profession({
  userId,
  state,
  handleNext,
  dispathch,
  handleBack,
}) {
  //console.log("state in contract information", state);
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [preloaderVar, setPreloaderVar] = useState(false);
  const [value, setValue] = useState("");
  const [valueOrg, setValueOrg] = useState(false);
  const [profession, setProfession] = useState("empty");
  const [professionFlag, setProfessionFlag] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),

    defaultValues: {
      salary: "",
      // organizationName: "",
    },
    // shouldFocusError: true,
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  function setProfessionfun() {
    setProfession("salaried");
    setProfessionFlag(false);
  }
  function setProfessionFun() {
    setProfession("business");
    setValueOrg(false);
  }
  const onFormSubmit = async (data) => {
    if (!value) setValueOrg(true);
    else setValueOrg(false);
    //console.log("sssssssssssssss", profession);
    if (profession === "empty") setProfessionFlag(true);
    else setProfessionFlag(false);

    if (profession && profession !== "empty" && value && value.length > 0) {
      let application = { ...state, profession, ...data };

      //console.log("state in contract informationnnnn", application);

      setPreloaderVar(true);
      if (!userId) {
        application.organizationName = value;
        setPreloaderVar(false);
        if (location.state.reqMinMonthlyIncome <= application.salary) {
          dispathch({ type: "increment", payload: application });
          handleNext();
        } else {
          history.push({
            pathname: "/suggested-products",
            state: { ...location.state, clientSalary: data.salary },
            state: { ...location.state, clientSalary: application.salary },
          });
        }
      } else {
        const { data: result } = await httpService.post(
          `${process.env.REACT_APP_API_URL}/users/updateProfile/${userId}`,
          {
            customer: {
              profession: application.profession,
              organizationName: value,
              salary: application.salary,
            },
          }
        );
        if (result) setPreloaderVar(false);
        if (result && result.success) {
          if (location.state.reqMinMonthlyIncome <= data.salary) {
            dispathch({ type: "increment", payload: application });
            handleNext();
          } else {
            history.push({
              pathname: "/suggested-products",
              state: { ...location.state, clientSalary: data.salary },
            });
          }
        }
      }
    }
  };
  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => console.error(errors);

  return (
    <div className="container">
      {preloaderVar ? <Preloader /> : null}
      <div className={"list list row d-flex justify-content-center"}>
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
        <div
          // height={200}
          className={cx(
            style.container_lazyload,
            profession === "salaried" ? style.container_lazyload_active : ""
          )}
          onClick={setProfessionfun}
        >
          <img src={Salaried} style={{ width: "100px", height: "100px" }} />
          <h6 className="text-center">Salaried</h6>
        </div>
        <div
          // height={200}
          className={cx(
            style.container_lazyload,
            profession === "business" ? style.container_lazyload_active : ""
          )}
          onClick={setProfessionFun}
        >
          <img src={Businessman} style={{ width: "100px", height: "100px" }} />
          <h6 className="text-center">Self employed</h6>
        </div>
        {/* <div
          // height={200}
          className={cx(
            style.container_lazyload,
            profession === "landlord" ? style.container_lazyload_active : ""
          )}
          onClick={() => setProfession("landlord")}
        >
          <img src={Landlord} style={{ width: "100px", height: "100px" }} />
          <h6 className="text-center">LandLord</h6>
        </div> */}

        {professionFlag ? (
          <p
            className="text-center"
            style={{ color: "red", fontSize: "14px", fontFamily: "Noto Sans" }}
          >
            A Profession must be selected
          </p>
        ) : (
          ""
        )}
        {valueOrg ? (
          <p
            className="text-center"
            style={{ color: "red", fontSize: "14px", fontFamily: "Noto Sans" }}
          >
            Organization name must be selected
          </p>
        ) : (
          ""
        )}
      </div>

      <Form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="pl-5 pr-5"
      >
        <Form.Group controlId="organizationName" className="mt-2">
          {profession === "salaried" || profession === "business" ? (
            <div className="row">
              <div className="col-sm-3 p-3"> </div>
              <div className="col auto-complate">
                {" "}
                <Autocomplete
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                    setValueOrg(false);
                  }}
                  filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const { inputValue } = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some(
                      (option) => inputValue === option
                    );
                    if (inputValue !== "" && !isExisting) {
                      filtered.push(inputValue);
                    }

                    return filtered;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  id="free-solo-with-text-demo"
                  options={companyName}
                  getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                      return option.inputValue;
                    }
                    // Regular option
                    return option;
                  }}
                  renderOption={(props, option) => <li {...props}>{option}</li>}
                  sx={{ width: 300 }}
                  freeSolo
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Enter Your Organization Name"
                    />
                  )}
                />
              </div>
              <div className="col-sm-3"></div>
            </div>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group controlId="salary" className="mt-3">
          <div className="row">
            <div className="col-sm-3"></div>

            <div className="col">
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your Monthly Income"
                    isInvalid={!!errors.salary}
                    size="lg"
                  />
                )}
                control={control}
                name="salary"
              />
              {errors.salary && (
                <Form.Control.Feedback type="invalid">
                  {errors.salary.message || "salary is not valid"}
                </Form.Control.Feedback>
              )}
            </div>
            <div className="col-sm-3"></div>
          </div>
        </Form.Group>

        {/*         
        
        <Form.Group controlId="organizationName" className="mt-2">
          {profession === "salaried" || profession === "business" ? (
            <div className="row">
              <div className="col-sm-3 p-3"> </div>
              <div className="col">
                {" "}
                <Controller
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      placeholder="Enter Your Organization Name"
                      isInvalid={!!errors.organizationName}
                      size="lg"
                    />
                  )}
                  control={control}
                  name="organizationName"
                />
                {errors.organizationName && (
                  <Form.Control.Feedback type="invalid">
                    {errors.organizationName.message || "salary is not valid"}
                  </Form.Control.Feedback>
                )}
              </div>
              <div className="col-sm-3"></div>
            </div>
          ) : (
            ""
          )}
        </Form.Group>

 */}

        {/* 
        <Button
          style={{
            background: "rgb(185, 214, 242)",
          }}
          onClick={() => {
            handleBack();
          }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit(onFormSubmit, onErrors)}
        >
          Submit
        </Button> */}
      </Form>
      <div className="row  mt-5">
        <div className="col-sm-1"></div>
        <div
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
