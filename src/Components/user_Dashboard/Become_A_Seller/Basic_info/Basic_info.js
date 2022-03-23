import React, { useState } from "react";
import cx from "classnames";
import style from "./Basic_info.module.scss";

function Basic_info() {
  const [user, setUser] = useState({
    name: "",
    gender: "",

    phone_no: "",
    email: "",
    location: "",
    address: "",

    accountName: "",
    bankName: "",
    branchName: "",
    paymentMode: "",
  });
  function handlename(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.name = e.target.value;
    setUser(userData);
  }
  function handleGender(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.gender = e.target.value;
    setUser(userData);
  }

  function handleAccaountName(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.accountName = e.target.value;
    setUser(userData);
  }
  function handleBankName(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.bankName = e.target.value;
    setUser(userData);
  }
  function handleBranceName(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.branchName = e.target.value;
    setUser(userData);
  }
  function handlePaymentMode(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.paymentMode = e.target.value;
    setUser(userData);
  }
  return (
    <div class={cx("row ", style.row)}>
      <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
        <div class="card p-5" style={{ width: "80%" }}>
          <div class="sign-up-form">
            <div class={cx("titel", style.titel)}>
              <label for="title" class="titellabel">
                Basic Information
              </label>
            </div>
            <div class={cx("group", style.input)}>
              <label for="name" class={cx("label", style.label)}>
                Name:
              </label>
              <br></br>
              <input
                id="name"
                type="text"
                class={cx("input", style.input)}
                placeholder="Enter Your Name"
                onChange={handlename}
              />
            </div>
            <div class="Selectgroup">
              <label for="gender" class={cx("label", style.label)}>
                Gender:
              </label>
              <br></br>
              <select
                class={cx("gender", style.location)}
                name="gender"
                onChange={handleGender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* <div className={style.btn_group}>
              <button
                class={cx("btn_group", style.btn_group_button)}
                type="submit"
                value="Submit"
              >
                Update
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic_info;
