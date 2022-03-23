import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import cx from "classnames";

import style from "./Promotion.module.scss";
import Cards from "../../../../Components/Cards/Card/Card";

// import Box from "@mui/material/Box";
// import { alpha } from "@mui/material/styles";
// import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
// import Card from "../../../../Components/Cards/Card/Card";
// import { Typography } from "@mui/material";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Form from "react-bootstrap/Form";

// function Promotion() {
//   const [card, setCard] = useState();
//   const [age, setAge] = React.useState("");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };
//   return (
//     <Form.Select size="lg">
//       <option>Large select</option>
//     </Form.Select>
//   );
// }

// export default Promotion;
// import React from "react";
// import Form from "react-bootstrap/Form";
// let copyText = document.querySelector(".copy_Text");
// copyText.querySelector("copy_button").addEventListener("click", function () {
//   let input = document.querySelector("input.text");
//   input.select();
//   document.execCommand("copy");
//   copyText.classList.add("active");
//   window.getSelection().remove();
//   setTimeout(function () {
//     copyText.classList.add("active");
//   }, 2500);
// });
// function copy() {
//   //console.log("hello from copy");
//   var copyText = document.querySelector("#name");
//   copyText.select();
//   document.execCommand("copy");
// }

function Promotion() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={cx("row ", style.row)}>
      <div className={cx("card", style.row_card)}>
        <div className={cx("select", style.row_select)}>
          <div className="selection">
            <select
              className={cx("bankSelection", style.row_select_bankSelection)}
            >
              <option value="SCB">Standard Chartered Bank</option>
              <option value="BracBank">Brac bank</option>
              <option value="CityBank">The City Bank</option>
            </select>
          </div>
          <div className="selection">
            <select
              className={cx("bankSelection", style.row_select_cardSelection)}
            >
              <option value="SCB">Visa Card</option>
              <option value="BracBank">Silver</option>
              <option value="CityBank">Master</option>
            </select>
          </div>
        </div>

        <Cards />
        <div className={style.row_btn_group}>
          <button
            class={cx("btn_group", style.row_btn_group_button)}
            type="submit"
            value="Submit"
          >
            Generate Link
          </button>
        </div>
        <div className={cx("linkCopyer", style.row_linkCopyer)}>
          <div class={cx("copy_Text", style.row_inputgroup)}>
            <input
              id="name"
              type="text"
              class={cx("text", style.row_inputgroup_input)}
              placeholder="Here is your Link!"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className={cx("copybutton", style.row_inputgroup)}>
              <CopyToClipboard text={inputValue}>
                <button
                  onClick="copy"
                  class={cx("copy_button", style.row_inputgroup_copybutton)}
                  type="submit"
                  value="Submit"
                >
                  Copy Link
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <Form.Select aria-label="Default select example">
    //   <option>Open this select menu</option>
    //   <option value="1">One</option>
    //   <option value="2">Two</option>
    //   <option value="3">Three</option>
    // </Form.Select>
  );
}

export default Promotion;
