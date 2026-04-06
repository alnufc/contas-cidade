import CityCard from "./CityCard";
import './CityCardList.css'

const CityCardList = () => {
  const CityCardDatabase = [
    {
      nome_cidade: "Quixadá",
      url_imagem:
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Vista_parcial_quixada_ce.JPG",
      quantidade_votos: 0,
    },
    {
      nome_cidade: "Quixeramobim",
      url_imagem:
        "https://www.anuariodoceara.com.br/wp-content/uploads/2023/07/QUIXERAMOBIM_ponte-metalica_foto_Prefeitura-Municipal-Cesar-Rabelo-2-822x537.jpg",
      quantidade_votos: 0,
     },
    {
      nome_cidade: "Banabuiú",
      url_imagem:
        "https://www.crede12.seduc.ce.gov.br/wp-content/uploads/sites/109/2021/10/Banabuiu-ce.jpg",
      quantidade_votos: 0,
    },
    {
      nome_cidade: "Iguatu",
      url_imagem:
        "https://upload.wikimedia.org/wikipedia/commons/7/78/Igreja_da_Matriz_-_panoramio.jpg",
      quantidade_votos: 0,
    },
    
  ];

  return (
    <>
    <div className="container">
    {CityCardDatabase.map((city) => (
        <CityCard
          nome_cidade={city.nome_cidade}
          url_imagem={city.url_imagem}
          quantidade_votos={city.quantidade_votos}
          
        />
      ))}
      
    </div>
      
    </>
  );
};

export default CityCardList;
