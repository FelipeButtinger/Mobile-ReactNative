const baseUrl = "https://rickandmortyapi.com/api/character/";
let index = 821; // Character index
let page = Math.floor(index / 20) + 1; // Calculate the page number based on index

async function conectar() {
  const url = `${baseUrl}?page=${page}`; // Construct the URL with the page parameter
  const answer = await fetch(url);
  const obj = await answer.json();

  if (answer.status === 200) {
    // Check if the character at the specified index exists in the results
    if (obj.results[index % 20] === undefined) {
      // Use modulo to access the correct character in the results array
      console.log("Character not found at index " + index + " on page " + page);
    } else {
      console.log("Character name:", obj.results[index % 20].name);
    }
  } else {
    console.log("Error fetching data:", answer.status);
  }
}

conectar();

const baseUrl = "https://rickandmortyapi.com/api/character/";

let index = username; // Character index
let page = Math.floor(index / 20) + 1; // Calculate the page number based on index
