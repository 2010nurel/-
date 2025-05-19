const quizData = [
    {
        question: "Какая из этих дорам рассказывает историю любви между наследником отеля и сотрудницей?",
        options: ["Мой сосед Кумихо", "Король земли", "Фея тяжёлой атлетики Ким Бок Чжу", "Алхимия душ"],
        answer: "Король земли"
    },
    {
        question: "В какой дораме капитан спецназа и врач влюбляются друг в друга в раздираемой войной стране?",
        options: ["Винченцо", "Пентхаус", "Потомки солнца", "Сигнал"],
        answer: "Потомки солнца"
    },
    {
        question: "Главная героиня какой дорамы обладает сверхчеловеческой силой?",
        options: ["Силачка До Бон Сун", "Каннамская красотка", "Истинная красота", "Необычный адвокат У Ён У"],
        answer: "Силачка До Бон Сун"
    },
    {
        question: "Какая из этих дорам является классической историей о бедной девушке и богатых парнях в элитной школе (корейская версия)?",
        options: ["Школа Мурим", "Взбодрись!", "Цветочки после ягодок", "Любовный сигнал"],
        answer: "Цветочки после ягодок"
    },
    {
        question: "Какая из этих дорам фокусируется на проблемах старшеклассников и имеет номер года в названии?",
        options: ["Ответ в 1988", "Школа 2017", "Двадцать пять, двадцать один", "Снова 18"],
        answer: "Школа 2017"
    },
    {
        question: "В какой дораме главный герой путешествует во времени через музыкальный магазин?",
        options: ["Король: Вечный монарх", "W: Меж двух миров", "Однажды разрушение вошло в дверь моего дома", "Мерцающий арбуз"],
        answer: "Мерцающий арбуз"
    },
    {
        question: "Демон, временно теряющий свои силы, и наследница чеболя заключают контрактный брак в дораме:",
        options: ["Гоблин", "Мой демон", "Сказание о Кумихо", "Отель Дель Луна"],
        answer: "Мой демон"
    },
    {
        question: "Какая из этих дорам является популярной китайской дорамой о тайной любви с детства?",
        options: ["Сад падающих звёзд", "Только ради любви", "Скрытая любовь", "Зажигалка и платье принцессы"],
        answer: "Скрытая любовь"
    },
    {
        question: "В какой дораме муж с идеальной репутацией скрывает тёмное прошлое от своей жены-детектива?",
        options: ["Мышь", "Псих, но всё в порядке", "Незнакомцы из ада", "Цветок зла"],
        answer: "Цветок зла"
    },
    {
        question: "Ученики старшей школы борются за выживание против зомби-апокалипсиса в дораме:",
        options: ["Милый дом", "Мы все мертвы", "Королевство", "Поезд в Пусан"],
        answer: "Мы все мертвы"
    },
    {
        question: "Итальянский мафиози корейского происхождения возвращается в Корею и вступает в борьбу с конгломератом в дораме:",
        options: ["Винченцо", "Плохой и сумасшедший", "Таксист", "ЗаконLESSный адвокат"],
        answer: "Винченцо"
    },
    {
        question: "Главные герои какой дорамы живут в параллельных мирах – реальном и мире вебтуна?",
        options: ["Алиса в Пограничье", "Король: Вечный монарх", "W: Меж двух миров", "Необыкновенный ты"],
        answer: "W: Меж двух миров"
    },
    {
        question: "Жестокая игра на выбывание определяет иерархию в классе старшей школы в дораме:",
        options: ["Игра в кальмара", "Игра в пирамиду", "Класс лжи", "Пентхаус"],
        answer: "Игра в пирамиду"
    },
    {
        question: "Какая дорама известна историей любви между бедными студентами и наследниками богатых семей в элитной школе?",
        options: ["Наследники", "Сыр в мышеловке", "Великий соблазнитель", "Небесный замок"],
        answer: "Наследники"
    },
    {
        question: "Бессмертный Гоблин ищет свою невесту, чтобы обрести покой, в дораме:",
        options: ["Сказание о Кумихо", "Отель Дель Луна", "Мой демон", "Гоблин"],
        answer: "Гоблин"
    },
    {
        question: "Участники, отчаянно нуждающиеся в деньгах, принимают участие в смертельных детских играх в дораме:",
        options: ["Игра лжецов", "365: Бросая вызов судьбе", "Алиса в Пограничье", "Игра в кальмара"],
        answer: "Игра в кальмара"
    }
];

const splashScreen = document.getElementById('splash-screen');
const menuScreen = document.getElementById('menu-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const startButton = document.getElementById('start-button');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const answerButtons = Array.from(answersContainer.getElementsByClassName('answer-button'));
const feedbackText = document.getElementById('feedback-text');
const nextQuestionButton = document.getElementById('next-question-button');

const scoreText = document.getElementById('score-text');
const finalMessage = document.getElementById('final-message');

let currentQuestionIndex = 0;
let score = 0;
let answeredThisQuestion = false;

function switchScreen(currentScreenElement, nextScreenElement) {
    if (currentScreenElement) {
        currentScreenElement.classList.add('fade-out');
        setTimeout(() => {
            currentScreenElement.classList.add('hidden');
            currentScreenElement.classList.remove('fade-out');

            if (nextScreenElement) {
                nextScreenElement.classList.remove('hidden');
                nextScreenElement.classList.add('fade-in');
                requestAnimationFrame(() => { // Ensures transition plays by removing class after styles are applied
                    nextScreenElement.classList.remove('fade-in');
                });
            }
        }, 600); // Matches CSS transition duration
    } else if (nextScreenElement) { // For the very first screen
        nextScreenElement.classList.remove('hidden');
        nextScreenElement.classList.add('fade-in');
        requestAnimationFrame(() => {
            nextScreenElement.classList.remove('fade-in');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Splash screen is visible by default in HTML (no .hidden class)
    // Apply fade-in animation to splash screen on load
    splashScreen.classList.add('fade-in');
     requestAnimationFrame(() => {
        splashScreen.classList.remove('fade-in');
    });

    setTimeout(() => {
        switchScreen(splashScreen, menuScreen);
    }, 10000); // 10 seconds
});

startButton.addEventListener('click', () => {
    switchScreen(menuScreen, quizScreen);
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextQuestionButton.classList.add('hidden');
    feedbackText.textContent = '';
    showQuestion();
}

function showQuestion() {
    answeredThisQuestion = false;
    feedbackText.textContent = '';
    nextQuestionButton.classList.add('hidden');
    resetButtonStates();

    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    let options = [...currentQuestion.options];
    // Fisher-Yates Shuffle for options
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    answerButtons.forEach((button, index) => {
        button.textContent = options[index];
        button.onclick = () => selectAnswer(button, options[index], currentQuestion.answer);
    });
}

function resetButtonStates() {
    answerButtons.forEach(button => {
        button.classList.remove('correct', 'incorrect', 'disabled');
        button.disabled = false;
    });
}

function selectAnswer(selectedButton, selectedOption, correctAnswer) {
    if (answeredThisQuestion) return;
    answeredThisQuestion = true;

    answerButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled');
    });

    if (selectedOption === correctAnswer) {
        selectedButton.classList.add('correct');
        feedbackText.textContent = "Правильно!";
        feedbackText.style.color = "#2E8B57"; /* Sea Green */
        score++;
    } else {
        selectedButton.classList.add('incorrect');
        feedbackText.textContent = `Неправильно. Верный ответ: ${correctAnswer}`;
        feedbackText.style.color = "#DC143C"; /* Crimson */
        answerButtons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.classList.add('correct'); // Still show correct one
            }
        });
    }

    if (currentQuestionIndex < quizData.length - 1) {
        nextQuestionButton.classList.remove('hidden');
    } else {
        setTimeout(() => {
            switchScreen(quizScreen, resultsScreen);
            displayFinalResults();
        }, 2000); // Delay before showing results
    }
}

nextQuestionButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

function displayFinalResults() {
    scoreText.textContent = `Вы ответили правильно на ${score} из ${quizData.length} вопросов.`;
    
    const percentage = (score / quizData.length) * 100;
    if (percentage >= 70) {
        finalMessage.textContent = "Поздравляю! Ты умница и открыла свой подарок! 🎉🎁";
        finalMessage.style.color = "#FFBF00"; /* Amber - яркий теплый */
    } else {
        finalMessage.textContent = "Немного не хватило... Но ты все равно молодец! Попробуешь еще раз?";
        finalMessage.style.color = "#1E90FF"; /* Dodger Blue - яркий холодный */
    }
}