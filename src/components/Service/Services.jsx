import React from "react";
// import { MdOutlineDeveloperBoard } from "react-icons/md";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { GrReactjs } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
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
            Icon2={SiTypescript}
            Icon3={DiNodejsSmall}
            Icon4={GrReactjs}
            Icon5={TbBrandNextjs}
            Icon6={SiRedux}
            Icon7={AiOutlineHtml5}
            Icon8={DiCss3}
            Icon9={SiTailwindcss}
            Icon10={SiChakraui}
            Icon11={DiPostgresql}
            Icon12={SiSequelize}
            Icon13={SiExpress}
            title={"Full-stack Web Developer"}
            desc={`I'm a full-stack web developer using JavaScript as my main language and I have knowledge in Typescript, Node.js, Next.js, React, Redux, HTML, CSS, Tailwind CSS, Chakra UI, Express, PostgreSQL, and Sequelize. I also wish to continue learning many more technologies that will help me become a better professional.`}
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
