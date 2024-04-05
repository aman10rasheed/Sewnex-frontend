import React from "react";
import PropTypes from "prop-types";
import { IoArrowForwardOutline } from "react-icons/io5";

const Button = ({ size }) => {
  let btnClass = "btn";

  if (size === "sm") {
    btnClass += " btn-sm";
  } else if (size === "lg") {
    btnClass += " btn-lg";
  } else if (size === "md") {
    btnClass += " btn-md ";
  }

  // Tailwind CSS styles
  const tailwindStyles = `
    bg-customBlue
    text-white
    text-lg
  `;

  return (
    <div>
      <button className={`${btnClass} ${tailwindStyles}`}>
        Button
        <IoArrowForwardOutline />
      </button>
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Button.defaultProps = {
  size: "md", // default size
};

export default Button;
