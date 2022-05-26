import React from "react";
import { Link } from "react-router-dom";

const UserBar = () => {
  return (
    <header className="account-header">
      <div className="text-left">My account</div>
      <hr></hr>
      <div className="topnav text-left">
        <Link className="active" to="/account/">
          My tickets
        </Link>
        <Link to="/account/">My information</Link>
      </div>
      <hr></hr>
    </header>
  );
};

export default UserBar;
