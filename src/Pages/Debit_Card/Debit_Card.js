// import React from "react";
// import Card from "../../Components/Cards/Card/Card";
// import gold_credit from "../../images/cards/gold_credit_card.png";
// import Grameenphone_credit_card from "../../images/cards/Grameenphone_credit_card.png";
// import rovi_elite_credit_card from "../../images/cards/rovi_elite_credit_card.png";
// import super_value_titanium_credit_card from "../../images/cards/super_value_titanium_credit_card.jpg";
// import visa_signature_cedit_card from "../../images/cards/visa_signature_cedit_card.png";
// import visa_silver_credit_card from "../../images/cards/visa_silver_credit_card.png";
// function DebitCard() {
//   return (
//     <div style={{ marginTop: 80 }}>
//       <Card imageUrl={gold_credit} />
//       <Card imageUrl={Grameenphone_credit_card} />
//       <Card imageUrl={rovi_elite_credit_card} />
//       <Card imageUrl={super_value_titanium_credit_card} />
//       <Card imageUrl={Grameenphone_credit_card} />
//       <Card imageUrl={visa_signature_cedit_card} />
//       <Card imageUrl={visa_silver_credit_card} />
//     </div>
//   );
// }

// export default DebitCard;
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(0),
//       width: "50ch",
//     },
//   },
// }));
// export default function NumberVerification() {
//   const classes = useStyles();
//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <p
//         style={{
//           fontWeight: 500,
//           textAlign: "center",
//           fontSize: 26,
//           color: "black",
//         }}
//       >
//         Please Provide Valid Phone Number
//       </p>
//       <TextField id="standard-basic" label="Phone Number" />
//       {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
//     </form>
//   );
// }
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
