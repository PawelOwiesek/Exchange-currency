{
  const changeBackgroungImage = () => {
    const body = document.querySelector(".js-body");
    const imageButton = document.querySelector(".js-imageButton");
    imageButton.addEventListener("click", () => {
      body.classList.toggle("sun");
    });
  };
  
  changeBackgroungImage();
  
  const form = document.querySelector(".js-form");
  const amountElement = document.querySelector(".js-amount");
  const firstValue = document.querySelector(".js-firstValue");
  const secondValue = document.querySelector(".js-secondValue");
  let outcome;
  const result = document.querySelector(".js-result");
  const exchangeRate=document.querySelector(".js-exchangeRate");
  
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const currency1 = firstValue.value;
    const amount = +amountElement.value;
    const currency2 = secondValue.value;
    const Eur = 4.692;
    const Usd = 4.2928;
    const Gbp = 5.2571;
    const Pln = 1;
    const currencyChange = `${currency1}/${currency2}`;
  
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
  
    const resultat = outcome * amount;
    result.innerText = `${resultat.toFixed(2)}`;
    exchangeRate.innerText=`${outcome.toFixed(2)}`;
  });
  
}

