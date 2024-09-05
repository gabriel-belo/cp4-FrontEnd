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
                <Link to="/sobre" className='navlink'>Sobre</Link>
                <Link to="/contato" className='navlink'>Contato</Link>
                <div>
                    {/* Adicionar uma lupa */}
                    <input type="text" placeholder='Buscar'/>
                </div>
                <div>
                    {/* fazer login e logon */}
                </div>
            </section>

       </NavStyle>        
    )
}
export default Nav