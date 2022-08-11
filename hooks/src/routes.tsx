import { Route, Routes as BrowseRoute } from 'react-router-dom';
import { Home } from './pages/home';
import {
    ListPokemon,
    ListPokemonSeenProvider,
    PokemonDetail
} from './pages/useContext';
import { UseEffect } from './pages/useEffect';
import { UseRef } from './pages/useRef';
import { UseState } from './pages/useState';

export const Routes = () => (
  <BrowseRoute>
    <Route path="/" element={<Home />} />
    <Route
      path="/pokemon"
      element={(
        <ListPokemonSeenProvider>
          <ListPokemon />
        </ListPokemonSeenProvider>
        )}
    />
    <Route
      path="/pokemon/:name"
      element={(
        <ListPokemonSeenProvider>
          <PokemonDetail />
        </ListPokemonSeenProvider>
        )}
    />
    <Route path="/useEffect" element={<UseEffect />} />
    <Route path="/useState" element={<UseState />} />
    <Route path="/useRef" element={<UseRef />} />
    <Route
      path="*"
      element={(
        <main style={{ padding: '1rem' }}>
          <h1>404</h1>
          <h2>Page not found</h2>
          <p>The resource requested could not be found</p>
          <p>
            <a href="/">Go to home</a>
          </p>
        </main>
        )}
    />
  </BrowseRoute>
  );
