import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5"; // Import the home icon

const HomeButton = () => {
  return (
    <Link to="/">
      <button className="home-btn">
        <IoHomeSharp />
      </button>
    </Link>
  );
};

export default HomeButton;
