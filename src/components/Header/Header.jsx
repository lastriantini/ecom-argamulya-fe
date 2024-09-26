import React from "react";
import TitleSection from "../Sections/TitleSection";
import HeroSection from "../Sections/HeroSection";
import HomeImg from "../../assets/home_img.png";
import DescSection from "../Sections/DescSection";

function Header() {
  // content di loop di file card dan button, untuk file ini hanya loop section
  return (
    <>
      {/* {section.type === home && ( */}
      <div className="pt-[2vw] pb-[-10vw] grid grid-cols-12">
        <div className="col-span-5 pt-[20vw]">
          <TitleSection
            type="title_home"
            title={`<h2 class="notable-regular" style="text-align: left; color: #F2E6D8; font-size: 3.2vw; line-height: 4.2vw;text-shadow: 1px 1px gray;">PDP<br/><span style="color: #D07C2E;margin-left:-1vw; font-size: 5.9vw;text-shadow:none">ARGAMULYA</span>`}
          />
          <DescSection
            type="desc_home"
            desc={`<p style="color: #F2E6D8;margin-bottom:1.5vw"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Pellentesque vitae accumsan purus, imperdiet sagittis nibh. Aliquam erat volutpat.
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos <b>himenaeos.</b> 
Nunc quis mauris posuere, malesuada lorem ac, pellentesque nulla.</p>`}
          />
        </div>
        <div className="col-span-7">
          <HeroSection type="hero_home" image={HomeImg} />
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default Header;
