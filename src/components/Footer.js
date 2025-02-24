import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/profile1.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from '../assets/img/nav-icon5.svg';
import navIcon6 from '../assets/img/nav-icon6.svg';
import navIcon7 from '../assets/img/nav-icon7.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img className="profile" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vaibhav-singh-2b259b237/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/vaibhav.singh211/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/vaibhav_02.11/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/Vaibhav2codes"><img src={navIcon4} alt="Icon" /></a>
              <a href="https://www.codechef.com/users/vaibhavcodes02"><img src={navIcon5} alt="Icon" /></a>
              <a href="https://leetcode.com/vaibhavcodes02/"><img src={navIcon6} alt="Icon" /></a>
              <a href="https://codeforces.com/profile/vaibhav02codes"><img src={navIcon7} alt="Icon" /></a>
            </div>
            <p>Made With Love</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
