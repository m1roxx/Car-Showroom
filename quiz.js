document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const answers = {
        q1: "correct",
        q2: "correct",
        q3: "correct",
        q4: "correct",
        q5: "correct",
        q6: "correct",
        q7: "correct"
    };

    let score = 0;
    let totalQuestions = Object.keys(answers).length;


    for (const [question, correctAnswer] of Object.entries(answers)) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === correctAnswer) {
            score++;
        }
    }

   
    const resultElement = document.getElementById("result");
    const feedbackElement = document.getElementById("feedback");

    resultElement.textContent = `You scored ${score} out of ${totalQuestions}.`;

    feedbackElement.textContent = score === totalQuestions
        ? "Excellent! You're a car expert!"
        : "Keep learning about cars!";
});
