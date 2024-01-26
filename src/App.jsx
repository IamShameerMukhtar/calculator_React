import { useState } from 'react'
import Display from './Components/Display'

import styles from './App.module.css'
import ButtonsContainer from './Components/ButtonsContainer'

function App() {
let [ calVal, setcalVa ] = useState("45");




  return <div className={styles.calculator} >
<Display calVal={calVal}></Display>

<ButtonsContainer></ButtonsContainer>


  </div>
}

export default App
