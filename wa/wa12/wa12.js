document.addEventListener('DOMContentLoaded', function () {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const getQuoteButton = document.getElementById('get-quote');
  
    const apiKey = 'X-Api-Key'; // Replace with your API key from API Ninjas
  
    // Event listener for Get Quote button
    getQuoteButton.addEventListener('click', getQuote);
  
    // Function to fetch a random quote from the API
    function getQuote() {
      const category = 'inspirational'; // Example category
      const endpoint = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
  
      fetch(endpoint, {
        headers: {
          'X-Api-Key': apiKey
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          displayQuote(data);
        })
        .catch(error => {
          console.error('Error fetching quote:', error);
          alert('Failed to fetch quote. Please try again later.');
        });
    }
  
    // Function to display the fetched quote
    function displayQuote(quoteData) {
      const quote = quoteData[0]; // Assuming API returns an array with a single quote object
      quoteText.textContent = `"${quote.quote}"`;
      quoteAuthor.textContent = `- ${quote.author}`;
    }
  });
  