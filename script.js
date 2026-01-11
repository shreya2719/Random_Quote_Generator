// Array of quotes
const quotes = [
  "Believe in yourself.",
  "Work hard, dream big.",
  "Success comes with patience.",
  "Never stop learning.",
  "Do something today your future self will thank you for.",
  "Stay positive, work hard, make it happen.",

  // Motivation
  "Dream it. Wish it. Do it.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Wake up with determination. Go to bed with satisfaction.",

  // Success
  "Success doesn’t just find you. You have to go out and get it.",
  "The key to success is to focus on goals, not obstacles.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Small progress is still progress.",

  // Learning & Growth
  "Learning never exhausts the mind.",
  "Mistakes are proof that you are trying.",
  "The expert in anything was once a beginner.",
  "Every day is a chance to learn something new.",

  // Life
  "Life is 10% what happens to you and 90% how you react to it.",
  "Happiness is a journey, not a destination.",
  "Believe you can and you’re halfway there.",
  "Your only limit is your mind.",

  // Productivity
  "Focus on being productive instead of busy.",
  "Action is the foundational key to all success.",
  "Don’t wait for opportunity. Create it.",

  // Mindset
  "Your mindset determines your future.",
  "Consistency beats motivation.",
  "Hard work beats talent when talent doesn’t work hard."
];

// Function to generate random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
