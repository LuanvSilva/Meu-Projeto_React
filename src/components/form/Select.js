
import styles from './Select.module.css'
function Select({text,name,options,handleOnChange,defaultValue}){
 return(
    <div className={styles.form_control}>
    <label htmlFor={name}>{text}</label>
    <select name={name} id={name}>
    <options>Selecione uma Opçao</options>
    </select>
  
  </div>
 )
}
export default Select