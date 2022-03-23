// export default Location;
import React, { Suspense, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Barisal from "../../../../images/cities/Barishal.jpg";
import Dhaka from "../../../../images/cities/Dhaka.jpg";
import Chittagong from "../../../../images/cities/Chittagong.jpg";
import Sylhet from "../../../../images/cities/Sylhet.jpg";
import Rajshahi from "../../../../images/cities/Rajshahi.jpg";
import Rangpur from "../../../../images/cities/Rangpur.jpg";
import Khulna from "../../../../images/cities/Khulna.jpg";
import style from "./Location.module.scss";
import cx from "classnames";
import SuspenseImg from "../../../Common/SuspenseImage/SuspenseImg";
import httpService from "../../../../Services/httpService";
import Preloader from "../../../Common/PreLoader";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Location({
  userId,
  state,
  handleNext,
  dispathch,
  handleBack,
}) {
  const classes = useStyles();
  let application = { ...state };
  //console.log("state 1", application);

  const [preloaderVar, setPreloaderVar] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = async (selectedCity) => {
    setPreloaderVar(true);
    if (!userId) {
      setPreloaderVar(false);
      application.city = selectedCity;
      dispathch({ type: "increment", payload: application });
      handleNext();
    } else {
      const { data } = await httpService.post(
        `${process.env.REACT_APP_API_URL}/users/updateProfile/${userId}`,
        {
          customer: {
            city: selectedCity,
          },
        }
      );
      if (data) setPreloaderVar(false);
      if (data && data.success) {
        application.city = selectedCity;
        dispathch({ type: "increment", payload: application });
        handleNext();
      }
    }
  };

  return (
    // <div className={classes.root}>
    //   <Grid container spacing={3} justify="center" alignItems="center">
    //     <Grid item xs={3}>
    //       <SuspenseImg src={Barisal} width="150px" />
    //     </Grid>
    //     <Grid item xs={3}>
    //       <SuspenseImg src={Barisal} width="150px" />
    //     </Grid>
    //     <Grid item xs={3}>
    //       <SuspenseImg src={Barisal} width="150px" />
    //     </Grid>
    //     <Grid item xs={3}>
    //       <SuspenseImg src={Barisal} width="150px" />
    //     </Grid>
    //     <Grid item xs={3}>
    //       <SuspenseImg src={Barisal} width="150px" />
    //     </Grid>
    //     <Grid item xs={3}>
    //       <SuspenseImg src={Barisal} width="150px" />
    //     </Grid>
    //   </Grid>
    // </div>
    <div className={cx("list row d-flex justify-content-center g-0")}>
      {preloaderVar ? <Preloader /> : null}
      {/* <LazyLoad height={200}>
        <SuspenseImg src={Barisal} />
      </LazyLoad>
      <LazyLoad height={200} once>
        <SuspenseImg src={Barisal} />
      </LazyLoad> */}
      <p
        style={{
          marginBottom: 20,
          fontWeight: 500,
          textAlign: "center",
          fontSize: 26,
          color: "black",
        }}
      >
        Please Seletct your City
      </p>
      <div
        // height={200}
        className={cx(style.container_lazyload, "col-4")}
        onClick={(e) => handleSubmit("Dhaka")}
        // style={{pointerEvents:"none"}}
        value="Dhaka"
      >
        <SuspenseImg
          src={Dhaka}
          style={{ width: "100px", height: "110px", borderRadius: "50%" }}
          alt="Dhaka"
        />
        <h6 className="text-center">Dhaka</h6>
      </div>
      <div
        height={200}
        className={cx(style.container_lazyload, "col-4")}
        onClick={() => handleSubmit("Chitagong")}
      >
        <SuspenseImg
          src={Chittagong}
          style={{ width: "100px", height: "110px", borderRadius: "50%" }}
          alt="Chitagong"
        />
        <h6 className="text-center">Chitagong</h6>
      </div>
      <div
        height={200}
        className={cx(style.container_lazyload, "col-4")}
        placeholder={<div>loading</div>}
        onClick={() => handleSubmit("Sylhet")}
      >
        <SuspenseImg
          src={Sylhet}
          style={{ width: "100px", height: "110px", borderRadius: "50%" }}
          alt="Chitagong"
        />
        <h6 className="text-center">Sylhet</h6>
      </div>
      <div
        height={200}
        className={cx(style.container_lazyload, "col-4")}
        placeholder={<div>loading</div>}
        onClick={() => handleSubmit("Rajshahi")}
      >
        <SuspenseImg
          src={Rajshahi}
          style={{ width: "100px", height: "110px", borderRadius: "50%" }}
          alt="Chitagong"
        />
        <h6 className="text-center">Rajshahi</h6>
      </div>
      <div
        height={200}
        className={style.container_lazyload}
        placeholder={<div>loading</div>}
        onClick={() => handleSubmit("Khulna")}
      >
        <SuspenseImg
          src={Khulna}
          style={{ width: "100px", height: "110px", borderRadius: "50%" }}
          alt="Chitagong"
        />
        <h6 className="text-center">Khulna</h6>
      </div>
      <div
        height={200}
        className={style.container_lazyload}
        placeholder={<div>loading</div>}
        onClick={() => handleSubmit("Rangpur")}
      >
        <SuspenseImg
          src={Rangpur}
          style={{ width: "100px", height: "110px", borderRadius: "50%" }}
          alt="Chitagong"
        />
        <h6 className="text-center">Rangpur</h6>
      </div>
      <div
        height={200}
        className={style.container_lazyload}
        onClick={() => handleSubmit("Barisal")}
      >
        <SuspenseImg
          src={Barisal}
          style={{ width: "100px", height: "110px", borderRadius: "50%" }}
          alt="Chitagong"
        />
        <h6 className="text-center">Barisal</h6>
      </div>
    </div>
  );
}
