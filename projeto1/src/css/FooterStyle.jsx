import styled from "styled-components";
export const FooterStyle =styled.footer `
    // display: flex;
    // align-item:center;
    // flex-direction:column;
    position: fixed;
    bottom: 0%;
    width: 100%;
    height: 120px;
    background-color: blue;
    color: white;

#infos1{
    display: flex;
    align-items: center; /* Alinha todos os itens verticalmente ao centro */
    margin-top: 10px;
    margin-left: 30px;

}



#infos2{
    display:flex
    // justify-content:space-between;
    // margin-top: 10px;
    // margin-right: 10px;
}

ul{
    display:flex
    list-style: none;
}


button{
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
}
img{
    height:70px;

}


`