import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "/src/Styles/App.css"

import PokeApi from './Pages/projects/PokeApi'
import PokeCard from './components/PokeCard'
import Home from "./Pages/Home.jsx"
import Skills from './Pages/Skills.jsx'
import AboutMi from './Pages/AboutMi.jsx'
import Training from './Pages/Training.jsx'
import AnimationProvider from './Contexts/AnimationContexts.jsx'
import Projects from './Pages/Projects.jsx'
import Contacto from './Pages/Contacto.jsx'
import LanguageProvider  from './Contexts/LanguageContexts.jsx'


function App() {
  return (
    <BrowserRouter basename="/MiPortafolio/">
      <LanguageProvider>
      <AnimationProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/aboutmi" element={<AboutMi />} />
          <Route path="/training" element={<Training />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* <Route path="/projects/pokeapi" element={<PokeApi />} />
          <Route path="/projects/pokeapi/:id" element={<PokeCard />} /> */}
        </Routes>
      </AnimationProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App























// import { BrowserRouter, Routes, Route } from "react-router-dom"
// //para poder traernos las anteriores herramientas de react tuvimos que instalar en la terminal 
// // npm i react-router-dom
// import { Link } from "react-router-dom"
// import Contact from "./components/Contact.jsx"
// import Numero from "./components/Numero.jsx"

// function App() {
//   return (
//     <BrowserRouter basename="/MiPortafolio/">
//       <header>
//         <h1>Hola a todos, mi header</h1>
//         <nav>
//           <Link to="/" >Home</Link>
//           <Link to="/about" >About</Link>
//           <Link to="/contact" >Contact</Link>
//           <Link to="/numeros/1/carlos" >Numero 1</Link>
//         </nav>
//       </header>
//       <Routes>
//         <Route path="/" element={<p>Bienvenido</p>} />
//         <Route path="/about" element={<p>Sobre mi</p>} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/numeros/:num/:nombre" element={<Numero/>} />
//         <Route path="*" element={<p>404 La pagina que buscas no existe</p>} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App