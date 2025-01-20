import {Card, CardBody, Container, Col,Row } from "react-bootstrap"
import { Aboutdecription,Aboutcarddetails } from "../../../data/About/About"
// type Aboutcarddetails:{
//     name:st
// }
// import img from '../../../assets/firstpic.svg'
function AboutFlash(){
    
    return (
      <Container style={{fontFamily:'Inter'}} className="AboutFlash" key={1}>
        <Card className="border-0 ps-0 pt-sm-5 pt-0 pe-0">
            <CardBody className="p-0">
               <Row>
                 <p className="fs-5 font-w600 mb-4">About Us ?</p>
               </Row>
               <Row>
                <p className="text-start fs-6 fw-normal headingthird">{Aboutdecription}</p>
               </Row>
               <Row><p className="fs-4 mb-0 card-heaging font-w600 text-start">People:</p></Row>
               <Row className=" mt-4">
        {Aboutcarddetails.map(( data: {backimg:string,name: string;img: string;designation: string;description: string,colorFirst:string,colorSecond:string},i)=>{
                    return(
                        <Col xs={6} key={i}  md={6}sm={6} lg={3} className="col-sm-6  mb-4" style={{height:'inherit'}}>
                        <Card className='p-0 border-1 h-100' style={{backgroundImage:`url(${data.backimg})`,backgroundSize:'cover'}}>
                        <CardBody >
                            <Row><p className="fs-4 card-heaging font-w600">{data.name}</p></Row>
                            <Row><img src={data.img}style={{height:'6rem',width:'6rem'}}className="mb-3 m-auto card-img"></img></Row>
                            <Row><p className="fs-5 font-w600 card-designation text-secondary">{data.designation}</p></Row>
                            <Row><p className="text-start aboutdecription  font-w300">{data.description}</p></Row>
                        </CardBody>
                    </Card>  
                    </Col>       
                    )
                })}
                
               </Row>
            </CardBody>
        </Card>
      </Container>
    )
}
export default AboutFlash