import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useListPokemonSeen } from "../context/newPokemons";
import "./listPokemon.scss";

type Pokemon = {
  name: string;
  url: string;
  isNew: boolean;
  id: string;
  image: string;
  abilities: any[];
};

export const ListPokemon = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const { listPokemonSeen, setListPokemonSeen } = useListPokemonSeen();

  React.useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((resposta) => {
        resposta.data.results.map((pokemon: any) => {
          axios.get(pokemon.url).then((res) => {
            console.log(res.data);
            const newPokemon = {
              name: res.data.name,
              url: res.data.url,
              image: `https://img.pokemondb.net/artwork/${pokemon.name}.jpg`,
              isNew: listPokemonSeen.indexOf(pokemon?.name) === -1,
              id: res.data.id,
              abilities: res.data.abilities,
            };
            setPokemons((pokemons) => [...pokemons, newPokemon]);
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const naigate = useNavigate();
  const handlePokemon = (pokemon: any) => {
    console.log(pokemon);
    setListPokemonSeen([...listPokemonSeen, pokemon.name]);
    naigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Pokedex</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="listagem">
            {pokemons.map((pokemon: Pokemon) => (
              <li
                onClick={() => handlePokemon(pokemon)}
                className="pokemon"
                key={pokemon.id}
              >
                <img src={pokemon.image} alt={pokemon.name} />
                <span className={`tag`}>{pokemon.isNew ? "Novo" : null}</span>
                <span className="name">{pokemon.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
