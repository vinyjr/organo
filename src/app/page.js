"use client";

import styles from "./page.css";
import Banner from "./components/Banner/Banner";
import Form from "./components/Form";
import { useState } from "react";
import Team from "./components/Team";

export default function Home() {
  const teams = [
    {
      name: "Programação",
      colorOne: "#D9F7E9",
      colorTwo: "#57C278 ",
    },
    {
      name: "Front End",
      colorOne: "#E8F8FF",
      colorTwo: "#82CFFA",
    },
    {
      name: "Data Science",
      colorOne: "#F0F8E2",
      colorTwo: "#A6D157",
    },
    {
      name: "Devops",
      colorOne: "#FDE7E8",
      colorTwo: "#E06B69",
    },
    {
      name: "UX e Design",
      colorOne: "#FAE9F5",
      colorTwo: "#DB6EBF",
    },
    {
      name: "Mobile",
      colorOne: "#FFF5D9",
      colorTwo: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      colorOne: "#FFEEDF",
      colorTwo: "#FF8A29",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <main>
      <Banner />
      <Form
        teams={teams.map((team) => team.name)}
        newCollaboratorAdded={(collaborator) =>
          newCollaboratorAdded(collaborator)
        }
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          colorOne={team.colorOne}
          colorTwo={team.colorTwo}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
        />
      ))}
    </main>
  );
}
