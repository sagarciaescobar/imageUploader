import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageUploadedPage from "./page/ImagePage/ImageUploadedPage";
import Main from "./page/main/Main";

function App() {
	axios.get("https://dev-image-uploader.herokuapp.com/");

	return (
		<BrowserRouter>
			<Routes>
				<Route index path='/imageUploader/' element={<Main />} />
				<Route
					path='/imageUploader/:imageId'
					element={<ImageUploadedPage title='Uploded image' />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
