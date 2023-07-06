import logo from '../assets/logo.png';

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
        <div className="menu flex place-items-center gap-x-8 rounded-b-md px-4 py-2.5 animate__animated animate__fadeInDown">
            <img src={logo} alt="Logo" className='h-10 rounded-lg border-2 border-slate-300'/>
            {/* <div className='menu-name'>
                <span>Eleftherios</span>
                <span>Merkouriou</span>
            </div> */}
            {/* {[...menu]} */}
            {menuItems.map((menuItem) => <a key={menuItem.name} href={menuItem.link}>{menuItem.name}</a>)}
        </div>
    );
}