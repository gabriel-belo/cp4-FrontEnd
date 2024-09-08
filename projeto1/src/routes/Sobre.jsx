import {Link} from 'react-router-dom';
import { SobreStyle } from '../css/SobreStyle.jsx';
import sobre from "../assets/sobre.jpeg";
const Sobre=()=>{
    return(
        <>
        <SobreStyle>
            <div id='geral'>
                <div>
                    <img id='imagem' src={sobre} alt="" />
                </div>
                <div id='conteudo'>
                        <div id='titulo'>
                            <h1>Sobre Nós</h1> 
                        </div> 

                        <div id='texto'>
                            <p>Bem-vindo à nossa loja de esportes, onde a paixão pelo esporte se encontra com a moda! Aqui, 
                            você encontra tudo o que precisa para se destacar no campo, na quadra ou na pista.</p>
                            <p>Nosso objetivo é oferecer produtos de alta qualidade que atendam a todas as suas necessidades esportivas. 
                            Desde roupas de times até acessórios, temos tudo para você brilhar!</p>
                            <p>Acreditamos que o esporte é uma forma de expressão e queremos que você se sinta incrível enquanto pratica suas atividades favoritas.</p>
                        </div>
                </div>
            </div>
            
        </SobreStyle>
        </>
    )
}
export default Sobre