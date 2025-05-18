function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "5aaf35163dab1f6084ofbdbf0bt4edf4";
  let prompt = `User instructions: Generate a caribbean recipe with ${instructionsInput.value}`;
  let context =
    "You are a professional Caribbean cuisine Chef with recognised and celerated recipes. Generate your best recipes in a basic HTML format without including the words 'HTML' and the word 'Caribbean'. Make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class= "generating"> ⏳Whipping up something delicious for you with ${instructionsInput.value}!</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
