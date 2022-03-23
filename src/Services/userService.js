import http from "./httpService";
const register = async (phone, password) => {
  let user;

  //console.log("phone and password", phone, password);
  const { data, error } = await http.post(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    {
      phoneNumber: phone,
      password: password,
    }
  );
  if (error) {
    return error;
  }
  //console.log("getting datfrom api", data);
  user = data;
  return user;
};

const verifyToken = async (token, userId) => {
  let user;

  const { data, error } = await http.post(
    `${process.env.REACT_APP_API_URL}/auth/verify-token`,
    {
      token,
      userId,
    }
  );
  if (error) {
    //console.log("error from verification api", error);
    return error;
  }
  //console.log("getting datfrom api", data);
  user = data;
  return user;
};

export default {
  register,
  verifyToken,
};
