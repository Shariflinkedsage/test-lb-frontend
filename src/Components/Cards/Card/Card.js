import React, { useState, useEffect } from "react";

import cx from "classnames";
import style from "./Card.module.scss";
import { Modal } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "../../../Services/hooks";
import authService from "../../../Services/authService";

function Card({
  name,
  imageUrl,
  id,
  details,
  loungeFacility,
  minMonthlyIncome,
  eligibleClient,
  catagory,
}) {
  const [showDetails, setshowDetails] = useState(false);
  const [companyReference, setCompanyReference] = useState();
  const [userData, setUserData] = useState(0)
  const location = useLocation();

  const [show, setShow] = useState(false);
  useEffect(async () => {
    let companyReference = await localStorage.getItem("reference");
    setCompanyReference(companyReference);
    if(authService.getCurrentUser())
      setUserData(authService.getCurrentUser())

  }, []);

  
  const handleClose = () => setShow(false);


  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function createMarkup() {
    return { __html: details };
  }
  return (
    <div className="text mt-3">
      <div className="container card mb-2 d-none d-md-block">
        <div className="row">
          <div className="col-3 text-center pt-2">
            <img src={imageUrl} width="100%" alt="" className="p-3" />
          </div>
          <div className="col text-center">
            <div className="row pt-5" style={{ borderBottom: " 1px dotted" }}>
              <div className="col-12">
                <h5 className="fs-4">{name}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col text-center pt-4">
                <h6>Airport Lounge</h6>
                <p className="text-center">{loungeFacility ? "YES" : "No"}</p>
              </div>
              <div className="col text-center pt-4">
                <h6>Reward Points</h6>
                <p className="text-center">YES</p>
              </div>
              <div className="col text-center pt-4">
                <h6>Card Cheque</h6>
                <p className="text-center">YES</p>
              </div>
              <div className="col text-center pt-4">
                <h6>Profession</h6>
                <p className="text-center">
                  {eligibleClient && eligibleClient.toString()}
                </p>
              </div>
              <div className="col text-center pt-4">
                <h6>Monthly Income(BDT)</h6>
                <p className="text-center">{minMonthlyIncome}</p>
              </div>
            </div>
          </div>
          <div
            className="col-2 text-center ml-3 d-flex justify-content-center align-items-center mt-4 mb-4"
            style={{ borderLeft: " 1px dotted", marginLeft: 20 }}
          >
            <div className="row m-2">
              {
                //console.log("ccccccccccc",userData)
              }
              {
                userData || userData == 0 || (userData && userData.salary && userData.salary>=minMonthlyIncome)?
                <Link
                to={{
                  pathname: `/application/${id}${companyReference ? `?reference=${companyReference}` : ``
                    }`,
                  state: {
                    ...location.state,
                    reqMinMonthlyIncome: minMonthlyIncome,
                    catagory: catagory,
                  },
                }}
                className={cx(style.container_apply_button)}
              >
                Apply Now
              </Link>
              :
              <>
              <Link
                to={{
                  pathname: `/suggested-products`,
                  state: {
                    clientSalary:userData.salary,
                    catagory: catagory,
                  },
                }}
                className={cx(style.container_apply_button)}
              >
                Apply Now
              </Link>
              </>
              }
              
              <Link
              to={{
                pathname: `/credit-card/details/${id}`,
                state: {
                  ...location.state,
                  clientSalary:userData.salary,
                  reqMinMonthlyIncome: minMonthlyIncome,
                  catagory: catagory,
                },
              }}
               
                className={style.container_details_button}
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card d-flex d-md-none justify-content-center m-1">
        <img className="card-img-top p-2" src={imageUrl} alt="Card image cap" />
        <div className="card-body text-center">
          <h5 className="card-title">{name && name}</h5>
          <p className="card-text">{details && details.description}</p>
          <div>
            <Link
              to={{
                pathname: `/application/${id}${companyReference ? `?reference=${companyReference}` : ``
                  }`,
                state: {
                  ...location.state,
                  reqMinMonthlyIncome: minMonthlyIncome,
                  catagory: catagory,
                },
              }}
              className={cx(style.container_apply_button)}
            >
              Apply Now
            </Link>
          </div>
          <div>
          <Link
              to={{
                pathname: `/credit-card/details/${id}`,
                state: {
                  ...location.state,
                  clientSalary:userData.salary,
                  reqMinMonthlyIncome: minMonthlyIncome,
                  catagory: catagory,
                },
              }}
               
                className={style.container_details_button}
              >
                Details
              </Link>
          </div>
        </div>
      </div>
      {
        <div
          className={cx(
            "container",
            showDetails
              ? style.container_details_show
              : style.container_details_hide
          )}
        >
          hello from details
        </div>
      }

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        centered
        style={{ border: 0 }}
      >
        <Modal.Header
          style={{
            backgroundColor: "rgb(11, 67, 118)",
            border: "0px solid rgb(11, 67, 118)",
            color: "white",
          }}
        >
          <Modal.Title>Detailed Information</Modal.Title>
          <AiOutlineClose
            size={25}
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          />
        </Modal.Header>
        <Modal.Body dangerouslySetInnerHTML={createMarkup()} />
      </Modal>
    </div>
  );
}

export default Card;
