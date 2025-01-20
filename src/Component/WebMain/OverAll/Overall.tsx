import React from "react"
import { Card, CardBody,  Container,Row } from "react-bootstrap"
function OverAll(){
    return (
        <React.Fragment>
            <Container className='overall' style={{fontFamily:'Inter'}}>
                <Card className="border-0">
                    <CardBody className="p-0">
            <h1 className={`headingfontsize text-center text-dark fw-bolder  mb-3`}>
            Our Goal
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