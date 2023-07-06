import logo from './logo.png';
import { Component } from 'react';

// const menuItems = [
//     {name: 'About me', link: '#About-Me'},
//     {name: 'Skills', link: '#Skills'},
//     {name: 'Projects', link: '#Projects'},
//     {name: 'Studies', link: '#Studies'},
//     {name: 'Find me', link: '#Find-Me'}
// ];

//const menu = menuItems.map((menuItem) => <a key={menuItem.name} href={menuItem.link}>{menuItem.name}</a>);

class Menu extends Component{
    constructor(){
        super();
        this.state = {
            menuItems : [
                {name: 'About me', link: '#About-Me'},
                {name: 'Skills', link: '#Skills'},
                {name: 'Projects', link: '#Projects'},
                {name: 'Studies', link: '#Studies'},
                {name: 'Find me', link: '#Find-Me'}
            ]
        }
    }

    render () {
        return (
            <div className="menu animate__animated animate__fadeInDown">
                <img src={logo} alt="Logo" />
                {/* <div className='menu-name'>
                    <span>Eleftherios</span>
                    <span>Merkouriou</span>
                </div> */}
                {/* {[...menu]} */}
                {this.state.menuItems.map((menuItem) => <a key={menuItem.name} href={menuItem.link}>{menuItem.name}</a>)}
            </div>
        );
    }
}

export default Menu;