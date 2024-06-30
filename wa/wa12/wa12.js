// Constants for API URL and elements
const apiUrl = 'https://api.quotable.io/quotes/random';
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

// Function to fetch a random quote from the API
async function fetchQuote() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }
}

// Function to update the DOM with a new quote
async function updateQuote() {
    const quoteData = await fetchQuote();
    if (quoteData) {
        quoteElement.textContent = `"${quoteData.content}"`;
        authorElement.textContent = `- ${quoteData.author}`;
    }
}

// Event listener for new quote button
newQuoteButton.addEventListener('click', updateQuote);

// Initial quote load
updateQuote();
