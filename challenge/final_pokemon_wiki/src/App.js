import Header from "./components/Header.js";
import PokemonList from "./components/PokemonList.js";
import PokemonDetail from "./components/PokemonDetail.js";

import { request } from "./components/api.js";

export default function App($app) {
  const getSearchWord = () => {
    if (window.location.search && window.location.search.includes("search=")) {
      return window.location.search.split("search=")[1];
    }
    return "";
  };

  this.state = {
    type: "",
    searchWord: "",
    pokemons: "",
  };

  const header = new Header({
    $app,
    initialState: this.state.searchWord,
    handleSearch: async (searchWord) => {
      history.pushState(null, null, `?search=${searchWord}`);
      const pokemons = await request(this.state.type, searchWord);
      this.setState({
        ...this.state,
        searchWord: searchWord,
        pokemons: pokemons,
      });
    },
  });

  const pokemonList = new PokemonList({
    $app,
    initialState: this.state.pokemons,
  });

  const pokemonDetail = new PokemonDetail();

  this.setState = (newState) => {
    this.state = newState;
    pokemonList.setState(this.state.pokemons);
    header.setState(this.state.searchWord);
  };

  window.addEventListener("popstate", async () => {
    const urlPath = window.location.pathname;

    const prevType = urlPath.replace("/", "");
    const prevSearchWord = getSearchWord();
    const prevPokemons = await request(prevType, prevSearchWord);

    this.setState({
      ...this.state,
      type: prevType,
      searchWord: prevSearchWord,
      pokemons: prevPokemons,
    });
  });

  const init = async () => {
    const pokemons = await request(this.state.type, this.state.searchWord);
    this.setState({
      ...this.state,
      pokemons: pokemons,
    });
  };

  init();
}
