import logo from '../assets/logo.png';
import { Component } from 'react';

const menuItems = [
    {name: 'About me', link: '#About-Me'},
    {name: 'Skills', link: '#Skills'},
    {name: 'Projects', link: '#Projects'},
    {name: 'Studies', link: '#Studies'},
    {name: 'Find me', link: '#Find-Me'}
];

//const menu = menuItems.map((menuItem) => <a key={menuItem.name} href={menuItem.link}>{menuItem.name}</a>);

export default function Menu() {
    return (
        <div className="menu animate__animated animate__fadeInDown">
            <img src={logo} alt="Logo" />
            {/* <div className='menu-name'>
                <span>Eleftherios</span>
                <span>Merkouriou</span>
            </div> */}
            {/* {[...menu]} */}
            {menuItems.map((menuItem) => <a key={menuItem.name} href={menuItem.link}>{menuItem.name}</a>)}
        </div>
    );
}