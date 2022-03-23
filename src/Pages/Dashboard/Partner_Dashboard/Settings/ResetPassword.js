import React, { useState } from "react";
import cx from "classnames";
import style from "./ResetPassword.module.scss";

function ChangePassword() {
  const [user, setUser] = useState({
    currentPassword: "",
    newPassword: "",
    rePassword: "",
  });
  function handlecurrentPassword(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.currentPassword = e.target.value;
    setUser(userData);
  }
  function handlenewPassword(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.newPassword = e.target.valuRee;
    setUser(userData);
  }
  function handlerePassword(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.rePassword = e.target.value;
    setUser(userData);
  }

  return (
    <div class={cx("row ", style.row)}>
      <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
        <div class="card p-5" style={{ width: "80%" }}>
          <div class="sign-up-form">
            {/* <div className={cx("logo", style.logo)}>
              <img src="/Loaner-Bazar.png" alt="" width="200" height="140" />
            </div> */}
            <div class={cx("titel", style.titel)}>
              <label for="title" class="titellabel">
                Change Your Password
              </label>
            </div>
            <div class={cx("group", style.input)}>
              <label for="currentPassword" class={cx("label", style.label)}>
                Current Password:
              </label>
              <br></br>
              <input
                id="name"
                type="password"
                data-type="password"
                class={cx("input", style.input)}
                placeholder="Enter Your Current Password"
                onChange={handlecurrentPassword}
              />
            </div>
            <div class="group">
              <label for="newPassword" class={cx("label", style.label)}>
                New password:
              </label>
              <br></br>
              <input
                id="newPassword"
                type="password"
                class={cx("input", style.input)}
                data-type="password"
                placeholder="Enter Your New Password."
                onChange={handlenewPassword}
              />
            </div>
            <div class="group">
              <label for="rePassword" class={cx("label", style.label)}>
                Confiram Password:
              </label>
              <br></br>
              <input
                id="rePassword"
                type="text"
                class={cx("input", style.input)}
                data-type="number"
                placeholder="Enter ReEnter Your Password"
                onChange={handlerePassword}
              />
            </div>

            <div className={style.btn_group}>
              <button
                class={cx("btn_group", style.btn_group_button)}
                type="submit"
                value="Submit"
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
