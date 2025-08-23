import { useNavigate } from "react-router-dom";
import "/src/Styles/Header.css";
import { useContext, useState } from "react";
import { AnimationContext } from "../Contexts/AnimationContexts.jsx";
// import { datos } from "../datos.js";
import SocialItem from "./SocialItem.jsx";
import { LanguageContext } from "../Contexts/LanguageContexts.jsx";


function Header() {
  const navegarA = useNavigate();
  const { showHandler, hideHandler } = useContext(AnimationContext);
  const { contenido, toggleLanguage,language } = useContext(LanguageContext);
  const [idiomaAbierto, setIdiomaAbierto] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);


  const navigateHandler = (event, donde) => {
    event.preventDefault();

    hideHandler();
    setTimeout(() => {
      setTimeout(() => {
        navegarA(donde);
        showHandler();
        setMenuAbierto(false);
      }, 1000);
    });
  };

  const handlerIdioma = (lang) => {
    toggleLanguage(lang);
    setIdiomaAbierto(false);
  };

  return (
    <header className="header">
      <div className="idioma">
          <img src="public/imagenes/wna11.webp" alt="Logo"/>
        <div className="tiene-idiomas">
          <ul className="btn-idioma" onClick={() => setIdiomaAbierto(!idiomaAbierto)}>
           {contenido.lenguaje.boton1}
            { idiomaAbierto && (
              <>
              <li  onClick={() => handlerIdioma("es")} className={`li-1 ${language === "es" ? "activo" : ""}`}> {contenido.lenguaje.boton2}</li>
               <li  onClick={() => handlerIdioma("en")} className={`li-2 ${language === "en" ? "activo" : ""}`}> {contenido.lenguaje.boton3}</li>
              </>)}

          </ul>
          
        </div>
      </div>
 
      <div className="hamburguesa-nav">
        <img className="Menu" src="public/imagenes/hamburguesa.svg" alt="" onClick={()=>setMenuAbierto(!menuAbierto)} />
        <nav className={menuAbierto ? "abierto" : ""}>
          <ul className="ul">
            {contenido.encabezado.enlace.map((red, index) => {
              return (
                <SocialItem
                  href="#"
                  key={index}
                  
                  onClick={(e) =>{navigateHandler(e, red.link); setMenuAbierto(false);}}
                
                >
                  {red.nombre}
                </SocialItem>
              );
            })}

            {/* <li  >
                        <a href="#" onClick={(e) => navigateHandler(e, "/")}>Inicio</a>
                    </li>
                    <li  >
                        <a href="#" onClick={(e) => navigateHandler(e, "/aboutmi")}>Acerca de mí</a>
                    </li>
                    <li  >
                        <a href="#" onClick={(e) => navigateHandler(e, "/skills")}>Habilidades</a>
                    </li>
                    <li  >
                        <a href="#" onClick={(e) => navigateHandler(e, "/training")}>Formacion</a>
                    </li>
                    <li  >
                        <a href="#" onClick={(e) => navigateHandler(e, "/proyectos")}>Proyectos</a>
                    </li>
                    <li  >
                        <a href="#" onClick={(e) => navigateHandler(e, "/contacto")}>Contacto</a>
                    </li> */}
          </ul>
        </nav>
    
      </div>
    </header>
  );
}

export default Header;

