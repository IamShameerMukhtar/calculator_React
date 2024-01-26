import { useState } from 'react'
import Display from './Components/Display'

import styles from './App.module.css'
import ButtonsContainer from './Components/ButtonsContainer'

const HandleClick=(event)=>{
  
  console.log("Clicked" + event);
  }





function App() {
let [ calVal, setcalVa ] = useState("");




  return <div className={styles.calculator} >
<Display calVal={calVal}></Display>

<ButtonsContainer HandleClick={HandleClick}></ButtonsContainer>


  </div>
}

export default App
