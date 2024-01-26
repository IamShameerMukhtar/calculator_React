import styles from './Display.module.css'
const Display=({calVal})=>{
  return<div>
<input type='number' className={styles.display} value={calVal} readOnly></input>

</div>
}
export default Display