// import api from '../../services/api'
import { useEffect } from 'react'
import Button from '../../components/Button'
import TopBackground from "../../components/TopBackground"

function ListUsers(){
    useEffect(() => {
       console.log('teste')
    }, [])

    
    

    //TODA VEZ que a tela carrega, o useEffect é chamado
    //TODA VEZ que uma determinada variavel MUDA de valor, ele é chamado

    

    return(
        <div>
            <TopBackground />
            <h1>Listagem de Usuários</h1>
            <Button>Voltar</Button>
        </div>
    )
}

export default ListUsers