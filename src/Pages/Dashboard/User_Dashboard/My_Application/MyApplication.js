import React, { useState, useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import style from "./MyApplication.module.scss";
import Usercontext from "./../../../../Contexts/UserContexts";
import http from "../../../../Services/httpService";
import { Link } from "react-router-dom";
import Preloader from "../../../../Components/Common/PreLoader";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Stack from "@mui/material/Stack";

function MyApplication() {
  const [application, setApplication] = useState();
  const [user, setUser] = useContext(Usercontext);
  const [userData, setUserData] = useState();
  const [preloaderVar, setPreloaderVar] = useState(false);
  const [dateTimeSec, setDateTimeSec] = useState(false);
  const [applicationId, setApplicationId] = useState();

  const [value, setValue] = useState(new Date());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    window.scroll(0,0)
    // setValue(value.toISOString())
    // setPreloaderVar(true)
    try {
      getApplicationFun()
      const { data: userInformation } = await http.get(
        `${http.baseUrl}/users/${user._id}`
      );

      if (userInformation.success) {
        //console.log(userInformation.data);
        setUserData(userInformation.data);
      }
    } catch (error) {
      //console.log(error);
    }
  }, []);
  async function getApplicationFun(){
    try {
      const { data } = await http.get(
        `${http.baseUrl}/applications/by-user/${user._id}`
      );
      if (data.success) {
        if (data.data && data.data[0]) setApplication(data.data);
        else {
          let temp = [];
          temp[0] = data.data;
          setApplication(temp);
        }
      }
     
    } catch (error) {
      //console.log(error);
    }
  }

  const openDateTimeSecFun = (tempData) => {
    setDateTimeSec(true);
    setApplicationId(tempData._id);
  };

  const setScheduleFun = async () => {
    let vvv = value
    vvv.setHours(vvv.getHours()+6);
    //console.log("aaa",value.toISOString(),vvv,applicationId)
    setPreloaderVar(true);
    const { data } = await http.post(
      `${process.env.REACT_APP_API_URL}/applications/set-schedule/${applicationId}`,
      {
        doccumentCollectionSchedule: vvv,
      }
    );
    if(data) getApplicationFun();
    setDateTimeSec(false);
    setPreloaderVar(false);
    //console.log("call", data);
  };

  return (
    <>
      {preloaderVar ? <Preloader /> : null}
      {!application ? (
        <div className="text-center fs-2">
          You haven't applied for anything Yet
        </div>
      ) : (
        <div className="card pt-4 pb-5  mb-2">
          <h1 className="text-center mb-3" style={{ fontWeight: "bold" }}>
            My Applications
          </h1>
          <Table
            bordered
            hover
            responsive={true}
            className={style.MyApplication}
          >
            <thead>
              <tr>
                <th>SL#</th>
                <th>Applied For</th>
                <th>Product Name</th>
                <th>Status</th>
                <th>Schedule Appointment</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {application.map((_application, key) => (
                <tr>
                  <td>{key + 1}</td>
                  <td>{_application.applicationFor}</td>
                  <td>{_application.product.name}</td>
                  <td>{_application.status}</td>

                  {_application.doccumentCollectionSchedule ? (
                    <td>{_application.doccumentCollectionSchedule.substring(0, 10)}<br />{_application.doccumentCollectionSchedule.substring(11, 19)}</td>
                  ) : (
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => openDateTimeSecFun(_application)}
                      >
                        Set now
                      </button>
                    </td>
                  )}
                  <td>
                    {
                      _application.doccumentCollectionSchedule?
                      <Link to='#'>One of our RM will reach you.</Link>
                      :
                      <>
                      {userData &&
                    userData.isNidVerified &&
                    userData.accountStatementUrl ? (
                      <Link to="#">
                        One of our Telesales agent will reach you soon
                      </Link>
                    ) : (
                      <Link to="user-dashboard/profile_Update">
                        Update profile to get quicker service
                      </Link>
                    )}
                      </>
                    }
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {dateTimeSec ? (
            <div className="set-time-date-sec">
              <div className="container">
                <div className="d-flex justify-content-center popup-sec">
                  <button
                    className="schedule-close-btn"
                    onClick={() => {
                      setDateTimeSec(false);
                    }}
                  >
                    x
                  </button>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DateTimePicker
                        renderInput={(params) => <TextField {...params} />}
                        value={value}
                        onChange={(newValue) => {
                          //console.log("time: ", newValue);
                          setValue(newValue);
                        }}
                      />
                    </Stack>
                  </LocalizationProvider>
                  <div className=" text-center mt-3">
                    <button
                      className="btn btn-primary"
                      onClick={setScheduleFun}
                    >
                      submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}

      {/* <Referal /> */}
    </>
  );
}

export default MyApplication;
