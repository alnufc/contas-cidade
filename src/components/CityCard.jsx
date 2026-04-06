import { useState } from 'react'
import './CityCard.css'

const CityCard = ({nome_cidade, url_imagem, quantidade_votos}) => {
 // const [count, setCount] = useState(0)
 //nome da cidade 
 // url da imagem 
// quantidade de votos


  return (
  <div className='container-card'> {/* Mudei aqui */}
    <div className='url-imagem'>
        <img src={url_imagem} alt={nome_cidade} />
    </div>
    <div className='nome-da-cidade'>
        <h2>{nome_cidade}</h2>
    </div>
    <div className='votos-da-cidade'>
        <h3>Votos: {quantidade_votos}</h3>
    </div>
    <div className='button-vote'>
        <input type="button" value="Votar" />
    </div>
  </div>
)
}

export default CityCard