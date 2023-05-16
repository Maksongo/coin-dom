const getBitcoinPrice = async () => {
  const base = "https://api.coingecko.com/api/v3/simple/price";
  const query = `?ids=bitcoin&vs_currencies=usd`;

  const response = await fetch(base + query);

  const data = await response.json();
  return data;
};

getBitcoinPrice()
  .then((data) => {
    console.log(data.bitcoin.usd);
  })
  .catch((err) => console.log(err));

  