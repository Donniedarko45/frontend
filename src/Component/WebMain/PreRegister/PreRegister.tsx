import React, { useState } from "react"
import unilogo from '../../../assets/uniisphearlogo.png'
import { Container,Card,CardBody,Form ,Button} from "react-bootstrap"
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { authAxios } from "../../../access/access";
import { problemdata } from "../../../data/Register/Register";
type MyComponentProps = {
    handlerfun: () => void;  // Define handler as a function that returns void
    
  };
const PreRegister:React.FC<MyComponentProps>=({handlerfun})=>{
    const [modal,setmodal] = useState(false)
    const [thankpage,setthankpage] = useState(false)
    function otherdetails(){
        setmodal(true)
    }
    function thankyou(){
        setthankpage(true)
    }
    const [validated, setValidated] = useState(false);
    const [validatedtwo, setValidatedtwo] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      Number:'',
      city:''
    });
    const [formDatatwo, setFormDatatwo] = useState({
      collage: '',
      Degree: '',
      NumberOne:'',
      Numbertwo:'',
      Numberthree:'',
      // city:''
    });
    const handleInputChange = (event:any) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const handleInputChangetwo = (event:any) => {
      const { name, value } = event.target;
      setFormDatatwo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      otherdetails()
      // setFormData({ name: '', email: '',Number:'',city:'' })
      event.stopPropagation();
    }
    event.stopPropagation();
    setValidated(true);
  };
  const handleSubmittwo = (event:any) => {
    const form = event.currentTarget;
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
      if(formDatatwo.collage !=='' &&  formDatatwo.Degree !=='' && formDatatwo.Numberthree!=='' && formDatatwo.Numbertwo!=='' && formDatatwo.NumberOne !==''){
        submitdata()
       
      }
      
     
    event.stopPropagation();
    setValidatedtwo(true);
  };
const submitdata =async () =>{
   const obj={
    name:formData.name,
    email:formData.email,
    phone_number:formData.Number,
    city:formData.city,
    college_university:formDatatwo.collage,
    degree_course:formDatatwo.Degree,
    problem_1:formDatatwo.NumberOne,
    problem_2:formDatatwo.Numbertwo,
    problem_3:formDatatwo.Numberthree
   }
  const response = await authAxios.post('/api/register',obj)
                  .catch(err => console.log(err))
   console.log(response,obj)
   response?.status === 201 ? thankyou() : '';
}
  // authAxios.post('api/registrations',obj)
  // .catch(err => console.log(err))
 return (
    <React.Fragment>
        <nav className='d-flex justify-content-between  container-fluid align-items-center place-content-center' style={{placeContent:'center'}}>
        <div onClick={handlerfun} >
        <IoIosArrowDropleftCircle className='fs-1' />
            </div>
            <div  >
                <img src={unilogo} alt='unilogo' className='unilogo'></img>
            </div>
            
        </nav>
        <Container style={{fontFamily:'Inter'}} className="Firstflash">
         <Card className="border-0 pt-0 pb-0 ps-0 pe-0 d-flex flex-column align-items-center ">
         {!thankpage ? <CardBody className="ps-0 pe-0 d-flex flex-column align-items-center">
            <h1 className="headingfontsize fw-bolder   fs-sm-1">
            <span className="color-first">U</span><span className="color-Second">N</span><span className="color-third">I</span><span className="color-third">I</span ><span className="color-four">S</span><span className="color-five">P</span><span className="color-six">H</span><span className="color-five">E</span><span  className="color-Second">R</span><span className="color-first">E</span></h1>
            
            <h3 className=" fw-normal fs-5 headingthird text-dark">“Connect”  “Collaborate”  “Success”</h3>
            <Card className='border-0 rounded-5 mt-3 ' style={{background: 'linear-gradient(180deg, rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)'
}}>
                <CardBody>
                {!modal ?  <React.Fragment>    <Form className="text-start"noValidate validated={validated} onSubmit={handleSubmit}>
       <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label className="ps-4 mb-1">Name</Form.Label>
        <Form.Control required type="text" className="rounded-5" name="name"
            value={formData.name}
            onChange={handleInputChange} />
        <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the name
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="ps-4 mb-1">Email</Form.Label>
        <Form.Control  required type="email" className="rounded-5"  name="email"
            value={formData.email}
            onChange={handleInputChange}   />
        <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the Email
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="ps-4 mb-1">Phone Number</Form.Label>
        <Form.Control required type="number" className="rounded-5"  name="Number"
            value={formData.Number}
            onChange={handleInputChange}  />
        <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the number
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasiccity">
        <Form.Label className="ps-4 mb-1">city</Form.Label>
        <Form.Control required type="text"  className="rounded-5" name="city"
            value={formData.city}
            onChange={handleInputChange}/>
        <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the city
          </Form.Control.Feedback>
      </Form.Group>
      <div className="text-center w-100">
        {/* //onClick={otherdetails} */}
      <Button variant="primary"  className="rounded-4 text-center m-auto" type="submit">
      Continue
      </Button>
      </div> </Form>
      {/* onSubmit={handleSubmittwo} */}
      </React.Fragment> :<React.Fragment> <Form className="text-start"noValidate  validated={validatedtwo} ><Form.Group className="mb-3" controlId="formBasicCollege">
        <Form.Label className="ps-4 mb-1">College/University</Form.Label>
        <Form.Control required type="text" className="rounded-5"name="collage"
            value={formDatatwo.collage}
            onChange={handleInputChangetwo} />
        <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the College/University
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDegree">
        <Form.Label className="ps-4 mb-1">Degree/Course</Form.Label>
        <Form.Control required type="text" className="rounded-5"name="Degree"
            value={formDatatwo.Degree}
            onChange={handleInputChangetwo}    />
        <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the Degree/Course
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicNumberone">
      <Form.Text className="text-muted mt-2 fs-6 text-wrap">
      <small>What Kind of problem you face in College ? *</small>
        </Form.Text>
        <Form.Label className="ps-4 mb-1">Number 1</Form.Label>
        <Form.Select required  className="rounded-5"name="NumberOne"
            value={formDatatwo.NumberOne}
            onChange={handleInputChangetwo} >
              <option hidden></option>
              {problemdata.map((data) =>{
                return (
                       <option key={data.id} value={data.text}>{data.text}</option>
                )
              })}
            </Form.Select>
        <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the Number 1
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumbertwo">
        <Form.Label className="ps-4 mb-1">Number 2</Form.Label>
        <Form.Select  required   className="rounded-5" name="Numbertwo"
            value={formDatatwo.Numbertwo}
            onChange={handleInputChangetwo} >
              <option hidden></option>
              {problemdata.map((data) =>{
                return (
                       <option key={data.id} value={data.text}>{data.text}</option>
                )
              })}
            </Form.Select>
        <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the Number 2
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumberthree">
        <Form.Label className="ps-4 mb-1">Number 3</Form.Label>
        <Form.Select  required  className="rounded-5" name="Numberthree"
            value={formDatatwo.Numberthree}
            onChange={handleInputChangetwo} >
               <option hidden></option>
               {problemdata.map((data) =>{
                return (
                       <option key={data.id} value={data.text}>{data.text}</option>
                )
              })}
            </Form.Select>
            <Form.Control.Feedback type="invalid" className="ps-4 mb-1" >
            Please enter the Number 3
          </Form.Control.Feedback>
      </Form.Group>
      <div className="text-center w-100">
      <Button variant="primary"  className="rounded-4 text-center m-auto" onClick={handleSubmittwo} type="button">
      Continue
      </Button>
      </div></Form>
      </React.Fragment>     }
    
    </CardBody>
            </Card>
            </CardBody> : <CardBody >
            <Card className='border-0 rounded-5 mt-3 col-lg-9 m-auto' style={{background: 'linear-gradient(180deg, rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)'}}>
                <CardBody className="d-flex flex-column justify-content-center">
                <h1 className="headingfontsize fw-bolder   fs-sm-1">
                <span className="color-first">T</span><span className="color-Second">H</span><span className="color-third">A</span><span className="color-third">N</span ><span className="color-four">K</span><span className="color-five"> </span><span className="color-six">Y</span><span className="color-five">O</span><span  className="color-Second">U</span><span className="color-first">E</span></h1>
                <h3 className=" fw-bolder fs-4 headingthird text-dark mb-3">Pre-Registration Successfully Completed</h3>
                 <p className="text-center fs-6 fw-normal headingthird">You will receive bonus points as you have  successfully completed the 
                 Pre-Resgistration at Uniisphere.  </p>   </CardBody>   </Card>
                 <Card className='border-0 rounded-5 mt-3 col-lg-9 m-auto' style={{background: 'linear-gradient(180deg, rgba(68, 169, 177, 0.1) 0%, rgba(225, 200, 107, 0.1) 100%)'}}>
                <CardBody className="p-0">
                   <div>
                    <p className=" fw-bolder fs-6 text-start headingthird text-secondary mb-3">Follow for More</p>
                    <p className="text-start mb-0"><span className="mx-3 ms-0  fs-3 fw-bolder"><a href="https://www.linkedin.com/company/uniisphereapp/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-dark"><FaLinkedin /></a></span></p>
                    <p className="text-start mb-0"><span className="mx-3 ms-0  fs-3 fw-bolder"><a href="https://www.linkedin.com/company/uniisphereapp/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-dark"><FaInstagram /></a></span></p>
                   </div>
                   
                   </CardBody>   </Card>
                 
            </CardBody> }</Card>

            
        </Container>
    </React.Fragment>
 )
}
export default PreRegister