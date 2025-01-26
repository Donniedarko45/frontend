import React, { useState,useEffect } from "react"
import { Card, CardBody,  Container,Row } from "react-bootstrap"
import { detectDevice } from "../../../data/Edu/Eduwalut";
function OverAll({ scrollPosition }: { scrollPosition: any }){
    const [visible,setvisible] = useState(false)
          const animationStyle = {
            opacity: 1,
            transition: 'opacity 1s ease-out',
          };
          useEffect(()=>{
            scrollPosition > detectDevice()[5] ? setvisible(true) : '';
          },[scrollPosition])
    return (
        <React.Fragment>
            <Container className={`${visible&&'overall'} `} style={{fontFamily:'Inter'}}>
                <Card className="border-0" style={visible? animationStyle:{visibility:'hidden'} }>
                    <CardBody className="p-0">
            <h1 className={`headingfontsize text-center text-dark fw-bolder  mb-3`}>
            Our-Goal
            </h1>
            <Row>
              <p className="text-start fs-5 fs-xs-6 fw-normal headingthird">Uniisphere’s mission is to empower university students by fostering meaningful connections, enhancing academic collaboration, and providing resources for personal and professional growth ensuring opportunities for all, regardless of where they graduated from.              </p>
            </Row>
                    </CardBody>
                </Card>
            </Container>
        </React.Fragment>
    )
}
export default OverAll