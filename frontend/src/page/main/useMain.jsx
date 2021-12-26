import { useState } from "react";

const useMain = () => {
    
	const [loading, setLoading] = useState(false);
    const [errors,setErrors] = useState({ has:false, errors:[]})

	return {
		loading,
        setLoading,
        setErrors,
	};
};

export default useMain;