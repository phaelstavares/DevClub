import React, { useState, useRef, useEffect } from "react";
import { Container, Imagem, ContainerItens, H1, InputLabel, Input, Button, User } from "./styles"

import axios from "axios"

import People from "../../assets/img-pessoas-inicio.svg"
import Seta from "../../assets/seta-direita.svg"
import Lixeira from "../../assets/lixeira.svg"

// JSX
export default function App ()  {
  // React Hooks -> Ferramentas auxiliares
  const [ users, setUsers ] = useState([])
  const inputNome = useRef()
  const inputIdade = useRef()

  async function adicionarUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: inputNome.current.value, age: inputIdade.current.value, })
    
    setUsers([...users, newUser])
    // spread operator (...)
  }

  useEffect(() => {
    async function fetchUsers() {
      const {data: newUsers} = await axios.get("http://localhost:3001/users")
      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  // React Hooks -> useEffect (efeito colateral)
  // A minha aplicação inicia (A página carregou, useEffect é chamado)
  // Quando um estado que está no array de dependência do useEffect é alterado

  async function excluirUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

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

              <p>{user.name}</p> <p>{user.age}</p>

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