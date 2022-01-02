import React from "react";

import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import ImageUploaded from "../../components/ImageUploaded/ImageUploaded";

import "./imageUploadedPage.css";

export default function ImageUploadedPage() {
	let {imageId} = useParams();

	return (
        <div className="uploaded_page_container">
            <ImageUploaded url={imageId}/>
            <Footer/>
        </div>
    );
}
