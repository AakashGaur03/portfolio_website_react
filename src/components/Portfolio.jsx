/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container } from "react-bootstrap";
import { VscGithubInverted } from "react-icons/vsc";
import { FaGlobeEurope } from "react-icons/fa";

const Portfolio = ({ isActive }) => {
	const portfolioItems = [
		{
			link1: "https://github.com/AakashGaur03/ZSYNC_PRO",
			link2: "https://multiversehub.onrender.com/",
			id: "Multiversehub",
			image: "Multiversehub",
			video: "",
			customClass: "compActiveLeft",
		},
		{
			link1: "https://github.com/AakashGaur03/ZSYNC_PRO",
			link2: "https://aakashgaur03.github.io/ZSYNC_PRO/",
			id: "Zsync",
			image: "ZsyncPro",
			video: "ZsyncProVideo",
			customClass: "compActiveRight",
		},
		{
			link1: "https://github.com/AakashGaur03/Landing-Page",
			link2: "https://aakashgaur03.github.io/Landing-Page/",
			id: "LandingPage",
			image: "LandingPage",
			video: "LandingPageVideoComressed",
			customClass: "compActiveLeft",
		},
		{
			link1: "https://github.com/AakashGaur03/_SKYCAST",
			link2: "https://aakashgaur03.github.io/_SKYCAST/",
			id: "SkyCast",
			image: "SkyCast",
			video: "SkyCastCompressed",
			customClass: "compActiveRight",
		},
		{
			link1: "https://github.com/AakashGaur03/WordWonders",
			link2: "https://aakashgaur03.github.io/WordWonders/",
			id: "Dictionary",
			image: "Dictionary",
			video: "DictionaryComressed",
			customClass: "compActiveLeft",
		},
		{
			link1: "https://github.com/AakashGaur03/Rock_Paper_Scissor_Game",
			link2: "https://aakashgaur03.github.io/Rock_Paper_Scissor_Game/",
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
			link1: "https://github.com/AakashGaur03/Clock",
			link2: "https://aakashgaur03.github.io/Clock/",
			id: "Clock",
			image: "Clock",
			video: "ClockComressed",
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

	const handleVideoLoadStart = () => {
		setVideoLoading(true);
	};
	const handleVideoLoadData = () => {
		setVideoLoading(false);
	};
	return (
		<section id="Portfolio" className="mainPortfolio">
			<h1 className="text-center mb-5 mt-4 headings">Portfolio</h1>
			<Container>
				<div className="row">
					{portfolioItems.map(({ link1, link2, id, image, video }) => (
						<div key={id} className="col-md-6 d-flex flex-co lumn align-self-center justify-content-center pb-3">
							{/* Made customClass in " " beacuse of inconsistency in animation */}
							<div
								className={`image-container ${isActive ? "customClass" : ""}`}
								onMouseEnter={() => handleMouseEnter(id)}
								onMouseLeave={() => handleMouseLeave(id)}
							>
								{isHovered && id == activeId ? (
									video ? (
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
													<a href={link1} target="_blank" rel="noreferrer">
														<button className="portfoliovideobtn1">
															<VscGithubInverted size={25} />
														</button>
													</a>
													<a href={link2} target="_blank" rel="noreferrer">
														<button className="portfoliovideobtn2">
															<FaGlobeEurope size={25} />
														</button>
													</a>
												</div>
											) : (
												<span>
													<a href={link1} target="_blank" rel="noreferrer">
														<button className="portfoliovideobtn3">
															<VscGithubInverted size={28} />
														</button>
													</a>
												</span>
											)}
										</div>
									) : (
										<img src={`../Images/portfolioMedia/${image}.png`} className="img-fluid imagePortfolio" alt="" />
									)
								) : (
									<img src={`../Images/portfolioMedia/${image}.png`} className="img-fluid imagePortfolio" alt="" />
								)}
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default Portfolio;
