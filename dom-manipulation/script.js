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

function createAddQuoteForm() {
  const formC = document.createElement('div');

  const newQuoteText = document.createElement('input');
  newQuoteText.id = "newQuoteText";
  newQuoteText.placeholder = "Enter a new quote";

  const newQuoteCategory = document.createElement('input');
  newQuoteCategory.id = "newQuoteCategory";
  newQuoteCategory.placeholder = "Enter quote category";

  const buttun = document.createElement('button');
  buttun.textContent = "Add Quote";

  buttun.addEventListener('click', function addQuote() {
    const newText = newQuoteText.value.trim();
    const newCategory = newQuoteCategory.value.trim();

    const newQuote = {
      text: newText,
      category: newCategory
    };
    if (newText && newCategory) {
      quotes.push(newQuote);
      alert("quote added");
    }
    else{
      alert("enter a quote");
    }

    newQuoteText.value = "";
    newQuoteCategory.value = "";

  })


  formC.appendChild(newQuoteText);
  formC.appendChild(newQuoteCategory);
  formC.appendChild(buttun);


  document.body.appendChild(formC);

}


