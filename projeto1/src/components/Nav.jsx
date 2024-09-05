import {Link} from 'react-router-dom'
import { NavStyle } from '../css/NavStyle.jsx'
import logo from  '../assets/logo.jpg'

const Nav=()=>{
    return(
      <NavStyle>
        <div className='conteiner'>
            <div>
                <img src={logo} alt="Logo" />
                <Link to="/" className='navlink'>Home</Link>
            </div>
            <div>
                <Link to="/produto" className='navlink'>Produtos</Link>
                <Link to="/sobre" className='navlink'>Sobre</Link>
                <Link to="/contato" className='navlink'>Contato</Link>
            </div>

            <div>
                <button className='compra'>
                    Compre Agora
                </button>
            </div>
        </div>

       </NavStyle>        
    )
}
export default Nav