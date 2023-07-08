import { useContext } from 'react';
import { ComponentContext } from '../App';
import logo from '../assets/logo.png';

const menuItems = [
    {name: 'about', text: 'About me', link: '#About-Me'},
    {name: 'skills', text: 'Skills', link: '#Skills'},
    {name: 'projects', text: 'Projects', link: '#Projects'},
    {name: 'studies', text: 'Studies', link: '#Studies'},
    {name: 'find', text: 'Find me', link: '#Find-Me'}
];

//const menu = menuItems.map((menuItem) => <a key={menuItem.name} href={menuItem.link}>{menuItem.name}</a>);

export default function Menu() {
    const { state, dispatch } = useContext(ComponentContext)

    const handleMenu = (name) => {
        dispatch(name);
    };

    return (
        <div className="menu animate__animated animate__fadeInDown">
            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center">
                    <img src={logo} alt="Logo" className='h-10 rounded-lg border-2 border-slate-300'/>
                    <div className='flex flex-col text-slate-50 ml-3'>
                        <div className="font-semibold text-lg">Eleftherios Merkouriou</div>
                        <div className="font-light">Front End Developer</div>
                    </div>
                    <div className='flex items-center justify-end grow gap-x-8 text-xl'>
                        {menuItems.map((menuItem) => 
                            <a key={menuItem.name} className={menuItem.name === state ? 'selected' : ''} onClick={()=>handleMenu(menuItem.name)}>
                                {menuItem.text}
                            </a>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}