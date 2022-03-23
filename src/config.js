const baseUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  //console.log("development Environment ", process.env.REACT_APP_API_URL);
  return process.env.REACT_APP_API_URL;
};

module.exports = {
  baseUrl,
};
