import "/src/Styles/ProjectCard.css"

function ProjectCard({ nombre, descripcion, imagen, demo, repo }) {
    return (
        <div className="projectCard">
            <img src={imagen} alt="Logo" />
            <strong>{nombre}</strong>
            <p>{descripcion}</p>
            <div className="btn-separator">

                <button type="button">
                    <a href={demo} target="_blank" >DEMO</a>
                </button>

                <button type="button">
                    <a href={repo}target="_blank" >REPO</a>
                </button>

            </div>
        </div>
    )
}

export default ProjectCard



