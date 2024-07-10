import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
  return props.collaborators.length > 0 ? (
    <section className="team" style={{ backgroundColor: props.colorOne }}>
      <h3 style={{ borderColor: props.colorTwo }}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map((collaborator) => (
          <Collaborator
            colorTwo={props.colorTwo}
            key={collaborator.nome}
            name={collaborator.nome}
            cargo={collaborator.cargo}
            imagem={collaborator.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
