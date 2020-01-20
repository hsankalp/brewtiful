import React from "react";
import "../styles/ErrorMessage.css";

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <h5>Unable to fetch data. Please try again after sometime</h5>
    </div>
  );
};

export default ErrorMessage;
