import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => {

 const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(() => {
  setPokemons(POKEMONS);
 }, []);
    
 return (
  <div>
    <h1>Pokédex</h1>
    <p>Il y a {pokemons.length} dans notre application !</p>
  </div>
 )
}
  
export default App;

/*
import React from 'react';

export default class App extends React.Component {
    const name: string ="React";

    render() {
        return <h1>Bonjour, {name}</h1>;
    }
}
*/