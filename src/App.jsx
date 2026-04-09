import { useEffect, useState } from "react";
import CityCard from "./components/CityCard.jsx";
import CityCardDatabase from "./components/cidades_dados.js"; 

const App = () => {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    setCidades(CityCardDatabase);
  }, []);

  function votaCidade(nome) {
    const novasCidades = cidades.map((cidade) => {
      if (cidade.nome_cidade === nome) {
        return { ...cidade, quantidade_votos: cidade.quantidade_votos + 1 };
      }
      return cidade;
    });

    setCidades(novasCidades);
  }

  return (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '20px' }}>
      {cidades.map((cidade) => (
        <CityCard 
          key={cidade.nome_cidade} // chave unica forma de resolver
          nome_cidade={cidade.nome_cidade}
          url_imagem={cidade.url_imagem}
          quantidade_votos={cidade.quantidade_votos}
          onVote={() => votaCidade(cidade.nome_cidade)}
        />
      ))}
    </div>
  );
};

export default App;