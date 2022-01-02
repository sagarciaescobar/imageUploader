/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";

import useApi from "../../Hooks/useApi";

const useMain = () => {
	let navigate = useNavigate();
	const { response, error, setParamas, setLoading, loading } = useApi();
	const acceptedFiles = "image/jpeg, image/png";
	const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
		if (acceptedFiles.length === 1) {
			const bodyFormData = new FormData();
			setLoading(true);
			bodyFormData.append("file", acceptedFiles[0]);
			setParamas({
				method: "post",
				url: "/upload",
				headers: { "Content-Type": "multipart/form-data" },
				data: bodyFormData,
			});
		}
		if (rejectedFiles.length > 0) {
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		onDrop,
		accept: acceptedFiles,
		maxFiles: 1,
		maxSize: 1024 * 1024 * 10,
		noClick: true,
		multiple: false,
	});

	useEffect(() => {
		if (response) {
			if (response.status === 200) navigate(`/imageUploader/${response.data.fileId}`);
		}
	}, [response]);

	return {
		error,
		getInputProps,
		getRootProps,
		open,
		isDragActive,
		loading,
	};
};

export default useMain;
