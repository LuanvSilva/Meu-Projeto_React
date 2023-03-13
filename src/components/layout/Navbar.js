import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){
return(
    <nav class={styles.navbar}>
    <Container>
    <Link to='/'><img src={logo} alt="Costs"></img></Link>

    <ul class={styles.list}>
        <li class={styles.item}><Link to='/'><strong>Home</strong> </Link></li>
        <li class={styles.item}><Link to='/Contact'><strong>Contato</strong> </Link></li>
        <li class={styles.item}><Link to='/Company'><strong>Empresa</strong> </Link></li>
       
    </ul> 
    </Container>
  </nav>
)



}
export default Navbar

