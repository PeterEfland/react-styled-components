import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner 
        greeting="welcome to" 
        title="Beach Resort" 
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora, fuga quos eius culpa esse." 
      />
    </Hero>
  );
};

export default Header;
