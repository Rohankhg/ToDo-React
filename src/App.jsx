// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './Components/TodoHeading';
import TodoHeading from './Components/TodoHeading';
import HeadingBox from './Components/HeadingBox';
import ItemBox from './Components/ItemsBox';
import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <center>
      <TodoHeading></TodoHeading>
      <HeadingBox></HeadingBox>
      <ItemBox></ItemBox>
    </center>
  )
}

export default App
