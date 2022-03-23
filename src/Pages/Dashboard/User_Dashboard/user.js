import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { styled, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MainListItems from "./listItems";
import routes from "./routes";
import "./globalCssForMaterial.scss";
import { useWindowWidth } from "../../../Services/hooks";
import authService from "../../../Services/authService";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const mdTheme = createTheme();

function DashboardContent() {
  const history = useHistory();
  const [open, setOpen] = React.useState(true);
  const [openForMobile, setopenForMobile] = useState(true);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const windowWidth = useWindowWidth();
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let anchor = "left";
  const toggleDrawerForMobile = (anchor, openForMobile) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setopenForMobile(openForMobile);
    setState({ ...state, [anchor]: openForMobile });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawerForMobile(anchor, false)}
      onKeyDown={toggleDrawerForMobile(anchor, false)}
    >
      <List>
        {/* <Link to="/user-dashboard">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="My Application" />
          </ListItem>
        </Link>
        <Link to="/user-dashboard/profile">
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <Link to="/user-dashboard/profile_Update">
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile Update" />
          </ListItem>
        </Link>
        <Link to="/user-dashboard/Settings">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Change Passwordssssss" />
          </ListItem>
        </Link> */}
        <MainListItems></MainListItems>
      </List>
    </Box>
  );

  useEffect(() => {
    if (!authService.getCurrentUser()) {
      history.push("/signin");
    }
  }, []);
  return (
    <Box sx={{ display: "flex", marginTop: "60px" }}>
      <CssBaseline />
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        {windowWidth && windowWidth > 700 ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        ) : (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={
              {
                // marginRight: "36px",
                // ...(open && { display: "none" }),
              }
            }
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Toolbar>
      {/* </AppBar> */}
      {windowWidth > 700 ? (
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{ visibility: "visible", zIndex: "0" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          ></Toolbar>
          <Divider />
          <List>
            <MainListItems></MainListItems>
          </List>
          <Divider />
        </Drawer>
      ) : (
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          sx={{ visibility: "visible", zIndex: "0" }}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          ></Toolbar>
          <Divider />
          <List>
            <MainListItems></MainListItems>
          </List>
          <Divider />
        </Drawer>
      )}
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "90vh",
          overflow: "auto",
          paddingTop: "60px",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              exact={route.exact}
              component={route.main}
            >
              <route.main />
            </Route>
          ))}
        </Container>
      </Box>
    </Box>
  );
}

export default function UserDashboard() {
  return <DashboardContent />;
}
