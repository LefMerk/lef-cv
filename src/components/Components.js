import About from "./About";
import Skills from "./Skills";
import Studies from "./Studies";
import Projects from "./Projects";
import Find from "./Find";

export default function Components() {
    return(
        <div className="grid grid-cols-4">
            <About />
            <Skills />
            <Projects />
            <Studies />
            <Find />
        </div>
    );
}