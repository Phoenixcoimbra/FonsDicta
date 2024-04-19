

// Function to fetch a random quote from the Forismatic API

    function getRandomQuote() {
        fetch('https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/quotes/')
          .then(response => response.json())
          .then(data => {
            updateQuoteDisplay(data.quoteText, data.quoteAuthor);
          })
          .catch(error => {
            console.error('An error occurred:', error.message);
            console.error(error.stack);
          });

  // Function to update the UI elements with the fetched quote and author
  function updateQuoteDisplay(quoteText, quoteAuthor) {
    document.getElementById('quote-text').textContent = quoteText;
    if (quoteAuthor) { // Check if author information is available
      document.getElementById('quote-author').textContent = '~ ' + quoteAuthor;
    } else {
      document.getElementById('quote-author').textContent = '';
    }
  }
  
  // Call the getRandomQuote function on page load to display an initial quote
  getRandomQuote();
  
  // Add event listener to the "New Quote" button (if implemented)
  const newQuoteButton = document.getElementById('new-quote-button');
  if (newQuoteButton) {
    newQuoteButton.addEventListener('click', getRandomQuote);
  }
  