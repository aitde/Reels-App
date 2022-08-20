import "./App.css";
import SignUp from "../src/components/SignUp";
import Login from "../src/components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path="/" element={<SignUp />}></Route>

						<Route path="/login" element={<Login />}></Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
