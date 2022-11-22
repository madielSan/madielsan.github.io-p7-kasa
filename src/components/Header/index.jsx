import {NavLink} from 'react-router-dom'
import {ReactComponent as Logo } from '../../assets/navbar-logo.svg'
import '../../_scss/layouts/header.scss'
function Header() {
    return(
        <div className='navbar'>
            <NavLink to="/"><Logo className='navbar__logo' /></NavLink>
            
            <nav className='navbar__nav'>
                <NavLink className={({ isActive }) => isActive ? "navbar__nav__link active" : "navbar__nav__link"} to="/" end>Accueil</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navbar__nav__link active" : "navbar__nav__link"}  to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header