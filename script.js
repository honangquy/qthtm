class QuizApp {
    constructor() {
        this.questions = questions || [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.isAnswered = false;
        
        this.initializeElements();
        this.initializeQuiz();
        this.bindEvents();
    }

    initializeElements() {
        // Score elements
        this.currentQuestionEl = document.getElementById('current-question');
        this.totalQuestionsEl = document.getElementById('total-questions');
        this.scoreEl = document.getElementById('score');
        this.correctCountEl = document.getElementById('correct-count');
        this.wrongCountEl = document.getElementById('wrong-count');
        
        // Question elements
        this.questionNumEl = document.getElementById('question-num');
        this.questionPartEl = document.getElementById('question-part');
        this.questionTextEl = document.getElementById('question-text');
        this.optionsContainerEl = document.getElementById('options-container');
        this.answerFeedbackEl = document.getElementById('answer-feedback');
        this.feedbackIconEl = document.getElementById('feedback-icon');
        this.feedbackTextEl = document.getElementById('feedback-text');
        this.explanationEl = document.getElementById('explanation');
        
        // Navigation elements
        this.prevBtnEl = document.getElementById('prev-btn');
        this.nextBtnEl = document.getElementById('next-btn');
        this.progressFillEl = document.getElementById('progress-fill');
        
        // Results elements
        this.questionCardEl = document.getElementById('question-card');
        this.resultsScreenEl = document.getElementById('results-screen');
        this.finalScoreEl = document.getElementById('final-score');
        this.finalCorrectEl = document.getElementById('final-correct');
        this.finalWrongEl = document.getElementById('final-wrong');
        this.finalPercentageEl = document.getElementById('final-percentage');
        this.restartBtnEl = document.getElementById('restart-btn');
        this.reviewBtnEl = document.getElementById('review-btn');
    }

    initializeQuiz() {
        if (this.questions.length === 0) {
            this.questionTextEl.textContent = 'Không có câu hỏi nào để hiển thị.';
            return;
        }

        this.totalQuestionsEl.textContent = this.questions.length;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.displayQuestion();
        this.updateProgress();
    }

    bindEvents() {
        this.prevBtnEl.addEventListener('click', () => this.previousQuestion());
        this.nextBtnEl.addEventListener('click', () => this.nextQuestion());
        this.restartBtnEl.addEventListener('click', () => this.restartQuiz());
        this.reviewBtnEl.addEventListener('click', () => this.reviewAnswers());
    }

    displayQuestion() {
        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];
        this.isAnswered = this.userAnswers[this.currentQuestionIndex] !== null;

        // Update question info
        this.currentQuestionEl.textContent = this.currentQuestionIndex + 1;
        this.questionNumEl.textContent = this.currentQuestionIndex + 1;
        this.questionPartEl.textContent = question.part || '';
        this.questionTextEl.textContent = question.question;

        // Clear and populate options
        this.optionsContainerEl.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionEl = this.createOptionElement(option, index, question);
            this.optionsContainerEl.appendChild(optionEl);
        });

        // Show feedback if already answered
        if (this.isAnswered) {
            this.showAnswerFeedback();
        } else {
            this.answerFeedbackEl.style.display = 'none';
        }

        // Update navigation buttons
        this.updateNavigationButtons();
        this.updateProgress();
    }

    createOptionElement(optionText, index, question) {
        const optionEl = document.createElement('div');
        optionEl.className = 'option';
        optionEl.dataset.index = index;

        const letterEl = document.createElement('span');
        letterEl.className = 'option-letter';
        letterEl.textContent = String.fromCharCode(65 + index); // A, B, C, D

        const textEl = document.createElement('span');
        textEl.textContent = optionText;

        optionEl.appendChild(letterEl);
        optionEl.appendChild(textEl);

        // Apply styling if already answered
        if (this.isAnswered) {
            const userAnswer = this.userAnswers[this.currentQuestionIndex];
            const correctAnswer = question.answer;
            const correctIndex = correctAnswer.charCodeAt(0) - 65; // Convert A,B,C,D to 0,1,2,3

            optionEl.classList.add('disabled');

            if (index === userAnswer) {
                optionEl.classList.add('selected');
            }

            if (index === correctIndex) {
                optionEl.classList.add('correct');
            } else if (index === userAnswer && userAnswer !== correctIndex) {
                optionEl.classList.add('wrong');
            }
        } else {
            optionEl.addEventListener('click', () => this.selectOption(index));
        }

        return optionEl;
    }

    selectOption(selectedIndex) {
        if (this.isAnswered) return;

        const question = this.questions[this.currentQuestionIndex];
        const correctAnswer = question.answer;
        const correctIndex = correctAnswer.charCodeAt(0) - 65; // Convert A,B,C,D to 0,1,2,3

        // Store user answer
        this.userAnswers[this.currentQuestionIndex] = selectedIndex;
        this.isAnswered = true;

        // Update score
        if (selectedIndex === correctIndex) {
            this.correctCount++;
            this.score += 10; // 10 points per correct answer
        } else {
            this.wrongCount++;
        }

        this.updateScoreDisplay();

        // Update option styling
        const options = this.optionsContainerEl.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.add('disabled');
            
            if (index === selectedIndex) {
                option.classList.add('selected');
            }

            if (index === correctIndex) {
                option.classList.add('correct');
            } else if (index === selectedIndex && selectedIndex !== correctIndex) {
                option.classList.add('wrong');
            }
        });

        // Show feedback
        setTimeout(() => {
            this.showAnswerFeedback();
        }, 300);
    }

    showAnswerFeedback() {
        const question = this.questions[this.currentQuestionIndex];
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        const correctAnswer = question.answer;
        const correctIndex = correctAnswer.charCodeAt(0) - 65;

        const isCorrect = userAnswer === correctIndex;

        // Update feedback content
        if (isCorrect) {
            this.feedbackIconEl.className = 'fas fa-check-circle';
            this.feedbackTextEl.textContent = 'Chính xác!';
            this.answerFeedbackEl.classList.remove('wrong');
        } else {
            this.feedbackIconEl.className = 'fas fa-times-circle';
            this.feedbackTextEl.textContent = `Sai rồi! Đáp án đúng là ${correctAnswer}`;
            this.answerFeedbackEl.classList.add('wrong');
        }

        this.explanationEl.textContent = question.explanation || '';
        this.answerFeedbackEl.style.display = 'block';
    }

    updateScoreDisplay() {
        this.scoreEl.textContent = this.score;
        this.correctCountEl.textContent = this.correctCount;
        this.wrongCountEl.textContent = this.wrongCount;
    }

    updateNavigationButtons() {
        this.prevBtnEl.disabled = this.currentQuestionIndex === 0;
        
        if (this.currentQuestionIndex === this.questions.length - 1) {
            this.nextBtnEl.textContent = 'Kết thúc';
            this.nextBtnEl.innerHTML = 'Kết thúc <i class="fas fa-flag-checkered"></i>';
        } else {
            this.nextBtnEl.innerHTML = 'Câu tiếp <i class="fas fa-chevron-right"></i>';
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
        this.progressFillEl.style.width = `${progress}%`;
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.questionCardEl.style.display = 'none';
        this.resultsScreenEl.style.display = 'flex';

        const totalQuestions = this.questions.length;
        const percentage = totalQuestions > 0 ? Math.round((this.correctCount / totalQuestions) * 100) : 0;

        this.finalScoreEl.textContent = this.score;
        this.finalCorrectEl.textContent = this.correctCount;
        this.finalWrongEl.textContent = this.wrongCount;
        this.finalPercentageEl.textContent = `${percentage}%`;

        // Update progress to 100%
        this.progressFillEl.style.width = '100%';
    }

    restartQuiz() {
        this.currentQuestionIndex = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.score = 0;
        this.correctCount = 0;
        this.wrongCount = 0;
        this.isAnswered = false;

        this.updateScoreDisplay();
        this.resultsScreenEl.style.display = 'none';
        this.questionCardEl.style.display = 'block';
        this.displayQuestion();
    }

    reviewAnswers() {
        this.currentQuestionIndex = 0;
        this.resultsScreenEl.style.display = 'none';
        this.questionCardEl.style.display = 'block';
        this.displayQuestion();
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const quiz = new QuizApp();
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        document.getElementById('prev-btn').click();
    } else if (e.key === 'ArrowRight') {
        document.getElementById('next-btn').click();
    } else if (e.key >= '1' && e.key <= '4') {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option:not(.disabled)');
        if (options[optionIndex]) {
            options[optionIndex].click();
        }
    }
});
