import React, { useState } from "react";

import CheckedCircle from "../../assets/check_circle_green.svg";

import "./imageUploaded.css";

const BASE_API_PATH = "http://sa-image-uploader.herokuapp.com/";

export default function ImageUploaded({ url }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(BASE_API_PATH + url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };

  return (
    <div className="uploaded_image_container">
      <img
        className="uploaded_image_container_icon"
        src={CheckedCircle}
        alt="successful icon"
      />
      <h3 className="uploaded_image_container_title">Uploaded Successfully!</h3>
      <img
        className="uploaded_image_container_img"
        src={BASE_API_PATH + url}
        alt="uploaded-img"
      />
      <div className="uploaded_image_container_link">
        <p>{BASE_API_PATH + url}</p>
        {copied ? (
          <button className="uploaded_image_container_link_copied">
            Copied
          </button>
        ) : (
          <button
            className="uploaded_image_container_link_copy"
            onClick={handleClick}
          >
            Copy Link
          </button>
        )}
      </div>
    </div>
  );
}
