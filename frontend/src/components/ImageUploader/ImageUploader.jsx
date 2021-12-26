import axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import "./imageUploader.css";

export default function ImageUploader() {
	const [files, setFiles] = useState([]);
	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		setFiles((curr) => [...curr, ...acceptedFiles]);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	useEffect(() => {
		console.log(files);
	}, [files]);

    const handleChange = ()=>{
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
					{isDragActive ? (
						<p>Drop the files here ...</p>
					) : (
						<p>Drag 'n' drop some files here, or click to select files</p>
					)}
				</div>
				<p>Or</p>
				<button>Choose a file</button>
			</form>
		</div>
	);
}
