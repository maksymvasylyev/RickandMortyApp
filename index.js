import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

async function fetchCharacters() {
  const urlApi = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(urlApi);
    if (!response.ok) {
      console.log("Something went wrong");
    } else {
      const data = await response.json();
      data.results.forEach((values) => {
        const myCard = createCharacterCard(values);
        cardContainer.append(myCard);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

fetchCharacters();
