
import Display from './Components/Display'
import { Button } from 'bootstrap'
import styles from './App.module.css'
import ButtonsContainer from './Components/ButtonsContainer'
function App() {
  return <div className={styles.calculator} >
<Display></Display>
<ButtonsContainer></ButtonsContainer>


  </div>
}

export default App
