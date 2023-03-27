
import styles from './Input.module.css'
function Input({type,text,name,placeholder,handleOnChange,defaultValue,value}){
 return(
    <div className={styles.form_control}>
    <label htmlFor={name}>{text}</label>
    <label
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={handleOnChange}
      value={value}
    />
    <input placeholder={placeholder} />
  </div>
 )
}
export default Input