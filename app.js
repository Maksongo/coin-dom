// const WelcomeBoxCoinsPart = document.querySelector(".welcome_box_coinsPart");
// const contentTable = document.querySelector(".content-table");

// const buttonPageOne = document.querySelector(".button_page_1");
// const buttonPageTwo = document.querySelector(".button_page_2");
// const buttonPageThree = document.querySelector(".button_page_3");
// const buttonPageFour = document.querySelector(".button_page_4");
// const buttonPageFive = document.querySelector(".button_page_5");

// let currentPage = 1;

// let getBitcoinPrice = async () => {
//   const response = await fetch(
//     `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h&locale=en`
//   );

//   const data = await response.json();
//   console.log(data);
//   return data;
// };

// getBitcoinPrice()
//   .then((data) => {
//     updateUI(data);
//     refreshPage(data);
//   })
//   .catch((err) => console.log(err));

// let updateUI = (data) => {
//   WelcomeBoxCoinsPart.innerHTML = `
//   <div>
//   <img src="${data[0].image}}" alt="" \ width="100" height="100" />
//   <p>${data[0].name} <span class="welcome_box_any_price_color">${data[0].price_change_percentage_24h.toFixed(2)}%</span></p>
//   <p>$ ${data[0].current_price.toLocaleString('en-EN')}</p>
// </div>
// <div>
// <img src="${data[1].image}}" alt="" \ width="100" height="100" />
// <p>${data[1].name} <span class="welcome_box_any_price_color">${data[1].price_change_percentage_24h.toFixed(2)}%</span></p>
// <p>$ ${data[1].current_price.toLocaleString('en-EN')}</p>
// </div>
// <div>
// <img src="${data[2].image}}" alt="" \ width="100" height="100" />
// <p>${data[2].name} <span class="welcome_box_any_price_color">${data[2].price_change_percentage_24h.toFixed(2)}%</span></p>
// <p>$ ${data[2].current_price.toLocaleString('en-EN')}</p>
// </div>
// <div>
// <img src="${data[3].image}}" alt="" \ width="100" height="100" />
// <p>${data[3].name} <span class="welcome_box_any_price_color">${data[3].price_change_percentage_24h.toFixed(2)}%</span></p>
// <p>$ ${data[3].current_price.toLocaleString('en-EN')}</p>
// </div>
// </div>
// `;

//   contentTable.innerHTML = `
// <table class="content-table">
//           <thead>
//             <tr>
//               <th>Coin</th>
//               <th>Price</th>
//               <th>24h Change</th>
//               <th>Last 7 days</th>
//             </tr>
//           </thead>
//           <tr>
//             <td>
//             <img src="${data[0].image}" alt="" \ width="42" height="42" />
//               <p>${data[0].name}</p>
//             </td>
//             <td>${data[0].current_price.toLocaleString('en-EN')}</td>
//             <td>${data[0].price_change_percentage_24h.toFixed(2)} %</td>
//             <td>$ ${data[0].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[1].image}" alt="" \ width="42" height="42" />
//             <p>${data[1].name}</p>
//           </td>
//           <td>${data[1].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[1].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[1].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[2].image}" alt="" \ width="42" height="42" />
//             <p>${data[2].name}</p>
//           </td>
//           <td>${data[2].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[2].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[2].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[3].image}" alt="" \ width="42" height="42" />
//             <p>${data[3].name}</p>
//           </td>
//           <td>${data[3].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[3].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[3].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[4].image}" alt="" \ width="42" height="42" />
//             <p>${data[4].name}</p>
//           </td>
//           <td>${data[4].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[4].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[4].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[5].image}" alt="" \ width="42" height="42" />
//             <p>${data[5].name}</p>
//           </td>
//           <td>${data[5].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[5].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[5].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[6].image}" alt="" \ width="42" height="42" />
//             <p>${data[6].name}</p>
//           </td>
//           <td>${data[6].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[6].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[6].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[7].image}" alt="" \ width="42" height="42" />
//             <p>${data[7].name}</p>
//           </td>
//           <td>${data[7].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[7].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[7].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[8].image}" alt="" \ width="42" height="42" />
//             <p>${data[8].name}</p>
//           </td>
//           <td>${data[8].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[8].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[8].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//           <tr>
//           <td>
//           <img src="${data[9].image}" alt="" \ width="42" height="42" />
//             <p>${data[9].name}</p>
//           </td>
//           <td>${data[9].current_price.toLocaleString('en-EN')}</td>
//           <td>${data[9].price_change_percentage_24h.toFixed(2)} %</td>
//           <td>$ ${data[9].market_cap.toLocaleString('en-EN')}</td>
//           </tr>
//         </table>`;

// MakePosNeg();
// WelcomeMakePosNeg();
// };

let refreshPage = (data) => {
  buttonPageOne.addEventListener("click", () => {
    console.log("you clicked me");
    currentPage = 1;
    getBitcoinPrice()
      .then((data) => {
        updateUI(data);
        refreshPage(data);
      })
      .catch((err) => console.log(err));
    updateUI(data);
  });

  buttonPageTwo.addEventListener("click", () => {
    console.log("you clicked me");
    currentPage = 2;
    getBitcoinPrice()
      .then((data) => {
        updateUI(data);
        refreshPage(data);
      })
      .catch((err) => console.log(err));
    updateUI(data);
  });

  buttonPageThree.addEventListener("click", () => {
    console.log("you clicked me");
    currentPage = 3;
    getBitcoinPrice()
      .then((data) => {
        updateUI(data);
        refreshPage(data);
      })
      .catch((err) => console.log(err));
    updateUI(data);
  });

  buttonPageFour.addEventListener("click", () => {
    console.log("you clicked me");
    currentPage = 4;
    getBitcoinPrice()
      .then((data) => {
        updateUI(data);
        refreshPage(data);
      })
      .catch((err) => console.log(err));
    updateUI(data);
  });

  buttonPageFive.addEventListener("click", () => {
    console.log("you clicked me");
    currentPage = 5;
    getBitcoinPrice()
      .then((data) => {
        updateUI(data);
        refreshPage(data);
      })
      .catch((err) => console.log(err));
    updateUI(data);
  });
};

function MakePosNeg() {
  var TDs = document.querySelectorAll("td:nth-child(3)");

  for (var i = 0; i < TDs.length; i++) {
    var temp = TDs[i];
    if (temp.firstChild.nodeValue.indexOf("-") == 0) {
      temp.className = "negative";
    } else {
      temp.className = "positive";
    }
  }
}

function WelcomeMakePosNeg() {
  var Num = document.querySelectorAll(".welcome_box_any_price_color");

  for (var i = 0; i < Num.length; i++) {
    var temp = Num[i];
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