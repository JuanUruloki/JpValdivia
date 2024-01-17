import React from "react";
// import { MdOutlineDeveloperBoard } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { SiSequelize } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon1={DiJavascript1}
            Icon2={DiNodejsSmall}
            Icon3={GrReactjs}
            Icon4={SiRedux}
            Icon5={AiOutlineHtml5}
            Icon6={DiCss3}
            Icon7={DiPostgresql}
            Icon8={SiSequelize}
            Icon9={SiExpress}
            title={"Full-stack Web Developer"}
            desc={`I'm a full-stack web developer using JavaScript as my main language and I have knowledge in Node.js, React, Redux, HTML, CSS, Express, PostgreSQL, and Sequelize. I also wish to continue learning many more technologies that will help me become a better professional.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
