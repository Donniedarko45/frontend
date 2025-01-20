import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { FaLinkedin,FaInstagram } from "react-icons/fa";
import unilogo from '../../../assets/uniisphearlogo.png'
function Footer(){
return (
    <React.Fragment>
        
        <nav className='d-flex justify-content-between mt-sm-5 pt-4 ps-2  ps-sm-5 footerbackground' style={{fontFamily:'Inter'}}>
            <Row className="w-100 justify-content-between ms-sm-5 ps-sm-5 m-0 container">
            <Col  className='align-content-center  rounded text-start' >
            <div className='d-flex align-items-center'><img src={unilogo} alt='unilogo' style={{width:'23px',height:'19px'}} className='footerlogo'></img>
            <p className=" font-w600 ms-2 mb-0   ">
             
            <span className="color-first">U</span><span className="color-Second">N</span><span className="color-third">I</span><span className="color-third">I</span ><span className="color-four">S</span><span className="color-five">P</span><span className="color-six">H</span><span className="color-five">E</span><span  className="color-Second">R</span><span className="color-first">E</span></p></div>
            
            <p className=" font-w400  ">Fostering Connections, Fueling Success</p> 
            <a href="https://www.linkedin.com/company/uniisphereapp/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-dark">
            
                    <p className="mb-0 overflow-hidden d-flex align-items-center" ><span className="mx-3 ms-0  fs-4 font-w400"><FaLinkedin /></span><span  className="text-truncate ">Linkedin</span></p></a>
                    <a href="https://www.instagram.com/uniisphere.in?igsh=MXhqMXp3OWYzbWIxbA==" target="_blank" rel="noopener noreferrer"className="text-dark font-w400"
    >
                    <p className="mb-0 overflow-hidden d-flex align-items-center"><span className="mx-3  ms-0 fs-4 font-w400"><FaInstagram /></span><span className="text-truncate ">instagram </span></p></a>
            </Col>
            </Row>
        </nav>
    </React.Fragment>
)
}
export default Footer