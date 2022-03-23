import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landlord from "../../../../images/profession/Landlord.svg";
import Salaried from "../../../../images/profession/Salaried.svg";
import Businessman from "../../../../images/profession/Businessman.svg";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import styles from "./NIDFrontBack.module.scss";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory, useLocation } from "react-router-dom";
import httpService from "../../../../Services/httpService";
import authServices from "../../../../Services/authService";
import userImg from "../../../../images/userImg.png";
import authService from "../../../../Services/authService";
import { useWindowWidth } from "../../../../Services/hooks";

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

const schema = Joi.object({});

export default function Profession({
  userId,
  state,
  handleNext,
  dispathch,
  handleBack,
}) {
  //console.log("case 3: ", state);
  const [NIDFront, setNIDFront] = useState();
  const [NIDBack, setNIDBack] = useState();
  const [sendNIDFront, setSendNIDFront] = useState();
  const [sendNIDBack, setSendNIDBack] = useState();
  const widthWindow = useWindowWidth();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),

    // shouldFocusError: true,
  });

  useEffect(async () => {
    window.scroll(0, 0);
    if (state.nidFrontImgUrl && state.nidFrontImgUrl != "undefined")
      setNIDFront(state.nidFrontImgUrl);
    if (state.nidBackImgtUrl && state.nidBackImgtUrl != "undefined")
      setNIDBack(state.nidBackImgtUrl);
    // document.getElementById("nidBack").files = state.NIDFront
  }, []);

  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    if (widthWindow && widthWindow < 630) setMobileView(false);
    //console.log("yeah boy...........");
  }, [widthWindow]);

  const onFormSubmit = async (data) => {
    if (NIDFront && NIDBack) {
      // _data.NIDBack = NIDBack;
      // _data.NIDFront = NIDFront;
      if (sendNIDFront) data.NIDFront = sendNIDFront;
      else data.NIDFront = NIDFront;
      if (sendNIDBack) data.NIDBack = sendNIDBack;
      else data.NIDBack = NIDBack;

      dispathch({ type: "increments", payload: data });
      handleNext();
    }
  };
  const uploadImgFront = async (e) => {
    const fileFront = document.getElementById("nidFront").files[0];
    setSendNIDFront(fileFront);
    let temp = URL.createObjectURL(fileFront);
    setNIDFront(temp);
  };
  const uploadImgBack = (e) => {
    const fileFront = document.getElementById("nidBack").files[0];
    setSendNIDBack(fileFront);
    let temp = URL.createObjectURL(fileFront);
    setNIDBack(temp);
    // authService.updateCurrentUser(state.nid)
  };

  const onErrors = (errors) => console.error(errors);

  return (
    <div className="container personal-info">
      {mobileView ? (
        <Form
          onSubmit={handleSubmit(onFormSubmit, onErrors)}
          className="pl-5 pr-5 pc-view"
        >
          <Form.Group controlId="salary" className="mt-3">
            <div className="row">
              <div className="col-sm-1"></div>

              <div
                className="col-sm-10 d-flex"
                class={cx("nameee", styles.container_nameee)}
              >
                <label>NID Front:</label>
                <label className="edit_avater">
                  {NIDFront ? <span>Edit</span> : <span>Select</span>}
                  <input
                    className="modifyFile"
                    id="nidFront"
                    accept=".jpg, .jpeg, .png"
                    onChange={uploadImgFront}
                    type="file"
                  />
                </label>
                {NIDFront ? (
                  <img alt="nid front" src={NIDFront} />
                ) : (
                  <img alt="nid front" src={userImg} />
                )}
              </div>
              <div
                className="col-sm-10 d-flex"
                class={cx("nameee", styles.container_nameee)}
              >
                <label>NID Back:</label>

                <label className="edit_avater">
                  {NIDBack ? <span>Edit</span> : <span>Select</span>}
                  <input
                    className="modifyFile"
                    onChange={uploadImgBack}
                    accept=".jpg, .jpeg, .png"
                    id="nidBack"
                    type="file"
                  />
                </label>

                {NIDBack ? (
                  <img alt="nid front" src={NIDBack} />
                ) : (
                  <img alt="nid front" src={userImg} />
                )}
              </div>

              <div className="col-sm-1"></div>
            </div>
          </Form.Group>
        </Form>
      ) : (
        <Form
          onSubmit={handleSubmit(onFormSubmit, onErrors)}
          className="pl-5 pr-5 phone-view"
        >
          <Form.Group controlId="salary" className="mt-3">
            <div className="row">
              <div
                className="col-sm-10 d-flex"
                class={cx("uploadImg", styles.container_uploadImg)}
              >
                <label>NID Front:</label>
                
                <div>
                <label className="phone_avater">
                  {NIDFront ? <span>Edit</span> : <span>Select</span>}
                  <input
                    className="modifyFile"
                    id="nidFront"
                    accept=".jpg, .jpeg, .png"
                    onChange={uploadImgFront}
                    type="file"
                  />
                </label>
                  {NIDFront ? (
                    <img alt="nid front" src={NIDFront} />
                  ) : (
                    <img alt="nid front" src={userImg} />
                  )}
                </div>
              </div>
              <div
                className="col-sm-10 d-flex"
                class={cx("uploadImg", styles.container_uploadImg)}
              >
                <label>NID Back:</label>

                <div>
                  <label className="phone_avater">
                    {NIDBack ? <span>Edit</span> : <span>Select</span>}
                    <input
                      className="modifyFile"
                      onChange={uploadImgBack}
                      accept=".jpg, .jpeg, .png"
                      id="nidBack"
                      type="file"
                    />
                  </label>
                  {NIDBack ? (
                    <img alt="nid front" src={NIDBack} />
                  ) : (
                    <img alt="nid front" src={userImg} />
                  )}
                </div>
              </div>

              <div className="col-sm-1"></div>
            </div>
          </Form.Group>
        </Form>
      )}

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
            type="button"
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
