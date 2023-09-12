document.addEventListener("DOMContentLoaded", function () {
    const quoteElement = document.querySelector(".quote");
    const newQuoteButton = document.getElementById("new-quote-btn");
  
    // Function to fetch a random quote
    async function fetchRandomQuote() {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
          throw new Error("Failed to fetch a quote");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error("Error fetching a quote");
      }
    }
  
    // Function to update the quote on the webpage
    function updateQuote() {
      fetchRandomQuote()
        .then((data) => {
          // Get a random quote from the array
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomQuote = data[randomIndex];
  
          const quoteText = randomQuote.text;
          const quoteAuthor = randomQuote.author || "Unknown";
  
          const quoteHtml = `
            <p>${quoteText}</p>
            <p>- ${quoteAuthor}</p>
          `;
  
          quoteElement.innerHTML = quoteHtml;
        })
        .catch((error) => {
          quoteElement.innerHTML = `<p>Error: ${error.message}</p>`;
        });
    }
  
   
    newQuoteButton.addEventListener("click", updateQuote);  // Event listener for the "New Quote" button
  
    updateQuote();
  });
  
