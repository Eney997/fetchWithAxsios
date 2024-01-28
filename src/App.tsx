import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"


function App() {
  
  const [catFact,setCatFact] = useState('')

  const fetchCatFact = () => {
      axios.get('https://catfact.ninja/fact')
      .then((res)=> {
        setCatFact(res.data.fact)
      })
  }

useEffect(()=>{
  fetchCatFact()
},[])
 
  return (
    <>
     <Sdiv>
      <Sbutton onClick={fetchCatFact}><Sspan>Generate cat facts</Sspan></Sbutton>
      <Spi>{catFact}</Spi>
     </Sdiv>
    </>
  )
}

export default App



const Sdiv = styled.div`
  display: grid;
  place-items: center;
`
const Sbutton = styled.button`
  margin-top: 70px;
  background-color: purple;
  height: 40px;
  width: 150px;
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  @media (width>768px){
    width: 400px;
    border-radius: 20px;
  }
`
const Sspan = styled.span`
  color: white;

  @media(width>768px){
    color: yellow;
  }
`
const Spi = styled.p `
  color: red;
  padding-top: 20px;
  padding-left: 15px;
  margin-top:50px;
  width: 200px;
  height: 100%;
  border: 1px solid black;
  
  @media(width>768px){
    width: 300px;
  }
`