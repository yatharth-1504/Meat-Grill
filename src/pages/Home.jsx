import React from "react";
import Footer from "../components/Footer/Footer";
import Content1 from "../components/Home/Home";
import CompanyCarousel from "../components/Carousel/CompanyCarousel";
import Services from "../components/Services/Services";
import OurTeam from "../components/Team/OurTeam";
import Menu from "../components/Menu/Menu";
import Content2 from "../components/About/About";
import Newsletter from "../components/Subscribe/Subscibe";
import MenuPage from "../components/MenuPage/MenuPage";
import ContactUs from "../components/ContactUs/ContactUs";
import Sustainability from "../components/Sustainability/sustainability";

const Home = () => {
  return (
    <>
      <Content1 />
      <Content2 />
      <Services />
      <Menu />
      <MenuPage/>
      <OurTeam />
      <Sustainability/>
      <CompanyCarousel />
      <Newsletter />
      <ContactUs/>
      <Footer />
    </>
  );
};

export default Home;
