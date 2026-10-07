// Recomendados

const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Proin id arcu aliquet, elementum nisi ut, varius nibh. 
Phasellus ac sem ac lorem efficitur porttitor ac non lorem.`

const data = [
  {
    title: "Example Title 1",
    description: loremText,
    url_img: "./viajes/viajes-1.jpg"
  },
  {
    title: "Example Title 2",
    description: loremText,
    url_img: "./viajes/viajes-2.jpg"
  },
  {
    title: "Example Title 3",
    description: loremText,
    url_img: "./viajes/viajes-3.jpg"
  }
];

let recommendedItems = `<section>`;

for (let i = 0; i < data.length; i++) {
    recommendedItems += `
    <article class="card-item">
        <div class="card-img-wrapper">
            <img src="${data[i].url_img}" alt ="${data[i].title}" class="card-img" />
        </div>
        <div class="card-content">
            <h3 class="card-title">${data[i].title}</h3>
            <p class="card-description">${data[i].description}</p>
        </div>
    </article>`;
}

recommendedItems += `</section>`;


document.querySelector(".recomendados").innerHTML += recommendedItems;

// Desplegable

const cities = [
"Madrid",
"Barcelona",
"Valencia",
"Seville",
"Bilbao",
"Granada",
"Malaga",
"Palma de Mallorca",
"Alicante",
"Zaragoza"
];

const formGroup = document.createElement("div");
formGroup.className = "selector-container";

const selectElement = document.createElement("select");
selectElement.id = "desplegable";
selectElement.className = "select-options"
selectElement.setAttribute("aria-label", "Selecciona una opción:");

const defaultOption = document.createElement("option");
defaultOption.value = "";
defaultOption.textContent = "Elige un destino";
selectElement.appendChild(defaultOption);

cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city.toLowerCase();
    option.textContent = city;
    selectElement.appendChild(option);
})

formGroup.appendChild(selectElement);
document.querySelector(".destinos").appendChild(formGroup);