import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
      width: "50ch",
    },
    // height: "100%",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
}));
export default function IdVerification() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <p
        style={{
          fontWeight: 500,
          textAlign: "center",
          fontSize: 26,
          color: "black",
        }}
      >
        Please Provide Your NID Number
      </p>
      <TextField id="standard-basic" label="NID Number" />
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    </form>
  );
}
