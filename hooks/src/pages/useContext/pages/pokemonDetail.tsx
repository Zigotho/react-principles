import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pokemonDetail.scss";

type Pokemon = {
  name: string;
  url: string;
  isNew: boolean;
  id: string;
  image: string;
  abilities: any[];
};

export const PokemonDetail = () => {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const { name } = useParams();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
      setPokemon({
        ...res.data,
        image: `https://img.pokemondb.net/artwork/${name}.jpg`,
      });
    });
  });

  if (!pokemon) {
    return null;
  }

  return (
    <div className="PokemonView">
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.image} alt={pokemon?.name} />
      Abilities
      <ul className="PokemonView__abilities">
        {pokemon.abilities?.map((item) => (
          <li>{item?.ability?.name}</li>
        ))}
      </ul>
    </div>
  );
};
