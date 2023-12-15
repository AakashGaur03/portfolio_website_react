import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { VscGithubInverted } from "react-icons/vsc";
import { FaGlobeEurope } from "react-icons/fa";

const Portfolio = ({ isActive }) => {
  const portfolioItems = [
    {
      link1: "https://github.com/AakashGaur03/Clock",
      id: "Clock",
      image: "Clock",
      video: "ClockComressed",
      customClass: "compActiveLeft",
    },
    {
      link1: "https://github.com/AakashGaur03/WordWonders",
      link2: "https://wordwonders-by-aakash-gaur.000webhostapp.com/",
      id: "Dictionary",
      image: "Dictionary",
      video: "DictionaryComressed",
      customClass: "compActiveRight",
    },
    {
      link1: "https://github.com/AakashGaur03/Landing-Page",
      link2: "https://landingpage-byaakashgaur.000webhostapp.com/",
      id: "LandingPage",
      image: "LandingPage",
      video: "LandingPageVideoComressed",
      customClass: "compActiveLeft",
    },
    {
      link1: "https://github.com/AakashGaur03/Rock_Paper_Scissor_Game",
      link2: "https://rock-paper-scissors-by-aakash-gaur.000webhostapp.com/",
      id: "RockPaperScissors",
      image: "RockPaperScissors",
      video: "RockPaperScissorsVideo",
      customClass: "compActiveRight",
    },
    {
      link1: "https://github.com/AakashGaur03/TIc_Tac_Toe",
      id: "TicTacToe",
      image: "TicTacToe",
      video: "TicTacToeVideo",
      customClass: "compActiveLeft",
    },
    {
      link1: "https://github.com/AakashGaur03/_SKYCAST",
      link2: "https://skycast-by-aakash-gaur.000webhostapp.com/",
      id: "SkyCast",
      image: "SkyCast",
      video: "SkyCastCompressed",
      customClass: "compActiveRight",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [videoLoading, setVideoLoading] = useState(false);

  const handleMouseEnter = (id) => {
    setActiveId(id);
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setActiveId("");
    setIsHovered(false);
  };

  const handleVideoLoadStart=()=>{
    setVideoLoading(true)
  }
  const handleVideoLoadData=()=>{
    setVideoLoading(false)
  }
  return (
    <section id="Portfolio" className="mainPortfolio">
      <h1 className="text-center mb-5 mt-4 headings">Portfolio</h1>
      <Container>
        <div className="row">
          {portfolioItems.map(
            ({ link1, link2, id, image, video, customClass }) => (
              <div
                key={id}
                className="col-md-6 d-flex flex-co lumn align-self-center justify-content-center pb-3"
              >
                {/* Made customClass in " " beacuse of inconsistency in animation */}
                <div
                  className={`image-container ${isActive ? "customClass" : ""}`}
                  onMouseEnter={() => handleMouseEnter(id)}
                  onMouseLeave={() => handleMouseLeave(id)}
                >
                  {isHovered && id == activeId ? (
                    <div>
                      <video
                        className="video-player"
                        src={`../Images/portfolioMedia/${video}.mp4`}
                        loop
                        muted
                        autoPlay
                        onLoadedData={handleVideoLoadData}
                        onLoadStart={handleVideoLoadStart}
                      ></video>
                      {videoLoading && <img src="../Images/Loader.gif" alt="" className="loaderClass" />}

                      {link1 && link2 ? (
                        <div>
                          <a href={link1} target="_blank">
                            <button className="portfoliovideobtn1">
                              <VscGithubInverted size={25} />
                            </button>
                          </a>
                          <a href={link2} target="_blank">
                            <button className="portfoliovideobtn2">
                              <FaGlobeEurope size={25} />
                            </button>
                          </a>
                        </div>
                      ) : (
                        <span>
                          <a href={link1} target="_blank">
                            <button className="portfoliovideobtn3">
                              <VscGithubInverted size={28} />
                            </button>
                          </a>
                        </span>
                      )}
                    </div>
                  ) : (
                    <img
                      src={`../Images/portfolioMedia/${image}.png`}
                      className="img-fluid imagePortfolio"
                      alt=""
                    />
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
