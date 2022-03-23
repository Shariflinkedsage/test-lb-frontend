import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from "../User_Dashboard/Profile/Profile.js";
import MyApplication from "../User_Dashboard/My_Application/MyApplication";
import BecomeASeller from "../User_Dashboard/Become_A_Seller/BecomeASeller";
import Promotion from "../User_Dashboard/Promotion/Promotion";
import Settings from "./Settings/ResetPassword";
import NewLead from "./New_Lead/NewLead";
import Policy from "../../Policy_Page/Policy";
import Referral from "./My_Application/Referral_page/Referral";
import Profile_update from "./Profile/Profile_update.js";

const routes = [
  {
    path: "/user-dashboard",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="My Application" />
        </ListItem>
      );
    },
    main: () => {
      return <MyApplication />;
    },
  },
  {
    path: "/user-dashboard/profile",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      );
    },
    main: () => {
      return <Profile />;
    },
  },
  {
    path: "/user-dashboard/profile_Update",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Profile_Update" />
        </ListItem>
      );
    },
    main: () => {
      return <Profile_update />;
    },
  },
  {
    path: "/user-dashboard/marketting",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Become A Seller" />
        </ListItem>
      );
    },
    main: () => {
      return <BecomeASeller />;
    },
  },
  {
    path: "/user-dashboard/promotion",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Promotion" />
        </ListItem>
      );
    },
    main: () => {
      return <Promotion />;
    },
  },
  {
    path: "/user-dashboard/settings",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="settings" />
        </ListItem>
      );
    },
    main: () => {
      return <Settings />;
    },
  },
  {
    path: "/user-dashboard/new-lead",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="New Lead" />
        </ListItem>
      );
    },
    main: () => {
      return <NewLead />;
    },
  },
  {
    path: "/user-dashboard/Policy",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Policy" />
        </ListItem>
      );
    },
    main: () => {
      return <Policy />;
    },
  },
  {
    path: "/user-dashboard/Referral",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Referral" />
        </ListItem>
      );
    },
    main: () => {
      return <Referral />;
    },
  },
];

export default routes;
