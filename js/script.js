let changeBackgroungImage = () => {
  let body = document.querySelector(".js-body");
  let imageButton = document.querySelector(".js-imageButton");
  imageButton.addEventListener("click", () => {
    body.classList.toggle("sun");
  });
};

changeBackgroungImage();

let form = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let firstValue = document.querySelector(".js-firstValue");
let secondValue = document.querySelector(".js-secondValue");
let outcome;
let result = document.querySelector(".js-result");
let exchangeRate=document.querySelector(".js-exchangeRate");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  let currency1 = firstValue.value;
  let amount = +amountElement.value;
  let currency2 = secondValue.value;
  let Eur = 4.692;
  let Usd = 4.2928;
  let Gbp = 5.2571;
  let Pln = 1;
  let currencyChange = `${currency1}/${currency2}`;

  switch (currencyChange) {
    case "Eur/Eur":
      outcome = Eur / Eur;
      break;
    case "Eur/Usd":
      outcome = Eur / Usd;
      break;
    case "Eur/Gbp":
      outcome = Eur / Gbp;
      break;
    case "Eur/Pln":
      outcome = Eur / Pln;
      break;
    case "Usd/Usd":
      outcome = Usd / Usd;
      break;
    case "Usd/Eur":
      outcome = Usd / Eur;
      break;
    case "Usd/Gbp":
      outcome = Usd / Gbp;
      break;
    case "Usd/Pln":
      outcome = Usd / Pln;
      break;
    case "Pln/Pln":
      outcome = Pln / Pln;
      break;
    case "Pln/Eur":
      outcome = Pln / Eur;
      break;
    case "Pln/Usd":
      outcome = Pln / Usd;
      break;
    case "Pln/Gbp":
      outcome = Pln / Gbp;
      break;
    case "Gbp/Gbp":
      outcome = Gbp / Gbp;
      break;
    case "GbpPln/Eur":
      outcome = Gbp/ Eur;
      break;
    case "GbpPln/Usd":
      outcome = Gbp / Usd;
      break;
    case "GbpPln/Pln":
      outcome = Gbp / Pln;
      break;
  }

  let resultat = outcome * amount;
  result.innerText = `${resultat.toFixed(2)}`;
  exchangeRate.innerText=`${outcome.toFixed(2)}`;
});


