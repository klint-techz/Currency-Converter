async function exchange() {
let amount = document.getElementById("amount").value;
let from = document.getElementById("fromCurrency").value;
let to = document.getElementById("toCurrency").value;
let displayResult = document.getElementById("result");

//to make sure the amount field input is valid

if(amount === "" || amount <= 0 ) {
    displayResult.innerHTML = "please select a valid number";
    return;
}

  // Fetch the live exchange rates
  try {
    let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    let data = await response.json();

    // Get the conversion rate
    let rate = data.rates[to];

    // Calculate result
    let convertedAmount = (amount * rate).toFixed(2);
    // Display result
    displayResult.innerHTML= (`${amount} ${from} =  ${convertedAmount} ${to}`);

  } catch (error) {
    displayResult.textContent = "Error fetching exchange rates.";
    return;
  }
}