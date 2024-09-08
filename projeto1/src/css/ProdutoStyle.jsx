import styled from "styled-components";
export const ProdutoStyle =styled.body`

font-family: "Inter Tight", sans-serif;
margin:0;
background-image: linear-gradient(to bottom, #C8C8C8, 	#DFDFDF);

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