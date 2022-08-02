import {
    createContext, useContext, useMemo, useState
} from 'react';

type Props = {
  children: JSX.Element;
};

type Pokemon = {
  name: string;
  url: string;
};
type teste = {
  listPokemonSeen: Pokemon[];
  setListPokemonSeen: React.Dispatch<React.SetStateAction<Pokemon[]>>;
};

const ListPokemonSeenContext = createContext<teste>({} as teste);

// using useMemo
export const ListPokemonSeenProvider = ({ children }: Props) => {
    const [listPokemonSeen, setListPokemonSeen] = useState<Pokemon[]>([]);
    const value = useMemo(() => ({ listPokemonSeen, setListPokemonSeen }), [
        listPokemonSeen,
        setListPokemonSeen
    ]);
    return (
      <ListPokemonSeenContext.Provider value={value}>
        {children}
      </ListPokemonSeenContext.Provider>
);
};

export function useListPokemonSeen() {
  const context = useContext<teste>(ListPokemonSeenContext);
  if (context === undefined) {
    throw new Error(
      'useListPokemonSeen must be used within a ListPokemonSeenProvider'
    );
  } else {
    const pokemonContext = context;
    return {
      listPokemonSeen: pokemonContext.listPokemonSeen,
      setListPokemonSeen: pokemonContext.setListPokemonSeen
    };
  }
}
