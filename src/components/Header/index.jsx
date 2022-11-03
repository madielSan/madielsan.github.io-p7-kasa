import {NavLink} from 'react-router-dom'
import {ReactComponent as Logo } from './navbar-logo.svg'
import '../../_scss/layouts/Header.scss'
function Header() {
    return(
        <div className='navbar'>
            <Logo className='navbar__logo' />
            <nav className='navbar__nav'>
                <NavLink className={({ isActive }) => isActive ? "navbar__nav__link active" : "navbar__nav__link"} to="/" end>Accueil</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navbar__nav__link active" : "navbar__nav__link"}  to="/about">A propos</NavLink>
            </nav>
        </div>
    )
}

export default Header