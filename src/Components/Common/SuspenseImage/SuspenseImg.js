import React from "react";
import PropTypes from "prop-types";
import imgCache from "./imgCache";
function SuspenseImg({ src, ...rest }) {
  imgCache.read(src);
  return <img src={src} {...rest} alt="image" />;
}
SuspenseImg.propTypes = {
  src: PropTypes.string,
  rest: PropTypes.any,
};
export default SuspenseImg;
