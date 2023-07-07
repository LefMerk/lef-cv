import About from "./About";
import Skills from "./Skills";
import Studies from "./Studies";
import Projects from "./Projects";
import Find from "./Find";
import { ComponentContext } from "../App";
import { useState, useContext } from "react";

export default function Components() {
    const { state } = useContext(ComponentContext);
    const visibleComponent = () => {
        switch (state) {
            case 'about':
                return <About />;
            case 'skills':
                return <Skills />;
            case 'projects':
                return <Projects />;
            case 'studies':
                return <Studies />;
            case 'find':
                return <Find />;
        }
    };
    
    return(
        <div className="flex flex-wrap flex-1">
            {visibleComponent()}
        </div>
    );
}