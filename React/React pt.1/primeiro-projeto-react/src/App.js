import React from "react";
import { Container, H1, P } from "./styles"

// JSX
export default function App ()  {
  const hello = "Hello react"

  return (
    <Container>
      <H1>{hello}</H1>
      <P>Bem-vindo(a)!</P>
      <P>{5 + 5}</P>
      <P>5 + 5</P>
    </Container>
  )
}