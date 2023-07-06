import Menu from './Menu';
import About from './About';
import Skills from './Skills';
import Studies from './Studies';
import Projects from './Projects';
import Find from './Find';

const App = () => {
    return (
        <div className='container'>
            <Menu />
            <About />
            <Skills />
            <Projects />
            <Studies />
            <Find />
        </div>
    );
}

export default App;