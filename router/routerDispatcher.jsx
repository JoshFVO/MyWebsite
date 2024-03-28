import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../src/components/homePage/homePage";

const RouteDispatcher = () => {

    return (

        <BrowserRouter>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default RouteDispatcher;