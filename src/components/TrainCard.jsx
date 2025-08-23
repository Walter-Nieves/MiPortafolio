
import "/src/Styles/TrainCard.css"

function TrainCard({logo,titulo,año,final}) {
  return (
    <div className="TrainCard">
        <img src={logo} alt="Formación" />
        <strong>{titulo}</strong>
        <p>
            <span>{final} </span>
            <span>{año}</span>
        </p>



    </div>
  )
}

export default TrainCard