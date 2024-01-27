import { useState } from 'react'
import Display from './Components/Display'

import styles from './App.module.css'
import ButtonsContainer from './Components/ButtonsContainer'







function App() {
let [ calVal, setcalVa ] = useState("");

const HandleClick=(buttonText)=>{
  
  if(buttonText==='c'){
 setcalVa("")
  }
  else if(buttonText==='='){
 setcalVa(eval(calVal))
 
  }
  else
  {
 const newDisVal = calVal + buttonText;
 setcalVa(newDisVal);
 
  }
 }


  return <div className={styles.calculator} >
<Display calVal={calVal}></Display>

<ButtonsContainer HandleClick={HandleClick}></ButtonsContainer>


  </div>
}

export default App
