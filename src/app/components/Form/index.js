"use client";

import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import Field from "../Field";
import "./Form.css";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const teamOptions = props.teams.map((team) => ({
    name: team,
  }));

  const onSave = (event) => {
    event?.preventDefault();
    props.newCollaboratorAdded({
      nome,
      cargo,
      imagem,
      team,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Field
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          changed={(valor) => setNome(valor)}
        />
        <Field
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          changed={(valor) => setCargo(valor)}
        />
        <Field
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={imagem}
          changed={(valor) => setImagem(valor)}
        />
        <DropdownList
          required={true}
          label="Time"
          itens={teamOptions}
          valor={team}
          changed={(valor) => setTeam(valor)}
        />
        <Button>Criar Card</Button>
      </form>
      <form
        onSubmit={(event) => {
          event?.preventDefault();
          props.registerTeam({ name: teamName, color: teamColor });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <Field
          required
          label="Nome"
          placeholder="Digite o nome do time"
          valor={teamName}
          changed={(valor) => setTeamName(valor)}
        />
        <Field
          required
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          value={teamColor}
          changed={(valor) => setTeamColor(valor)}
        />
        <Button>Criar um novo time</Button>
      </form>
    </section>
  );
};

export default Form;
