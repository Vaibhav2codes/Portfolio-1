import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <img 
            src={imgUrl} 
            alt={title} 
            style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }} 
            loading="lazy"
          />
        </a>

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
