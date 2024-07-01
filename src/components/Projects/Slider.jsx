import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import styled from "styled-components";
import BonAppetit from "../../images/BonAppetit.png";
import Countries from "../../images/Countries.png";
import Epick from "../../images/Epick.png";
import Ardu from "../../images/Ardu Hermanos.png";
import Project from "./Project";

let data = [
  {
    img: Ardu,
    disc: "Institutional website for a chemical products company, focusing on the frontend to ensure a user-friendly and visually appealing interface.",
    demo: "https://bonappetite.vercel.app/customer/",

  },
  {
    img: Epick,
    disc: "Web application for a logistics company that manages package tracking and shipment billing. The web application allows customers to register or log in, where they can manage all their data, shipments, and track their packages.",
    demo: "https://epick.vercel.app/",

  },
  {
    img: Countries,
    disc: "A web application designed for travelers that allows them to search for information about countries of interest and create tourist activities.",
  },
  {
    img: BonAppetit,
    disc: "A web application designed for gastronomic businesses, allowing them to showcase and manage their products. Simultaneously, it streamlines the purchasing and payment processes for the local customers",
    demo: "https://bonappetite.vercel.app/customer/",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
