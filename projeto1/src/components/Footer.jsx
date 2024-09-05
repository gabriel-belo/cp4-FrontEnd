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
                    <button>princípios editoriais</button>
                    <button>política de privacidade</button>
                    <button>minha conta</button>
                </div>
                
                

                <div id="infos2">
                    <h5>@2024- Todos os direitos reservados</h5>
                </div>
            </FooterStyle>
        </>
    )
}
export default Footer