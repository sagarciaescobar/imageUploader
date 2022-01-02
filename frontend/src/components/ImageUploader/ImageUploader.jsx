import React from "react";
import "./imageUploader.css";
import ImgIcon from "../../assets/image.svg";
export default function ImageUploader({ getInputProps, getRootProps ,open, isDragActive }) {
	
	return (
		<div className='upload_general_container'>
			<h1>Upload your iamge</h1>
			<h2>File should be Jpeg ,Png , ...</h2>
			<form className='upload_general_container_form' >
				<div
					className='upload_general_container_drag_and_drop'
					{...getRootProps()}>
					<input {...getInputProps()} />
					<img src={ImgIcon} alt='img-icon' />
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<p>Drag 'n' drop image here</p>
					)}
				</div>
				<p>Or</p>
				<button type="button" className='upload_general_container_form_btn' onClick={open}>
					Choose a file
				</button>
			</form>
		</div>
	);
}
