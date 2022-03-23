import React, { useState, useEffect, useContext } from "react";
import cx from "classnames";
import style from "./Profile.module.scss";
import { useForm, Controller } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import http from "../../../../Services/httpService";
import Usercontext from "./../../../../Contexts/UserContexts";
import CustomSpinner from "../../../../Components/Common/Spinner/Spinner";
import { useHistory } from "react-router-dom";
const Schema = Joi.object({
  name: Joi.string().required(),
  // gender: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  location: Joi.string().required(),
  salary: Joi.number().required(),
  nid: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  fathersName: Joi.string().required(),
  mothersName: Joi.string().required(),
  profession: Joi.string().required(),
  designation: Joi.string().required(),
  lengthOfService: Joi.number().required(),
  permanentAddressDetails: Joi.string().required(),
  profileImgUrl: Joi.any().required(),
  paySlipImgUrl: Joi.any().required(),
  nidFrontImgUrl: Joi.any().required(),
  nidBackImgtUrl: Joi.any().required(),
  accountStatementImgUrl: Joi.any().required(),
});

function ProfileUpdate() {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(Schema),
    shouldFocusError: true,
  });
  const [loggedInUser, setLoggedInUser] = useContext(Usercontext);
  const [user, setUser] = useState();
  // function handlename(e) {
  //   //console.log(e.target.value);
  //   let userData = { ...user };
  //   //console.log("user", userData);
  //   userData.name = e.target.value;
  //   setUser(userData);
  // }
  // function handleGender(e) {
  //   //console.log(e.target.value);
  //   let userData = { ...user };
  //   //console.log("user", userData);
  //   userData.gender = e.target.value;
  //   setUser(userData);
  // }
  // function handlePhone_no(e) {
  //   //console.log(e.target.value);
  //   let userData = { ...user };
  //   //console.log("user", userData);
  //   userData.phone_no = e.target.value;
  //   setUser(userData);
  // }
  // function handleEmail(e) {
  //   //console.log(e.target.value);
  //   let userData = { ...user };
  //   //console.log("user", userData);
  //   userData.email = e.target.value;
  //   setUser(userData);
  // }
  // function handleSalary(e) {
  //   //console.log(e.target.value);
  //   let userData = { ...user };
  //   //console.log("user", userData);
  //   userData.Salary = e.target.value;
  //   setUser(userData);
  // }
  // function handleLocation(e) {
  //   //console.log(e.target.value);
  //   let userData = { ...user };
  //   //console.log("user", userData);
  //   userData.location = e.target.value;
  //   setUser(userData);
  // }
  const onFormSubmit = async (_data) => {
    let customer = { ..._data };
    const { data } = await http.post(
      `${http.baseUrl}/users/updateProfile/${loggedInUser._id}`,
      {
        customer,
      }
    );
    if (data && data.success) {
      //console.log(data);
    }
  };

  // const onBackButtonPress = async (data) => {
  //   handleBack();
  // };
  const onErrors = (errors) => {
    console.error(errors);
    //console.log(errors);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const { data } = await http.get(
        `${http.baseUrl}/users/${loggedInUser._id}`
      );
      if (data.success) {
        //console.log(data.data);
        setUser(data.data);
      }
    } catch (error) {
      //console.log(error);
    }
  }, [Usercontext]);
  useEffect(() => {}, [user]);
  return (
    <>
      {user ? (
        <div class="col-md-10 mx-auto p-0 d-flex justify-content-center">
          <div class="card p-5" style={{ width: "80%" }}>
            <form
              onSubmit={handleSubmit(onFormSubmit, onErrors)}
              className={style.container}
            >
              <div class={cx("titel", style.container_titel)}>
                <label for="title" class="titellabel">
                  Please Update Your Information
                </label>
              </div>
              <div className={style.container_group}>
                <label for="name" className={style.container_label}>
                  Name:
                </label>

                <Controller
                  name="name"
                  control={control}
                  defaultValue={user.name}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your Name"
                      {...field}
                    />
                  )}
                />
                {errors && errors.name && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="mobile" className={style.container_label}>
                  Mobile:
                </label>

                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your Mobile no."
                      {...field}
                    />
                  )}
                  defaultValue={user.phoneNumber}
                />
                {errors && errors.phoneNumber && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="email" className={style.container_label}>
                  Email:
                </label>

                <Controller
                  name="email"
                  control={control}
                  defaultValue={user.email}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your Email Address"
                      {...field}
                    />
                  )}
                />
                {errors && errors.email && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="location" className={style.container_label}>
                  Location:
                </label>

                <Controller
                  name="location"
                  control={control}
                  defaultValue={user.city}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your Address"
                      {...field}
                    />
                  )}
                />
                {errors && errors.location && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.location.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="location" className={style.container_label}>
                  Salary:
                </label>

                <Controller
                  name="salary"
                  control={control}
                  defaultValue={user.salary}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your Address"
                      {...field}
                    />
                  )}
                />
                {errors && errors.salary && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.salary.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="nid" className={style.container_label}>
                  nid:
                </label>

                <Controller
                  name="nid"
                  control={control}
                  defaultValue={user.nid}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your nid"
                      {...field}
                    />
                  )}
                />
                {errors && errors.nid && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.nid.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="dateOfBirth" className={style.container_label}>
                  dateOfBirth:
                </label>

                <Controller
                  name="dateOfBirth"
                  control={control}
                  defaultValue={
                    user.dateOfBirth && user.dateOfBirth.split("T")[0]
                  }
                  render={({ field }) => (
                    <input
                      type="date"
                      className={style.container_input}
                      placeholder="Enter Your dateOfBirth"
                      {...field}
                    />
                  )}
                />
                {errors && errors.dateOfBirth && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="fathersName" className={style.container_label}>
                  fathersName:
                </label>

                <Controller
                  name="fathersName"
                  control={control}
                  defaultValue={user.fathersName}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your fathersName"
                      {...field}
                    />
                  )}
                />
                {errors && errors.fathersName && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.fathersName.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="mothersName" className={style.container_label}>
                  mothersName:
                </label>

                <Controller
                  name="mothersName"
                  control={control}
                  defaultValue={user.mothersName}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your mothersName"
                      {...field}
                    />
                  )}
                />
                {errors && errors.mothersName && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.mothersName.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="profession" className={style.container_label}>
                  profession:
                </label>

                <Controller
                  name="profession"
                  control={control}
                  defaultValue={user.profession}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your profession"
                      {...field}
                    />
                  )}
                />
                {errors && errors.profession && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.profession.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="designation" className={style.container_label}>
                  designation:
                </label>

                <Controller
                  name="designation"
                  control={control}
                  defaultValue={user.designation}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your designation"
                      {...field}
                    />
                  )}
                />
                {errors && errors.designation && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.designation.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label for="lengthOfService" className={style.container_label}>
                  lengthOfService:
                </label>

                <Controller
                  name="lengthOfService"
                  control={control}
                  defaultValue={user.lengthOfService}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your lengthOfService"
                      {...field}
                    />
                  )}
                />
                {errors && errors.lengthOfService && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.lengthOfService.message}
                  </p>
                )}
              </div>
              <div className={style.container_group}>
                <label
                  for="permanentAddressDetails"
                  className={style.container_label}
                >
                  permanentAddressDetails:
                </label>

                <Controller
                  name="permanentAddressDetails"
                  control={control}
                  defaultValue={user.permanentAddressDetails}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your permanentAddressDetails"
                      {...field}
                    />
                  )}
                />
                {errors && errors.permanentAddressDetails && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.permanentAddressDetails.message}
                  </p>
                )}
              </div>
              {/* <div className={style.container_group}>
                <label for="profileImgUrl" className={style.container_label}>
                  profileImgUrl:
                </label>

                <Controller
                  name="profileImgUrl"
                  control={control}
                  defaultValue={user.profileImgUrl}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your profileImgUrl"
                      {...field}
                    />
                  )}
                />
                {errors && errors.profileImgUrl && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.profileImgUrl.message}
                  </p>
                )}
              </div>

              <div className={style.container_group}>
                <label for="paySlipImgUrl" className={style.container_label}>
                  paySlipImgUrl:
                </label>

                <Controller
                  name="paySlipImgUrl"
                  control={control}
                  defaultValue={user.paySlipImgUrl}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your paySlipImgUrl"
                      {...field}
                    />
                  )}
                />
                {errors && errors.paySlipImgUrl && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.paySlipImgUrl.message}
                  </p>
                )}
              </div>

              <div className={style.container_group}>
                <label for="nidFrontImgUrl" className={style.container_label}>
                  nidFrontImgUrl:
                </label>

                <Controller
                  name="nidFrontImgUrl"
                  control={control}
                  defaultValue={user.nidFrontImgUrl}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your nidFrontImgUrl"
                      {...field}
                    />
                  )}
                />
                {errors && errors.nidFrontImgUrl && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.nidFrontImgUrl.message}
                  </p>
                )}
              </div>

              <div className={style.container_group}>
                <label for="nidBackImgtUrl" className={style.container_label}>
                  nidBackImgtUrl:
                </label>

                <Controller
                  name="nidBackImgtUrl"
                  control={control}
                  defaultValue={user.nidBackImgtUrl}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your nidBackImgtUrl"
                      {...field}
                    />
                  )}
                />
                {errors && errors.nidBackImgtUrl && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.nidBackImgtUrl.message}
                  </p>
                )}
              </div>

              <div className={style.container_group}>
                <label
                  for="accountStatementImgUrl"
                  className={style.container_label}
                >
                  accountStatementImgUrl:
                </label>

                <Controller
                  name="accountStatementImgUrl"
                  control={control}
                  defaultValue={user.accountStatementImgUrl}
                  render={({ field }) => (
                    <input
                      className={style.container_input}
                      placeholder="Enter Your accountStatementImgUrl"
                      {...field}
                    />
                  )}
                />
                {errors && errors.accountStatementImgUrl && (
                  <p
                    className="start"
                    style={{
                      color: "red",
                      fontFamily: "Noto Sans",
                      width: "100%",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    {errors.accountStatementImgUrl.message}
                  </p>
                )}
              </div> */}

              <div className={style.container_btn_group}>
                <button
                  type="button"
                  onClick={()=>{
                    history.push("/user-dashboard/profile_Update")
                  }}
                  className={style.container_btn_group_button}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <CustomSpinner />
      )}
    </>
  );
}

export default ProfileUpdate;
