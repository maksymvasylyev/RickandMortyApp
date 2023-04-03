import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
export const navigation = document.querySelector('[data-js="navigation"]');
export const prevButton = document.querySelector('[data-js="button-prev"]');
export const nextButton = document.querySelector('[data-js="button-next"]');
export const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
export let page = 1;
const searchQuery = "";

async function fetchCharacters(page) {
  const urlApi = `https://rickandmortyapi.com/api/character?page=${page}`;
  try {
    const response = await fetch(urlApi);
    if (!response.ok) {
      console.log("Something went wrong");
    } else {
      const data = await response.json();
      maxPage = data.info.pages;
      console.log(maxPage);
      data.results.forEach((values) => {
        const myCard = createCharacterCard(values);
        cardContainer.append(myCard);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
}

fetchCharacters(1);

nextButton.addEventListener("click",() => {
  if (page < maxPage){
    cardContainer.innerHTML="";
    page++;
    console.log(page);
    fetchCharacters(page);
    pagination.innerHTML=`
     ${page}/${maxPage}
    `
  }else{
    console.error("Error");
  }
    
});

prevButton.addEventListener("click", () =>{
    if (page > 1){
      cardContainer.innerHTML="";
      page--;
      console.log(page);
      fetchCharacters(page);
      pagination.innerHTML=`
     ${page}/${maxPage}
    `
    }else{
      console.error("Error");
    }
    
    
});