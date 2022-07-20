import { Route, Routes as BrowseRoute } from "react-router-dom";
import { ListPokemonSeenProvider } from "./pages/useContext/context/newPokemons";
import { ListPokemon } from "./pages/useContext/pages/listPokemon";
import { PokemonDetail } from "./pages/useContext/pages/pokemonDetail";
import { UseEffect } from "./pages/useEffect";
import { UseState } from "./pages/useState";

export const Routes = () => {
  return (
    <BrowseRoute>
      <Route path="/" element={<UseEffect />} />
      <Route
        path="/pokemon"
        element={
          <ListPokemonSeenProvider>
            <ListPokemon />
          </ListPokemonSeenProvider>
        }
      />
      <Route
        path="/pokemon/:name"
        element={
          <ListPokemonSeenProvider>
            <PokemonDetail />
          </ListPokemonSeenProvider>
        }
      />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useState" element={<UseState />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>The resource requested could not be found</p>
            <p>
              <a href="/">Go to home</a>
            </p>
          </main>
        }
      />
    </BrowseRoute>
  );
};
