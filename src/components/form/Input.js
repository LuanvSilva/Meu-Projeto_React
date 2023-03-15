
import styles from './Input.module.css'
function Input({type,text,name,placeholder,handleOnChange,defaultValue}){
 return(
    <div className={styles.form_control}>
    <label htmlFor={name}>{text}</label>
    <label
      type={type}
      name={name}
      id={name}
      onChange={handleOnChange}
      defaultValue={defaultValue}
    />
    <input placeholder={placeholder} />
  </div>
 )
}
export default Input