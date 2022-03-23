import React, { useState } from "react";
import cx from "classnames";
import style from "./PaymentInfo.module.scss";

function PaymentInfo() {
  const [user, setUser] = useState({
    accountName: "",
    bankName: "",
    branchName: "",
    paymentMode: "",
  });
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
        <div className="card p-5" style={{ width: "80%" }}>
          <div class="sign-up-form">
            <div class={cx("titel", style.titel)}>
              <label for="title" class="titellabel">
                Payment Information
              </label>
            </div>

            <div class="group">
              <label for="accountName" class={cx("label", style.label)}>
                Account Name:
              </label>
              <br></br>
              <input
                id="accountName"
                type="text"
                class={cx("input", style.input)}
                data-type="number"
                placeholder="Enter Your Mobile no."
                onChange={handleAccaountName}
              />
              <div class="group">
                <label for="bankName" class={cx("label", style.label)}>
                  Bank Name:
                </label>
                <br></br>
                <input
                  id="bankName"
                  type="text"
                  class={cx("input", style.input)}
                  placeholder="Enter Your Address"
                  onChange={handleBankName}
                />
              </div>

              <div class="Selectgroup">
                <label for="paymentMode" class={cx("label", style.label)}>
                  Payment Mode:
                </label>
                <br></br>
                <select
                  class={cx("PaymentMode", style.PaymentMode)}
                  name="paymentMode"
                  onChange={handlePaymentMode}
                >
                  <option value="Bank">Bank</option>
                  <option value="MobileBanking">Mobile Banking</option>
                </select>
              </div>

              <div class="group">
                <label for="address" class={cx("label", style.label)}>
                  Address:
                </label>
                <br></br>
                <input
                  id="address"
                  type="text"
                  class={cx("input", style.input)}
                  placeholder="Enter Your Address"
                  onChange={handleBranceName}
                />
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
    </div>
  );
}

export default PaymentInfo;
