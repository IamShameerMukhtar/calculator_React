import styles from "./ButtonsContainer.module.css"
const ButtonsContainer=({HandleClick})=>{
const ButtonNames=[
'c',
'1',
'2',
'+',
'3',
'4',
'-',
'5',
'6',
'*',
'7',
'8',
'/',
'=',
'9',
'0',
]




return <div id={styles.button_Container}>
{ButtonNames.map(names=><button onClick={()=>HandleClick(names)} className={styles.button1} >{names}</button>)}

</div>

}
export default ButtonsContainer