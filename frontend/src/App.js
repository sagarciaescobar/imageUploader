import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageUploadedPage from "./page/ImagePage/ImageUploadedPage";
import Main from "./page/main/Main";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path='/' element={<Main />} />
				<Route path='/:imageId' element={<ImageUploadedPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
