import React from "react";
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/31st/GW/D23753221_OnePlus_Nord_New_launch_GW_Design_SIM_Tall_hero_1500x600._CB667064660_.jpg"
        alt="hero__image"
        className="hero__image"
        style={{background:'#eaeded'}}
      />
    </div>
  );
};

export default Hero;
