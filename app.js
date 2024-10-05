const WelcomeBoxCoinsPart = document.querySelector(".welcome_box_coinsPart");
const contentTable = document.querySelector(".content-table");

var buttons = [
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

let emptyString = ``;

for (let i = 0; i < 4; i++) {
  emptyString += `<div>
  <img src="${data[i].image}}" alt="" \ width="100" height="100" />
  <p>${data[i].name} <span class="welcome_box_any_price_color">${data[i].price_change_percentage_24h.toFixed(2)}%</span></p>
  <p>$ ${data[i].current_price.toLocaleString('en-EN')}</p>
  </div>`
}

WelcomeBoxCoinsPart.innerHTML = emptyString;

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
          <tr onclick="showCoinDetails('${data[0].id}')">
            <td>
            <img src="${data[0].image}" alt="" \ width="42" height="42" />
              <p>${data[0].name}</p>
            </td>
            <td>${data[0].current_price.toLocaleString('en-EN')}</td>
            <td>${data[0].price_change_percentage_24h.toFixed(2)} %</td>
            <td>$ ${data[0].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr onclick="showCoinDetails('${data[1].id}')">
          <td>
          <img src="${data[1].image}" alt="" \ width="42" height="42" />
            <p>${data[1].name}</p>
          </td>
          <td>${data[1].current_price.toLocaleString('en-EN')}</td>
          <td>${data[1].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[1].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr onclick="showCoinDetails('${data[2].id}')">
          <td>
          <img src="${data[2].image}" alt="" \ width="42" height="42" />
            <p>${data[2].name}</p>
          </td>
          <td>${data[2].current_price.toLocaleString('en-EN')}</td>
          <td>${data[2].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[2].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr>
          <td>
          <img src="${data[3].image}" alt="" \ width="42" height="42" />
            <p>${data[3].name}</p>
          </td>
          <td>${data[3].current_price.toLocaleString('en-EN')}</td>
          <td>${data[3].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[3].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr>
          <td>
          <img src="${data[4].image}" alt="" \ width="42" height="42" />
            <p>${data[4].name}</p>
          </td>
          <td>${data[4].current_price.toLocaleString('en-EN')}</td>
          <td>${data[4].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[4].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr>
          <td>
          <img src="${data[5].image}" alt="" \ width="42" height="42" />
            <p>${data[5].name}</p>
          </td>
          <td>${data[5].current_price.toLocaleString('en-EN')}</td>
          <td>${data[5].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[5].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr>
          <td>
          <img src="${data[6].image}" alt="" \ width="42" height="42" />
            <p>${data[6].name}</p>
          </td>
          <td>${data[6].current_price.toLocaleString('en-EN')}</td>
          <td>${data[6].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[6].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr>
          <td>
          <img src="${data[7].image}" alt="" \ width="42" height="42" />
            <p>${data[7].name}</p>
          </td>
          <td>${data[7].current_price.toLocaleString('en-EN')}</td>
          <td>${data[7].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[7].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr>
          <td>
          <img src="${data[8].image}" alt="" \ width="42" height="42" />
            <p>${data[8].name}</p>
          </td>
          <td>${data[8].current_price.toLocaleString('en-EN')}</td>
          <td>${data[8].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[8].market_cap.toLocaleString('en-EN')}</td>
          </tr>
          <tr>
          <td>
          <img src="${data[9].image}" alt="" \ width="42" height="42" />
            <p>${data[9].name}</p>
          </td>
          <td>${data[9].current_price.toLocaleString('en-EN')}</td>
          <td>${data[9].price_change_percentage_24h.toFixed(2)} %</td>
          <td>$ ${data[9].market_cap.toLocaleString('en-EN')}</td>
          </tr>
        </table>`;

MakePosNeg("td:nth-child(3)");
MakePosNeg(".welcome_box_any_price_color");
};

let refreshPage = (data) => {
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      console.log("you clicked me");
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
  var TDs = document.querySelectorAll(arg);

  for (var i = 0; i < TDs.length; i++) {
    var temp = TDs[i];
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


// Создание новой страницы с информацией о монете при клике на одну из монет в таблице

function showCoinDetails(coinId) {
  // Перенаправление на страницу с URL-параметром
  window.location.href = `coin_details.html?id=${coinId}`; 
}



async function loadCoinDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const coinId = urlParams.get('id'); // Получаем ID из URL-параметра

  if (coinId) {
      try {
          const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
          const data = await response.json();

          const coinDetailsElement = document.getElementById('coin-details');
          if (coinDetailsElement) {
              coinDetailsElement.innerHTML = `
      <div class="coin-content__img">
        <img src="${data.image.small}" alt="${data.name}">
        <p>${data.name}</p>
        <p>Rank: ${data.market_cap_rank}</p>
      </div>
      <div class="coin-content__text">
        <div class="coin-content__text__numb">
          <p>24h Change: ${data.market_data.price_change_percentage_24h.toFixed(2)} %</p>
          <p>Price: ${data.market_data.current_price.usd}</p>
          <p>Symbol: ${data.symbol}</p>
        </div>
        <div class="coin-content__text_disc">
          <p>${data.description.en}</p>
        </div>
      </div>`;
          } else {
              console.error("Элемент с ID 'coin-details' не найден!");
          }
      } catch (error) {
          console.error("Ошибка при получении данных:", error);
      }
  } else {
      console.error("ID криптовалюты не найден в URL.");
  }
}

// Запустите функцию loadCoinDetails после загрузки DOM
document.addEventListener('DOMContentLoaded', loadCoinDetails);

