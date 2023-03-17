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
      title: "simon game",
      description: "- Build a web game based on simon that asks for user input and remember the colour sequence of user and also randomly generted by computer.",
      imgUrl: projImg2,
      // Link:"github.com/Vaibhav2codes/TIC_TAC_TOE",
    },
    {
      title: "spotify working clone",
      description: "- Using HTML,CSS,JavaScript build a working website clone of spotify that can play,next,back,pause,increase or decrease volume of music",
      imgUrl: projImg3,
      // Link:"github.com/Vaibhav2codes/TIC_TAC_TOE",
    },
    {
      title: "TIC TAC TOE",
      description: "- A Fully functioned TIC-TAC-TOE game",
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
      title: "ScoreCard Reactapp",
      description: "- Build a Reactapp of a scorecard of badminton matches and attached with each scorecard analysis video of that match.",
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
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
