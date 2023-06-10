import { useState, useEffect } from "react";
import axios from "axios";

const useApi = () => {
	axios.defaults.baseURL = "https://sa-image-uploader.herokuapp.com/";

	const [response, setResponse] = useState(undefined);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [params, setParamas] = useState(undefined);

	const fetchData = async (params) => {
		if (params !== undefined) {
			try {
				const result = await axios.request(params);
				setResponse(result);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
	};

	useEffect(() => {
		fetchData(params);
	}, [params]);

	return { response, error, loading, setLoading, setParamas };
};

export default useApi;
