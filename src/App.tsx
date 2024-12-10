import { Route, Routes } from "react-router-dom";

import "./styles/normalize.css";
import "./styles/global.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GamePage from "./pages/GamePage/GamePage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/game/:id" element={<GamePage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
