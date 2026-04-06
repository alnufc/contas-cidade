import { useState } from 'react'
import './App.css'
import CityCardList from './components/CityCardList'

function App() {
 // const [count, setCount] = useState(0)

  return (
  <>
  <h1>Escolha uma cidade para votar</h1>
    <CityCardList/>

  </>)
}

export default App
