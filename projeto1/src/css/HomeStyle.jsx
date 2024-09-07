import styled from "styled-components";
import imgPrincipal from "../assets/home_principal.jpeg";
export const HomeStyle =styled.body`

font-family: "Inter Tight", sans-serif;
margin:0;
background-image: linear-gradient(to bottom, #C8C8C8, 	#DFDFDF);



#inicio{
    display:flex;
    flex-direction:column;
    align-item:center;
    justify-content:center;
    background-image: linear-gradient(to right, red, orange);
    // background-image: url(${imgPrincipal});
    background-width: 100%;
    background-height: 600px;

}

#principal{
    display:flex;
    flex-direction:column;
    align-item:center;
    justify-content:center;

}


#titulo{
    font-size:3rem;
    background: -webkit-linear-gradient(blue, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 90px;
    margin-left: 40px;

}


#sub-titulo{
    font-size:1.5rem;
    background: -webkit-linear-gradient(blue, black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 800px;
    margin-left: 40px;

}
#btn-explora{
    background: none;
    opacity: 1;
    color: white;
    font-weigth: bold;
    font-size: 1.5rem;
    heigth: 250px;
    width:250px;
    border-radius: 50px;
    padding: 10px 10px 10px 10px;
    margin-left: 650px;
    margin-bottom: 20px;
    cursor: pointer;
    border-color: white; 
}
#btn-explora:hover{
    background-image: linear-gradient(blue, black);
}
#sobre{
    display: flex;
    align-item: center;
    justify-content: space-evenly;
    color: rgb(0, 0, 139):
    
}

.cardTitle{
    font-size:3rem;
}

.cardText{
    font-size:1.5 rem;
}

#teste{
    display:flex;
    align-item:center;
    justify-content: center;
}

#titulo2{
    font-size:3rem;
    color: rgb(0, 0, 139); 
}

#materiais{
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Define 3 colunas, 1fr cada (frações iguais) */
    gap: 10px; /* Espaçamento entre os itens */
    // display: flex;
    // align-item: center;
    // justify-content: space-evenly;

}

.produto{
    border: 2px;
    border-radius: 5px;
}
    
.imgs{
    heigth: 300px;
    width: 300px;
    border-radius: 5px;
}

.conteudo{
    display:flex;
    flex-direction: column;
}
.conteudo p, h3{
    width:300px;

}

.buttons{
    background-color: rgb(0, 0, 139); 
    // border-radius: 30px;
    border-radius: 50px;
    padding: 10px 15px 10px 15px;
    width: 150px;
    margin-right: 20px;
    color: white;
    font-size: 1rem;
    font: bold;
    cursor: pointer;
}


`