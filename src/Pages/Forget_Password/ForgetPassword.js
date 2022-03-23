import React, { useState } from "react";
import cx from "classnames";
import style from "./ForgetPassword.module.scss";
import { useHistory, useLocation } from "react-router-dom";
import http from "../../Services/httpService";


function ChangePassword() {
  const location = useLocation()
  let history = useHistory()
  const [user, setUser] = useState({
    phoneNumber: location.state && location.state.phoneNumber || "",
    // currentPassword = otp
    otp: "",
    newPassword: "",
    rePassword: "",
  });


  function handleOtp(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.otp = e.target.value;
    setUser(userData);
  }

  function handleNewPass(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.newPassword = e.target.value;
    setUser(userData);
  }

  function handlerePassword(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.rePassword = e.target.value;
    setUser(userData);
  }


  async function resetPassword(e) {
    e.preventDefault()
    if (user && user.newPassword === user.rePassword) {
      try {
        const { data } = await http.post(
          `${http.baseUrl}/auth/reset-password`, {
          phoneNumber: user.phoneNumber,
          otp: user.otp,
          password: user.newPassword
        }
        );

        if (data && data.success) {
          history.push("/signin");
        }
        else {
          document.getElementById("otp").value = "Enter Valid OTP"
        }
      }
      catch (error) {
        document.getElementById("otp").value = "Enter Valid OTP"
      }
    }
    else if (user && user.newPassword != user.rePassword) {
      let userData = { ...user };
      userData.rePassword = '';
      document.getElementById("rePassword").value = ''
      setUser(userData);
    }
  }

  return (
    <div class={cx("row ", style.row)}>
      <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
        <div class="card p-5" style={{ width: "80%" }}>
          <div class="sign-up-form">
            <div class={cx("titel", style.titel)}>
              <label for="title" class="titellabel">
                Change Your Password
              </label>
            </div>
            <form onSubmit={(e) => { resetPassword(e) }}>
              <div class={cx("group", style.input)}>
                <label for="currentPassword" class={cx("label", style.label)}>
                  OTP (Sent to your Phone Number):
                </label>
                <br></br>
                <input
                  required
                  id="otp"
                  type="text"
                  data-type="text"
                  class={cx("input", style.input)}
                  placeholder="Enter Your OTP"
                  onChange={handleOtp}
                />
              </div>
              <div class="group">
                <label for="newPassword" class={cx("label", style.label)}>
                  New password:
                </label>
                <br></br>
                <input
                  required
                  id="newPassword"
                  type="password"
                  class={cx("input", style.input)}
                  data-type="password"
                  placeholder="Enter Your New Password."
                  onChange={handleNewPass}
                />
              </div>
              <div class="group">
                <label for="rePassword" class={cx("label", style.label)}>
                  Confiram Password:
                </label>
                <br></br>
                <input
                  required
                  id="rePassword"
                  type="password"
                  defaultValue={user.rePassword}
                  class={cx("input", style.input)}
                  data-type="number"
                  placeholder="Re Enter Your Password"
                  onChange={handlerePassword}
                />
              </div>

              <div className={style.btn_group}>
                <button
                  class={cx("btn_group", style.btn_group_button)}
                  type="submit"
                  value="Submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
