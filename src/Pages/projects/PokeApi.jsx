import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import "../../Styles/PokeApi.css"

function PokeApi() {

    const refNombre = useRef();
    const navegarA = useNavigate();

    const searchHandler = (e)=>{
        e.preventDefault();
        const nombre = refNombre.current.value.trim().toLowerCase();
        navegarA("/projects/pokeapi/"+nombre);
    }

  return (
    <div className='centrar'>
        <h2 className='h2'>Poke Api</h2>
        <form className='form' onSubmit={searchHandler}>
            <label className='label'>
                <span className='span'>Nombre del pokemon</span>
                <br />
                <input className='input' ref={refNombre} type="text" required/>
            </label>
            <br />
            <button className='boton' type="submit" >Buscar</button>


        </form>
    </div>
  )
}

export default PokeApi;