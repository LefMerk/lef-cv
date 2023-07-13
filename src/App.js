import { createContext, useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import Menu from './components/Menu';
import Components from './components/Components';
import Footer from './components/Footer';

export const ComponentContext = createContext();
const GA_ID =process.env.GA_ID;
ReactGA.initialize(GA_ID);

const App = () => {
    const [state, dispatch] = useState('about');
    const images = [
        'assets/ajax.svg',
        'assets/focus.png',
        'assets/hedno.png',
        'assets/logo.png',
        'assets/prime.png',
        'assets/tauri.svg',
        'assets/unipi.png',
        'assets/upcom.png'
    ];

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
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