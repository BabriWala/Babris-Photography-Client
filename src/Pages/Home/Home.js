import React from "react";
import './Home.css';
import Banner from "./Banner/Banner";
import Services from './Services/Services'
import Contact from "./Contact/Contact";
import Offer from "./Offer/Offer";
const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Services></Services>
        <Offer></Offer>
        <Contact></Contact>
    </div>
  );
};

export default Home;
