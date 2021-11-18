import React from "react";
import "./App.css";
import CardList from "./components/CardList";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import data from "./data";

const App = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <CardList data={data} />
        </div>
    );
};

export default App;
