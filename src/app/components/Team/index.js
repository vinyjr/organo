import hexToRgba from 'hex-to-rgba';
import Collaborator from "../Collaborator";
import "./team.css";

const Team = (props) => {
  return props.collaborators.length > 0 ? (
    <section
      className="team"
      style={{ backgroundColor: hexToRgba(props.color, "0.6") }}
    >
      <input
        onChange={(event) => props.changeColor(event.target.value, props.id)}
        value={props.color}
        type="color"
        className="input-color"
      />
      <h3 style={{ borderColor: props.color }}>{props.name}</h3>
      <div className="collaborators"> 
        {props.collaborators.map((collaborator) => {
          return (
            <Collaborator
              color={props.color}
              key={collaborator.id}
              id={collaborator.id}
              name={collaborator.nome}
              cargo={collaborator.cargo}
              imagem={collaborator.imagem}
              whenDeleting={props.whenDeleting}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
