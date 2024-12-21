import "../App";
import { Container, ProgressBar } from "react-bootstrap";
const Skills = ({ isActive }) => {
  const SkillsItem = [
    { id: 1, label: "HTML", value: 95 },
    { id: 2, label: "CSS", value: 90 },
    { id: 3, label: "Bootstrap", value: 90 },
    { id: 4, label: "Tailwind CSS", value: 85 },
    { id: 5, label: "JavaScript", value: 80 },
    { id: 6, label: "jQuery", value: 80 },
    { id: 7, label: "AJAX", value: 80 },
    { id: 8, label: "React", value: 80 },
    { id: 9, label: "ExpressJS", value: 80 },
    { id: 10, label: "Node.js", value: 80 },
    { id: 11, label: "Next.js", value: 80 },
    { id: 12, label: "NestJS", value: 80 },
    { id: 13, label: "MongoDB", value: 80 },
    { id: 14, label: "Vue.js", value: 75 },
    { id: 15, label: "Git", value: 70 },
    // { id: 16, label: "Flutter", value: 65 },
  ];

  return (
    <section id="Skills" className="mainSkills">
      <Container>
        <h1 className="mb-3 mt-3 text-center headings">Skills</h1>
        <div className={`mt-3 ${isActive ? "compActiveRight" : ""}`}>
          <p>
            Experience my proficiency in HTML, CSS, Bootstrap, JavaScript, React, Vue.js, and Next.js, I specialize in
            building scalable, dynamic web applications. I seamlessly integrate modern technologies like ExpressJS,
            NestJS, and MongoDB to ensure high performance and efficient functionality. My focus is on creating
            responsive, interactive designs while maintaining top-tier user experience (UX) and performance standards.
          </p>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {SkillsItem.map(({ id, label, value }) => (
                <div key={id} className={`col-md-6 ${isActive ? "compActiveLeft" : ""}`}>
                  <label className="mt-4">{label}</label>
                  <ProgressBar striped animated now={value} className="AllProgressbar" label={`${value}%`} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <img
              src="../Images/SkillsIcon.png"
              alt="Skills Icon"
              className={`SkillsImage mt-3 ${isActive ? "compActiveRight" : ""}`}
            />
          </div>
        </div>

        <div className="mt-4">
          <div className={`${isActive ? "compActiveRight" : ""}`}>
            <h2>Innovation and Functionality</h2>
            <div className="mt-3">
              I’m dedicated to merging innovation with functionality in my web development projects. By staying current
              with the latest industry trends and emerging technologies, I ensure my web solutions are not only visually
              stunning but also packed with cutting-edge features to enhance user engagement and performance.
            </div>
          </div>

          <div className={`${isActive ? "compActiveLeft" : ""}`}>
            <h2 className="mt-4">User Experience (UX) Focus</h2>
            <div className="mt-3">
              I prioritize user experience by designing intuitive, user-friendly interfaces. This includes optimizing
              information flow, ensuring accessibility, and applying responsive design principles to guarantee a
              seamless experience across devices.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
