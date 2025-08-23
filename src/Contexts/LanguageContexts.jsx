import { createContext, useState } from "react";
import { datos, datos2 } from "../datos.js";

export const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");
  
  

  const toggleLanguage = (language) => {
    setLanguage(language); 
  };

  const contenido = language === "es" ? datos : datos2;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, contenido }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider

