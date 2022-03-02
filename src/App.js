import React,{Component} from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import golden from './golden'
import gatinho from './gatinho'
import dog1 from './dog1'
import dog2 from './dog2'
import dog3 from './dog3'
import cat1 from './cat1'
import cat2 from './cat2'
import cat3 from './cat3'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
`
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: LightSkyBlue;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-size: 3.5vw;
  color: DarkCyan;
  margin-top: 2vh;   
`
const Span = styled.span`
  color: crimson;
`
const Pets = styled.div`
  margin-top: 3vw;
  width: 60%;
  height: 27vh;
  display: flex;
  justify-content: space-evenly;
  `
  const CButton = styled.button`
    width: 12vw;
    height: 20vh;
    border: none;
    border-radius: 50%;
    font-size: 2vw;
    color: black;
    transition: 0.8s;
    &:hover{
      height: 20vh;
      width: 13vw;
      font-size: 2.5vw;
  }
  `
  const Pet = styled.img`
    height:30vh;
    border-radius:100%;
    transition: 0.8s;
    &:hover{
      height: 27vh; 
  }
  `
  const Message = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 4vw;
    text-align: center;
    font-size: 3vw
  `
  const Perfil = styled.li`
  font-size: 1.5vw;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 35vh;
  width: 22vw;
`
const Button = styled.button`
  width: 10vw;
  height: 1.8vw;
  font-size:1.2vw;
  border: none;
  background-color:MidnightBlue;
  &:hover{
      border: 2px solid darkmagenta;
      color: white;
  }
`

const Img = styled.img`
    height:25vh;
    border-radius:50%;
`


export default class PetLove extends Component{

  state={
    dogs: [
      {
        Nome: "Eren",
        Idade: "3 months",
        img: dog2
      },
      {
        Nome: "Nyx",
        Idade: "1  year",
        img: dog3
      },
      {
        Nome: "Bucky",
        Idade: "5  years",
        img: dog1
      },
    ],
    cats:[
      {
        Nome: "Salem",
        Idade: "6 months",
        img: cat3
      },
      {
        Nome: "Aelin",
        Idade: "2  years",
        img: cat2
      },
      {
        Nome: "Scorpius",
        Idade: "4  years",
        img: cat1
      },
    ],
    msg: null

  }

  dog = () => {
    let {cats,dogs,msg} = this.state
    let {thank} = this

    this.setState({
      msg: dogs.map((item) => (
          <List>
            <Img src={item.img}/>
            <Perfil>{item.Nome}</Perfil>
            <Button onClick={thank}>Adotar</Button>
          </List>
      ))
    })
  }

  cat = () =>{
    let {cats,dogs,msg} = this.state
    let {thank} = this

    this.setState({
      msg: cats.map((item) => (
        <List>
            <Img src={item.img}/>
            <Perfil>{item.Nome}</Perfil>
            <Button onClick={thank}>Adotar</Button>
          </List>
      ))
    })
  }

  clear = () => {
    this.setState({
      msg: null
    })
  }
  
  thank = () => {
    this.setState({
      msg: "Obrigado(a) por me adotar"
    })
  }

  render(){
    let {msg} = this.state
    let {dog, cat, clear} = this
    return(
      <Container>
        <GlobalStyle/>
        <Title><Span>PetLove</Span> Adoption</Title>
        <Pets>
          <Pet src={golden} onClick={dog}/>
          <Pet src={gatinho} onClick={cat}/>
         <CButton onClick={clear}>Clear</CButton> 
        </Pets>
        <Message>{msg}</Message>
      </Container>
    )
  }


}
