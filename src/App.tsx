import React,{useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './Backround.css'
import WebHeader from './Component/WebHeader/WebHeader'
import FirstFlash from './Component/WebMain/FirstFlash/FirstFlash'
import AboutFlash from './Component/WebMain/About/AboutFlash'
import Eduwal from './Component/WebMain/SomeCommer/Eduwal'
import OverAll from './Component/WebMain/OverAll/Overall'
import PreRegister from './Component/WebMain/PreRegister/PreRegister'
import Footer from './Component/WebMain/Footer/Footer'
// import 

function App() {
  const [Register, setRegister] = useState(false)
  function handler(){
    setRegister(!Register)
  }
  // function home(){
  //   setRegister(true)
  // }
  return (
    <React.Fragment>
         {!Register ? <div><WebHeader handlerfun={handler} Register={Register}/>
       <FirstFlash handlerfun={handler}/>
       <div className='firstemptycontainer container'></div>
       <AboutFlash />
       <Eduwal />
       <OverAll/><Footer /></div> :<React.Fragment> <PreRegister handlerfun={handler} /> 
       <div className='firstemptycontainer container'></div>
       </React.Fragment> }    
       {/* </div> */}
       </React.Fragment>
  )
}

export default App
