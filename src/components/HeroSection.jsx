import React from 'react';
import '../Styles/HeroSection.css'; // CSS file for the component

const HeroSection = () => {
  return (
    <section className="hero flex alignCenter justifyCenter width100">
    <div className="heroContainer width100 flex alignCenter justifyStart flexColumn">
      <div className="heroNav width95 maxWidth flex alignCenter spaceBtw">
        <div className="heroLogo flex alignCenter justifyCenter gap1">
          <img src="https://akucgs.vercel.app/images/logo.png" alt='logo'/>
          <h1>
            आर्यभट्ट ज्ञान विश्वविद्यालय
            <br/>
            Aryabhatta Knowledge University
          </h1>
        </div>
        <div className="heroImage">
          <img src="https://akucgs.vercel.app/images/aajaditwo.png" alt='hero'/>
        </div>
      </div>
      <div className="heading width100 flex alignCenter justifyCenter">
        <div className="headContainer width95 maxWidth flex alignCenter justifyCenter">
          <h1 style={{fontSize: '30px'}}>School of Nanoscience and Nanotechnology</h1>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
