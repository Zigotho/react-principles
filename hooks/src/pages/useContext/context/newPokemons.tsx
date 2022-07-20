import React, { createContext, useContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

type Pokemon = {
  name: string;
  url: string;
};
type teste = {
  listPokemonSeen: Pokemon[];
  setListPokemonSeen: (list: any) => void;
};

const ListPokemonSeenContext = createContext<teste>({} as teste);

export const ListPokemonSeenProvider: React.FC<Props> = ({ children }) => {
  const [listPokemonSeen, setListPokemonSeen] = useState([]);
  return (
    <ListPokemonSeenContext.Provider
      value={{ listPokemonSeen, setListPokemonSeen }}
    >
      {children}
    </ListPokemonSeenContext.Provider>
  );
};

export function useListPokemonSeen() {
  const context = useContext<teste>(ListPokemonSeenContext);
  if (context === undefined) {
    throw new Error(
      "useListPokemonSeen must be used within a ListPokemonSeenProvider"
    );
  } else {
    const pokemonContext = context;
    return {
      listPokemonSeen: pokemonContext.listPokemonSeen,
      setListPokemonSeen: pokemonContext.setListPokemonSeen,
    };
  }
}
