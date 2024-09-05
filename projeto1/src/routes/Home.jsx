import {Link} from 'react-router-dom';
import { HomeStyle } from '../css/HomeStyle.jsx';
import imgPrincipal from "../assets/home_principal.jpeg";
import Produto1 from "../assets/produto1.jpeg";
import Produto2 from "../assets/produto2.jpeg";
import Produto3 from "../assets/produto3.jpeg";
import Produto4 from "../assets/produto4.jpeg";
import Produto5 from "../assets/produto5.jpeg";
import Produto6 from "../assets/produto6.jpeg";
// import { Button } from 'react-bootstrap'
const Home=()=>{
    return(
        <>
        <HomeStyle>
            <body>
                
            
                <section id="inicio" imgPrincipal>
                    <div id="principal">
                        <h1 id='titulo'>Aventura Esportiva</h1>
                        <h3 id='sub-titulo'>Descubra o melhor do mundo esportivo com estilo e atitude!</h3>
                        <button id="btn-explora">Explorar mais</button>
                    </div>
                </section>
                
                <section  id="sobre">
                    <div id='left'>
                        <p className='cardTitle'>1000+</p>
                        <p className='CardText'>Produtos Disponíveis</p>
                    </div>
                    <div>
                        <p className='cardTitle'>50+</p>
                        <p className='CardText'>Marcas Famosas</p>
                    </div>

                    <div id='right'>
                        <p className='cardTitle'>24/7</p>
                        <p className='CardText'>Atendimento ao Cliente</p>
                    </div>
                </section>

                {/* imagem */}

                <section id='produtos'>
                    <div id="teste">
                        <h1 id='titulo2'>Os Melhores Produtos Esportivos</h1>
                    </div>
                    <div id='materiais'>
                            <div className='produto'>
                                <img className='imgs' src={Produto1} alt="Produto 1"/>
                                <div className='conteudo'>
                                    <h3>Camiseta do Flamengo</h3>
                                    <p>R$ 89,90</p>
                                    <p>Mostre seu amor pelo Mengão com esta camiseta estilosa!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>
                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto2} alt="Produto 2"/>
                                <div className='conteudo'>
                                    <h3>Bola de Futebol Nike</h3>
                                    <p>R$ 199,90</p>
                                    <p>A bola que vai fazer você driblar até o Messi!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto3} alt="Produto 3"/>
                                <div className='conteudo'>
                                    <h3>Tênis Adidas Ultraboost</h3>
                                    <p>R$ 499,90</p>
                                    <p>Conforto e estilo para correr como o vento!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto4} alt="Produto 4"/>
                                <div className='conteudo'>
                                    <h3>Jaqueta de Treino Puma</h3>
                                    <p>R$ 299,90</p>
                                    <p>Perfeita para treinos, até mesmo no frio!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto5} alt="Produto 5"/>
                                <div className='conteudo'>
                                    <h3>Meias de Compressão</h3>
                                    <p>R$ 49,90</p>
                                    <p>Para quem leva a sério a recuperação muscular!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto6} alt="Produto 6"/>
                                <div className='conteudo'>
                                    <h3>Boné New Era</h3>
                                    <p>R$ 79,90</p>
                                    <p>O acessório que faltava para completar seu look esportivo!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                    </div>
                </section>
            </body>
        </HomeStyle>
        </>
    )
}
export default Home