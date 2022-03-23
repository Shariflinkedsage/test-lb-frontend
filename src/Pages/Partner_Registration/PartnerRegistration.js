import React, { useEffect, useReducer } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style from "./partnerRegistration.module.scss";
import CompanyInformation from "./CompanyInformation/CompanyInformation";
import RepresentitiveInformation from "./RepresentitiveInformation/RepresentitiveInformation";
import { partnerModel } from "./partner_model";
import http from "../../Services/httpService";
const steps = ["CompanyInformation", "RepresentitiveInformation"];

function getStepContent(
  activeStep,
  steps,
  handleNext,
  handleBack,
  state,
  dispatch
) {
  switch (activeStep) {
    case 0:
      return (
        <CompanyInformation
          activeStep={activeStep}
          steps={steps}
          handleNext={handleNext}
          state={state}
          dispatch={dispatch}
        />
      );
    case 1:
      return (
        <RepresentitiveInformation
          activeStep={activeStep}
          steps={steps}
          handleNext={handleNext}
          state={state}
          dispatch={dispatch}
          handleBack={handleBack}
        />
      );
    case 2:
      return <div>hello </div>;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function PartnerRegistration() {
  const initialState = partnerModel;

  function reducer(state, action) {
    let partnerInfo = { ...initialState };

    switch (action.type) {
      case "saveCompanyInfo": {
        // eslint-disable-next-line no-lone-blocks
        if (action.payload) {
          partnerInfo = { ...partnerInfo, ...action.payload };
        }
        return partnerInfo;
      }
      case "saveCompanyRepresentativeInfo": {
        if (action.payload) {
          partnerInfo = { ...partnerInfo, ...action.payload };
        }
        return partnerInfo;
      }
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const [activeStep, setActiveStep] = React.useState(0);

  const registerHandler = async () => {
    //console.log("hello from registerr handler");
    const { data, error } = await http.post(`${http.baseUrl}/companies`, state);
    //console.log("response from companies", data);
    if (error) {
      return new Error(`${error.message}`);
    }
    return data;
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    /* register data will be able sent to api for creating partner
     befor that confirm password is deleted*/
    try {
      const { success } = await registerHandler();
      if (success) {
        handleNext();
      }
      //console.log("state in partner registration page ", success);
    } catch (error) {
      //console.log(error);
    }
  }, [state]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="div"
        maxWidth="md"
        sx={{ mb: 4 }}
        className={style.container}
      >
        <Container component="div" maxWidth="md" sx={{ mb: 4, mt: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography
              component="h1"
              variant="h4"
              align="center"
              sx={{ pb: { xs: 2, md: 2 }, fontWeight: 700 }}
            >
              Partner Registration
            </Typography>
            {/* <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper> */}
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for registering as a Merchant in Loaner Bazar.
                  </Typography>
                  <Typography variant="subtitle1">
                    We will send you an update when your Requsest for become a
                    merchant will be successfully accepted .
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(
                    activeStep,
                    steps,
                    handleNext,
                    handleBack,
                    state,
                    dispatch
                  )}
                  {/* <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 2 }}
                  >
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}
                    {activeStep !== 0 && (
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1 ? "Register" : "Next"}
                      </Button>
                    )}
                  </Box> */}
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Container>
      </Container>
    </ThemeProvider>
  );
}
