import styled from "styled-components";
export const NavStyle =styled.div `

font-family: "Inter Tight", sans-serif;

.conteiner{
    display:flex;
    align-item:center;
    justify-content: space-between;
    flex-direction: row;
    position: fixed;
    border-radius: 50px;
    opacity: 0.7; /* Define a opacidade em 50% */
    heigth: 45px;
    width: 100%;
    background-color: white;
    color: black;
    
}

img{
    height:70px;
    width:70px;
    border-radius: 30px;  
}

div{
    display:flex;
    align-item:center;
}

.navlink{
    font-size:1rem;
    color:black;
    text-transform:uppercase;
    text-decoration:none;
    padding:20px;
}
.navlink:hover{
    font-size:1.2rem;
}

.compra{
    background-color: rgb(0, 0, 139); 
    border-radius: 50px;
    padding: 0 20px 0 20px;
    margin-right: 20px;
    color: white;
    font-size: 1rem;
    font: bold;

}

button:hover{
    background-color: rgb(0, 0, 205); 
}


// .nav{
//     list-style:none;
//     display:flex;
//     gap:1rem;
//     width:100%;
//     height:70px;
//     background-color: green;
// }

`

