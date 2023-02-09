{
    const welcome = () => {
        console.log("Witam serdecznie deweloperów");
    }
    welcome();

    const calculateResult = (amount, currency) => {
        const USD = 4.35;
        const EURO = 4.71;
        const CHF = 4.73;
        const GBP = 5.37;

        switch (currency) {
            case "USD":
                return amount / USD;

            case "EURO":
                return amount / EURO;

            case "CHF":
                return amount / CHF;

            case "GBP":
                return amount / GBP;
        }
    }

    const updateResultText = (amount, result, currency) => {
        const exchangeElement = document.querySelector(".js-exchange");
        exchangeElement.innerText = `${result.toFixed(2)} ${currency}`
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }

    init();

}
