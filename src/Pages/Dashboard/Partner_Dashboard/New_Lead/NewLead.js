import React, { useState } from "react";
import cx from "classnames";
import style from "./NewLead.module.scss";

function NewLead() {
  const [user, setUser] = useState({
    location: "",
    profession: "",
    monthlyIncome: "",
    name: "",
    phone_no: "",
    email: "",
    otp: "",
  });
  function handleLocation(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.location = e.target.value;
    setUser(userData);
  }
  function handleprofession(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.profession = e.target.value;
    setUser(userData);
  }
  function handlemonthlyIncome(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.monthlyIncome = e.target.value;
    setUser(userData);
  }
  function handlename(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.name = e.target.value;
    setUser(userData);
  }

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
  function handleotp(e) {
    //console.log(e.target.value);
    let userData = { ...user };
    //console.log("user", userData);
    userData.otp = e.target.value;
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
                New Lead
              </label>
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

            <div class="Selectgroup">
              <label for="profession" class={cx("label", style.label)}>
                Profession:
              </label>
              <br></br>
              <select
                class={cx("location", style.location)}
                name="profession"
                onChange={handleprofession}
              >
                <option value="Salaried">Salaried</option>
                <option value="SelfEmployed">SelfEmployed</option>
                <option value="LandLord">LandLord</option>
              </select>
            </div>

            <div class="group">
              <label for="monthlyIncome" class={cx("label", style.label)}>
                Monthly Income:
              </label>
              <br></br>
              <input
                id="monthlyIncome"
                type="text"
                class={cx("input", style.input)}
                placeholder="Enter Your Monthly Income"
                onChange={handlemonthlyIncome}
              />{" "}
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
              <div class="group">
                <label for="email" class={cx("label", style.label)}>
                  Email:
                </label>
                <br></br>
                <input
                  id="email"
                  type="text"
                  class={cx("input", style.input)}
                  placeholder="Enter Your Email"
                  onChange={handleEmail}
                />{" "}
              </div>

              <div className={style.btn_group}>
                <button
                  class={cx("btn_group", style.btn_group_button)}
                  type="submit"
                  value="Submit"
                >
                  New Lead
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-10 mx-auto p-5 d-flex justify-content-center">
        <div class="card p-5" style={{ width: "50%" }}>
          <div class="sign-up-form">
            <div class={cx("titel", style.titel)}>
              <label for="title" class="titellabel">
                Contact Verification
              </label>
            </div>

            <div class={cx("secondtitel", style.secondtitel)}>
              <label for="title" class="titellabel">
                Please Provide that verification code here:
              </label>
            </div>
            <div class={cx("group", style.input)}>
              <label for="otp" class={cx("label", style.label)}>
                OTP:
              </label>
              <br></br>
              <input
                id="otp"
                type="number"
                data-type="text"
                class={cx("input", style.input)}
                placeholder="Enter Your Current Password"
                onChange={handleotp}
              />
            </div>

            <div className={style.btn_group}>
              <button
                class={cx("btn_group", style.btn_group_button)}
                type="submit"
                value="Submit"
              >
                Confiram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewLead;
