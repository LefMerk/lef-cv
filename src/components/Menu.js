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
        <div className="menu flex items-center rounded-b-md px-4 py-4 animate__animated animate__fadeInDown">
            <img src={logo} alt="Logo" className='h-10 rounded-lg border-2 border-slate-300'/>
            <div className='flex items-center justify-center grow gap-x-8'>
                {menuItems.map((menuItem) => 
                    <a key={menuItem.name} className={menuItem.name === state ? 'selected' : ''} onClick={()=>handleMenu(menuItem.name)}>
                        {menuItem.text}
                    </a>)
                }
            </div>
        </div>
    );
}