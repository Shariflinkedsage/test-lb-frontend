// import React, { useState } from "react";
// import cx from "classnames";
// import { Public } from "@material-ui/icons";
// import { height } from "dom-helpers";
// import style from "./ProfileUpdate.module.scss";

// function ProfileUpdate() {
//   const [user, setUser] = useState({
//     companyName: "",
//     companyMobile: "",
//     companyLocation: "",
//     companyAddress: "",
//     representativeName: "",
//     representativeEmail: "",
//     representativePhone: "",
//   });
//   function handleCompanyName(e) {
//     //console.log(e.target.value);
//     let userData = { ...user };
//     //console.log("user", userData);
//     userData.companyName = e.target.value;
//     setUser(userData);
//   }
//   function handleCompanyobile(e) {
//     //console.log(e.target.value);
//     let userData = { ...user };
//     //console.log("user", userData);
//     userData.companyobile = e.target.value;
//     setUser(userData);
//   }
//   function handleCompanyLocation(e) {
//     //console.log(e.target.value);
//     let userData = { ...user };
//     //console.log("user", userData);
//     userData.companyLocation = e.target.value;
//     setUser(userData);
//   }
//   function handleCompanyAddress(e) {
//     //console.log(e.target.value);
//     let userData = { ...user };
//     //console.log("user", userData);
//     userData.companyAddress = e.target.value;
//     setUser(userData);
//   }
//   function handleRepresentativeName(e) {
//     //console.log(e.target.value);
//     let userData = { ...user };
//     //console.log("user", userData);
//     userData.representativeName = e.target.value;
//     setUser(userData);
//   }
//   function handleRepresentativeEmail(e) {
//     //console.log(e.target.value);
//     let userData = { ...user };
//     //console.log("user", userData);
//     userData.representativeEmail = e.target.value;
//     setUser(userData);
//   }
//   function handleRepresentativePhone(e) {
//     //console.log(e.target.value);
//     let userData = { ...user };
//     //console.log("user", userData);
//     userData.representativePhone = e.target.value;
//     setUser(userData);
//   }

//   return (
//     <div class={cx("row ", style.row)}>
//       <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
//         <div class="card p-5" style={{ width: "80%" }}>
//           <div class="sign-up-form">
//             <div class={cx("titel", style.row_titel)}>
//               <label for="title" class="titellabel">
//                 Please Update Company Information
//               </label>
//             </div>

//             <div class={cx("group", style.row_input)}>
//               <label for="name" class={cx("label", style.row_label)}>
//                 Company Name:
//               </label>
//               <br></br>
//               <input
//                 id="name"
//                 type="text"
//                 class={cx("input", style.row_input)}
//                 placeholder="Enter Your Company Name"
//                 onChange={handleCompanyName}
//               />
//             </div>

//             <div class={cx("group", style.row_input)}>
//               <label for="companymobile" class={cx("label", style.row_label)}>
//                 Company Mobile:
//               </label>
//               <br></br>
//               <input
//                 id="companymobile"
//                 type="text"
//                 class={cx("input", style.row_input)}
//                 data-type="number"
//                 placeholder="Enter Your Company Mobile "
//                 onChange={handleCompanyobile}
//               />{" "}
//               <div class="Selectgroup">
//                 <label
//                   for="companylocation"
//                   class={cx("label", style.row_label)}
//                 >
//                   Company Location:
//                 </label>
//                 <br></br>
//                 <select
//                   class={cx("companylocation", style.row_location)}
//                   name="companylocation"
//                   onChange={handleCompanyLocation}
//                 >
//                   <option value="Barisal">Barisal</option>
//                   <option value="Chittagong">Chittagong</option>
//                   <option value="Dhaka">Dhaka</option>
//                   <option value="Khulna">Khulna</option>
//                   <option value="Mymensingh">Mymensingh</option>
//                   <option value="Rajshahi">Rajshahi</option>
//                   <option value="Rangpur">Rangpur</option>
//                   <option value="Sylhet">Sylhet</option>
//                 </select>
//               </div>
//             </div>

//             <div class="group">
//               <label for="companyaddress" class={cx("label", style.row_label)}>
//                 Company Address:
//               </label>
//               <br></br>
//               <input
//                 id="companyaddress"
//                 type="text"
//                 class={cx("input", style.row_input)}
//                 placeholder="Enter Your Company Address"
//                 onChange={handleCompanyAddress}
//               />{" "}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
//         <div class="card p-5" style={{ width: "80%" }}>
//           <div class="sign-up-form">
//             <div class={cx("titel", style.row_titel)}>
//               <label for="title" class="titellabel">
//                 Please Update Representative Information
//               </label>
//             </div>

//             <div class={cx("group", style.row_input)}>
//               <label
//                 for="representativeName"
//                 class={cx("label", style.row_label)}
//               >
//                 Representative Name:
//               </label>
//               <br></br>
//               <input
//                 id="representativeName"
//                 type="text"
//                 class={cx("input", style.row_input)}
//                 placeholder="Enter Your Representative Name"
//                 onChange={handleRepresentativeName}
//               />
//             </div>

//             <div class={cx("group", style.row_input)}>
//               <label
//                 for="representativeEmail"
//                 class={cx("label", style.row_label)}
//               >
//                 Representative Email:
//               </label>
//               <br></br>
//               <input
//                 id="representativeEmail"
//                 type="text"
//                 class={cx("input", style.row_input)}
//                 data-type="text"
//                 placeholder="Enter Your Representative Email "
//                 onChange={handleRepresentativeEmail}
//               />{" "}
//               <div class="group">
//                 <label
//                   for="representativePhone"
//                   class={cx("label", style.row_label)}
//                 >
//                   Representative Phone:
//                 </label>
//                 <br></br>
//                 <input
//                   id="representativePhone"
//                   type="text"
//                   class={cx("input", style.row_input)}
//                   placeholder="Enter Your Representative Phone"
//                   onChange={handleRepresentativePhone}
//                 />{" "}
//               </div>
//               <div className={style.btn_group}>
//                 <button
//                   class={cx("btn_group", style.btn_group_button)}
//                   type="submit"
//                   value="Submit"
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileUpdate;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tab from "@mui/material/Tab";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import cx from "classnames";
// import { Public } from "@material-ui/icons";
// import { height } from "dom-helpers";
// import RepresentativeInfo from "./RepresentitiveInformation/RepresentitiveInformation";
// import Button from "@mui/material/Button";
// import style from "./ProfileUpdate.module.scss";
// import { Container } from "@material-ui/core";

// export default function ProfileUpdate() {
//   const [value, setValue] = React.useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%", typography: "body1" }}>
//       <TabContext value={value}>
//         <Box
//           sx={{
//             borderBottom: 1,
//             borderColor: "divider",
//             display: "flex",
//             justifyContent: "space-evenly",
//           }}
//         >
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">
//           <div class={cx("row ", style.row)}>
//             <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
//               <div class="card p-5" style={{ width: "80%" }}>
//                 <div class="sign-up-form">
//                   <div class={cx("titel", style.row_titel)}>
//                     <label for="title" class="titellabel">
//                       Please Update Company Information
//                     </label>
//                   </div>

//                   <div class={cx("group", style.row_input)}>
//                     <label for="name" class={cx("label", style.row_label)}>
//                       Company Name:
//                     </label>
//                     <br></br>
//                     <input
//                       id="name"
//                       type="text"
//                       class={cx("input", style.row_input)}
//                       placeholder="Enter Your Company Name"
//                       // onChange={handleCompanyName}
//                     />
//                   </div>

//                   <div class={cx("group", style.row_input)}>
//                     <label
//                       for="companymobile"
//                       class={cx("label", style.row_label)}
//                     >
//                       Company Mobile:
//                     </label>
//                     <br></br>
//                     <input
//                       id="companymobile"
//                       type="text"
//                       class={cx("input", style.row_input)}
//                       data-type="number"
//                       placeholder="Enter Your Company Mobile "
//                       // onChange={handleCompanyobile}
//                     />{" "}
//                     <div class="Selectgroup">
//                       <label
//                         for="companylocation"
//                         class={cx("label", style.row_label)}
//                       >
//                         Company Location:
//                       </label>
//                       <br></br>
//                       <select
//                         class={cx("companylocation", style.row_location)}
//                         name="companylocation"
//                         // onChange={handleCompanyLocation}
//                       >
//                         <option value="Barisal">Barisal</option>
//                         <option value="Chittagong">Chittagong</option>
//                         <option value="Dhaka">Dhaka</option>
//                         <option value="Khulna">Khulna</option>
//                         <option value="Mymensingh">Mymensingh</option>
//                         <option value="Rajshahi">Rajshahi</option>
//                         <option value="Rangpur">Rangpur</option>
//                         <option value="Sylhet">Sylhet</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div class="group">
//                     <label
//                       for="companyaddress"
//                       class={cx("label", style.row_label)}
//                     >
//                       Company Address:
//                     </label>
//                     <br></br>
//                     <input
//                       id="companyaddress"
//                       type="text"
//                       class={cx("input", style.row_input)}
//                       placeholder="Enter Your Company Address"
//                       // onChange={handleCompanyAddress}
//                     />{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </TabPanel>
//         <TabPanel value="2">
//           {" "}
//           <RepresentativeInfo />
//         </TabPanel>
//       </TabContext>
//       <Container component="div" className="text-center">
//         <button className="btn btn-primary p-2 ps-5 pe-5">Update</button>
//       </Container>
//     </Box>
//   );
// }

import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RepresentativeInfo from "./RepresentitiveInformation/RepresentitiveInformation";
import CompanyInformation from "./CompanyInformation/CompanyInformation";
import style from "./ProfileUpdate.module.scss";
import http from "../../../../Services/httpService";
import userContexts from "../../../../Contexts/UserContexts";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function ProfileUpdate() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [partner, setpartner] = useState();
  const [companyContext, setCompanyContext] = useContext(userContexts);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  useEffect(async () => {
    try {
      const { data: company } = await http.get(
        `${http.baseUrl}/companies/${companyContext._id}`
      );
      //console.log(company);
      if (company && company.success) {
        setpartner(company.data);
      }
    } catch (error) {
      //console.log(error);
    }
  }, [companyContext]);
  useEffect(() => {}, [partner]);
  return (
    <Box sx={{ bgcolor: "background.paper" }} className={style.container}>
      <AppBar position="relative" color="transparent">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          sx={{ margin: "0px" }}
        >
          <Tab
            label="Company Information"
            {...a11yProps(0)}
            sx={{ fontSize: "20px" }}
          />
          <Tab
            label="Representative Information"
            {...a11yProps(1)}
            sx={{ fontSize: "20px" }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        enableMouseEvents
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {partner && <CompanyInformation partner={partner} />}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <RepresentativeInfo partner={partner} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
