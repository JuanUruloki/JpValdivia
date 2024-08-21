import React from "react";
import { Slide } from "react-awesome-reveal";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
import selfie from "../../images/selfie.svg";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Card>
        <Slide direction="left">
          <Texts>
            <h3>
              Hi there! <span className="green">I'am</span>
            </h3>
            <h1 className="green">Juan Pablo Valdivia</h1>
            <h3>Full-Stack Developer</h3>
            <p></p>
            <a href="#footer">
              <button> Let's talk </button>
            </a>
            <Social>
              <p>Check out my</p>
              <div className="social-icons">
                <span>
                  <a href="https://github.com/JuanUruloki">
                    <AiOutlineGithub />
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/juan-pablo-valdivia-4b4724140/">
                    <FaLinkedinIn />
                  </a>
                </span>
              </div>
            </Social>
          </Texts>
        </Slide>
      </Card>
      <Card>
        <Slide direction="right">
          <Profile>
            <img src={selfie} alt="Juan selfie" />
            <Slide direction="up">

              <h3>
                ¡Hola! Soy Juan Pablo Valdivia, desarrollador fullstack con
                experiencia en tecnologías como JavaScript, React y NodeJS. Me
                apasiona crear soluciones que no solo sean innovadoras, sino que
                también ayuden a las empresas a alcanzar sus objetivos de manera
                eficiente. Siempre estoy en busca de nuevos desafíos para seguir
                aprendiendo y mejorando mis habilidades. Si necesitas a alguien
                que aporte valor a tu proyecto con creatividad y eficacia,
                ¡hablemos!
              </h3>
            </Slide>
          </Profile>
        </Slide>
      </Card>
      <Slide></Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 3.2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.8rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 500;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #5ebf14;
    border: none;
    color: #000000;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #50be0151);
    :hover {
      filter: drop-shadow(0px 10px 10px #a5f1736c);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #5ebf14;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 45rem;
    filter: drop-shadow(0px 10px 10px #50be0151);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  h3 {
    padding: 2rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.8rem;
  }
  

  :hover img {
    transform: translateY(-10px);
    filter: drop-shadow(0px 10px 10px #a5f1736c);
  }

  :hover h3 {
    
    filter: drop-shadow(0px 10px 10px #000000a9);
  }
`;
