import React from "react";
import { Card, CardBody, Col, Container, Row,Image } from "react-bootstrap";
import { Event } from "../../../data/Event/Events";
import img from '../../../assets/eventback2.png'
export default function EventView(){
    return (
        <React.Fragment>
          <Container className="Events">
          <Row>
                    <h1 className={` text-start text-secondary  mb-3 fw-bolder  headingfontsize` }>
                    EVENTS
                    </h1>
                    </Row>
             <Card className="border-0  p-0 p-sm-5 m-sm-auto m-auto">
                <CardBody className="s-4 p-0 position-relative d-flex h-100 w-100" >
                    <div className="h-100 w-100">
                        <img src={img} className="w-100  eventnewback" style={{height:'600px'}} /> 
                    </div>
                    <div className="position-absolute eventbox w-100 pt-sm-5 ps-sm-5 ms-sm-4 ">

                    
                    {Event.map((data) =>{
                        return (
                            <Row key={data.id} className={`${data.leftside ? '':'flex-row-reverse' } w-75 w-sm-75 ms-1 mb-3 h-100 `}>
                            <Col className="col-auto  col-md-2 col-sm-3 col-4 h-100 m-auto"  >
                            <Image src={data.imgs} className="h-100 w-100 m-auto" rounded  />
                            </Col>
                            <Col className="col-md-10 m-auto col-sm-9 col-8 ">
                             <Card className="text-start rounded-4 p-0 border-2 border-dark bg-transparent">
                                 <CardBody className="pt-1 pb-1">
                                     <Row >
                                         <p className="d-flex justify-content-between mt-0 flex-wrap aboutdecription"><span className=" text-dark headcardtextd font-w500">{data.heading}</span>
                                         <span className="text-secondary fw-w300 ">{data.datem}</span></p>
                                     </Row>
                                     <Row>
                                         <p className="font-w300 text-dark mb-0 aboutdecription">{data.decription}</p>
                                         
                                     </Row>
                                 </CardBody>
                             </Card>
                            </Col>
                               
                         </Row>
                        )
                    })}
                    </div>
                </CardBody>
             </Card>
          </Container>
        </React.Fragment>
    )
}