import { Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        
        
        <img src={imgUrl} alt="example" onClick="https://google.com" />
      

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
      
        </div>
      </div>
    </Col>
  )
}
