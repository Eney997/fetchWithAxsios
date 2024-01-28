import styled from "styled-components"
import axios from "axios"
import { useState } from "react"


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
      <Sinput name="inForName" placeholder="Ex. Name... " onChange={(event) => {setName(event.target.value)}}/>
      <Sbut onClick={fetchData}>Predict Info</Sbut>   

      <h1>Predicted name: {predAge?.name} </h1>
      <h1>Predicted Age: {predAge?.age} </h1>
      <h1>Predicted count: {predAge?.count} </h1>
    </Sdiv>
  )
}

export default App

const Sinput = styled.input `
  width: 300px;
  height: 30px;
  margin-bottom: 30px;
` 

const Sdiv = styled.div`
  display:grid;
  place-items: center;
  margin-top: 50px;
`
const Sbut = styled.button`
width: 100px;
height: 30px;
background-color: blueviolet;
border-radius: 20px;
cursor: pointer;
outline:none;
border:none;
`



