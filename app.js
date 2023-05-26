const WelcomeBoxCoinsPart = document.querySelector(".welcome_box_coinsPart");
const contentTable = document.querySelector(".content-table");

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
  <p>${data[0].name} <span>${data[0].price_change_percentage_24h}%</span></p>
  <p>$ ${data[0].current_price}</p>
</div>
<div>
<img src="${data[1].image}}" alt="" \ width="100" height="100" />
<p>${data[1].name} <span>${data[1].price_change_percentage_24h}%</span></p>
<p>$ ${data[1].current_price}</p>
</div>
<div>
<img src="${data[2].image}}" alt="" \ width="100" height="100" />
<p>${data[2].name} <span>${data[2].price_change_percentage_24h}%</span></p>
<p>$ ${data[2].current_price}</p>
</div>
<div>
<img src="${data[3].image}}" alt="" \ width="100" height="100" />
<p>${data[3].name} <span>${data[3].price_change_percentage_24h}%</span></p>
<p>$ ${data[3].current_price}</p>
</div>
</div>
`;

  contentTable.innerHTML = `
<table class="content-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Last 7 days</th>
            </tr>
          </thead>
          <tr>
            <td>
            <img src="${data[0].image}" alt="" \ width="42" height="42" />
              <p>${data[0].name}</p>
            </td>
            <td>${data[0].current_price}</td>
            <td>${data[0].price_change_percentage_24h}</td>
            <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[1].image}" alt="" \ width="42" height="42" />
            <p>${data[1].name}</p>
          </td>
          <td>${data[1].current_price}</td>
          <td>${data[1].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[2].image}" alt="" \ width="42" height="42" />
            <p>${data[2].name}</p>
          </td>
          <td>${data[2].current_price}</td>
          <td>${data[2].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[3].image}" alt="" \ width="42" height="42" />
            <p>${data[3].name}</p>
          </td>
          <td>${data[3].current_price}</td>
          <td>${data[3].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[4].image}" alt="" \ width="42" height="42" />
            <p>${data[4].name}</p>
          </td>
          <td>${data[4].current_price}</td>
          <td>${data[4].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[5].image}" alt="" \ width="42" height="42" />
            <p>${data[5].name}</p>
          </td>
          <td>${data[5].current_price}</td>
          <td>${data[5].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[6].image}" alt="" \ width="42" height="42" />
            <p>${data[6].name}</p>
          </td>
          <td>${data[6].current_price}</td>
          <td>${data[6].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[7].image}" alt="" \ width="42" height="42" />
            <p>${data[7].name}</p>
          </td>
          <td>${data[7].current_price}</td>
          <td>${data[7].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[8].image}" alt="" \ width="42" height="42" />
            <p>${data[8].name}</p>
          </td>
          <td>${data[8].current_price}</td>
          <td>${data[8].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
          <tr>
          <td>
          <img src="${data[9].image}" alt="" \ width="42" height="42" />
            <p>${data[9].name}</p>
          </td>
          <td>${data[9].current_price}</td>
          <td>${data[9].price_change_percentage_24h}</td>
          <td>тут будет график</td>
          </tr>
        </table>`;
};
