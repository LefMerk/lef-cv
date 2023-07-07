import { createContext, useEffect, useState } from 'react';
import Menu from './components/Menu';
import Components from './components/Components';
import Footer from './components/Footer';

export const ComponentContext = createContext();

const App = () => {
    const [state, dispatch] = useState('about');
    const images = [
        'assets/about.jpg',
        'assets/projects.jpg',
        'assets/find.jpg',
        'assets/skills.jpg',
        'assets/studies.jpg'
    ];

    useEffect(() => {
        for (const image of images) {
            const imageElement = new Image();
            imageElement.src = image;
        }
    }, [])

    return (
        <div className='flex flex-col min-h-screen'>
            <ComponentContext.Provider value={{state, dispatch}}>
                <Menu />
                <Components />
                <Footer />
            </ComponentContext.Provider>
        </div>
    );
}

export default App;