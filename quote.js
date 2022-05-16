const quote = document.querySelector(".quote");

const generateRandomQuote = () => {
  try {
    fetch("https://zenquotes.io/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        quote.innerText = data[Math.floor(Math.random() * 50)].q;
      });
  } catch (error) {
    alert(error);
  }
};

generateRandomQuote();
