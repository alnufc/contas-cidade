import './CityCard.css';

const CityCard = ({ nome_cidade, url_imagem, quantidade_votos, onVote }) => {
  return (
    <div className='container-card'>
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
       
        <button onClick={onVote}> 
            Votar em {nome_cidade}
        </button>
      </div>
    </div>
  );
};

export default CityCard;