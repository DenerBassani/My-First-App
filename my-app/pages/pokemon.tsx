import Pagination from "@/components/Pagination/Pagination";
import PokemonCard from "@/components/PokemonCard/PokemonCard";
import { useEffect, useState } from "react";

interface Pokemon {
  name: string;
  url: string;
}

export default function Pokemon() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${(page - 1) * 20}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonList(data.results);
        setHasMore(data.next !== null);
      })
      .catch((err) => console.error("Erro ao buscar Pokémon:", err));
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Pokémon</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {pokemonList.map((pokemon, index) => {
          const pokemonId = (page - 1) * 20 + index + 1;
          return <PokemonCard key={pokemon.name} name={pokemon.name} id={pokemonId} />;
        })}
      </div>
      <Pagination page={page} hasMore={hasMore} setPage={setPage} />
    </div>
  );
}
