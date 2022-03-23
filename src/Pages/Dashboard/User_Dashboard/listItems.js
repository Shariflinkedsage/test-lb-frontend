import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import List from "@mui/material/List";
import http from "../../../Services/httpService";
import authService from "../../../Services/authService";


export default function MainListItems() {
  let history = useHistory()
  async function resetPasswordRequest() {
    const { data } = await http.post(
      `${http.baseUrl}/auth/request-reset-password`, {
      phoneNumber: authService.getCurrentUser().phoneNumber
    }
    );
    //console.log("after reset api call", data)
    if (data && data.success)
      history.push({
        pathname: "/user-dashboard/Settings",
        state: data.data
      })
  }
  return <>
    <List>
      <Link to="/user-dashboard">
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
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
      {/* <Link to="/user-dashboard/promotion">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Promotion" />
      </ListItem>
    </Link> */}
      <Link onClick={() => { resetPasswordRequest() }}>
        <ListItem button>
          <ListItemIcon>
            <SettingsApplicationsIcon />
          </ListItemIcon>
          <ListItemText primary="Change Password" />
        </ListItem>
      </Link>
      {/* <Link to="/user-dashboard/new-lead">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon> 
        <ListItemText primary="New Lead" />
      </ListItem>
    </Link> */}
      {/* <Link to="/user-dashboard/Policy">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Policy" />
      </ListItem>
    </Link>
    <Link to="/user-dashboard/Referral">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Referral" />
      </ListItem> */}
      {/* </Link> */}
      {/* <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem> */}
    </List></>
}

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );
