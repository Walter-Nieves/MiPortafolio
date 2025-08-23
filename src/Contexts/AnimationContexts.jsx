import { createContext, useEffect, useRef } from 'react'
import Header from '../components/Header';


export const AnimationContext = createContext();

function AnimationProvider({ children }) {

    const refMain = useRef();

    const showHandler = ()=>{
        refMain.current.classList.add("mostrar-vista");
        setTimeout(() => {
            refMain.current.classList.remove("mostrar-vista");
        }, 1000);
    }
    
    const hideHandler = ()=>{
         refMain.current.classList.add("ocultar-vista");
        setTimeout(() => {
            refMain.current.classList.remove("ocultar-vista");
        }, 1000);
    }

    useEffect(()=>{
        hideHandler();
        setTimeout(() => {
            
            showHandler();
        }, 1000);
    }

)

    return (
        <AnimationContext.Provider value={{showHandler,hideHandler}}>
            <Header />
            <main className='main' ref={refMain}>
                {children}
            </main>
        </AnimationContext.Provider>
    )
}

export default AnimationProvider