import React from "react";
import GuestNavbar from "../../components/Navbar/GuestNavbar";
import TitleSection from "../../components/Sections/TitleSection";
import HeroSection from "../../components/Sections/HeroSection";
import DescSection from "../../components/Sections/DescSection";
import Carousels from "../../components/Carousels/carousel";
import Cards from "../../components/Cards/AllCards";
import Footer from "../../components/Footer/Footer";
import HomeImg from "../../assets/home_img.png";
import carousel1 from "../../assets/carousel1.png";
import AboutHero from "../../assets/about_hero.png";
import HpdkiLogo from "../../assets/hpdkiLogo.png";

function GuestSinglePage() {
  // content di loop di file card dan button, untuk file ini hanya loop section
  return (
    <>
      <GuestNavbar />
      {/* {section.type === home && ( */}
      <div className="pt-[10vw]">
        <HeroSection type="hero_home" image={HomeImg} />
        <TitleSection
          type="title_home"
          title={`<h2 class="notable-regular" style="text-align: center; color: #F2E6D8; font-size: 5vw; line-height: 6.7vw;text-shadow: 1px 1px gray;">PDP<br/><span style="color: #BF612A; font-size: 10.5vw;text-shadow:none">ARGAMULYA</span><br />BOGOR</h2>`}
        />
      </div>
      {/* )} */}

      {/* {section.type === carousel && ( */}
      <div className="mt-[15vw]">
        <Carousels image={carousel1} />
      </div>
      {/* )} */}

      {/* {section.type === about-us && ( */}
      <div className="pt-[10vw] grid grid-cols-12">
        <div className="col-span-12">
          <TitleSection
            type="title_about"
            title={`<h2 class="text-center bebas-neue-regular" style="color:#F2E6D8; font-size: 5.3vw; line-height: 3.5vw; shadow: 0vw 0vw 1vw #F2E6D8">KAMBING DENGAN KUALITAS TERBAIK<br><span style="color:#BF612A; font-size: 3.5vw">TERPERCAYA DAN PROFESIONAL</span></h2>`}
          />
        </div>
        <div className="col-span-6">
          <DescSection
            type="desc_about"
            desc={`<p class="rasa-regular" style="color: #F2E6D8;font-size:1.45vw;margin-bottom:1.5vw"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> Pellentesque vitae accumsan purus, imperdiet sagittis nibh. Aliquam erat volutpat.</p>

<p class="rasa-regular" style="color: #F2E6D8;font-size:1.45vw">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos <b>himenaeos.</b> Ut volutpat finibus erat, eu congue sem pretium quis. 
Nunc quis mauris posuere, malesuada lorem ac, pellentesque nulla.</p>`}
          />
        </div>
        <div className="col-span-6">
          <HeroSection type="hero_about" image={AboutHero} />
        </div>
      </div>
      {/* )} */}

      {/* {section.type === kerjasama && ( */}
      <div className="grid grid-cols-12" style={{background: "#F2E6D8"}}>
        <div className="col-span-2">
            <HeroSection image={HpdkiLogo} type ="hero_kerjasama"/>
        </div>
        <div className="col-span-5">
            <DescSection type ="desc_kerjasama" desc={`<p class="rasa-regular" style="color: #422D1c";font-size:1.5vw;><b>HPDKI</b> adalah forum organisasi yang demokratis untuk mencapai tujuan cita-cita para <b>peternak domba kambing di Indonesia</b> dalam menghadapi tantangan pembangunan.</p>`} />
        </div>
        <div className="col-span-5">
            <TitleSection type="title_kerjasama" title={`<h1 class="bebas-neue-regular " style="color:#BF612A; font-size:5.35vw"><b>KERJA SAMA</h1>
<h1 class="bebas-neue-regular transform scale-y-[-1] opacity-35 mt-[-5.1vw]" style="color:#BF612A; font-size:5.35vw">KERJA SAMA</b></h1>`} />
        </div>
      </div>
      {/* )} */}

      {/* {section.type === ulasan && ( */}
      <div className="pt-[9vw]">
        <TitleSection
          type="title_ulasan"
          title={`<h2 class="bebas-neue-regular" style="color:#BF612A;" <b>ULASAN PELANGGAN</b> </h2>`}
        />
        <Cards section_id={1}/>
        {/* <h1 className="text-light">ini cards</h1> */}
      </div>
      {/* )} */}
      <Footer/>
    </>
  );
}

export default GuestSinglePage;
