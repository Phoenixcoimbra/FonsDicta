
// // Function to fetch a random quote from the Forismatic API

function getRandomQuote() {
    fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1', {
        headers: {
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
            'X-RapidAPI-Key': '3e06051827msh5707bffecfb7e5bp19f6f7jsn8140510c90b0'
        }
    })
    .then(response => response.json())
    .then(data => {
        const quote = data[0]; // Access the first quote in the response array
        updateQuoteDisplay(quote.text, quote.author); // Call the updateQuoteDisplay function with the quote text and author
        console.log(quote.author, quote.text); // Output the quote to the console
    })
    .catch(error => {
        console.error('An error occurred:', error.message);
        console.error(error.stack);
    });
}

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
