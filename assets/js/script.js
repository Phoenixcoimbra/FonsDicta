// Function to fetch a random quote from the Forismatic API
function getRandomQuote() {
    fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
      .then(response => response.json())
      .then(data => {
        // Update UI with the retrieved quote and author
        updateQuoteDisplay(data.quoteText, data.quoteAuthor);
      })
      .catch(error => console.error(error));
  }
  
  // Function to update the UI elements with the fetched quote and author
  function updateQuoteDisplay(quoteText, quoteAuthor) {
    document.getElementById('quote-text').textContent = quoteText;
    if (quoteAuthor) { // Check if author information is available
      document.getElementById('quote-author').textContent = '- ' + quoteAuthor;
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
  