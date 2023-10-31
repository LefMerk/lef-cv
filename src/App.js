import { createContext, useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Menu from './components/Menu';
import Components from './components/Components';
import Footer from './components/Footer';
import prime from './assets/about.jpg';
import logo from './assets/logo.png';
import upcom from './assets/upcom.png';
import hedno from './assets/hedno.png';
import focus from './assets/focus.png';
import unipi from './assets/unipi.png';
import ajax from './assets/ajax.svg';
import tauri from './assets/tauri.svg';

export const ComponentContext = createContext();

process.env.REACT_APP_GA_ID ? ReactGA.initialize(process.env.REACT_APP_GA_ID) : ReactGA.initialize('UA-000000-01');

const App = () => {
    const [state, dispatch] = useState('about');
    const images = [
        ajax, focus, hedno, logo, prime, tauri, unipi, upcom
    ];

    useEffect(() => {
        //ReactGA.pageview(window.location.pathname + window.location.search);
        //ReactGA.send({hitType: "pageview", page: window.location.pathname });
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