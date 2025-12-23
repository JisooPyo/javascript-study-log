export default function PokemonList({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "pokemon-list";

  $app.appendChild(this.$target);

  const TYPE_MAP = {
    grass: "풀",
    poison: "독",
    fire: "불",
    flying: "비행",
    water: "물",
    bug: "벌레",
    normal: "노말",
    electric: "전기",
    ground: "땅",
    fairy: "페어리",
    fighting: "격투",
    psychic: "에스퍼",
    rock: "바위",
    steel: "강철",
    ice: "얼음",
    ghost: "고스트",
    dragon: "드래곤",
  };

  this.template = () => {
    let temp = `<div class="pokemon-items-container">`;
    if (this.state) {
      this.state.data.forEach((elm) => {
        temp += `
            <div class="pokemon-item" id=${elm.id}>
                <div class="pokemon-img">
                    <img src=${elm.img} />
                </div>
                <div class="pokemon-info">
                    <p class="pokemon-no">No.${elm.id}</p>
                    <p class="pokemon-name">${elm.name}</p>
                    <div class="pokemon-types">
            `;
        elm.type.forEach((elm) => {
          temp += `<button class="type-badge type-${elm}">${TYPE_MAP[elm]}</button>`;
        });
        temp += `</div></div></div>`;
      });
    }
    temp += `</div>`;
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
