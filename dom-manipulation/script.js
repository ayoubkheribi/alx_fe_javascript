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

  const showRandomQuote = document.getElementById('quoteDisplay');

  showRandomQuote.innerHTML = `<p>${quote.text}</p><p>Category : ${quote.category}</p>`;

}

document.getElementById('newQuote').addEventListener('click', displayRandomQuote);

function addQuote() {
  const formC = document.createElement('div');

  const newQuoteText = document.createElement('input');
  newQuoteText.id = "newQuoteText";
  newQuoteText.placeholder = "Enter a new quote";

  const newQuoteCategory = document.createElement('input');
  newQuoteCategory.id = "newQuoteCategory";
  newQuoteCategory.placeholder = "Enter quote category";

  const buttun = document.createElement('button');
  buttun.textContent = "Add Quote";

  


  formC.appendChild(newQuoteText);
  formC.appendChild(newQuoteCategory);


  document.body.appendChild(formC);

}


