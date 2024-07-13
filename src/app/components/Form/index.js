"use client";

import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import InputText from "../TextField/TextField";
import "./Form.css";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [team, setTeam] = useState("");

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
        <InputText
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          changed={(valor) => setNome(valor)}
        />
        <InputText
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          changed={(valor) => setCargo(valor)}
        />
        <InputText
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
    </section>
  );
};

export default Form;
