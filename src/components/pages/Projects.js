import {useLocation} from 'react-router-dom'
import Message from "../layout/Message"
import Container from "../layout/Container"
import LinkButton from '../layout/LinkButtton'
import styles from "./Projects.module.css"


function Projects(){
const location = useLocation()
let message = ''
if(location.state){
    message = location.state.message
}
    return (
        <div className={styles.projects_container}>
        <div className={styles.title_container}> 
            <h1>Projetos/</h1>
            <LinkButton to='/Newproject' text='Criar Projeto' />
        </div>
            {message && <Message type="success" msg={message}/>}
            <Container customClass='start'>
                <p>Porjetos...</p>
            </Container>
        </div>
    )
}

export default Projects