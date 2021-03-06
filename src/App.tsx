import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './style.css';
import {Home} from "./pages/Home/Home";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;