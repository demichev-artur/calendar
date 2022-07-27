import './App.css';
import LogIn from "./pages/LogIn/LogIn";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./pages/ Registration/ Registration";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/registration" element={<Registration/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
