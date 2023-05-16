const getBitcoinPrice = async () => {
  const base = "https://api.coingecko.com/api/v3/simple/price";
  const query = `?ids=bitcoin&vs_currencies=usd`;

  const response = await fetch(base + query);

  const data = await response.json();
  console.log(data);
  return data[0];
};

getBitcoinPrice();
