import {Link} from 'react-router-dom';
import { ProdutoStyle } from '../css/ProdutoStyle.jsx';
import Produto1 from "../assets/produto1.jpeg";
import Produto2 from "../assets/produto2.jpeg";
import Produto3 from "../assets/produto3.jpeg";
import Produto4 from "../assets/produto4.jpeg";
import Produto5 from "../assets/produto5.jpeg";
import Produto6 from "../assets/produto6.jpeg";


const Produtos=()=>{
    return(
        <>
        <ProdutoStyle>
            <body>

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
                            <div className='produto'>
                                <img className='imgs' src={Produto1} alt="Produto 7"/>
                                <div className='conteudo'>
                                    <h3>Camiseta do Flamengo</h3>
                                    <p>R$ 89,90</p>
                                    <p>Mostre seu amor pelo Mengão com esta camiseta estilosa!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>
                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto2} alt="Produto 8"/>
                                <div className='conteudo'>
                                    <h3>Bola de Futebol Nike</h3>
                                    <p>R$ 199,90</p>
                                    <p>A bola que vai fazer você driblar até o Messi!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto3} alt="Produto 9"/>
                                <div className='conteudo'>
                                    <h3>Tênis Adidas Ultraboost</h3>
                                    <p>R$ 499,90</p>
                                    <p>Conforto e estilo para correr como o vento!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto4} alt="Produto 10"/>
                                <div className='conteudo'>
                                    <h3>Jaqueta de Treino Puma</h3>
                                    <p>R$ 299,90</p>
                                    <p>Perfeita para treinos, até mesmo no frio!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto5} alt="Produto 11"/>
                                <div className='conteudo'>
                                    <h3>Meias de Compressão</h3>
                                    <p>R$ 49,90</p>
                                    <p>Para quem leva a sério a recuperação muscular!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto6} alt="Produto 12"/>
                                <div className='conteudo'>
                                    <h3>Boné New Era</h3>
                                    <p>R$ 79,90</p>
                                    <p>O acessório que faltava para completar seu look esportivo!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto1} alt="Produto 13"/>
                                <div className='conteudo'>
                                    <h3>Camiseta do Flamengo</h3>
                                    <p>R$ 89,90</p>
                                    <p>Mostre seu amor pelo Mengão com esta camiseta estilosa!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>
                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto2} alt="Produto 14"/>
                                <div className='conteudo'>
                                    <h3>Bola de Futebol Nike</h3>
                                    <p>R$ 199,90</p>
                                    <p>A bola que vai fazer você driblar até o Messi!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto3} alt="Produto 15"/>
                                <div className='conteudo'>
                                    <h3>Tênis Adidas Ultraboost</h3>
                                    <p>R$ 499,90</p>
                                    <p>Conforto e estilo para correr como o vento!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto4} alt="Produto 16"/>
                                <div className='conteudo'>
                                    <h3>Jaqueta de Treino Puma</h3>
                                    <p>R$ 299,90</p>
                                    <p>Perfeita para treinos, até mesmo no frio!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto5} alt="Produto 17"/>
                                <div className='conteudo'>
                                    <h3>Meias de Compressão</h3>
                                    <p>R$ 49,90</p>
                                    <p>Para quem leva a sério a recuperação muscular!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto6} alt="Produto 18"/>
                                <div className='conteudo'>
                                    <h3>Boné New Era</h3>
                                    <p>R$ 79,90</p>
                                    <p>O acessório que faltava para completar seu look esportivo!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto1} alt="Produto 19"/>
                                <div className='conteudo'>
                                    <h3>Camiseta do Flamengo</h3>
                                    <p>R$ 89,90</p>
                                    <p>Mostre seu amor pelo Mengão com esta camiseta estilosa!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>
                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto2} alt="Produto 20"/>
                                <div className='conteudo'>
                                    <h3>Bola de Futebol Nike</h3>
                                    <p>R$ 199,90</p>
                                    <p>A bola que vai fazer você driblar até o Messi!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto3} alt="Produto 21"/>
                                <div className='conteudo'>
                                    <h3>Tênis Adidas Ultraboost</h3>
                                    <p>R$ 499,90</p>
                                    <p>Conforto e estilo para correr como o vento!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto4} alt="Produto 22"/>
                                <div className='conteudo'>
                                    <h3>Jaqueta de Treino Puma</h3>
                                    <p>R$ 299,90</p>
                                    <p>Perfeita para treinos, até mesmo no frio!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto5} alt="Produto 23"/>
                                <div className='conteudo'>
                                    <h3>Meias de Compressão</h3>
                                    <p>R$ 49,90</p>
                                    <p>Para quem leva a sério a recuperação muscular!</p>
                                    <button className='buttons'>Comprar Agora</button>
                                </div>

                            </div>
                            <div className='produto'>
                                <img className='imgs' src={Produto6} alt="Produto 24"/>
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
        </ProdutoStyle>
        </>
    )
}
export default Produtos
