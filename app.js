const bitcoinPrice = document.querySelector(".bitcoin_price");

const getBitcoinPrice = async () => {
  const base = "https://api.coingecko.com/api/v3/simple/price";
  const query = `?ids=bitcoin&vs_currencies=usd`;

  const response = await fetch(base + query);

  const data = await response.json();
  console.log(data.bitcoin)
  return data;
};

getBitcoinPrice()
  .then((data) => {
    updateUI(data);
  })
  .catch((err) => console.log(err));



const updateUI = (data) => {

//  console.log(data.bitcoin.usd)

  bitcoinPrice.innerHTML = `
  <p class="bitcoin_price" >$ ${data.bitcoin.usd}</p>`
};
