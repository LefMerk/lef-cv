import Menu from './components/Menu';
import Components from './components/Components';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className='flex flex-col'>
            <Menu />
            <Components />
            <Footer />
        </div>
    );
}

export default App;