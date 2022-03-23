import React, { useEffect } from "react";
import { TiTick } from "react-icons/ti";
import { BiArrowBack } from "react-icons/bi";
import { useHistory } from "react-router-dom";

function Applied({message}) {
  let history = useHistory();
  useEffect(() => {
    var delayInMilliseconds = 2000; //1 second
    setTimeout(function () {
      history.push("/user-dashboard");
    }, delayInMilliseconds);
  }, []);
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="text-center">
      <TiTick
        size={100}
        color={"green"}
        style={{
          width: "80px",
          height: "80px",
          border: "1px solid green",
          borderRadius: "50%",
          textAlign: "center",
        }}
      />
      <p
        className="mt-4"
        style={{
          fontWeight: 500,
          textAlign: "center",
          fontSize: 26,
          color: "black",
        }}
      >
        {message}{" "}
      </p>
      {/* <p className="text-center display-6"> Thank you</p> */}
      <p className="text-center">
        A Tele Sales Executive will research your
        <br /> application and contact you very soon
      </p>
      <p
        className="text-center mt-4"
        style={{
          padding: "5px 20px",
          borderRadius: "10px",
          background:
            "linear-gradient( 186deg,rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
          color: "white",
          maxWidth: "150px",
          margin: "0 auto",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <BiArrowBack style={{ marginRight: "5px" }} />
        Back Home
      </p>
    </div>
  );
}

export default Applied;
