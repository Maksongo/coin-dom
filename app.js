const WelcomeBoxCoinsPart = document.querySelector(".welcome_box_coinsPart");

const getBitcoinPrice = async () => {

  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en')

  const data = await response.json();
  console.log(data)
  return data;
};

getBitcoinPrice()
  .then((data) => {
    updateUI(data);
  })
  .catch((err) => console.log(err));



const updateUI = (data) => {

  WelcomeBoxCoinsPart.innerHTML = `
  <div>
  <img src="${data[0].image}}" alt="" \ width="100" height="100" />
  <p>${data[0].name} <span>${data[0].price_change_percentage_24h}</span></p>
  <p>$ ${data[0].current_price}</p>
</div>
<div>
<img src="${data[1].image}}" alt="" \ width="100" height="100" />
<p>${data[1].name} <span>${data[1].price_change_percentage_24h}</span></p>
<p>$ ${data[1].current_price}</p>
</div>
<div>
<img src="${data[2].image}}" alt="" \ width="100" height="100" />
<p>${data[2].name} <span>${data[2].price_change_percentage_24h}</span></p>
<p>$ ${data[2].current_price}</p>
</div>
<div>
<img src="${data[3].image}}" alt="" \ width="100" height="100" />
<p>${data[3].name} <span>${data[3].price_change_percentage_24h}</span></p>
<p>$ ${data[3].current_price}</p>
</div>
</div>
`

};
