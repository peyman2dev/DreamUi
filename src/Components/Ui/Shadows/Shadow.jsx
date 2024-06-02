import React from "react";
import PropTypes from "prop-types";

function Shadow({ styles}) {
  return (
    <div
      className={`absolute ${styles} z-0  bg-opacity-20 w-[600px] h-[120px] blur-3xl rounded-full rotate-[17deg]`}
    >
    </div>
  );
}

Shadow.prototype = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Shadow;
