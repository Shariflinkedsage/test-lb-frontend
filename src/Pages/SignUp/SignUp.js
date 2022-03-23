import React, { useContext, useEffect, useState } from "react";
import Joi from "joi";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import userContext from "../../Contexts/UserContexts";
import userService from "../../Services/userService";
import authService from "../../Services/authService";

import Signup from "../../Components/SignUp/SignUp/SignUp";
import VerifyContactNumber from "../../Components/SignUp/verify_contact_number/VerifyContactNumber";

const userSchema = Joi.object({
  phoneNumber: Joi.string()
    .length(14)
    .pattern(/^(?=.*[0-9])[- +()0-9]+$/)
    .required(),
});

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

const SignUp = (props) => {
  const [selectedTab, setSelectedTab] = useState("User");
  const location = useLocation();
  const classes = useStyles();
  const history = useHistory();
  const [loggedInUser, setloggedInUser] = useContext(userContext);
  const [hasVerficationCode, setHasVerficationCode] = useState(false);
  const [user, setUser] = useState({
    phoneNumber: (location.state && location.state.phone) || "01",
    password: "",
    confirmPassword: "",
    id: "",
    error: {},
  });
  let { from, reqMinMonthlyIncome, catagory } = location.state || {
    from: { pathname: "/signin" },
  };
  //console.log(user);
  //console.log(location);
  useEffect(() => {
    window.scroll(0,0)
    //console.log("fromm", location.state);
  },[]);
  useEffect(() => {});
  function renderContent(hasVerficationCode) {
    if (!hasVerficationCode) {
      return (
        <Signup
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          user={user}
        />
      );
    }
    return (
      <VerifyContactNumber
        user={user}
        setUser={setUser}
        phoneNumber={user.phoneNumber}
      />
    );
  }

  return (
    <>
      {authService.getCurrentUser() ? (
        <Redirect
          to={{ pathname: from.pathname, state: { ...location.state } }}
        />
      ) : (
        renderContent(hasVerficationCode)
      )}
    </>
  );

  function authenticate() {
    if (loggedInUser.phoneNumber) {
      history.replace({
        pathname: from.pathname,
        state: { ...location.state },
      });
      //console.log("from", from);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    //console.log("submitted");
    // //console.log(e.target.name);
    let newUser = { ...user };
    delete newUser.error.message;
    // phone validation
    if (newUser.phoneNumber === "") {
      newUser.error.phoneNumber = "phoneNumber is required";
    } else if (newUser.phoneNumber.length != 11) {
      newUser.error.phoneNumber = "phoneNumber number must be 11 digit";
    } else delete newUser.error.phoneNumber;
    // password validation
    if (newUser.password === "") {
      newUser.error.password = "Password is required";
    } else delete newUser.error.password;
    // confirm password validation
    if (newUser.confirmPassword === "") {
      newUser.error.confirmPassword = "Password must be same";
    } else delete newUser.error.confirmPassword;

    let errors = Object.keys(user.error).length > 0;
    if (!errors) {
      let loggedUser;
      try {
        loggedUser = await userService.register(
          user.phoneNumber,
          user.password
        );
        if (loggedUser.success) {
          setHasVerficationCode(true);
          newUser.phoneNumber =
            loggedUser.data &&
            loggedUser.data.phoneNumber &&
            loggedUser.data.phoneNumber;
          newUser.id =
            loggedUser.data && loggedUser.data._id && loggedUser.data._id;
          let { token, _id } = loggedUser.data && loggedUser.data;
          // authService.loginWithJwt(token);
          // //console.log("response");
          // //console.log(user);
          delete newUser.error.message;
          setUser(newUser);
          // setloggedInUser(newUser);
          // history.push(from.pathname);
          // history.push("/signin");
          // //console.log("from", from);
          // localStorage.setItem("token", token);
          // http.setJwt(token);
        }
      } catch (e) {
        if (e.response) {
          //console.log("error in signup", e.response.data);
          // const newUser = { ...user };
          newUser.error.message = e.response.data && e.response.data.message;
        }
      }
    }

    setUser(newUser);
    authenticate();

    //console.log("submit response");
    // //console.log(response);
  }

  function handleChange({ target: { name, value } }) {
    //console.log(name);
    let newUser = { ...user };
    newUser[name] = value.trim();

    if (name === "phoneNumber") {
      if (value.trim() === "") {
        newUser.error.phoneNumber = "phoneNumber number is required";
      } else if (newUser.phoneNumber.length != 11) {
        newUser.error.phoneNumber = "phoneNumber number must be 11 digit";
      } else {
        newUser.error.phoneNumber = "";
      }
    }

    if (name === "password") {
      if (value.trim() === "") {
        newUser.error.password = "password is required";
      } else if (newUser.password === newUser.confirmPassword) {
        newUser.error.confirmPassword = "";
        newUser.error.password = "";
      } else {
        newUser.error.password = "";
      }
    }
    if (name === "confirmPassword") {
      if (value.trim() === "") {
        newUser.error.confirmPassword = "Confirm Password must be same";
      } else if (newUser.password === newUser.confirmPassword) {
        newUser.error.confirmPassword = "";
        newUser.error.password = "";
      } else if (newUser.password !== newUser.confirmPassword) {
        newUser.error.confirmPassword = "passwords must be same";
      } else {
        newUser.error.confirmPassword = "";
      }
    }

    setUser(newUser);
  }
  function handleSelect(e) {
    //console.log("event from signup", e);
    setSelectedTab(e);
  }
};

export default SignUp;
