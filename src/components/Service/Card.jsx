import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const {
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
    Icon8,
    Icon9,
    desc,
    title,
  } = props;
  return (
    <Container>
      <h1>{title}</h1>
      <span className="green">
        <Icon1 />
        <Icon2 />
        <Icon3 />
        <Icon4 />
        <Icon5 />
        <Icon6 />
        <Icon7 />
        <Icon8 />
        <Icon9 />
      </span>
      <p>{desc}</p>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  padding: 1rem;
  text-align: center;
  span {
    font-size: 3.5rem;
  }

  h1 {
    font-size: 1.5rem;
    padding-bottom: 0.7rem;
  }

  p {
    font-size: 1rem;
  }
`;
