"use client";

import styles from "./page.css";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Team from "./components/Team";

export default function Home() {
  const [ teams, setTeams ] = useState([
    {
      name: "Programação",
      color: "#57C278 ",
    },
    {
      name: "Front End",
      color: "#82CFFA",
    },
    {
      name: "Data Science",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator() {
    console.log("Deletando colaborador");
  }

  function changeColorTeam(color, name) {
    setTeams(
      teams?.map((team) => {
        if (team.name === name) {
          team.color = color;
        }
        return team;
      })
    );
  }

  return (
    <main>
      <Banner />
      <Form
        teams={teams?.map((team) => team.name)}
        newCollaboratorAdded={(collaborator) =>
          newCollaboratorAdded(collaborator)
        }
      />
      {teams?.map((team) => (
        <Team
          changeColor={changeColorTeam}
          key={team.name}
          name={team.name}
          color={team.color}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
          whenDeleting={deleteCollaborator()}
        />
      ))}
    </main>
  );
}
