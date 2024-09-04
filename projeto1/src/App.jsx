import Nav from './components/Nav'
import Footer from './components/Footer'
import Produtos from './components/Produtos'
import Home from "./components/Home"
import Contato from './components/Contato'
import Sobre from './components/Sobre'
// Está faltando o error 
import {Outlet} from 'react-router-dom'

function App() {
 

  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/> 
    </>
  )
}

export default App
