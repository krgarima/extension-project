const quote = document.querySelector(".quote");

const generateRandomQuote = () => {
  try {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        quote.innerText = data[Math.floor(Math.random() * 50)].text;
      });
  } catch (error) {
    alert(error);
  }
};

generateRandomQuote();
