import React from "react";
import TitleSection from "../Sections/TitleSection";
import HeroSection from "../Sections/HeroSection";
import HomeImg from "../../assets/home_img.png";

function Header() {
  // content di loop di file card dan button, untuk file ini hanya loop section
  return (
    <>
      {/* {section.type === home && ( */}
      <div className="pt-[10vw]">
        <HeroSection type="hero_home" image={HomeImg} />
        <TitleSection
          type="title_home"
          title={`<h2 class="notable-regular" style="text-align: center; color: #F2E6D8; font-size: 5vw; line-height: 6.7vw;text-shadow: 1px 1px gray;">PDP<br/><span style="color: #BF612A; font-size: 10.5vw;text-shadow:none">ARGAMULYA</span><br />BOGOR</h2>`}
        />
      </div>
      {/* )} */}
    </>
  );
}

export default Header;
