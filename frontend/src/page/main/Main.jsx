import React from "react";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

import "./main.css";
import useMain from "./useMain";
import Footer from "../../components/Footer/Footer";

export default function Main() {
	const { error, getInputProps, getRootProps, open, isDragActive, loading } = useMain();

	return (
		<div className='general_main'>
			{error ? (
				<Error />
			) : loading ? (
				<Loader />
			) : (
				<ImageUploader
					{...{ open, isDragActive, getInputProps, getRootProps }}
				/>
			)}
			<Footer/>
		</div>
	);
}
