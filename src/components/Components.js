import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
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
            case 'experience':
                return <Experience />;
        }
    };
    
    return(
        <div className="flex flex-wrap flex-1">
            <div className="max-w-6xl w-full mx-auto py-6">
                <h1 className="font-bold text-gray-500 text-5xl md:text-7xl mb-8 pl-4">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                </h1>
                {visibleComponent()}
            </div>
        </div>
    );
}