import { Link } from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

function Navbar(){
return(
    <nav className={styles.navbar}>
    <Container>
    <Link to='/'><img src={logo} alt="Costs"></img></Link>

    <ul className={styles.list}>
        <li className={styles.item}><Link to='/'><strong>Home</strong> </Link></li>
        <li className={styles.item}><Link to='/Projects'><strong>Projetos</strong> </Link></li>
        <li className={styles.item}><Link to='/Contact'><strong>Contato</strong> </Link></li>
        <li className={styles.item}><Link to='/Company'><strong>Empresa</strong> </Link></li>
       
    </ul> 
    </Container>
  </nav>
)



}
export default Navbar

