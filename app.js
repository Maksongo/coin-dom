const WelcomeBitcoinPrice = document.querySelector(".welcome_bitcoin");
const WelcomeEthPrice = document.querySelector(".welcome_eth_price")
const WelcomeTehPrice = document.querySelector(".welcome_teh_price")
const WelcomeBNBPrice = document.querySelector(".welcome_bnb_price")

const WelcomeBox = document.querySelector(".welcome_box")

const tokens = ['bitcoin','ethereum','Tether','binancecoin','usd-coin','ripple','cardano','staked-ether','dogecoin','matic-network'];



const getBitcoinPrice = async () => {

  // classic fetch

  // const base = "https://api.coingecko.com/api/v3/simple/price";
  // const query = `?ids=${tokens}&vs_currencies=usd`;

  // const response = await fetch(base + query);

  // const data = await response.json();
  // console.log(data)
  // return data;

  // modern fetch

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

  // const { bitcoin, ethereum, tether, binancecoin } = data;

  console.log('hello')

  WelcomeBitcoinPrice.innerHTML = `
  <img src="${data[0].image}}" alt="" \ width="100" height="100" />
  <p class="welcome_nameAND24h1">${data[6].name} ${data[0].price_change_percentage_24h}</p>
  <p class="welcome_bitcoin_price" >$ ${data[0].current_price}</p>`
  WelcomeEthPrice.innerHTML = `
  <p class="welcome_eth_price" >$ ${data[1].current_price}</p>`
  WelcomeTehPrice.innerHTML = `
  <p class="welcome_eth_price" >$ ${data[2].current_price}</p>`
  WelcomeBNBPrice.innerHTML = `
  <p class="welcome_eth_price" >$ ${data[3].current_price}</p>`

};


//   <span>${data[0].price_change_percentage_24h}</span>