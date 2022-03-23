import React, { useState } from "react";
import Link from "react-router-dom";
import styles from "./Partner.module.scss";
import { Tab } from "react-bootstrap";
import SuspenseImg from "../../Common/SuspenseImage/SuspenseImg";
import { TextField, FormHelperText, Checkbox, Button } from "@material-ui/core";

function Partner({
  handleSubmit,
  user,
  handleChange,
  classes,
  loanerBazarLogo,
}) {
  const [selectedTab, setSelectedTab] = useState("User");

  return (
    <Tab
      eventKey="Partner"
      title="Partner"
      className={styles.nav_tabs}
      tabClassName={
        selectedTab === "Partner" ? styles.nav_link_active : styles.nav_link
      }
    >
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div className="text-center">
          {/* <h1>Login</h1> */}
          <SuspenseImg
            src={loanerBazarLogo}
            alt="loaner bazar"
            width="175"
          ></SuspenseImg>
          {/* <img src={personal_finance} alt="loaner bazar" width="175" /> */}
        </div>
        <FormHelperText
          focused="true"
          error="true"
          className="text-center"
          style={{ width: "100%" }}
        >
          {user.error && user.error.message}
        </FormHelperText>
        <TextField
          // variant="outlined"
          error={user.error.phone ? true : false}
          id="standard-full-width"
          label="Phone"
          className={styles.textfield}
          name="phone"
          value={user.phone}
          onChange={handleChange}
          // input:classes.input
          // classes={{
          //   input: classes.input,
          // }}
          // classes={{root}}
          style={{ marginBottom: 10, marginTop: 10 }}
          // placeholder="Placeholder"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          helperText={user.error.phone}

          // defaultValue={`dhaka`}
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />

        <TextField
          error={user.error.password ? true : false}
          id="standard-full-width"
          name="password"
          value={user.password}
          onChange={handleChange}
          label="Password"
          // variant="outlined"
          type="password"
          // style={{ margin: 8 }}
          fullWidth
          minLength="8"
          helperText={user.error.password}
          // defaultValue={selectedPlace && `${selectedPlace.placeName}`}
          // value={selectedPlace && `${selectedPlace.placeName}`}
          // readOnly={false}
          // InputLabelProps={{
          //   shrink: true,
          // }}
        />
        <div className="d-flex justify-content-between mt-4">
          <div>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
              style={{ marginLeft: "-10px" }}
            />
            Remember me
          </div>
          <div className="mt-2">
            <Link>Forget Password?</Link>
          </div>
        </div>
        <Button type="submit" variant="contained" fullWidth>
          Signin
        </Button>
        <div className="d-flex justify-content-center mt-4">
          <div className="text-center mr-3">Don't have an account?</div>
          <Link to="/signup">Create an account</Link>
        </div>

        <div>
          {/* <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button> */}
          {/* <span className="mt-3">
                  <hr />
                </span> */}
        </div>
      </form>
    </Tab>
  );
}

export default Partner;
