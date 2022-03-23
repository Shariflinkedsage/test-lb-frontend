import React, { Suspense, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./Hoc/Layout";
import Home from "./Pages/Home/Home";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomSpinner from "./Components/Common/Spinner/Spinner";
import preLoaderFunction from "./Utils/preLoaderFunction";
import UserContext from "./Contexts/UserContexts";
import authService from "./Services/authService";
const ApplicationComponent = React.lazy(() =>
  import("./Pages/Application/Application")
);
const HomeLoanApplicationComponent = React.lazy(() =>
  import("./Pages/Application/HomeLoanApplicationComponent")
);
const CreditCardComponent = React.lazy(() =>
  import("./Pages/Credit_Card/Credit_Card")
);
const CardDetails = React.lazy(() =>
  import("./Pages/Card_Details/CardDetails")
);
const LoanDetails = React.lazy(() =>
  import("./Pages/Card_Details/LoanDetails")
);
const VerifyContactNumber = React.lazy(() =>
  import("./Pages/verify_contact_number/VerifyContactNumber")
);
const SignIn = React.lazy(() => import("./Pages/SignIn/SignIn"));
const SignUp = React.lazy(() => import("./Pages/SignUp/SignUp"));
const UserDashboard = React.lazy(() =>
  import("./Pages/Dashboard/User_Dashboard/user")
);
const PartnerDashboard = React.lazy(() =>
  import("./Pages/Dashboard/Partner_Dashboard/PartnerDashboard")
);
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));
const PartnerRegistration = React.lazy(() =>
  import("./Pages/Partner_Registration/PartnerRegistration")
);
const ForgetPass = React.lazy(() =>
  import("./Pages/Forget_Password/ForgetPassword")
);

const UpcomingFeature = React.lazy(() =>
  import("./Pages/Upcoming_Feature/UpcomingFeature")
);
const Policy = React.lazy(() => import("./Pages/Policy_Page/Policy"));
const PersonalLoan = React.lazy(() =>
  import("./Pages/Personal_Loan/Personal_Loan")
);
const AutolLoan = React.lazy(() =>
  import("./Pages/Personal_Loan/Auto_Loan")
);
const HomelLoan = React.lazy(() =>
  import("./Pages/Personal_Loan/Home_Loan")
);
const SuggestedProduct = React.lazy(() =>
  import("./Pages/Suggested_Product/Suggested_Product")
);
const EmiCalculator = React.lazy(() =>
  import("./Pages/Personal Loan/EMI_Calculator/emi_calculator")
);
const Sme_Finance = React.lazy(() => import("./Pages/SME_Finance/Sme_Finance"));

toast.configure();
function App() {
  const [loggedInUser, setloggedInUser] = useState(
    () => {
      const saved = authService.getCurrentUser();
      // const initialValue = JSON.parse(saved);
      return saved || "";
    }
    // {
    // mobile: "",
    // password: "",
    // }
  );
  useEffect(() => {
    preLoaderFunction();
  }, []);
  return (
    <UserContext.Provider value={[loggedInUser, setloggedInUser]}>
      <Layout user={loggedInUser}>
        <Switch>
          <Route path="/credit-card/details/:id">
            <Suspense fallback={<CustomSpinner />}>
              <CardDetails />
            </Suspense>
          </Route>
          <Route path="/loan/details/:id">
            <Suspense fallback={<CustomSpinner />}>
              <LoanDetails />
            </Suspense>
          </Route>
          <Route path="/credit-card">
            <Suspense fallback={<CustomSpinner />}>
              <CreditCardComponent />
            </Suspense>
          </Route>
          <Route path="/upcoming-feature">
            <Suspense fallback={<CustomSpinner />}>
              <UpcomingFeature />
            </Suspense>
          </Route>
          <Route path="/application/:cardId">
            <Suspense fallback={<CustomSpinner />}>
              <ApplicationComponent />
            </Suspense>
          </Route>
          <Route path="/home-loan-application/:cardId">
            <Suspense fallback={<CustomSpinner />}>
              <HomeLoanApplicationComponent />
            </Suspense>
          </Route>
          <Route path="/signin">
            <Suspense fallback={<CustomSpinner />}>
              <SignIn />
            </Suspense>
          </Route>
          <Route path="/signup">
            <Suspense fallback={<CustomSpinner />}>
              <SignUp />
            </Suspense>
          </Route>
          <Route path="/user-dashboard">
            <Suspense fallback={<CustomSpinner />}>
              <UserDashboard />
            </Suspense>
          </Route>
          <Route path="/partner-dashboard">
            <Suspense fallback={<CustomSpinner />}>
              <PartnerDashboard />
            </Suspense>
          </Route>
          <Route path="/partner-registration">
            <Suspense fallback={<CustomSpinner />}>
              <PartnerRegistration />
            </Suspense>
          </Route>
          <Route path="/forget-password">
            <Suspense fallback={<CustomSpinner />}>
              <ForgetPass />
            </Suspense>
          </Route>
          <Route path="/verify-contact">
            <Suspense fallback={<CustomSpinner />}>
              <VerifyContactNumber />
            </Suspense>
          </Route>
          <Route path="/policy">
            <Suspense fallback={<CustomSpinner />}>
              <Policy />
            </Suspense>
          </Route>
          <Route path="/personal-loan">
            <Suspense fallback={<CustomSpinner />}>
              <PersonalLoan />
            </Suspense>
          </Route>
          <Route path="/auto-loan">
            <Suspense fallback={<CustomSpinner />}>
              <AutolLoan />
            </Suspense>
          </Route>
          <Route path="/home-loan">
            <Suspense fallback={<CustomSpinner />}>
              <HomelLoan />
            </Suspense>
          </Route>
          <Route path="/suggested-products">
            <Suspense fallback={<CustomSpinner />}>
              <SuggestedProduct />
            </Suspense>
          </Route>
          <Route path="/EmiCalculator">
            <Suspense fallback={<CustomSpinner />}>
              <EmiCalculator />
            </Suspense>
          </Route>
          <Route path="/Sme_Finance">
            <Suspense fallback={<CustomSpinner />}>
              <Sme_Finance />
            </Suspense>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Suspense fallback={<CustomSpinner />}>
              <NotFound />
            </Suspense>
          </Route>
        </Switch>
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
