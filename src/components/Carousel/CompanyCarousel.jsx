import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CatageoryCard from "../CatagoryCard/CatageoryCard";
import img1 from "../../assets/smoke&fire.png";
import img2 from "../../assets/kaylon.png";
import img3 from "../../assets/SaveMoreDrinksLogo.jpg"
import img4 from "../../assets/royal_ascot.png"
import img5 from "../../assets/porche.jpeg.jpg"
import img6 from "../../assets/fcsa.png"
import img7 from "../../assets/lo.jpeg.jpg"

export const CompanyCategories = [
  {
    id: 0,
    img: img1,
    title: "Beer",
    value: "Beer",
  },
  {
    id: 1,
    img: img2,
    title: "Wine",
    value: "Wine",
  },
  {
    id: 2,
    img: img3,
    title: "Gin",
    value: "Gin",
  },
  {
    id: 3,
    img: img4,
    title: "Whisky",
    value: "Whisky",
  },
  {
    id: 4,
    img: img5,
    title: "Vodka",
    value: "Vodka",
  },
  {
    id: 5,
    img: img6,
    title: "Tequila",
    value: "Tequila",
  },
  {
    id: 6,
    img: img7,
    title: "Tequila",
    value: "Tequila",
  },
];

const Conatiner = styled.div`
  padding: 50px 20px;
  background-color: #000000;
`;

const Title = styled.div`
  cursor: pointer;
  &:hover {
    text-underline-offset: 0.4em;
    text-decoration: underline rgba(0, 0, 0, 0);
    text-decoration-color: #e30505;
  }
  padding: 30px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 30px;
  font-weight: 600;
`;

const CompanyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Conatiner>
      <Title>OUR CLIENTS</Title>
      <Carousel
        infinite={true}
        arrows={false}
        partialVisible={false}
        responsive={responsive}
        autoPlay={true}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {CompanyCategories.map((item) => (
          <CatageoryCard item={item} key={item.id} />
        ))}
      </Carousel>
    </Conatiner>
  );
};

export default CompanyCarousel;
