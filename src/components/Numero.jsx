
//va entregar un objeto con los parametros que se le manden en la url
import { useParams } from "react-router-dom"

function Numero() {

const parametros = useParams();

  return (
    <div>

        <h3>El numero que colocaste es {parametros.num}</h3>
        <h3>El nombre que colocaste es {parametros.nombre}</h3>
    </div>
  )
}

export default Numero