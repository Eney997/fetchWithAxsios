import styled from "styled-components"
import axios from "axios"
import { useState } from "react"
import Globalstyle from "./Globalstyles"


interface AgePrediction {
  name: string;
  age: number;
  count: number;
}

function App() {
  
  const [name,setName] = useState('')
  const [predAge,setpredAge] = useState<AgePrediction | null>(null)
  

  const fetchData = () => {
  axios.get(`https://api.agify.io/?name=${name}`)
  .then((res)=> {
    setpredAge(res.data)
  })
  }
 
  return (
    
    <Sdiv>
      <Globalstyle/>
      <Sinput name="inForName" placeholder="Ex. Name... " onChange={(event) => {setName(event.target.value)}}/>
      <Sbut onClick={fetchData}>Predict Info</Sbut>   
      <Eichebisdiv>
      <Seiherti>Predicted name: {predAge?.name} </Seiherti>
      <Seiherti>Predicted Age: {predAge?.age} </Seiherti>
      <Seiherti>Predicted count: {predAge?.count} </Seiherti>
      </Eichebisdiv>
    </Sdiv>
  )
}

export default App


const Eichebisdiv = styled.div`
  margin-top: 20px;
`

const Seiherti = styled.h1`
  color: white;
`

const Sinput = styled.input `
  width: 300px;
  height: 35px;
  margin-bottom: 30px;
  border-radius: 20px;
` 

const Sdiv = styled.div`
  display:grid;
  place-items: center;
  margin-top: 50px;
`
const Sbut = styled.button`
width: 300px;
height: 30px;
background-color: blueviolet;
border-radius: 20px;
cursor: pointer;
outline:none;
border:none;

&:hover {
  background-color:#e5ff00 ;
  transition: 0.8s;
}

`



