import ironhackLogoXs from '../../images/ironhack-logo.xs.png';
import menuTopXs from '../../images/menu-top-xs.png';

function Header() {
    return (
        <div className='header'>
            <div className='topo'>
                <img
                    src={ironhackLogoXs}
                    alt="logo da IronHack pequeno"
                    className='logo' />
                <img
                    src={menuTopXs}
                    alt="logo da menu do topo pequeno"
                    className='logo' />
            </div>
            <h1 className="h1-header">Say hello to ReactJS</h1>
            <p className="p-header">You will learn how to use the  most popular frontend library, and become a super Ninja developer</p>
            <button className="btn-header">Awesome!</button>
        </div>
    
    )



}

export default Header;