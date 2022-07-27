import './App.css';
import LogIn from "./pages/LogIn/LogIn";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
