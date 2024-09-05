import styled from "styled-components";
import imgPrincipal from "../assets/home_principal.jpeg";
export const HomeStyle =styled.body`

font-family: "Inter Tight", sans-serif;
margin:0;



#inicio{
    display:flex;
    flex-direction:column;
    align-item:center;
    justify-content:center;
    background-color: red;
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
    color:white;

}


#sub-titulo{
    font-size:1.5rem;
    color:white;

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
    cursor: pointer;
    border-color: white;
    
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