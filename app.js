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

const rows = data.slice(0, 10).map((coin) => `
  <tr onclick="showCoinDetails('${coin.id}')">
    <td>
      <img src="${coin.image}" alt="${coin.name}" width="42" height="42" />
      <p>${coin.name}</p>
    </td>
    <td>${coin.current_price.toLocaleString('en-EN')}</td>
    <td>${coin.price_change_percentage_24h.toFixed(2)} %</td>
    <td>$ ${coin.market_cap.toLocaleString('en-EN')}</td>
  </tr>
`).join('');

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
    <tbody>
      ${rows}
    </tbody>
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
  header.classList.toggle("sticky", window.scrollY > 40);
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
          <div class="coinpage_coinbox">
      <div class="coinpage_imageAndInfo">
      <img class="coinpage_image" src="${data.image.large}" alt="${data.name}">
      <h1>${data.name}</h1>
      <p>Rank: #${data.market_cap_rank}</p> 
    </div>
      <div class="coinpage_textpart">
        <div class="coinpage_textpart_toppart">
          <div class="coinpage_textpart_toppart_24h">
            <p>24h Change: <span>${data.market_data.price_change_percentage_24h.toFixed(2)}%</span></p>
          </div>
          <div class="coinpage_textpart_toppart_price">
            <p>Price: <span>${data.market_data.current_price.usd.toLocaleString('en-EN')}</span></p>
          </div>
          <div class="coinpage_textpart_toppart_symbol">
            <p>Symbol: ${data.symbol}</p>
          </div>
        </div>
        <div class="coinpage_textpart_bottompart">
          <p>${data.description.en}</p>
        </div>
      </div>
    </div>`;
    MakePosNeg("span");
    let header = document.querySelector("header");
    // header.style.position = "static";
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


document.addEventListener("DOMContentLoaded", () => {
  const headerHeight = 63; // Высота хедера
  const MobileVersionBox = document.querySelector("#mobile_version_boxID");
  const mobileVersionButton = document.querySelector("#mobile_version_button");
  const mobileVersionCloseButton = document.querySelector("#moblie_verison_closebuttonID");

  const buttonsConfig = [
    { selector: "#HomeNavButtonID", target: "#HomeSectionID" },
    { selector: "#MarketNavButtonID", target: "#MarketSectionID" },
    { selector: "#ChooseUsNavButtonID", target: "#ChooseUsSectionID" },
    { selector: "#JoinNavButtonID", target: "#JoinSectionID" }
  ];

  // Обработчик для открытия мобильного меню
  if (mobileVersionButton) {
    mobileVersionButton.onclick = () => {
      MobileVersionBox.style.display = "block";
      MobileVersionBox.style.transform = "translateX(0%)";
    };
  }

  // Обработчик для закрытия мобильного меню
  if (mobileVersionCloseButton) {
    mobileVersionCloseButton.addEventListener("click", () => {
      MobileVersionBox.style.transform = "translateX(-100%)";
    });
  }

  // Функция для обработки нажатий кнопок навигации
  buttonsConfig.forEach(({ selector, target }) => {
    document.querySelectorAll(selector).forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();

        // Находим целевую секцию
        const targetElement = document.querySelector(target);
        if (targetElement) {
          // Получаем позицию секции и учитываем высоту хедера
          const targetPosition = targetElement.offsetTop - headerHeight;

          // Прокручиваем страницу с плавной анимацией
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
          });

          // Закрываем мобильное меню (если оно открыто)
          MobileVersionBox.style.transform = "translateX(-100%)";
        }
      });
    });
  });
});

function goBack() {
  const currentUrl = window.location.href; // Получаем текущий полный URL
  const currentPath = window.location.pathname; // Получаем путь после домена

  // Если путь содержит "coin-dom", перенаправляем на корневую страницу "coin-dom"
  if (currentUrl.includes("maksongo.github.io") && currentPath.includes("/coin-dom")) {
    window.location.href = "https://maksongo.github.io/coin-dom";
  } else {
    // Иначе перенаправляем на главную страницу текущего домена
    window.location.href = window.location.origin;
  }
}