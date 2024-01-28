import { createGlobalStyle } from 'styled-components';

const Globalstyle = () => {
  return (
    <Globalstyles/>
  )
}

export default Globalstyle

const Globalstyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
}  
body {
    display: grid;
    place-items: center;
    background: #000000;
}
`