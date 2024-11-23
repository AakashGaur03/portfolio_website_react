import { Container } from "react-bootstrap";
import "../App";
const About = ({ isActive }) => {
  const imagestyle = {
    width: "250px",
    borderRadius: "300px",
  };

  return (
    <section id="About" className={`mainAbout`}>
      <Container>
        <h1 className="mb-4 text-center headings">About</h1>
        <div className={`mt-2 mb-3 fw-bolder fs-5 ${isActive ? "compActiveRight" : ""}`}>
          Dedicated to the realms of programming and technology, I am driven by a passion for innovation and creative
          design. Currently immersed in the role of a developer, I seek to gain valuable experience and contribute to
          the ever-evolving landscape of technology.
        </div>

        <div className="displayAboutSection">
          <div className="align-self-center text-center">
            <img
              src="../Images/AvatarPhoto.png"
              style={imagestyle}
              className={`AboutImage ${isActive ? "compActiveLeft" : ""}`}
              alt=""
            />
          </div>
          <div className={`${isActive ? "compActiveRight" : ""}`}>
            <div>
              <p className="fs-5 fw-medium">
                Greetings! I'm Aakash Gaur, a computer science graduate from MERI, Delhi, Batch of 2024. My academic
                journey has been a thrilling exploration of the intricate world of technology, and I've reveled in the
                challenges and discoveries that come with it.
              </p>
            </div>
            <div>
              <h3 className="fw-bolder">Diverse Passions</h3>
              <p className="fs-5 fw-medium">
                Beyond the realm of coding and algorithms, you'll find me on the cricket field, embodying the spirit of
                competition and camaraderie. Coding isn't just a professional pursuit for me; it's a passion that fuels
                my curiosity and creativity. Volunteering is another facet of my life, where I dedicate time to
                contribute to causes close to my heart, fostering a sense of social responsibility.
              </p>
            </div>
            <div>
              <h3 className="fw-bolder">Strengths that Define Me</h3>
              <p className="fs-5 fw-medium">
                In every pursuit, I bring a collaborative spirit to the table. My belief in the power of teamwork is
                complemented by a commitment to punctuality, ensuring that every endeavor is executed with efficiency. I
                thrive on challenges, approaching them with unwavering motivation and a strategic mindset. It's my
                relentless determination that propels me towards success, be it in academics, sports, or community
                service.
              </p>
            </div>

            <div>
              <h3 className="fw-bolder">A Glimpse into the Future</h3>
              <p className="fs-5 fw-medium">
                As I step into the next chapter of my journey, I'm excited about the prospects that lie ahead. My
                portfolio is a testament to the fusion of technical expertise, sportsmanship, and a commitment to making
                a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
