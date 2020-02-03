import React from "react";

const WebsiteButton = ({ url }) => {
  return (
    <a
      className="btn btn-sm btn-dark m-1"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      Website
    </a>
  );
};

export default WebsiteButton;
