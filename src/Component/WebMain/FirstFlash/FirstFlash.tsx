
const Prebutton: ({
    text: string;
    classnam: string;
} | {
    text: string;
    classnam?: undefined;
})[]=[
    {
        text:'P',
        classnam:'color-first'
    }
    ,{
        text:'R',
        classnam:'color-Second'
    },
    {
        text:'E',
        classnam:'color-six'
    },
    {
        text:' '
    }
    ,{
        text:'R',
        classnam:'color-four'
    },{
        text:'E',
        classnam:'color-five'
    },{
        text:'G',
        classnam:'color-six'
    },{
        text:'I',
        classnam:'color-five'
    },{
        text:'S',classnam:'color-Second'
    },{
        text:'T',classnam:'color-first'
    },{
        text:'E',classnam:'color-Second'
    },{
        classnam:'color-four',
        text:'R',
    }
]
import { TbArrowNarrowRightDashed } from "react-icons/tb";
import { Button, CardBody, Card,Container } from "react-bootstrap"
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(useGSAP);
type MyComponentProps = {
    handlerfun: () => void;  // Define handler as a function that returns void
    
  };
const FirstFlash:React.FC<MyComponentProps>=({handlerfun})=>{
    
    // useGSAP(()=>{
    //     gsap.to("#heading",{
    //        x:endX 
    //     })
    // },[endX])
    return (
        <Container style={{fontFamily:'Inter'}} className="Firstflash">
         <Card  className="border-0 mb-5 ps-0 pe-0"><CardBody className="ps-0 pe-0">
           <h1 id='sliding-text' className="headingfonttwo  fw-bolder mb-0 mt-5 fs-sm-1 ">
            <span className="color-first">U</span><span className="color-Second">N</span><span className="color-third">I</span><span className="color-third">I</span ><span className="color-four">S</span><span className="color-five">P</span><span className="color-six">H</span><span className="color-five">E</span><span  className="color-Second">R</span><span className="color-first">E</span></h1>
            <h3 className=" fw-normal fs-5 headingthird text-dark  mb-4 connectline" >“Connect”  “Collaborate”  “Succeed”</h3>
            <Button variant="outline-dark" onClick={handlerfun} className="fs-3 headingsecond fw-bolder bg-white mb-4 prebutton" >
               {Prebutton.map((data:any,i)=>{
                return (
                    <span key={i} className={data.classnam}>{data.text}</span>
                )
               })} 
               <TbArrowNarrowRightDashed className="ms-2 fs-md-1 mt-md-n-3 text-dark" />
            </Button>
            <h3 className=" fw-bolder fs-4 headingthird text-dark preline">"Get a Head Start Pre-register Now"</h3>
            </CardBody></Card>
        </Container>
    )
}
export default FirstFlash