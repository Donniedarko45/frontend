import unilogo from '../../assets/uniisphearlogo.png'
import { Button } from 'react-bootstrap';
type MyComponentProps = {
    handlerfun: () => void;  // Define handler as a function that returns void
    Register: boolean;
  };
const WebHeader: React.FC<MyComponentProps>=({handlerfun,Register})=>{
    return (
        <nav className='d-flex justify-content-between  container-fluid align-items-center place-content-center' style={{placeContent:'center'}}>
            <div>
                <img src={unilogo} alt='unilogo' className='unilogo'></img>
            </div>
            <div className='align-content-center align-items-center h-100'>
              {!Register ? <Button variant="dark" className='fw-normal headingthird  fs-5 pt-1 pb-1 ps-2 pe-2' onClick={handlerfun} style={{fontFamily:'Inter'}} >Pre-Register</Button> : ''}  
            </div>
        </nav>
    )
}

export default WebHeader