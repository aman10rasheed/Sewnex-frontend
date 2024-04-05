import React from "react";
import PropTypes from "prop-types";
import { IoArrowForwardOutline } from "react-icons/io5";

const Button = ({ size, text }) => {
  let btnClass = "btn";

  if (size === "sm") {
    btnClass += " btn-sm";
  } else if (size === "lg") {
    btnClass += " btn-wide";
  } else if (size === "md") {
    btnClass += " btn";
  }

  // Tailwind CSS styles
  const tailwindStyles = `
    bg-customBlue
    text-white
    text-lg
    hover:bg-white 
    hover:text-blue-600
    hover:border-blue-600
  `;

  return (
    <div>
      <button className={`${btnClass} ${tailwindStyles}`}>
        {text}
        <IoArrowForwardOutline />
      </button>
    </div>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  size: "md", // default size
};

export default Button;
