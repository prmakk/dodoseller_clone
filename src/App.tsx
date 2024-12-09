import { Route, Routes } from "react-router-dom";

import "./styles/normalize.css";
import "./styles/global.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
