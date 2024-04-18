import React, { useState, useRef } from "react";
import { Container, Imagem, ContainerItens, H1, InputLabel, Input, Button } from "./styles"

import axios from "axios"

import People from "../../assets/img-pessoas-inicio.svg"
import Seta from "../../assets/seta-direita.svg"

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

        </ContainerItens>
    </Container>
  )
}