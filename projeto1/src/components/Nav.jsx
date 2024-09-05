import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle.jsx'
import logo from  '../assets/logo.jpg'

const Nav=()=>{
    return(
      <NavStyle>
            
            <section className='nav'>
                <img src={logo} alt="Logo" />
                <Link to="/" className='navlink'>Home</Link>
                <Link to="/produto" className='navlink'>Produtos</Link>
                <Link to="/sobre" className='navLink'>Sobre</Link>
                <Link to="/contato" className='navLink'>Contato</Link>
            </section>
       </NavStyle>        
    )
}
export default Nav