const WelcomeBitcoinPrice = document.querySelector(".welcome_bitcoin_price");
const WelcomeEthPrice = document.querySelector(".welcome_eth_price")
const WelcomeTehPrice = document.querySelector(".welcome_teh_price")
const WelcomeBNBPrice = document.querySelector(".welcome_bnb_price")

const tokens = ['bitcoin','ethereum','Tether','binancecoin','usd-coin','ripple','cardano','staked-ether','dogecoin','matic-network'];

const getBitcoinPrice = async () => {
  const base = "https://api.coingecko.com/api/v3/simple/price";
  const query = `?ids=${tokens}&vs_currencies=usd`;

  const response = await fetch(base + query);

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

  const { bitcoin, ethereum } = data;

  WelcomeBitcoinPrice.innerHTML = `
  <p class="welcome_bitcoin_price" >$ ${bitcoin.usd}</p>`

  WelcomeEthPrice.innerHTML = `
  <p class="welcome_eth_price" >$ ${ethereum.usd}</p>`

};
