
import styles from './Select.module.css'
function Select({text,name,options,handleOnChange,defaultValue}){
 return(
    <div className={styles.form_control}>
    <label htmlFor={name}>{text}</label>
    <select name={name} id={name}
     onChange={handleOnChange}
     defaultValue={defaultValue || ''}>
      
    <option>Selecione uma Opçao</option>
    {options.map((option) => (
      <option defaultValue={option.id} key={option.id}>{option.name}</option>
    ))}
    </select>
  
  </div>
 )
}
export default Select