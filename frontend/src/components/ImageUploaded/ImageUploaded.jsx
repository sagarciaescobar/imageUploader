import React, { useState } from "react";

import CheckedCircle from "../../assets/check_circle_green.svg";

import "./imageUploaded.css";

export default function ImageUploaded({ url }) {

    const [copied,setCopied] = useState(false);
	
    const handleClick = ()=>{
        navigator.clipboard.writeText("http://localhost:8080/" + url)
        setCopied(true)
        setTimeout(()=>{setCopied(false)},4000)
    }
    
	return (
		<div className='uploaded_image_container'>
			<img className="uploaded_image_container_icon" src={CheckedCircle} alt='successful icon' />
			<h3 className="uploaded_image_container_title">Uploaded Successfully!</h3>
			<img className="uploaded_image_container_img" src={"http://localhost:8080/" + url} alt='uploaded-img' />
			<div className='uploaded_image_container_link'>
				<p>{"http://localhost:8080/" + url}</p>
				{copied? <button className="uploaded_image_container_link_copied">Copied</button> :<button className="uploaded_image_container_link_copy" onClick={handleClick}>Copy Link</button>}
			</div>
		</div>
	);
}
