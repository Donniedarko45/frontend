import { Card, CardBody, Col, Container, Row, Image } from "react-bootstrap"

function CommenView(props:any){
  console.log(props)
  
    return (

      <Container key={props.id} style={{fontFamily:'Inter'}} className={`${props.comheading} p-0`}>
        
        <Card className="border-0 ">
            <CardBody className="p-0">
               <Row>
                <h1 className={`${!props.imgleftside ? 'text-end':'text-start'  } text-secondary  headingfontsize fw-bolder fs-md-1 fs-sm-2 mb-3`}>
                {props.comheading}
                </h1>
               </Row> 
               <Row className={`${!props.imgleftside ? 'flex-row-reverse':'' }`}>
                <Col md={7} lg={6} className="col-7 m-auto">
               <div  className="imge2  position-relative">
                <Image src={props.imgback} className="w-100 h-100" rounded  />
                <Image src={props.imgUp} className={` ${!props.imgleftside ? 'commenright' :'commenleft'}  position-absolute`} rounded  />
                </div>
                <div><h3 className={`fw-bolder ${!props.imgleftside ? 'text-end':'text-start'  }  headingthird mt-3`}>{props.figure}</h3></div>
                </Col>
                <Col md={5}lg={6}  className="d-flex  col-5"><p className="text-start fs-5 fw-normal headingthird  ">{props.decription}
                </p>
                  </Col>
               </Row>
            </CardBody>
        </Card>
      </Container>
    )
}

export default CommenView