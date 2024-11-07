import {Footer} from "../components/nav/Footer.tsx";
import {PageHeader} from "../components/PageHeader.tsx";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {LinkButton} from "../components/LinkButton.tsx";

type Person = {
  name: string,
  email: string,
  role: string
};

const Grid = styled.div`
  display: grid;
  gap: 5vh;
  grid-template-columns: repeat(3, 15vw);
  justify-content: center;
  margin: 50px 20vw;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const LowerContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 15vh;
`;

const TeamDetails = styled.p`
  color: #33363a;
  font-weight: 500;
  
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const TeamImage = styled.img`
  border-radius: 10px;
  width: 100%;
`;

const TeamName = styled.p`
  color: #33363a;
  font-size: 24px;
  font-weight: 700;
  margin-top: 10px;
`;

export function About() {
  const [team, setTeam] = useState([]);

  useEffect(function() {
    fetch("http://localhost:3000/team")
      .then(response => response.json())
      .then(response => setTeam(response));
  }, []);

  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_about.webp"} $backgroundPosition={"center 40%"} $title={"Meet the Team"} />
      <Grid>
        {team.map(function(item: Person, key) {
          return (
            <Item key={key}>
              <TeamImage alt={`Picture of ${item.name}`} draggable="false" src={`http://localhost:3000/team_images/${item.name.replace(/ /g, "_").toLocaleLowerCase()}.webp`} />
              <TeamName>{item.name}</TeamName>
              <TeamDetails><a href={`mailto:${item.email}`}>{item.email}</a></TeamDetails>
              <TeamDetails>{item.role}</TeamDetails>
            </Item>
          )
        })}
      </Grid>
      <LowerContent>
        <LinkButton to={"/contact"}>Contact Us</LinkButton>
      </LowerContent>
      <Footer />
    </>
  );
}
