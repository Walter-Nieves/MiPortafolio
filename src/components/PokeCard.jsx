import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/PokeCard.css"

function PokeCard() {

    const { id } = useParams();
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(false);
    const [poke, setPoke] = useState(null);


    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + id)
            .then(response => {
                return response.json();
            })
            .then(
                data => {
                    setPoke(data);
                    setCargando(false);
                })
            .catch(error => {
                setError(true);
                setCargando(false);
            });
    }, []);

    return (
        <div className='centrar'>
            {cargando && <p>Cargando...</p>}
            {error && <p>Error: Pokemon no encontrado</p>}
            {poke &&
                <div className='contenedor'>
                    <strong className='strong1'>Nombre : {poke.name}</strong>
                    <img className='img' src={poke.sprites.other["official-artwork"].front_default} alt="{poke.name}" />
                    <strong className='strong'>
                        {/* Muestra el texto "Tipo:" seguido de un espacio (el {" "} es para que el espacio se renderice correctamente en JSX).*/}
                        {/* poke.types es un array de tipos del Pokémon. Por ejemplo: [
                           { type: { name: "fire" } },
                           { type: { name: "flying" } }
                         ] */}
                        {/* .map(...) recorre ese array y genera un <span> por cada tipo. */}
                        {/* tipo es el objeto actual del array. */}
                        {/* index es la posición actual en el array (0, 1, 2...). */}
                        {/* Crea un <span> (etiqueta en línea) para mostrar cada tipo. */}
                        {/* El atributo key es obligatorio en listas en React para mejorar el rendimiento y control de cambios. Aquí se usa el nombre del tipo como clave única. */}
                        Tipo:{" "}
                        {poke.types.map((tipo, index) => (
                            <span key={tipo.type.name} >
                                {tipo.type.name}
                                {/* Esto añade una coma y espacio entre los tipos excepto después del último. */}
                                {index < poke.types.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </strong>
                    {/* esta linea que sigue quedo comentada pq solo mostraba el primer tipo del pokemon asi tuviera varios */}
                    {/* <strong className='strong' >Tipo : {poke.types[0].type.name}</strong> */}
                </div>}
        </div>
    )
}

export default PokeCard

