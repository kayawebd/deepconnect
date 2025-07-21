const questions = [
    // Set I
    "Given the choice of anyone in the world, whom would you want as a dinner guest?",
    "Would you like to be famous? In what way?",
    "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
    "What would constitute a 'perfect' day for you?",
    "When did you last sing to yourself? To someone else?",
    "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",
    "Do you have a secret hunch about how you will die?",
    "Name three things you and your partner appear to have in common.",
    "For what in your life do you feel most grateful?",
    "If you could change anything about the way you were raised, what would it be?",
    "Take four minutes and tell your partner your life story in as much detail as possible.",
    "If you could wake up tomorrow having gained any one quality or ability, what would it be?",

    // Set II
    "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
    "Is there something that you've dreamed of doing for a long time? Why haven't you done it?",
    "What is the greatest accomplishment of your life?",
    "What do you value most in a friendship?",
    "What is your most treasured memory?",
    "What is your most terrible memory?",
    "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
    "What does friendship mean to you?",
    "What roles do love and affection play in your life?",
    "Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.",
    "How close and warm is your family? Do you feel your childhood was happier than most other people's?",
    "How do you feel about your relationship with your mother?",

    // Set III
    'Make three true "we" statements each. For instance, "We are both in this room feeling..."',
    'Complete this sentence: "I wish I had someone with whom I could share..."',
    "If you were going to become a close friend with your partner, please share what would be important for him or her to know.",
    "Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you've just met.",
    "Share with your partner an embarrassing moment in your life.",
    "When did you last cry in front of another person? By yourself?",
    "Tell your partner something that you like about them already.",
    "What, if anything, is too serious to be joked about?",
    "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven't you told them yet?",
    "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
    "Of all the people in your family, whose death would you find most disturbing? Why?",
    "Share a personal problem and ask your partner's advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen."
];

let currentQuestionIndex = 0;

const welcomeScreen = document.getElementById('welcome-screen');
const questionScreen = document.getElementById('question-screen');
const endScreen = document.getElementById('end-screen');
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const restartButton = document.getElementById('restart-button');
const homeButton = document.getElementById('home-button'); // Get the new Home button
const currentQuestion = document.getElementById('current-question');
const progressIndicator = document.getElementById('progress-indicator');

const set1Button = document.getElementById('set1-button');
const set2Button = document.getElementById('set2-button');
const set3Button = document.getElementById('set3-button');
const setButtons = document.querySelectorAll('.set-button');

function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function updateQuestion() {
    if (currentQuestionIndex < questions.length) {
        currentQuestion.innerHTML = `${currentQuestionIndex + 1}. ${questions[currentQuestionIndex]}`;

        const set1End = 12;
        const set2End = 24;

        progressIndicator.textContent = `Question ${currentQuestionIndex + 1} of 36`;

        if (currentQuestionIndex === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'inline-block';
        }

        setButtons.forEach(button => {
            button.classList.remove('active-set');
        });

        if (currentQuestionIndex < set1End) {
            set1Button.classList.add('active-set');
        } else if (currentQuestionIndex < set2End) {
            set2Button.classList.add('active-set');
        } else {
            set3Button.classList.add('active-set');
        }

    } else {
        showScreen('end-screen');
    }
}

startButton.addEventListener('click', () => {
    showScreen('question-screen');
    updateQuestion();
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    updateQuestion();
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
});

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    showScreen('welcome-screen');
});

// Event listener for the new Home button
homeButton.addEventListener('click', () => {
    currentQuestionIndex = 0; // Reset index to start from the beginning
    showScreen('welcome-screen'); // Navigate to the welcome screen
});

// Event listeners for set buttons
set1Button.addEventListener('click', () => {
    currentQuestionIndex = 0;
    updateQuestion();
});

set2Button.addEventListener('click', () => {
    currentQuestionIndex = 12;
    updateQuestion();
});

set3Button.addEventListener('click', () => {
    currentQuestionIndex = 24;
    updateQuestion();
});