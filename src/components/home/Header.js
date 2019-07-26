import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Buttons";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting='welcome to'
        title='Beach Resort'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempora, fuga quos eius culpa esse.'
      >
        <PrimaryBtn t='2rem'>View Details</PrimaryBtn>
        {/*<PrimaryBtn as='a' href='https://google.com' t='2rem'>
          View Details
        </PrimaryBtn>*/}
      </Banner>
    </Hero>
  );
};

export default Header;
