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

  const quoteText = document.getElementById('newQuoteText');
  const quoteCat = document.getElementById('newQuoteCategory');

  const newQuote = {
    text: quoteText.value.trim(),
    category: quoteCat.value.trim()
  };
  if (quoteText && quoteCat) {
    quotes.push(newQuote);
    alert('new quote added');
    textInput.value = '';
    categoryInput.value = '';
  }
  else{
    alert("enter a quote")
  }

}


