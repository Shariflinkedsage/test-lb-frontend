import http from "./httpService";
import { baseUrl } from "../config";
import jwt_decode from "jwt-decode";
import jwt_encode from "jwt-encode";

let BaseUrl = baseUrl();
const tokenKey = "token";
http.setJwt(getJwt());

async function checkUserExistance(phone) {
  const { data } = await http.post(`${BaseUrl}/auth/checkUserExistance`, {
    phoneNumber: phone,
  });
  return data;
}

async function login(phone, password) {
  //console.log("phone and password", phone, password);
  const { data: jwt } = await http.post(`${BaseUrl}/auth/login`, {
    phoneNumber: phone,
    password: password,
  });
  localStorage.setItem("token", jwt);
  //console.log("token", jwt);
  return true;
}
async function partnerLogin(phone, password) {
  //console.log("phone and password", phone, password);
  const { data: jwt } = await http.post(`${BaseUrl}/auth/comapany/login`, {
    phoneNumber: phone,
    password: password,
  });
  localStorage.setItem("token", jwt);
  //console.log("token", jwt);
  return true;
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout(user) {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const currentUser = jwt_decode(jwt);
    //console.log("currrent user ", currentUser);
    return currentUser;
  } catch (ex) {
    return null;
  }
}

export function updateCurrentUser(nid,salary) {
  try {
    const jwt = localStorage.getItem(tokenKey);
    let currentUser = jwt_decode(jwt);
    currentUser.nid = nid
    currentUser.salary = salary
    const secret = process.env.REACT_APP_JWT_SECRET;
    const _jwt = jwt_encode(currentUser, secret);
    localStorage.setItem(tokenKey, _jwt);
    //console.log("update user in localstorage", currentUser,secret);
   
  } catch (ex) {
   
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  checkUserExistance,
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
  partnerLogin,
  updateCurrentUser,
};
