import React from "react";
import "./banner.css";
import bannerImage from "../../assets/humen-image/image6.png";
import Container from "./../../Shared-componets/Container/Container";
const Banner = () => {
  return (
    <Container>
      <img className="mx-auto my-9" src={bannerImage} alt="" />
    </Container>
  );
};

export default Banner;
