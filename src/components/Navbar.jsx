import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">iChatty</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/6279415/pexels-photo-6279415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="User photo"
        />
        <span>Alex</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
