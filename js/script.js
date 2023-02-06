{
  const showWelcomeMessage = () => {
    console.log("Hello");
  };

  const changeBackgroungImage = () => {
    const body = document.querySelector(".js-body");
    const imageButton = document.querySelector(".js-imageButton");
    imageButton.addEventListener("click", () => {
      body.classList.toggle("sun");
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const amountElement = document.querySelector(".js-amount");
    const amount = +amountElement.value;
    const outcome = calculateResult();
    const result = document.querySelector(".js-result");
    updateResultText(outcome, amount, result);
    updateExchangeRateText(outcome);
    document.querySelector(".js-form").reset(); 
    document.querySelector(".js-amount").focus();
  };

  const calculateResult = () => {
    const firstValue = document.querySelector(".js-firstValue");
    const secondValue = document.querySelector(".js-secondValue");
    const currency1 = firstValue.value;
    const currency2 = secondValue.value;
    const Eur = 4.692;
    const Usd = 4.2928;
    const Gbp = 5.2571;
    const Pln = 1;
    const currencyChange = `${currency1}/${currency2}`;

    switch (currencyChange) {
      case "Eur/Eur":
        return Eur / Eur;

      case "Eur/Usd":
        return Eur / Usd;

      case "Eur/Gbp":
        return Eur / Gbp;

      case "Eur/Pln":
        return Eur / Pln;

      case "Usd/Usd":
        return Usd / Usd;

      case "Usd/Eur":
        return Usd / Eur;

      case "Usd/Gbp":
        return Usd / Gbp;

      case "Usd/Pln":
        return Usd / Pln;

      case "Pln/Pln":
        return Pln / Pln;

      case "Pln/Eur":
        return Pln / Eur;

      case "Pln/Usd":
        return Pln / Usd;

      case "Pln/Gbp":
        return Pln / Gbp;

      case "Gbp/Gbp":
        return Gbp / Gbp;

      case "Gbp/Eur":
        return Gbp / Eur;

      case "Gbp/Usd":
        return Gbp / Usd;

      case "Gbp/Pln":
        return Gbp / Pln;
    }
  };

  const updateResultText = (outcome, amount, result) => {
    const calculation = outcome * amount;
    result.innerText = `${calculation.toFixed(2)}`;
  };

  const updateExchangeRateText = (calculation) => {
    const exchangeRate = document.querySelector(".js-exchangeRate");
    exchangeRate.innerText = `${calculation.toFixed(2)}`;
  };

  const init = () => {
    showWelcomeMessage();
    changeBackgroungImage();
    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };
  init();
}
