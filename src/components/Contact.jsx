
import { Link, useNavigate } from 'react-router-dom'


function Contact() {

    const navegador = useNavigate();

    const handler = () => {
        navegador("/about");
        // console.log("viajando")
    }

    return (
        <div>
            <h2>Contact</h2>
            <Link to="/about" >Sobre mi</Link>
            <img src='https://placehold.co/200' onClick={handler} />
        </div>
    )
}

export default Contact