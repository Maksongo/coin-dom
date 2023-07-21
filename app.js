const WelcomeBoxCoinsPart = document.querySelector(".welcome_box_coinsPart");
const contentTable = document.querySelector(".content-table");
let buttons = [
  document.querySelector(".button_page_1"),
  document.querySelector(".button_page_2"),
  document.querySelector(".button_page_3"),
  document.querySelector(".button_page_4"),
  document.querySelector(".button_page_5"),
];

let currentPage = 1;
let getBitcoinPrice = async () => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h&locale=en`
  );

  const data = await response.json();
  console.log(data);
  return data;
};

getBitcoinPrice()
  .then((data) => {
    updateUI(data);
    refreshPage(data);
  })
  .catch((err) => console.log(err));

let updateUI = (data) => {

let WelcomeEmptyString = ``;
for (let i = 0; i < 4; i++) {
  WelcomeEmptyString += `<div>
  <img src="${data[i].image}}" alt="" \ width="100" height="100" />
  <p>${data[i].name} <span class="welcome_box_any_price_color">${data[i].price_change_percentage_24h.toFixed(2)}%</span></p>
  <p>$ ${data[i].current_price.toLocaleString('en-EN')}</p>
  </div>`
}
WelcomeBoxCoinsPart.innerHTML = WelcomeEmptyString;

ContentTableEmptyString = ``;
for (let i = 0; i < 10; i++) {
  ContentTableEmptyString += `
  <tr>
  <td>
  <img src="${data[i].image}" alt="" \ width="42" height="42" />
    <p>${data[i].name}</p>
  </td>
  <td>${data[i].current_price.toLocaleString('en-EN')}</td>
  <td>${data[i].price_change_percentage_24h.toFixed(2)} %</td>
  <td>$ ${data[i].market_cap.toLocaleString('en-EN')}</td>
</tr>
  `
}
contentTable.innerHTML = `<table class="content-table">
<thead>
  <tr>
    <th>Coin</th>
    <th>Price</th>
    <th>24h Change</th>
    <th>Last 7 days</th>
  </tr>
</thead>${ContentTableEmptyString}`;

MakePosNeg("td:nth-child(3)");
MakePosNeg(".welcome_box_any_price_color");
};

let refreshPage = (data) => {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentPage = index+1;
      getBitcoinPrice()
        .then((data) => {
          updateUI(data);
          refreshPage(data);
        })
        .catch((err) => console.log(err));
      updateUI(data);
    });
  })
};

function MakePosNeg(arg) {
  let TDs = document.querySelectorAll(arg);

  for (let i = 0; i < TDs.length; i++) {
    let temp = TDs[i];
    if (temp.firstChild.nodeValue.indexOf("-") == 0) {
      temp.className = "negative";
    } else {
      temp.className = "positive";
    }
  }
}

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 180);
});