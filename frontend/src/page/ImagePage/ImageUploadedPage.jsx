import React from "react";

import { useParams } from "react-router-dom";
import ImageUploaded from "../../components/ImageUploaded/ImageUploaded";

import "./imageUploadedPage.css";

export default function ImageUploadedPage() {
	let {imageId} = useParams();

	return (
        <div className="uploaded_page_container">
            <ImageUploaded url={imageId}/>
        </div>
    );
}
