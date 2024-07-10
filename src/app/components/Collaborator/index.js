import "./Collaborator.css";

const Collaborator = ({ name, cargo, imagem, colorTwo }) => {
  return (
    <div className="collaborator">
      <div className="header" style={{ backgroundColor: colorTwo }}>
        <img src={imagem} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
