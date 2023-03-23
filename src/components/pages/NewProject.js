import { useNavigate} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProjects.module.css'
function NewProject(){
    const history = useNavigate()
    function createPost(project){
        project.cost = 0
        project.services = []
        fetch('http://localhost:5000/projects',{
            method:'POST',
            Headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),

        }).then((resp) => resp.json()).then((date) => console.log(date)).catch(Err => console.log(Err))
    }

    return ( 
        <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para adicionar os serviços<br></br></p>
        <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}
export default NewProject