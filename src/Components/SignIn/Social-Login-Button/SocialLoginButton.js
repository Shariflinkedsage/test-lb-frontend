import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // height: "100%",
    // padding: "20px",
    // display: "flex",
    // flexWrap: "wrap",

    // justifyContent: "center",
    // textAlign: "center",
    margin: "20px auto",
    "& > *": {
      //   textAlign: "center",
      // margin: "0 auto",

      margin: theme.spacing(1),
      width: "60ch",
      display: "block",
    },
    "& .MuiButton-fullWidth": {
      marginTop: "30px",
      width: "95% !important",
      paddingTop: "12px",
      backgroundColor: "rgba(249,165,26,1)",
    },
    "& .MuiFormHelperText-root": {
      // textAlign: "center",
      // width: "100%",
    },
  },
  button: {
    position: "relative",
    width: "100%",
    height: "3rem",
    border: "1px solid black",
    borderRadius: "2rem",
    margin: "auto",
    cursor: "pointer",
  },
  button_text: {
    margin: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  button_icon: {
    width: "2.5rem",
    height: "2.5rem",
    padding: ".5rem",
    zIndex: "200",
    position: "absolute",
    margin: "0",
    top: "50%",
    left: ".2rem",
    transform: "translate(0%, -50%)",
  },
  input: {
    minHeight: "100px",
  },
  datepicker: {
    // padding: theme.spacing(2),
  },
}));

const SocialLoginButton = ({ imageUrl, buttonText }) => {
  const classes = useStyles();

  return (
    <div className={classes.button}>
      <img src={imageUrl} alt="" className={classes.button_icon} />
      <p className={classes.button_text}>{buttonText}</p>
    </div>
  );
};

export default SocialLoginButton;
