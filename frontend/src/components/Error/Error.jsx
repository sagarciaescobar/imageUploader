import React from "react";

import "./error.css";

import InfoRed from "../../assets/info_red.svg";

export default function Error() {
	return (
		<div className='error_container'>
			<img className='error_container_icon' src={InfoRed} alt='error icon' />
			<h3 className='error_container_title'>Something Happend, try again </h3>
		</div>
	);
}
