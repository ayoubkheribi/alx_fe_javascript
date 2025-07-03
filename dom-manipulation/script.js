let quotes = [
  {
    text: "The important thing is not to stop questioning.",
    category: "Science"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    category: "Programming"
  },
  {
    text: "Education is the most powerful weapon you can use to change the world.",
    category: "Inspiration"
  },
  {
    text: "An investment in knowledge pays the best interest.",
    category: "Wisdom"
  }
];

function displayRandomQuote() {
  const randomQ = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomQ];

  const quoteDisplay = document.getElementById('quoteDisplay');

  quoteDisplay.innerHTML = `<p>${quote.text}</p><p>Category : ${quote.category}</p>`;

}

document.getElementById('newQuote').addEventListener('click', displayRandomQuote);
