import React, { useReducer, useEffect, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  MdPhoneIphone,
  MdDoneAll,
  MdLocationOn,
  MdVerifiedUser,
  MdAccountBox,
} from "react-icons/md";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";

import Location from "../../Components/HomeLoanApplication/Stepper/Location/Location";
import Profession from "../../Components/HomeLoanApplication/Stepper/Profession/Profession";
import ContactVerification from "../../Components/HomeLoanApplication/Stepper/Contact_Verification/ContactVerification";
import Applied from "../../Components/HomeLoanApplication/Stepper/Done/Applied";
import ContractInformation from "../../Components/HomeLoanApplication/Stepper/Contract_Information/ContractInformation";

import style from "./Application.module.scss";
import http from "../../Services/httpService";
import { useParams } from "react-router-dom";
import { useQuery, useLocalStorageValue } from "../../Services/hooks";
import authServices from "../../Services/authService";
import Usercontext from "../../Contexts/UserContexts";
import Preloader from "../../Components/Common/PreLoader";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#784af4",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <MdLocationOn size={30} />,
    2: <MdAccountBox size={30} />,
    3: <MdVerifiedUser size={30} />,
    4: <MdPhoneIphone size={30} />,
    5: <MdDoneAll size={30} />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "none",
    paddingTop: 10,
    [theme.breakpoints.down("md")]: {
      paddingTop: 0,
    },
    // "& .MuiPaper-root": {
    //   paddingTop: 15,
    // },
  },
  button: {
    marginRight: theme.spacing(3),
    paddingLeft: "40px",
    paddingRight: "40px",
  },
  instructions: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    justifyContent: "center",
  },
  Stepper: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

/* if user is  not a reffered user then we will get location, profession, contract Information 
and verify the contact information using user's phone number. 
If contract information is verified then a successfull aplication will be submitted
*/
function getSteps(history, cardId, currentState) {
  // if (!authServices.getCurrentUser()) {
  //   history.push({
  //     pathname: "/signin",
  //     state: { ...currentState, from: { pathname: "/application/" + cardId } },
  //   });
  // }
  return ["Location", "Profession", "Contact Information", "Applied"];
}

function getStepContent(
  step,
  handleNext,
  handleBack,
  dispathch,
  application,
  userId,
  setIsVerified,
  isVerified,
  setuserId,
  history,
  cardId,
  state
) {
  //console.log("application: ", state);
  // if (!authServices.getCurrentUser()) {

  //   history.push({
  //     pathname: "/signin",
  //     state: {
  //       from: { pathname: "/application/" + cardId },
  //       catagory:state.catagory,
  //       reqMinMonthlyIncome:state.reqMinMonthlyIncome

  //     },
  //   });
  // }
  switch (step) {
    case 0:
      return (
        <Location
          userId={userId}
          state={application}
          handleNext={handleNext}
          dispathch={dispathch}
        />
      );

    case 1:
      return (
        <Profession
          userId={userId}
          state={application}
          handleNext={handleNext}
          dispathch={dispathch}
          handleBack={handleBack}
        />
      );

    case 2:
      return (
        <ContractInformation
          state={application}
          handleNext={handleNext}
          dispathch={dispathch}
          handleBack={handleBack}
          userId={userId}
          setuserId={setuserId}
        ></ContractInformation>
      );
    case 3:
      return (
        <Applied message="Your appilaction has been submitted successfully" />
      );
    default:
      return <Applied />;
  }
}

/* if user is a reffered user then we will get contract Information 
and verify the contact information using user's phone number and send that information
 to reffered company for getting user's information from api. if we get user's information from api then we will create
a user in loanerbazar and also submit a successfull application using that information.

*/
function getStepsForReference() {
  return ["Contact Information", "Contact Verification", "Applied"];
}
function getStepContentForReference(
  step,
  handleNext,
  handleBack,
  dispathch,
  application,
  userId,
  setIsVerified,
  isVerified,
  companyReference,
  setuserId,
  isOtpSent
) {
  switch (step) {
    case 0:
      return (
        <ContractInformation
          state={application}
          handleNext={handleNext}
          dispathch={dispathch}
          handleBack={handleBack}
          companyReference={companyReference}
          isOtpSent={isOtpSent}
          userId={userId}
          setuserId={setuserId}
        ></ContractInformation>
      );
    case 1:
      return (
        <ContactVerification
          state={application}
          handleNext={handleNext}
          dispathch={dispathch}
          handleBack={handleBack}
          userId={userId}
          setIsVerified={setIsVerified}
          isVerified={isVerified}
          companyReference={companyReference}
          setuserId={setuserId}
        />
      );
    case 2:
      return <Applied />;
    default:
      return <Applied />;
  }
}

export default function Application() {
  let { cardId } = useParams(); // getting id from url params
  let companyReference;
  const companyReferenceInLocalStorage = useLocalStorageValue("reference");
  const { reference } = useQuery();
  companyReference = reference || companyReferenceInLocalStorage;
  // let steps;
  // let getStepContents;
  const location = useLocation();
  const history = useHistory();
  const [steps, setSteps] = useState(null);
  const [getStepContents, setGetStepContents] = useState(null);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const applicationState = {};
  // declaring reducer to modify store from action
  const reducer = (state, action) => {
    let applicationState = { ...state };
    switch (action.type) {
      case "increment": {
        applicationState = { ...applicationState, ...action.payload };
        return applicationState;
      }
      default:
        return state;
    }
  };
  const [application, dispatch] = useReducer(reducer, applicationState);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [preloaderVar, setPreloaderVar] = useState(false);
  // const [otp, setOtp] = useState(null);
  const [loggedInUser, setloggedInUser] = useContext(Usercontext);
  const [userId, setuserId] = useState("");
  const {
    city,
    profession,
    organizationName,
    salary,
    customerName,
    email,
    phoneNumber,
  } = application;
  useEffect(async () => {
    window.scroll(0, 0);
    // submitting application form
    if (isVerified) {
      cardId = cardId.split("?reference")[0];
      const { data: applicationResponse } = await http.post(
        `${process.env.REACT_APP_API_URL}/applications`,
        {
          applicationFor: "",
          product: { name: "", id: cardId },
          customer: {
            companyReference,
            userId,
            name: customerName,
            city: city,
            profession: profession,
            organizationName,
            salary,
            email,
            phoneNumber,
          },
        }
      );
    }
  }, [isVerified, userId]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setPreloaderVar(true);
    const { data } = await http.get(
      `${process.env.REACT_APP_API_URL}/users/${loggedInUser._id}`
    );
    if (data) setPreloaderVar(false);
    if (
      location.state &&
      data.data &&
      data.data.salary &&
      location.state.reqMinMonthlyIncome > data.data.salary
    ) {
      history.push({
        pathname: `/suggested-products`,
        state: {
          clientSalary: data.data.salary,
          catagory: location.state.catagory,
        },
      });
    }
    if (data && data.data && data.success) {
      //console.log("data", data);
      const {
        city,
        profession,
        salary,
        organizationName,
        name,
        email,
        phoneNumber,
      } = data.data;

      if (city) {
        let application = {};
        application.city = city;
        dispatch({ type: "increment", payload: application });
        setActiveStep(1);
      }
      if (city && profession && salary && organizationName) {
        let application = {};
        application.city = city;
        application.profession = profession;
        application.salary = salary;
        application.organizationName = organizationName;
        application.customerName = name;
        application.email = email;
        application.phoneNumber = phoneNumber;
        dispatch({ type: "increment", payload: application });
        setActiveStep(2);
      }
    }
    if (loggedInUser && !loggedInUser.isVerified) {
      history.push({
        pathname: "/verify-contact",
        state: { user: loggedInUser },
      });
    }
    if (loggedInUser && loggedInUser._id) {
      await setuserId(loggedInUser._id);
    }
    if (companyReference) {
      setSteps(getStepsForReference());
    } else {
      setSteps(getSteps(history, cardId, location.state));
    }
  }, [companyReference, loggedInUser]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
    {
      preloaderVar?
      <Preloader /> : null
    }
      <div  className={style.container}>
        <div className={classes.root}>
          <section style={{ minHeight: 610 }}>
            <h2
              style={{
                fontWeight: "700",
                backgroundColor: "rgba(11, 67, 118,.9) ",
                color: "white",
                padding: 15,
              }}
            >
              Application Form
            </h2>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
              style={{
                backgroundColor: "transparent",
                // margin: "0 !important",
              }}
              className={classes.Stepper}
            >
              {steps &&
                steps.map((label) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
            </Stepper>
            <div
              style={{ minHeight: 270 }}
              className="d-flex justify-content-center align-items-center"
            >
              {companyReference
                ? getStepContentForReference(
                    activeStep,
                    handleNext,
                    handleBack,
                    dispatch,
                    application,
                    userId,
                    setIsVerified,
                    isVerified,
                    companyReference,
                    setuserId,
                    isOtpSent
                  )
                : getStepContent(
                    activeStep,
                    handleNext,
                    handleBack,
                    dispatch,
                    application,
                    userId,
                    setIsVerified,
                    isVerified,
                    setuserId,
                    history,
                    cardId,
                    location.state
                  )}
            </div>
            <div>
              {activeStep === steps && steps.length ? (
                <div>
                  <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button>
                </div>
              ) : (
                <div
                  className={[0, 4].includes(activeStep) ? "d-none" : "d-block"}
                >
                  <div
                    className={
                      activeStep === 1
                        ? "d-flex justify-content-center mt-5"
                        : "d-flex justify-content-between mt-5"
                    }
                    style={{ paddingRight: 40, paddingLeft: 40 }}
                  >
                    <Button
                      // disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                      style={{
                        display: [0, 1, 2, 3].includes(activeStep)
                          ? "none"
                          : "inline-block",
                        background: "rgba(185, 214, 242)",
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                      style={{
                        display: [0, 1, 2, 3].includes(activeStep)
                          ? "none"
                          : "inline-block",
                      }}
                    >
                      {steps && activeStep === steps.length - 1
                        ? "Finish"
                        : "Next"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
