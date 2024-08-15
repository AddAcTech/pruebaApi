import { useState, useEffect } from "react";

function Conection() {
  const [data, setData] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${pagina}`
        );
        const responeJSON = await response.json();
        setData(responeJSON.results);
      } catch (error) {
        alert("Error al cargar los datos", error);
      }
    };
    fetchData();
  }, [pagina]);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => {
          setPagina(pagina + 1);
          console.log(
            `https://rickandmortyapi.com/api/character/?page=${pagina}`
          );
        }}
        className="bg-black text-white w-fit p-2 rounded-md"
      >
        Siguiente
      </button>
      <button
        onClick={() => {
          setPagina(pagina - 1);
          console.log(
            `https://rickandmortyapi.com/api/character/?page=${pagina}`
          );
        }}
        className="bg-black text-white w-fit p-2 rounded-md"
      >
        Anterior
      </button>
      {data.map((character) => {
        return (
          <div key={character.id} className="w-fit bg-gray-50">
            <h2 className="text-orange-500">{character.name}</h2>
            <img src={character.image} alt={character.name} loading="lazy" />
          </div>
        );
      })}
    </div>
  );
}

export default Conection;
