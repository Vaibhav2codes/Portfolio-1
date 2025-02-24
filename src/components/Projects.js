import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import projLink1 from "https://github.com/Vaibhav2codes/TIC_TAC_TOE"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Weather app",
      description: "- Using HTML,CSS,JavaScript and Rapid API build a working website in which you can search for weather of any location in the world",
      imgUrl: projImg1,
      // Link: projLink1,
    },
    {
      title: "Food Ordering Website",
      description: "- Web application using the MERN stack (MongoDB, Express.js, React, and Node.js), focusing on creating an efficient and powerful food-ordering website.",
      imgUrl: projImg2,
      // Link:"github.com/Vaibhav2codes/TIC_TAC_TOE",
    },
    {
      title: "Spotify working clone",
      description: "- Using HTML,CSS,JavaScript build a working website clone of spotify that can play,next,back,pause,increase or decrease volume of music",
      imgUrl: projImg3,
      // Link:"github.com/Vaibhav2codes/TIC_TAC_TOE",
    },
    {
      title: "Social Media App",
      description: "- Developed a comprehensive MERN stack web application, demonstrating proficiency in data pipelines, real-time updates,and problem-solving.",
      imgUrl: projImg4,
      // Link:"github.com/Vaibhav2codes/TIC_TAC_TOE",
    },
    {
      title: "Personal Portfolio",
      description: "- A complete Portfolio with custom animation made using ReactJS",
      imgUrl: projImg5,
      // Link:"github.com/Vaibhav2codes/TIC_TAC_TOE",
    },
    {
      title: "Medical Insurance Cost Prediction",
      description: "- Developed an innovative Flask-based web application empowered by Python's Artificial Intelligence capabilities, enabling accurate predictions of an individual's medical insurance costs with precision and efficiency.Implemented robust data pipelines and ETL processes to gather and preprocess diverse data sources.",
      imgUrl: projImg6,
      // Link:"github.com/Vaibhav2codes/TIC_TAC_TOE",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>  
                  
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
