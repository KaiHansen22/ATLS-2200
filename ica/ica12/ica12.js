document.addEventListener('DOMContentLoaded', function () {
    const newQuoteButton = document.querySelector('#js-new-quote');
    const quoteText = document.getElementById('js-quote-text');
  
    // Event listener for the new quote button
    newQuoteButton.addEventListener('click', getQuote);
  
    // Function to fetch random Christmas trivia question
    function getQuote() {
      const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
  
      fetch(endpoint)
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
    function displayQuote(trivia) {
      quoteText.textContent = trivia.question;
    }
  });
  