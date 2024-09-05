import {Link} from 'react-router-dom'
import { FooterStyle } from '../css/FooterStyle.jsx';
import logo from  '../assets/logo.jpg'
// import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons'

const Footer=()=>{
    return(
        <>
            <FooterStyle>
                <div id="infos1">
                    <img src={logo} alt="logo"/>
                    <button>agenda</button>
                    <button>tabelas</button>
                    {/* <h5>@2024- Todos os direitos reservados</h5> */}
                </div>
                
                

                <div id="infos2">
                    <span>
                        <h5>@2024- Todos os direitos reservados</h5>
                    </span>
                    <ul>
                        <li><button>princípios editoriais</button></li>
                        <li><button>política de privacidade</button></li>
                        <li><button>minha conta</button></li>
                    </ul>
                    
                </div>
            </FooterStyle>
        </>
    )
}
export default Footer