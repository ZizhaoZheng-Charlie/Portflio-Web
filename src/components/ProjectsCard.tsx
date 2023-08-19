
import { Col } from 'react-bootstrap'

export const ProjectsCard = ({title,description,imgUrl}) => {
  return (
    <Col sm={6} md = {4}>
        <div className = "project-imgbx">
            <img src = {imgUrl} alt = "Image"/>
            <div className = "project-txt">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

