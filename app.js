"use strict";

const card = document.querySelector(".card");
const flag = document.querySelector(".flag");
const name = document.querySelector(".country__name");
const region = document.querySelector(".region");
const population = document.querySelector(".population");
const language = document.querySelector(".language");
const currency = document.querySelector(".currency");

const inputName = document.querySelector(".get__country__name");

const getData = async function (cName) {
  try {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/name/${cName}`
    );
    const data = await response.json();
    displayData(data);
  } catch (error) {
    alert("failed to retrieve data");
  }
};
// getData();

const displayData = function (data) {
  const { flag, name, region, population, languages, currencies } = data[0];
  const html = `
                <img src=${flag} alt="flag" class="flag" />
                <h1 class="country__name">${name}</h1>
                <p class="region">${region}</p>
                <div class="info">
                  <p class="population">Population: ${+population.toFixed(
                    2
                  )}</p>
                  <p class="language">Language: ${languages[0].name}</p>
                  <p class="currency">currency: ${currencies[0].name}</p>
                </div>
                `;
  card.innerHTML = "";
  card.insertAdjacentHTML("afterbegin", html);
};

inputName.addEventListener("keyup", function (e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    const cName = inputName.value;
    getData(cName);
  }
});

// const request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.eu/rest/v2/name/india");
// request.send();
// request.addEventListener("load", function () {
//   const data = JSON.parse(this.responseText);
//   const { flag, name, region, population, languages, currencies } = data[1];
//   const html = `
//         <img src=${flag} alt="flag" class="flag" />
//         <h1 class="country__name">${name}</h1>
//         <p class="region">${region}</p>
//         <div class="info">
//           <p class="population">Population: ${+population.toFixed(2)}</p>
//           <p class="language">Language: ${languages[0].name}</p>
//           <p class="currency">currency: ${currencies[0].name}</p>
//         </div>
//         `;
//   card.innerHTML = "";
//   card.insertAdjacentHTML("afterbegin", html);
// });

// const getData = function () {
//   fetch(`https://restcountries.eu/rest/v2/name/india`)
//     .then((response) => response.json())
//     .then((data) => {
//       const { flag, name, region, population, languages, currencies } = data[1];
//       const html = `
//         <img src=${flag} alt="flag" class="flag" />
//         <h1 class="country__name">${name}</h1>
//         <p class="region">${region}</p>
//         <div class="info">
//           <p class="population">Population: ${+population.toFixed(2)}</p>
//           <p class="language">Language: ${languages[0].name}</p>
//           <p class="currency">currency: ${currencies[0].name}</p>
//         </div>
//         `;
//       card.innerHTML = "";
//       card.insertAdjacentHTML("afterbegin", html);
//     });
// };
// getData();
