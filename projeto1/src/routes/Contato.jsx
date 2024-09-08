import {Link} from 'react-router-dom';
import { ContatoStyle } from '../css/ContatoStyle.jsx';
import contato from "../assets/contato.jpg";
const Contato=()=>{
    return(
        <>
        <ContatoStyle>
        <div id='geral'>
                <div>
                    <img id='imagem' src={contato} alt="" />
                </div>
                <div id='conteudo'>
                        <div id='titulo'>
                            <h1>Página Contato</h1> 
                        </div> 

                        <div id='texto'>
                            <p>Telefone: (11) 1234-5678</p>
                            <p>Email: contato@lojaesportes.com</p>
                            <p>Endereço: Rua dos Atletas, 123</p>
                            <p>Horário de Funcionamento: Seg-Sex: 9h-18h</p>
                        </div>
                </div>
            </div>
        </ContatoStyle>
        </>
    )
}
export default Contato

