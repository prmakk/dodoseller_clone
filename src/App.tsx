import { Route, Routes } from "react-router-dom";

import "./styles/normalize.css";
import "./styles/global.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GamePage from "./pages/GamePage/GamePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/game/:id" element={<GamePage />} />
                    <Route
                        path="/game/:id/:productId"
                        element={<DetailsPage />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
