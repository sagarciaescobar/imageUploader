import React from "react";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import Loader from "../../components/Loader/Loader";

import "./main.css";
import useMain from "./useMain";

export default function Main() {
	const { loading, setLoading, setErrors} = useMain();

	return (
		<div className='general_main'>
			{loading ? <Loader /> : <ImageUploader setLoading={setLoading} setErrors={setErrors} />}
		</div>
	);
}
