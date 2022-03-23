import React, { useState } from "react";
import cx from "classnames";
import style from "./ContractInfo.module.scss";

function ContractInfo() {
  const [user, setUser] = useState({
    phone_no: "",
    email: "",
    location: "",
    address: "",
  });
  function handlePhone_no(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.phone_no = e.target.value;
    setUser(userData);
  }
  function handleEmail(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.email = e.target.value;
    setUser(userData);
  }

  function handleLocation(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.location = e.target.value;
    setUser(userData);
  }
  function handleAddress(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.address = e.target.value;
    setUser(userData);
  }
  return (
    <div class={cx("row ", style.row)}>
      <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
        <div className="card p-5" style={{ width: "80%" }}>
          <div class="sign-up-form">
            <div class="group">
              <label for="phone_no" class={cx("label", style.label)}>
                Phone No:
              </label>
              <br></br>
              <input
                id="phone"
                type="text"
                class={cx("input", style.input)}
                data-type="number"
                placeholder="Enter Your Mobile no."
                onChange={handlePhone_no}
              />
            </div>

            <div class="group">
              <label for="email" class={cx("label", style.label)}>
                Email:
              </label>
              <br></br>
              <input
                id="email"
                type="text"
                class={cx("input", style.input)}
                placeholder="Enter Your Address"
                onChange={handleEmail}
              />
            </div>
            <div class="Selectgroup">
              <label for="location" class={cx("label", style.label)}>
                Location:
              </label>
              <br></br>
              <select
                class={cx("location", style.location)}
                name="location"
                onChange={handleLocation}
              >
                <option value="Barisal">Barisal</option>
                <option value="Chittagong">Chittagong</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Rajshahi">Rajshahi</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractInfo;
