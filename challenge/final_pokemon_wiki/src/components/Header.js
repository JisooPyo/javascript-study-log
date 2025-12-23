export default function Header({ $app, initialState, handleSearch }) {
  this.state = initialState;
  this.$target = document.createElement("div");
  this.$target.className = "header";

  this.handleSearch = handleSearch;

  $app.appendChild(this.$target);

  this.template = () => {
    const searchWord = this.state.searchWord;
    let temp = `
    <div class="title">
        <a href="/">포켓몬 도감</a>
    </div>
    <div class="search-container">
      <input type="text" id="search-input" placeholder="포켓몬을 검색하세요!">
      <button id="search-button">🔍</button>
    </div>
    `;
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", () => {
      this.handleSearch(searchInput.value);
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
