import React from "react";

import "./loader.css";

export default function Loader() {
	return (
        <div className="loader_container">
            <h3 className="loader_container_title">Uploading ...</h3>
            <div className="loader_container_bar"></div>
        </div>
    );
}
