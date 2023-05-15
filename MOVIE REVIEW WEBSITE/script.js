// JavaScript for the movie review website

const reviewsContainer = document.getElementById('movie-reviews');

// Fetch movie reviews from an external API
fetch('https://api.example.com/reviews')
  .then(response => response.json())
  .then(data => {
    // Loop through the movie reviews and create HTML elements for each
    data.forEach(review => {
      const reviewElem = document.createElement('div');
      reviewElem.classList.add('review');
      
      const titleElem = document.createElement('h3');
      titleElem.textContent = review.title;
      reviewElem.appendChild(titleElem);
      
      const posterElem = document.createElement('img');
      posterElem.src = review.posterUrl;
      posterElem.alt = `${review.title} poster`;
      reviewElem.appendChild(posterElem);
      
      const ratingElem = document.createElement('p');
      ratingElem.textContent = `Rating: ${review.rating}/10`;
      reviewElem.appendChild(ratingElem);
      
      const contentElem = document.createElement('p');
      contentElem.textContent = review.content;
      reviewElem.appendChild(contentElem);
      
      reviewsContainer.appendChild(reviewElem);
    });
  })
  .catch(error => console.error(error));
