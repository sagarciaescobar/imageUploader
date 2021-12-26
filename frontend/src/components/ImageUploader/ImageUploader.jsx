import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./imageUploader.css";
import ImgIcon from "../../assets/image.svg";
import useApi from "../../Hooks/useApi";
export default function ImageUploader({setLoading, setErrors}) {

	const { response, error, setParamas } = useApi();
	const acceptedFiles ='image/*'
	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		if(acceptedFiles.length === 1){
			const bodyFormData = new FormData();
			setLoading(true)
			bodyFormData.append('file',acceptedFiles[0])
			setParamas({
				method: "post",
				url: "/upload",
				data: bodyFormData,
				headers: { "Content-Type": "multipart/form-data" },
			})
		}
		if(rejectedFiles.length > 0){

		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		console.log(response)
		if(response){
			setLoading(false)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [response])

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({ onDrop , accept: acceptedFiles , maxFiles: 1,maxSize: 1024*1024*10 , noClick: true, multiple:false });

    const handleChange = (e)=>{
        console.log("cambio");
        const url ="....."
        const onLoading = (e)=>{
            console.log(e)
        }
        axios.post(url,{
            onUploadProgress: function (progressEvent) {
                onLoading(progressEvent)
              }
        })
    }

	return (
		<div className='upload_general_container'>
			<h1>Upload your iamge</h1>
			<h2>File should be Jpeg ,Png , ...</h2>
			<form className="upload_general_container_form" onChange={handleChange}>
				<div className="upload_general_container_drag_and_drop" {...getRootProps()}>
					<input onChange={handleChange} {...getInputProps()} />
					<img src={ImgIcon} alt="img-icon"/>
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<p>Drag 'n' drop image here</p>
					)}
				</div>
				<p>Or</p>
				<button className="upload_general_container_form_btn" onClick={open}>Choose a file</button>
			</form>
		</div>
	);
}
