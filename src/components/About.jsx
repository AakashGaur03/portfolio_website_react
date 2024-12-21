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
          Dedicated to the realms of programming and technology, I’m driven by a passion for innovation and creative
          design. Currently a Full Stack Developer with over 1.5 years of experience, I’m focused on building scalable
          solutions while continuously improving my technical expertise.
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
                I’m Aakash Gaur, a Computer Science graduate from MERI, Delhi (Batch of 2024). My academic journey has
                been an exciting exploration of technology, and I’m eager to contribute my skills to the ever-evolving
                landscape of software development.
              </p>
            </div>
            <div>
              <h3 className="fw-bolder">Diverse Passions</h3>
              <p className="fs-5 fw-medium">
                Outside of coding, I’m passionate about cricket, where I embrace competition and teamwork. Volunteering
                is also a core part of my life, as I believe in giving back to causes that matter and fostering a sense
                of social responsibility.
              </p>
            </div>
            <div>
              <h3 className="fw-bolder">Strengths that Define Me</h3>
              <p className="fs-5 fw-medium">
                I’m a firm believer in collaboration and effective communication. Punctuality, efficiency, and a
                strategic mindset are key principles I bring to every project. I thrive in challenging environments,
                always approaching problems with motivation and a solution-oriented approach.
              </p>
            </div>

            <div>
              <h3 className="fw-bolder">A Glimpse into the Future</h3>
              <p className="fs-5 fw-medium">
                As I continue my journey as a developer, I’m excited about the opportunities to grow and collaborate on
                impactful projects. My portfolio reflects the fusion of my technical skills, sportsmanship, and
                commitment to making a positive difference in the world.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
