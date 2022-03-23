import React, { useContext, useEffect, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Tabs, Tab} from "react-bootstrap";
import styles from "./SignIn.module.scss";
import { Link, Redirect, useLocation, useHistory } from "react-router-dom";
import { TextField, FormHelperText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import _ from "lodash";
import cx from "classnames";
import loanerBazarLogo from "../../images/Loaner-Bazar.png";
import SuspenseImg from "../../Components/Common/SuspenseImage/SuspenseImg";
import authService from "../../Services/authService";
import userContext from "../../Contexts/UserContexts";
import http from "../../Services/httpService";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px auto",
    "& > *": {
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

const SignIn = () => {
  //   const [navbarColor, setNavbarColor] = useContext(navbarColorContext);
  //   let newColor = { ...navbarColor };
  //   setNavbarColor(newColor);
  const [selectedTab, setSelectedTab] = useState("User");
  const location = useLocation();
  const classes = useStyles();
  const history = useHistory();
  const [loggedInUser, setloggedInUser] = useContext(userContext);
  const [user, setUser] = useState({ phone: "", password: "", error: {} });
  let { from } = location.state || { from: "/user-dashboard" };
  const [isRegistered, setIsRegistered] = useState(false);

  //console.log(user);
  //console.log(location.pathname);
  function handleSelect(e) {
    //console.log("event from signup", e);
    setSelectedTab(e);
  }
  useEffect(() => {
    window.scroll(0,0)
    //console.log("fromm", location.state);
  },[]);
  useEffect(async () => {
    if (location.state && location.state.isRegistered) {
      setIsRegistered(true);
    }
    if (location.state && location.state.phone && location.state.password) {
      let newUser = { ...user };
      newUser["phone"] = location.state.phone.trim();
      newUser["password"] = location.state.password.trim();
      setUser(newUser);
      try {
        let isLoggedIn = await authService.login(
          newUser.phone,
          newUser.password
        );
        if (isLoggedIn) {
          let loggedUser = await authService.getCurrentUser();
          newUser.phone = loggedUser.phone;
          delete newUser.error.message;
          setloggedInUser(loggedUser);
          history.push({
            pathname: from.pathname,
            state: { ...location.state },
          });
        }
      } catch (e) { }
    }
  }, [location.state]);


  async function resetPasswordRequest() {
    const { data } = await http.post(
      `${http.baseUrl}/auth/request-reset-password`, {
      phoneNumber: user.phone
    }
    );
    //console.log("after reset api call", data)
    if (data && data.success)
      history.push({
        pathname: "/forget-password",
        state: data.data
      })
  }

  return (
    <>
      {authService.getCurrentUser() ? (
        <Redirect to={from} />
      ) : !isRegistered ? (
        <div className={styles.signin}>
          <div className={styles.signin_form}>
            <div className="text-center">
              <SuspenseImg
                src={loanerBazarLogo}
                alt="loaner bazar"
                width="175"
              ></SuspenseImg>
            </div>

            <div className={cx(styles.booking_form, "mt-5")}>
              <Tabs
                defaultActiveKey="User"
                id="uncontrolled-tab-example"
                className={cx("mb-2", styles.nav)}
                onSelect={(e) => handleSelect(e)}
                variant="tabs"
              >
                <Tab
                  eventKey="User"
                  title="User"
                  className={cx(styles.nav_tabs)}
                  tabClassName={
                    selectedTab === "User"
                      ? styles.nav_link_active
                      : styles.nav_link
                  }
                >
                  <form
                    onSubmit={handleSubmitForUserExistance}
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                  >
                    <FormHelperText
                      focused="true"
                      error="true"
                      className="text-center"
                      style={{ width: "100%" }}
                    >
                      {user.error && user.error.message}
                    </FormHelperText>
                    <TextField
                      error={user.error.phone ? true : false}
                      id="standard-full-width"
                      label="Phone"
                      className={styles.textfield}
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      style={{ marginBottom: 10, marginTop: 10 }}
                      fullWidth
                      margin="normal"
                      helperText={user.error.phone}
                    />

                    <Button type="submit" variant="contained" fullWidth>
                      Next
                    </Button>
                    <div className="d-flex justify-content-center mt-4">
                      <div className="text-center mr-3">
                        Don't have an account?
                      </div>
                      <Link
                        to={{
                          pathname: "/signup",
                          state: {
                            from: location.state && location.state.from,
                          },
                        }}
                      >
                        Create an account
                      </Link>
                    </div>

                    <div></div>
                  </form>
                </Tab>
                <Tab
                  eventKey="Partner"
                  title="Partner"
                  className={styles.nav_tabs}
                  tabClassName={
                    selectedTab === "Partner"
                      ? styles.nav_link_active
                      : styles.nav_link
                  }
                >
                  <form
                    onSubmit={handleSubmit}
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                  >
                    <div className="text-center"></div>
                    <FormHelperText
                      focused="true"
                      error="true"
                      className="text-center"
                      style={{ width: "100%" }}
                    >
                      {user.error && user.error.message}
                    </FormHelperText>
                    <TextField
                      error={user.error.phone ? true : false}
                      id="standard-full-width"
                      label="Phone"
                      className={styles.textfield}
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      style={{ marginBottom: 10, marginTop: 10 }}
                      fullWidth
                      margin="normal"
                      helperText={user.error.phone}
                    />

                    <TextField
                      error={user.error.password ? true : false}
                      id="standard-full-width"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      label="Password"
                      type="password"
                      fullWidth
                      minLength="8"
                      helperText={user.error.password}
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
                      <div className="text-center mr-3">
                        Don't have an account?
                      </div>
                      <Link
                        to={{
                          pathname: "/signup",
                          state: { from: from },
                        }}
                      >
                        Create an account
                      </Link>
                    </div>

                    <div></div>
                  </form>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.signin}>
          <div className={styles.signin_form}>
            <div className="text-center">
              <SuspenseImg
                src={loanerBazarLogo}
                alt="loaner bazar"
                width="175"
              ></SuspenseImg>
            </div>

            <div className={cx(styles.booking_form, "mt-5")}>
              <Tabs
                defaultActiveKey="User"
                id="uncontrolled-tab-example"
                className={cx("mb-2", styles.nav)}
                onSelect={(e) => handleSelect(e)}
                variant="tabs"
              >
                <Tab
                  eventKey="User"
                  title="User"
                  className={cx(styles.nav_tabs)}
                  tabClassName={
                    selectedTab === "User"
                      ? styles.nav_link_active
                      : styles.nav_link
                  }
                >
                  <form
                    onSubmit={handleSubmit}
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                  >
                    <FormHelperText
                      focused="true"
                      error="true"
                      className="text-center"
                      style={{ width: "100%" }}
                    >
                      {user.error && user.error.message}
                    </FormHelperText>
                    <TextField
                      error={user.error.phone ? true : false}
                      id="standard-full-width"
                      label="Phone"
                      className={styles.textfield}
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      style={{ marginBottom: 10, marginTop: 10 }}
                      fullWidth
                      margin="normal"
                      helperText={user.error.phone}
                      inputProps={{ readOnly: true }}
                    />

                    <TextField
                      error={user.error.password ? true : false}
                      id="standard-full-width"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      label="Password"
                      type="password"
                      fullWidth
                      minLength="8"
                      helperText={user.error.password}
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
                        <Link onClick={() => {
                          resetPasswordRequest()
                        }}>Forget Password?</Link>
                      </div>
                    </div>
                    <Button type="submit" variant="contained" fullWidth>
                      Signin
                    </Button>
                    <div className="d-flex justify-content-center mt-4">
                      <div className="text-center mr-3">
                        Don't have an account?
                      </div>
                      <Link to="/signup">Create an account</Link>
                    </div>

                    <div></div>
                  </form>
                </Tab>
                <Tab
                  eventKey="Partner"
                  title="Partner"
                  className={styles.nav_tabs}
                  tabClassName={
                    selectedTab === "Partner"
                      ? styles.nav_link_active
                      : styles.nav_link
                  }
                >
                  <form
                    onSubmit={handleSubmit}
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                  >
                    <div className="text-center"></div>
                    <FormHelperText
                      focused="true"
                      error="true"
                      className="text-center"
                      style={{ width: "100%" }}
                    >
                      {user.error && user.error.message}
                    </FormHelperText>
                    <TextField
                      error={user.error.phone ? true : false}
                      id="standard-full-width"
                      label="Phone"
                      className={styles.textfield}
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      style={{ marginBottom: 10, marginTop: 10 }}
                      fullWidth
                      margin="normal"
                      helperText={user.error.phone}
                    />

                    <TextField
                      error={user.error.password ? true : false}
                      id="standard-full-width"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      label="Password"
                      type="password"
                      fullWidth
                      minLength="8"
                      helperText={user.error.password}
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
                      <div className="text-center mr-3">
                        Don't have an account?
                      </div>
                      <Link
                        to={{
                          pathname: "/signup",
                          state: { from: from },
                        }}
                      >
                        Create an account
                      </Link>
                    </div>
                    <div></div>
                  </form>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  );

  function authenticate() {
    // if (loggedInUser.phone) {
    //   history.replace(from);
    // }
  }

  // calling authentication logic for Partner user
  function partnerAuthentication() { }

  // calling authentication logic for Regular user
  function userAuthentication() { }

  // validating user input
  // function validateUserInput(userData) {
  //   //console.log(userData);
  // }

  function validatePartnerInput(partnerData) {
    //console.log(partnerData);
  }

  /**
   * @param  {} phoneNumber
   * @returns  {} message;if(phoneNumber===""
   * @param  {} {error=true;message="Phoneisrequired";}return{error
   */
  function validatePhoneNumber(phoneNumber) {
    let phoneNumberError = false,
      phoneNumberErrorMessage = "";
    if (phoneNumber === "") {
      phoneNumberError = true;
      phoneNumberErrorMessage = "Phone is required";
    }

    return { phoneNumberError, phoneNumberErrorMessage };
  }
  function validatePassword(password) {
    let passwordError = false,
      passwordErrorMessage = "";
    if (password === "") {
      passwordError = true;
      passwordErrorMessage = "Password is required";
    }

    return { passwordError, passwordErrorMessage };
  }

  function validateUserInput(userData) {
    let error;
    const { phoneNumberError, phoneNumberErrorMessage } = validatePhoneNumber(
      userData.phone
    );
    if (phoneNumberError) {
      userData.error.phone = phoneNumberErrorMessage;
    }
    const { passwordError, passwordErrorMessage } = validatePassword(
      userData.password
    );
    if (passwordError) {
      userData.error.password = passwordErrorMessage;
    }
    setUser(userData);
    return { error, userData };
  }
  async function handleSubmitForUserExistance(e) {
    e.preventDefault();
    //console.log("check existance");
    let _user = await authService.checkUserExistance(user.phone);
    let { status, phone } = _user;
    if (status) {
      setIsRegistered(status);
    } else {
      history.push({
        pathname: "/signup",
        state: { ...location.state, phone, from },
      });
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let newUser = { ...user };
    delete newUser.error.message;
    //console.log("new user", validateUserInput(newUser));
    if (!_.isEmpty(newUser)) {
      if (newUser.phone === "") {
        newUser.error.phone = "Phone is required";
        setUser(newUser);
        return false;
      } else delete newUser.error.phone;
      if (newUser.password === "") {
        newUser.error.password = "Password is required";
      } else delete newUser.error.password;
      // validateUserInput(newUser);
      setUser(newUser);
    } else {
      newUser.error.message = "Please Provide Valid Phome and Password";
      setUser(newUser);
      return false;
    }
    let errors = Object.keys(user.error).length > 0;
    //console.log("errors", errors);
    if (!errors) {
      try {
        let isLoggedIn =
          selectedTab === "User"
            ? await authService.login(user.phone, user.password)
            : await authService.partnerLogin(user.phone, user.password);
        if (isLoggedIn) {
          let loggedUser = await authService.getCurrentUser();
          newUser.phone = loggedUser.phone;
          delete newUser.error.message;
          setloggedInUser(loggedUser);
          setUser(newUser);
          if (!loggedUser.isVerified) {
            return history.push({
              pathname: "/verify-contact",
              state: { ...location.state, user: loggedUser },
            });
          } else {
            //console.log("location", location.state, from.pathname)
            history.push({
              pathname: from.pathname,
              state: location.state,
            });
          }
        }
      } catch (e) {
        //console.log("", e.message);
        //console.log(" error message", e.message);
        const newUser = { ...user };
        newUser.error.message = e.message;
        setUser(newUser);
        if (e.response) {
          //console.log("error in signup", e.response.data);
          const newUser = { ...user };
          newUser.error.message = e.response.data && e.response.data;
          setUser(newUser);
        }
      }
    }
    // setUser(newUser);
    authenticate();
  }

  function handleChange({ target: { name, value } }) {
    //console.log("printing target name", name);
    let newUser = { ...user };
    newUser[name] = value.trim();

    if (name === "phone") {
      if (value.trim() === "") {
        newUser.error.phone = "phone is required";
      } else {
        newUser.error.phone = "";
      }
    }

    if (name === "password") {
      if (value.trim() === "") {
        newUser.error.password = "password is required";
      } else {
        newUser.error.password = "";
      }
    }

    setUser(newUser);
    return newUser;
  }
};

export default SignIn;
