import React from "react";
import cx from "classnames";
import style from "./Referral.module.scss";

function Referal() {
  return (
    
    <>
      <div className="card pt-4 pb-5 ps-5 pe-5">
        <div className={cx("mb-5", style.container_referralheader)}>
          <img src="/referral_icon.png" width="60" height="60" />
          <h1 className={cx("titel", style.container_referralheader_titel)}>
            My Referral
          </h1>
        </div>
        <div className={cx("container", style.container)}>
          <div className="row g-3 justify-content-center">
            <div className="text-center col-xs-12 col-sm-10 col-md-6 col-lg-3">
              <div
                className={cx(
                  style.container_card,
                  style.container_card_total_referal
                )}
              >
                <div>TOTAL Referals</div>
                <div>20</div>
              </div>
            </div>
            <div className="text-center col-xs-12 col-sm-10 col-md-6 col-lg-3">
              <div
                className={cx(
                  style.container_card,
                  style.container_card_successful_referal
                )}
              >
                <div>Success Referals</div>
                <div>10</div>
              </div>
            </div>
            <div className="text-center col-xs-12 col-sm-10 col-md-6 col-lg-3">
              <div
                className={cx(
                  style.container_card,
                  style.container_card_reject_referal
                )}
              >
                <div>Rejected Referals</div>
                <div>8</div>
              </div>
            </div>
            <div className="text-center col-xs-12 col-sm-10 col-md-6 col-lg-3">
              <div
                className={cx(
                  style.container_card,
                  style.container_card_pendings_referal
                )}
              >
                <div>Pending Referals</div>
                <div>2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Referal;
