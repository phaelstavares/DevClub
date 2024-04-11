import React, { useState, useRef } from "react";
import { Container, Imagem, ContainerItens, H1, InputLabel, Input, Button, User } from "./styles"
import People from "./assets/img-pessoas-inicio.svg"
import Seta from "./assets/seta-direita.svg"
import Lixeira from "./assets/lixeira.svg"

// JSX
export default function App ()  {
  // React Hooks -> Ferramentas auxiliares
  const [ users, setUsers ] = useState([])
  const inputNome = useRef()
  const inputIdade = useRef()

  function adicionarUser() {
    setUsers([...users,{id: Math.random(), nome: inputNome.current.value, idade: inputIdade.current.value}])
    // spread operator (...)
  }

  function excluirUser(userId) {
    const NovoUsers = users.filter(user => user.id !== userId)
    
    setUsers(NovoUsers)
  }

  return (
    <Container>
      <Imagem alt="logo imagem" src={People}/>
        <ContainerItens>

          <H1>Olá!</H1>

          <InputLabel>Nome</InputLabel>
          <Input ref={inputNome} placeholder="Nome"></Input>

          <InputLabel>Idade</InputLabel>
          <Input ref={inputIdade} placeholder="Idade"></Input>

          <Button onClick={adicionarUser}>Cadastrar <img alt="seta" src={Seta}/></Button>

          <ul>
            { users.map(user => (
              <User key={user.id}>

              <p>{user.nome}</p> <p>{user.idade}</p>

              <button onClick={() => excluirUser(user.id)}>
                <img src={Lixeira} alt="lixeira"/>
              </button>
              </User>
            ))
            }
          </ul>
        </ContainerItens>
    </Container>
  )
}