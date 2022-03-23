import React from "react";
import style from "./Spinner.module.scss";
function CustomSpinner() {
  return (
    <div
      className={style.site_preloader}
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "rgba(0,0,0,.6)",
      }}
    >
      {/* <Spinner
        animation="border"
        role="status"
        size="lg"
        variant="primary"
        style={{ width: "50px", height: "50px" }}
      ></Spinner> */}
    </div>
  );
}

export default CustomSpinner;
