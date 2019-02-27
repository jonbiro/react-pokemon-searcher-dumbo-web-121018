import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import PokemonCard from "./PokemonCard";

import Search from "./Search";

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }));
  }

  handleSearch = e => {
    this.setState({ searchTerm: e });
  };
	filterByInput = () => {
		return this.state.pokemon
			.filter(pokemon =>
				pokemon.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
			).map(pokemon => {
				return <PokemonCard key={pokemon.id} pokemon={pokemon}/>
			})
		
	}
	
	addPokemon = pokemon => {
		this.setState({ pokemonCollection: [...this.state.pokemonCollection, pokemon] })
	}
  render() {

    return (
      <div>
        <h3>Pokemon Searcher</h3>
        <br />
        <Search
          handleSearch={this.handleSearch}
          search={this.state.searchTerm}
        />
        <br />
       <PokemonCollection pokemon={this.filterByInput()}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    );
  }
}

export default PokemonPage;
