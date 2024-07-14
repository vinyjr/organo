"use client";

import styles from "./page.css";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Team from "./components/Team";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278 ",
    },
    {
      id: uuidv4(),
      name: "Front End",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator(id) {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  }

  function changeColorTeam(color, id) {
    setTeams(
      teams?.map((team) => {
        if (team.id === id) {
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
          id={team.id}
          name={team.name}
          color={team.color}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
          whenDeleting={deleteCollaborator}
        />
      ))}
    </main>
  );
}
