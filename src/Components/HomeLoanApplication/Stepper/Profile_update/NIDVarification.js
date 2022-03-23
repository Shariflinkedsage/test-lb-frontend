import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landlord from "../../../../images/profession/Landlord.svg";
import Salaried from "../../../../images/profession/Salaried.svg";
import Businessman from "../../../../images/profession/Businessman.png";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import style from "./NIDVarification.module.scss";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory, useLocation } from "react-router-dom";
import http from "../../../../Services/httpService";
import userImg from "../../../../images/profession/Businessman.png";
import authService from "../../../../Services/authService";
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
  NID: Joi.number().required(),
});

export default function Profession({
  userId,
  state,
  handleNext,
  dispathch,
  handleBack,
}) {
  //console.log("case: 1", state);
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [preloaderVar, setPreloaderVar] = useState(false)
  const [profession, setProfession] = useState("empty");
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),

    defaultValues: {
      NID: authService.getCurrentUser().nid || state.nid || "",
    },
    // shouldFocusError: true,
  });
  const onFormSubmit = async (_data) => {
setPreloaderVar(true);
    const { data } = await http.post(
      `${process.env.REACT_APP_API_URL}/users/verify-nid`,
      {
        national_id: _data.NID.toString(),
        userId: authService.getCurrentUser()._id,
      }
    );

    if(data) setPreloaderVar(false);

    if (data && data.success && data.data) {
      if (data.data.dateOfBirth)
        data.data.dateOfBirth = data.data.dateOfBirth.split("T")[0];
      dispathch({ type: "increments", payload: data.data });
      handleNext();
    }
  };
  const onErrors = (errors) => console.error(errors);

  useEffect(() => {
    window.scroll(0,0)
  },[])

  return (
    <div className="container">
      {
        preloaderVar?
        <Preloader />:null
      }
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
          Please enter your NID number
        </p>
      </div>

      <Form
        onSubmit={handleSubmit(onFormSubmit, onErrors)}
        className="pl-5 pr-5"
      >
        <Form.Group controlId="salary" className="mt-3">
          <div className="row">
            <div className="col-sm-3"></div>

            <div className="col">
              <Controller
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder="Enter Your NID No."
                    isInvalid={!!errors.NID}
                    size="lg"
                    disabled={authService.getCurrentUser().nid || state.nid ? true : false}
                  />
                )}
                control={control}
                name="NID"
              />
              {errors.NID && (
                <Form.Control.Feedback type="invalid">
                  {errors.NID.message || "NID is not valid"}
                </Form.Control.Feedback>
              )}
            </div>
            <div className="col-sm-3"></div>
          </div>
        </Form.Group>
      </Form>
      <div className="row  mt-5">
        <div className="col-sm-1"></div>

        <div
          className="col justify-content-end"
          style={{ display: "flex", justifyContent: "end" }}
        >
          {" "}
          {
            authService.getCurrentUser().nid  ?
            <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit(onFormSubmit, onErrors)}
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
            Next
          </Button>
          :
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit(onFormSubmit, onErrors)}
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
            Verify
          </Button>
          }
          
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
