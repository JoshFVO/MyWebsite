import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../src/components/homePage/homePage";
import ArtPage from "../src/components/artPage/artPage";
import ContactPage from "../src/components/contactPage/contactPage";
import GamesPage from "../src/components/gamesPage/gamesPage";
import ProjectsPage from "../src/components/projectsPage/projectsPage";

const RouteDispatcher = () => {

    return (

        <BrowserRouter>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/art" element={<ArtPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/games" element={<GamesPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}

export default RouteDispatcher;