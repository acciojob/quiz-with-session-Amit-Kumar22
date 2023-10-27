function saveProgress() {
  const answers = {};
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    if (radio.checked) {
      answers[radio.name] = radio.value;
    }
  });
  sessionStorage.setItem('progress', JSON.stringify(answers));
}

// Function to load saved progress from session storage
function loadProgress() {
  const savedProgress = sessionStorage.getItem('progress');
  if (savedProgress) {
    const answers = JSON.parse(savedProgress);
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
      if (answers[radio.name] === radio.value) {
        radio.checked = true;
      }
    });
  }
}

// Function to calculate and display the score
function calculateScore() {
  const correctAnswers = {
    q1: 'c', // Correct answer for question 1
    q2: 'b', // Correct answer for question 2
    q3: 'c',
    q4: 'b',
    q5: 'a',
    // Add correct answers for more questions here
  };

  let score = 0;
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radio) => {
    if (radio.checked && correctAnswers[radio.name] === radio.value) {
      score++;
    }
  });

  // Display the score
  const resultElement = document.getElementById('score');
  resultElement.innerHTML = `Your score is ${score} out of 5.`;

  // Store the score in local storage
  localStorage.setItem('score', score);
}

// Load progress when the page is loaded
loadProgress();

// Save progress on radio button change
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radio) => {
  radio.addEventListener('change', saveProgress);
});


// Calculate and display the score on submit
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', calculateScore);