import './App.css';
import LogIn from "./pages/LogIn/LogIn";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./pages/ Registration/ Registration";
import Calendar from "./pages/Calendar/Calendar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LogIn/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
