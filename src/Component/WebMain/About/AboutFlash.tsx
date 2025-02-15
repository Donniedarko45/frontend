import {Card, CardBody, Container, Col,Row } from "react-bootstrap"
import { Aboutdecription,Aboutcarddetails } from "../../../data/About/About"
import {  useEffect,useState } from "react";
// interface VideoPlayerProps {
//   src: string;
//   width?: number;
//   height?: number;
//   controls?: boolean;
//   loop?: boolean;
//   autoPlay?: boolean;
//   muted?: boolean;
//   playsInline?: boolean;
// }

function AboutFlash({ scrollPosition }: { scrollPosition: any }){
  const [visible,setvisible] = useState(false)
  // type Player = any;
  useEffect(()=>{
    if(window.innerHeight < 480){
      scrollPosition > 600 ? setvisible(true) : '';
    }
    else{  
      scrollPosition > 240 ? setvisible(true) : '';
    }
  },[scrollPosition])


    return (
      <Container style={{fontFamily:'Inter'}}  className="AboutFlash" key={1}>
        <Card className="border-0 ps-0 pt-sm-3 pt-0 pe-0"   >
            <CardBody className="p-0">
               <Row  >
                 <p className="fs-4 font-w600 mb-4">About Us ?</p>
               </Row>
               <Row >
                <p className="text-start fs-6 fw-normal headingthird abutdescripttextk">{Aboutdecription}</p>
               </Row>
          {visible && (
  <Row style={{ cursor: "pointer" ,width:'100%'}} className="m-auto" >
   <video className="rounded-2"
      style={{maxHeight:'610px',height:'auto',width:'100%'}}
      preload="auto"
      autoPlay
      loop
      playsInline
    >
      <source 
        src="https://res.cloudinary.com/die8tcfj1/video/upload/v1739468129/WhatsApp_Video_2025-02-13_at_23.04.08_729638de_qlvkne.mp4"
        type="application/x-mpegURL"
      />
    </video>
  </Row>
)}
               <Row className="mt-4"><p className="fs-4 mb-0 card-heaging font-w600 text-start">People:</p></Row>
               <Row className={`${visible && 'profilecards mt-4' }`} style={visible ?{visibility:'visible'} : {visibility:'hidden'}}>
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
