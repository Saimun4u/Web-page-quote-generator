let quoteDisplay = document.getElementById('quote');
let authorDisplay = document.getElementById('author');
const quoteBtn = document.getElementById('genQuote');

function generateQuote() {
  const quotes = {
    '- Alysha Speer':
      "You never really know what's coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.",
    '- Aaron Lauritsen':
      'The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.',
    '- Jamie Ford':
      'The library is like a candy store where everything is free.',
    '- Nenia Campbell':
      "You want to be free. You also want to be mine. You can't be both.",
    ' - Nelson Mandela': "It always seems impossible until it's done.",
    '- Samuel Beckett ':
      'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.',
    ' - Jim Rohn':
      'Either you run the day or the day runs you. Share this Quote',
    ' - Rabindranath Tagore':
      "You can't cross the sea merely by standing and staring at the water.",
  };

  let authors = Object.keys(quotes);
  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  authorDisplay.innerHTML = `${author}`;
  quoteDisplay.innerHTML = `${quote}`;
}

quoteBtn.addEventListener('click', generateQuote);
