import React from "react";
import cx from "classnames";
import styles from "./SignUp.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import SuspenseImg from "../../../Components/Common/SuspenseImage/SuspenseImg";
import { TextField, FormHelperText } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import personal_finance from "../../../images/Loaner-Bazar.png";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // width: "100%",
//     // height: "100%",
//     // padding: "20px",
//     // display: "flex",
//     // flexWrap: "wrap",

//     // justifyContent: "center",
//     // textAlign: "center",
//     margin: "10px auto",
//     "& > *": {
//       //   textAlign: "center",
//       // margin: "0 auto",

//       margin: theme.spacing(1),
//       width: "45ch",
//       display: "block",
//     },
//     "& .MuiButton-fullWidth": {
//       marginTop: "20px",
//       width: "95% !important",
//       paddingTop: "12px",
//       backgroundColor: "rgba(249,165,26,1)",
//     },
//     "& .MuiFormHelperText-root": {
//       // textAlign: "center",
//       // width: "100%",
//     },
//   },
//   button: {
//     position: "relative",
//     width: "100%",
//     height: "4rem",
//     border: "1px solid black",
//     borderRadius: "2rem",
//     margin: "auto",
//   },
//   button_text: {
//     margin: "0",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//   },
//   button_icon: {
//     width: "4rem",
//     height: "4rem",
//     padding: ".5rem",
//     zIndex: "200",
//     position: "absolute",
//     margin: "0",
//     top: "50%",
//     left: ".2rem",
//     transform: "translate(0%, -50%)",
//   },
//   input: {
//     minHeight: "100px",
//   },
//   datepicker: {
//     // padding: theme.spacing(2),
//   },
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // height: "100%",
    // padding: "20px",
    // display: "flex",
    // flexWrap: "wrap",

    // justifyContent: "center",
    // textAlign: "center",
    margin: "10px auto",
    "& > *": {
      //   textAlign: "center",
      // margin: "0 auto",

      margin: theme.spacing(1),
      width: "35ch",
      display: "block",
      [theme.breakpoints.up("sm")]: {
        margin: theme.spacing(1),
        width: "45ch",
        display: "block",
      },
      [theme.breakpoints.up("md")]: {
        margin: theme.spacing(1),
        width: "55ch",
        display: "block",
      },
      [theme.breakpoints.up("lg")]: {
        margin: theme.spacing(1),
        width: "65ch",
        display: "block",
      },
      [theme.breakpoints.up("xl")]: {
        margin: theme.spacing(1),
        width: "75ch",
        display: "block",
      },
    },
    "& .MuiButton-fullWidth": {
      marginTop: "20px",
      width: "95% !important",
      paddingTop: "12px",
      backgroundColor: "rgba(249,165,26,1)",
    },
    "& .MuiFormHelperText-root": {
      // textAlign: "center",
      // width: "100%",
    },
  },
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
function SignUp({ handleSubmit, handleChange, user }) {
  const classes = useStyles();

  return (
    <div className={styles.signin}>
      <div className={styles.signin_form}>
        <div className={cx(styles.booking_form)}>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <div className="text-center">
              <SuspenseImg
                src={personal_finance}
                alt="loaner bazar"
                width="150"
                // height="100"
              ></SuspenseImg>

              {/* <img src={personal_finance} alt="loaner bazar" width="175" /> */}
            </div>
            <FormHelperText
              focused="true"
              error="true"
              className="text-center mt-5"
              style={{ width: "100%" }}
            >
              {user.error && user.error.message}
            </FormHelperText>
            <TextField
              // variant="outlined"
              error={user.error.phoneNumber ? true : false}
              id="standard-full-width"
              label="phoneNumber"
              className={styles.textfield}
              name="phoneNumber"
              value={user.phoneNumber}
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
              helperText={user.error.phoneNumber}

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
            <TextField
              error={user.error.confirmPassword ? true : false}
              id="standard-full-width"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              label="Confirm Password"
              // variant="outlined"
              type="password"
              // style={{ margin: 8 }}
              fullWidth
              minLength="8"
              helperText={user.error.confirmPassword}
              // defaultValue={selectedPlace && `${selectedPlace.placeName}`}
              // value={selectedPlace && `${selectedPlace.placeName}`}
              // readOnly={false}
              // InputLabelProps={{
              //   shrink: true,
              // }}
            />
            <div className="d-flex justify-content-between mt-4"></div>
            <Button type="submit" variant="contained" fullWidth>
              SignUp
            </Button>
            <div className="d-flex justify-content-center mt-4">
              <div className="text-center mr-3">Have an account?</div>
              <Link to="/signin" className="ml-3">
                Sign In
              </Link>
            </div>
            <div className="d-flex justify-content-center mt-1">
              <div className="text-center mr-3">Want to be a Partner?</div>
              <Link to="/partner-registration" className="ml-3">
                Partner Registration
              </Link>
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
        </div>
      </div>
    </div>
  );
}

export default SignUp;
