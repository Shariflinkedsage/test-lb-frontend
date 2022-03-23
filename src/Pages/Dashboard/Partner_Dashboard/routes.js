import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Profile from "../Partner_Dashboard/ProfileUpdatePage/ProfileUpdate";
import Promotion from "../Partner_Dashboard/Promotion/Promotion";
import Settings from "./Settings/ResetPassword";
import NewLead from "./New_Lead/NewLead";
import DashBoard from "./Dashboard/Dashboard";
import RefferedUsers from "./ReferedUsers/ReferedUsers";

const routes = [
  {
    path: "/partner-dashboard",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      );
    },
    main: () => {
      return <DashBoard />;
    },
  },
  {
    path: "/partner-dashboard/profile",
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
    path: "/partner-dashboard/refered-users",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Reffered Users" />
        </ListItem>
      );
    },
    main: () => {
      return <RefferedUsers />;
    },
  },

  {
    path: "/partner-dashboard/promotion",
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
    path: "/partner-dashboard/settings",
    exact: true,
    sidebar: () => {
      return (
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Change Password" />
        </ListItem>
      );
    },
    main: () => {
      return <Settings />;
    },
  },
  {
    path: "/partner-dashboard/new-lead",
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
];

export default routes;
