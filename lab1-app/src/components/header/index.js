import ironhackLogoXs from '../../images/ironhack-logo.xs.png';
import menuTopXs from '../../images/menu-top-xs.png';

function Header() {
    return (
        <><div className='header'>
            <img
                src={ironhackLogoXs}
                alt="logo da IronHack pequeno"
                className='logo' />
            <img
                src={menuTopXs}
                alt="logo da menu do topo pequeno"
                className='logo' />
        </div>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn how to use the  most popular frontend library, and become a super Ninja developer</p>
        <button>Awesome!</button></>
    )



}

export default Header;