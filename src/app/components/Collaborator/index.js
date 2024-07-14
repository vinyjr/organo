import { IoMdCloseCircle } from "react-icons/io";
import "./Collaborator.css";

const Collaborator = ({ name, cargo, imagem, color, whenDeleting, id }) => {
  return (
    <div className="collaborator">
      <IoMdCloseCircle size={25} className="delete" onClick={() => whenDeleting(id)} />
      <div className="header" style={{ backgroundColor: color }}>
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
