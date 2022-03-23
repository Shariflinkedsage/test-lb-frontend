import { Box, Container, Typography } from "@material-ui/core";
import { useEffect } from "react";

const UpcomingFeature = () => {

  useEffect(() => {
    window.scroll(0,0);
  })
return(
  <>
    {/* <Helmet>
      <title>404 | Loaner Bazar</title>
    </Helmet> */}
    <Box
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography align="center" color="textPrimary" variant="h4">
          This is an upcoming feature of LoanerBazaar
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="h5"
          style={{ marginTop: "10px" }}
        >
          {/* You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation */}
          Thank you for being with us
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <img
            alt="Under development"
            src="/undraw_page_not_found_su7k.svg"
            style={{
              marginTop: 50,
              display: "inline-block",
              maxWidth: "100%",
              width: 560,
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
)
}

export default UpcomingFeature;
