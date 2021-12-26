import { useState } from "react";

const useMain = () => {
	const [imageData, setImageData] = useState();
	const [loading, setLoding] = useState(false);

	return {
		loading,
		imageData,
	};
};

export default useMain;