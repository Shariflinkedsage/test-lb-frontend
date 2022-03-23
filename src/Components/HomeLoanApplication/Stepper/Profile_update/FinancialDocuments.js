import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Landlord from "../../../../images/profession/Landlord.svg";
import Salaried from "../../../../images/profession/Salaried.svg";
import Businessman from "../../../../images/profession/Businessman.svg";
import cx from "classnames";
import { useForm, Controller } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import styles from "./FinancialDocuments.module.scss";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useHistory, useLocation } from "react-router-dom";
import http from "../../../../Services/httpService";
import authService from "../../../../Services/authService";
import Preloader from "../../../Common/PreLoader";
import { useWindowWidth } from "../../../../Services/hooks";

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

const schema = Joi.object({});

export default function Profession({
  userId,
  state,
  handleNext,
  dispathch,
  handleBack,
}) {
  //console.log("case 4: ", state);
  const [documents, setDocuments] = useState();
  const [paySlip, setPaySlip] = useState();
  const [fileName, setFileName] = useState();
  const [fileNamePaySlip, setFileNamePaySlip] = useState();
  const [sendFile, setSendFile] = useState();
  const [sendFilePaySlip, setSendFilePaySlip] = useState();
  const [preloaderVar, setPreloaderVar] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(schema),

    // shouldFocusError: true,
  });
  const onFormSubmit = async () => {
    setPreloaderVar(true);
    var fd = new FormData();
    fd.append("nid", state.nid);
    fd.append("nidFrontImgUrl", state.NIDFront);
    fd.append("nidBackImgtUrl", state.NIDBack);
    fd.append("name", state.name);
    fd.append("organizationName", state.organizationName);
    if (sendFile) fd.append("accountStatementUrl", sendFile);
    else fd.append("accountStatementUrl", state.accountStatementUrl);

    if (sendFilePaySlip) fd.append("paySlipImgUrl", sendFilePaySlip);
    else fd.append("paySlipImgUrl", state.paySlipImgUrl);

    fd.append("presentAddressDetails", state.presentAddressDetails);
    fd.append("designation", state.designation);
    fd.append("lengthOfService", state.lengthOfService);
    fd.append("salary", state.salary);
    fd.append("profession", state.profession);
    // fd.append("existingLiabilities", JSON.stringify(state.existingLiabilities));

    const { data } = await http.post(
      `${process.env.REACT_APP_API_URL}/users/updateProfileWithDocs/${
        authService.getCurrentUser()._id
      }`,
      fd
    );
    if (data) setPreloaderVar(false);
    if (data && data.success) {
      authService.updateCurrentUser(state.nid, state.salary);
      dispathch({ type: "increments", payload: data });
      handleNext();
    }
  };
  const uploadDocuments = (e) => {
    const file = document.getElementById("accountS").files[0];
    setSendFile(file);
    let temp = URL.createObjectURL(file);
    setDocuments(temp);
    setFileName(file.name);
    //console.log("ss", file.name);
  };

  const uploadPaySlip = (e) => {
    const file = document.getElementById("paySlipImgUrl").files[0];
    setSendFilePaySlip(file);
    let temp = URL.createObjectURL(file);
    setPaySlip(temp);
    setFileNamePaySlip(file.name);
  };

  useEffect(async () => {
    window.scroll(0, 0);
    if (state.accountStatementUrl != "undefined" && state.accountStatementUrl) {
      setDocuments(state.accountStatementUrl);
      setFileName(state.accountStatementUrl.split(/_(.+)/)[1]);
    }
    if (state.paySlipImgUrl != "undefined" && state.paySlipImgUrl) {
      setPaySlip(state.paySlipImgUrl);
      setFileNamePaySlip(state.paySlipImgUrl.split(/_(.+)/)[1]);
    }
    // document.getElementById("nidBack").files = state.NIDFront
  }, []);

  const widthWindow = useWindowWidth();
  const [mobileView, setMobileView] = useState(true);
  useEffect(() => {
    if (widthWindow && widthWindow < 700) setMobileView(false);
    //console.log("yeah boy...........");
  }, [widthWindow]);

  const onErrors = (errors) => console.error(errors);

  return (
    <div className="container personal-info">
      {preloaderVar ? <Preloader /> : null}
      <Form onSubmit={onFormSubmit} className="pl-5 pr-5">
        <Form.Group controlId="salary" className="mt-3">
          {mobileView ? (
            <div className="row">
              <div className="col-sm-1"></div>

              <div
                className="col-sm-10"
                class={cx("nameee", styles.container_nameee)}
              >
                <div className="row">
                  {!documents ? <div className="col-sm-2"></div> : null}
                  <div className="col-sm-3">
                    <label className="mr-2">
                      Bank Statement:
                      <br />
                      (Last 6 months)
                    </label>
                  </div>

                  {documents ? (
                    <div className="col-sm-4">
                      <label>{fileName}</label>
                    </div>
                  ) : null}

                  <div className="col-sm-3">
                    {documents ? (
                      <label className="update_documents">
                        {documents ? (
                          <div className="downloadBtn d-flex align-items-center">
                            <a
                              href={documents}
                              download={fileName}
                              target="_blank"
                            >
                              Preview
                            </a>
                            <span>Change</span>
                          </div>
                        ) : null}
                        <input
                          className="modifyFile"
                          id="accountS"
                          accept=".pdf, .doc, .docx"
                          onChange={uploadDocuments}
                          type="file"
                        />
                      </label>
                    ) : (
                      <input
                        className="uploadFile"
                        id="accountS"
                        accept=".pdf, .doc, .docx"
                        onChange={uploadDocuments}
                        type="file"
                      />
                    )}
                  </div>
                </div>

                {/* <span className="">Last 6 months</span> */}
              </div>
              {/* <div className="col-sm-1"></div> */}

              <div
                className="col-sm-10 pt-3"
                class={cx("nameee", styles.container_nameee)}
              >
                <div className="row d-flex align-items-center mt-3">
                  {!paySlip ? <div className="col-sm-2"></div> : null}
                  <div className="col-sm-3">
                    <label className="mr-2">
                      Pay Slip:
                      <br />
                      (Last 3 months)
                    </label>
                  </div>

                  {paySlip ? (
                    <div className="col-sm-4">
                      <label>{fileNamePaySlip}</label>
                    </div>
                  ) : null}

                  <div className="col-sm-3">
                    {paySlip ? (
                      <label className="update_documents">
                        {paySlip ? (
                          <div className="downloadBtn d-flex align-items-center">
                            <a
                              href={paySlip}
                              download={fileNamePaySlip}
                              target="_blank"
                            >
                              Preview
                            </a>
                            <span>Change</span>
                          </div>
                        ) : null}
                        <input
                          className="modifyFile"
                          id="paySlipImgUrl"
                          accept=".pdf, .doc, .docx"
                          onChange={uploadPaySlip}
                          type="file"
                        />
                      </label>
                    ) : (
                      <input
                        className="uploadFile"
                        id="paySlipImgUrl"
                        accept=".pdf, .doc, .docx"
                        onChange={uploadPaySlip}
                        type="file"
                      />
                    )}
                  </div>
                </div>

                {/* <span className="">Last 6 months</span> */}
              </div>
              {/* <div className="view_download">
              {documents ? (
                <>
                  <a href={documents} target="_blank">
                    Preview
                  </a>
                  <a href={documents} download = 'Bank statement'>
                    Download
                  </a>
                </>
              ) : null}
            </div> */}

              {/* <a href={documents} target="_blank">Click for Download</a> */}

              <div className="col-sm-1"></div>
            </div>
          ) : (
            <div className="row for-mobile">
              <div
                className="col-sm-10 d-flex justify-content-left"
                class={cx("uploadFiles", styles.container_uploadFiles)}
              >
                <h5 className="w-100">Bank Statement (Last 6 months)</h5>
                <div className="file-card">
                  {documents ? (
                    <label>{fileName}</label>
                  ) : (
                    <label>Select File here</label>
                  )}

                  {documents ? (
                    <label className="update_document">
                      {documents ? (
                        <div className="">
                          <a
                            href={documents}
                            download={fileName}
                            target="_blank"
                          >
                            Preview
                          </a>
                          {/* <span>Change</span> */}
                        </div>
                      ) : null}
                      <div className="button-wrapper">
                        <span className="label">Change File</span>
                        <input
                          className="modifyFile"
                          id="accountS"
                          accept=".pdf, .doc, .docx"
                          onChange={uploadDocuments}
                          type="file"
                        />
                      </div>
                    </label>
                  ) : (
                    <div className="button-wrapper">
                      <span className="label">Upload File</span>
                      <input
                        className="uploadFile"
                        id="accountS"
                        accept=".pdf, .doc, .docx"
                        onChange={uploadDocuments}
                        type="file"
                      />
                    </div>
                  )}
                </div>
                {/* <div className="row">
                  {!documents ? <div className="col-sm-2"></div> : null}
                  <div className="col-sm-3">
                    <label className="mr-2">
                      Bank Statement:
                      <br />
                      (Last 6 months)
                    </label>
                  </div>

                  

                  <div className="col-sm-3">
                    {documents ? (
                      <label className="update_documents">
                        {documents ? (
                          <div className="downloadBtn d-flex align-items-center">
                            <a
                              href={documents}
                              download={fileName}
                              target="_blank"
                            >
                              Preview
                            </a>
                            <span>Change</span>
                          </div>
                        ) : null}
                        <input
                          className="modifyFile"
                          id="accountS"
                          accept=".pdf, .doc, .docx"
                          onChange={uploadDocuments}
                          type="file"
                        />
                      </label>
                    ) : (
                      <input
                        className="uploadFile"
                        id="accountS"
                        accept=".pdf, .doc, .docx"
                        onChange={uploadDocuments}
                        type="file"
                      />
                    )}
                  </div>
                </div> */}
              </div>

              <div
                className="col-sm-10 d-flex justify-content-left mt-5"
                class={cx("uploadFiles", styles.container_uploadFiles)}
              >
                <h5 className="w-100">Pay Slip (Last 3 months)</h5>
                <div className="file-card">
                  {paySlip ? (
                    <label>{fileNamePaySlip}</label>
                  ) : (
                    <label>Select File here</label>
                  )}

                  {paySlip ? (
                    <label className="update_document">
                      {paySlip ? (
                        <div className="">
                          <a
                            href={paySlip}
                            download={fileNamePaySlip}
                            target="_blank"
                          >
                            Preview
                          </a>
                          {/* <span>Change</span> */}
                        </div>
                      ) : null}

                      <div className="button-wrapper">
                        <span className="label">Change File</span>
                        <input
                          className="uploadFile"
                          id="paySlipImgUrl"
                          accept=".pdf, .doc, .docx"
                          onChange={uploadPaySlip}
                          type="file"
                        />
                      </div>
                    </label>
                  ) : (
                    <div className="button-wrapper">
                      <span className="label">Upload File</span>
                      <input
                        className="uploadFile"
                        id="paySlipImgUrl"
                        accept=".pdf, .doc, .docx"
                        onChange={uploadPaySlip}
                        type="file"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* <div
                className="col-sm-10 pt-3"
                class={cx("nameee", styles.container_nameee)}
              >
                <div className="row d-flex align-items-center mt-3">
                  {!paySlip ? <div className="col-sm-2"></div> : null}
                  <div className="col-sm-3">
                    <label className="mr-2">
                      <br />
                      (Last 3 months)
                    </label>
                  </div>

                  {paySlip ? (
                    <div className="col-sm-4">
                      <label>{fileNamePaySlip}</label>
                    </div>
                  ) : null}

                  <div className="col-sm-3">
                    {paySlip ? (
                      <label className="update_documents">
                        {paySlip ? (
                          <div className="downloadBtn d-flex align-items-center">
                            <a
                              href={paySlip}
                              download={fileNamePaySlip}
                              target="_blank"
                            >
                              Preview
                            </a>
                            <span>Change</span>
                          </div>
                        ) : null}
                        <input
                          className="modifyFile"
                          id="paySlipImgUrl"
                          accept=".pdf, .doc, .docx"
                          onChange={uploadPaySlip}
                          type="file"
                        />
                      </label>
                    ) : (
                      <input
                        className="uploadFile"
                        id="paySlipImgUrl"
                        accept=".pdf, .doc, .docx"
                        onChange={uploadPaySlip}
                        type="file"
                      />
                    )}
                  </div>
                </div>
              </div> */}
            </div>
          )}
        </Form.Group>
      </Form>
      <div className="row  mt-5">
        <div className="col-sm-1"></div>
        <div
          className="col justify-content-start"
          style={{ display: "flex", justifyContent: "start" }}
        >
          {" "}
          <Button
            style={{
              background: "rgb(185, 214, 242)",
              color: "black",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
            onClick={() => {
              handleBack();
            }}
          >
            Back
          </Button>
        </div>

        <div
          className="col justify-content-end"
          style={{ display: "flex", justifyContent: "end" }}
        >
          {" "}
          <Button
            variant="primary"
            type="button"
            onClick={onFormSubmit}
            style={{ paddingLeft: "40px", paddingRight: "40px" }}
          >
            Submit
          </Button>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}
