import ProjectForm from '../project/ProjectForm'
import styles from './NewProjects.module.css'
function NewProject(){
    return (
        <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para adicionar os serviços</p>
        <ProjectForm btntext="Criar Projeto"/>
        </div>
    )
}
export default NewProject