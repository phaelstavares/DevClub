import React from "react";
import { Container, Imagem, ContainerItens, H1, InputLabel, Input, Button } from "./styles"
import People from "./assets/img-pessoas-inicio.svg"
import Seta from "./assets/seta-direita.svg"

// JSX
export default function App ()  {

  return (
    <Container>
      <Imagem alt="logo imagem" src={People}/>
        <ContainerItens>

          <H1>Olá!</H1>

          <InputLabel>Nome</InputLabel>
          <Input placeholder="Nome"></Input>

          <InputLabel>Idade</InputLabel>
          <Input placeholder="Idade"></Input>

          <Button>Cadastrar <img alt="seta" src={Seta}/></Button>

        </ContainerItens>
    </Container>
  )
}