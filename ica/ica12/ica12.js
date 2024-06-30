document.addEventListener('DOMContentLoaded', function () {
    const newQuoteButton = document.getElementById('js-new-quote');
    const quoteText = document.getElementById('js-quote-text');
    const answerText = document.getElementById('js-answer-text');
  
    // Event listener for the new quote button
    newQuoteButton.addEventListener('click', getTrivia);
  
    // Function to fetch random trivia question
    function getTrivia() {
      fetch('https://trivia.cyberwisp.com/getrandomchristmasquestion')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          displayTrivia(data);
        })
        .catch(error => {
          console.error('Error fetching trivia:', error);
          alert('Failed to fetch trivia. Please try again later.');
        });
    }
  
    // Function to display the fetched trivia
    function displayTrivia(trivia) {
      quoteText.textContent = trivia.question;
      answerText.textContent = ''; // Clear any previous answer
    }
  });
  