import React from "react";
import { Container, Imagem, ContainerItens, H1, InputLabel, Input, Button } from "./styles"

// JSX
export default function App ()  {

  return (
    <Container>
      <Imagem />
        <ContainerItens>

          <H1>Olá!</H1>

          <InputLabel>Nome</InputLabel>
          <Input placeholder="Nome"></Input>

          <InputLabel>Idade</InputLabel>
          <Input placeholder="Idade"></Input>

          <Button>Cadastrar</Button>

        </ContainerItens>
    </Container>
  )
}