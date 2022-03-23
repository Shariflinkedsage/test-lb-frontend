import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Style from "./BecomeASeller.module.scss";
import Basic_info from "../../../../Components/user_Dashboard/Become_A_Seller/Basic_info/Basic_info";
import ContractInfo from "../../../../Components/user_Dashboard/Become_A_Seller/Contract_info/ContractInfo";
import PaymentInfo from "../../../../Components/user_Dashboard/Become_A_Seller/Payment_info/PaymentInfo";
function BecomeASeller() {
  const [selectedValue, setSelectedValue] = React.useState("no");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    // <div>
    //   <h1 className="text-center">Want to become a Merchant?</h1>
    //   <div className="mt-5 text-center">
    //     <Radio
    //       label="Yes"
    //       checked={selectedValue === "a"}
    //       onChange={handleChange}
    //       value="a"
    //       name="radio-buttons"
    //       inputProps={{ "aria-label": "A" }}
    //     />
    //     <Radio
    //       checked={selectedValue === "b"}
    //       onChange={handleChange}
    //       value="b"
    //       name="radio-buttons"
    //       inputProps={{ "aria-label": "B" }}
    //     />
    //   </div>
    // </div>
    <>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Want to become a Merchant?
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">Want to become a Merchant?</FormLabel> */}
          <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Yes"
              labelPlacement=""
              sx={{
                width: 100,
                "& .MuiFormControlLabel-label": {
                  fontSize: 40,
                },
              }}
              checked={selectedValue === "yes"}
              onChange={handleChange}
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="No"
              sx={{
                width: 100,

                "& .MuiFormControlLabel-label": {
                  fontSize: 40,
                },
              }}
              checked={selectedValue === "no"}
              onChange={handleChange}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Basic_info />
      <ContractInfo />
      <PaymentInfo />
    </>
  );
}

export default BecomeASeller;
