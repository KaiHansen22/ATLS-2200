document.addEventListener('DOMContentLoaded', function() {
  const endpoint = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';
  const apiKey = 'X-Api-Key'; 

  const quoteTextElement = document.getElementById('js-quote-text');
  const quoteAuthorElement = document.getElementById('js-quote-author');
  const newQuoteButton = document.getElementById('js-new-quote');

  newQuoteButton.addEventListener('click', getNewQuote);

  function getNewQuote() {
      fetch(endpoint, {
          headers: {
              'X-Api-Key': apiKey
          }
      })
      .then(response => {
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          const quote = data[0]; // Assuming API returns an array with a single quote object
          displayQuote(quote);
      })
      .catch(error => {
          console.error('Error fetching quote:', error);
          alert('Failed to fetch quote. Please try again later.');
      });
  }

  function displayQuote(quote) {
      quoteTextElement.textContent = `"${quote.quote}"`;
      quoteAuthorElement.textContent = `- ${quote.author}`;
  }
});
