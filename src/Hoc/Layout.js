import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
export default function Layout(props) {

  
  // const Main = styled.main`
  //   margin-top: 60;
  // `;
  //console.log("in layout", props.user);
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main style={{ marginTop: "60px"}}>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
