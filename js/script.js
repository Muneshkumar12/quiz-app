    let quizData = [
        {
            question: "1. What is the correct way to declare a JavaScript variable?",
            a: "var carName",
            b: "variable carName",
            c: "v carName",
            d: "carName = variable",
            correct: "a"
        },
        {
            question: "2. Which built-in method combines the text of two strings and returns a new string?",
            a: "append()",
            b: "concat()",
            c: "attach()",
            d: "merge()",
            correct: "b"
        },
        {
            question: "3. How do you write an IF statement in JavaScript to check if i is equal to 5?",
            a: "if i = 5 then",
            b: "if (i == 5)",
            c: "if i == 5",
            d: "if (i = 5)",
            correct: "b"
        },
        {
            question: "4. Which of the following function of Array object calls a function for each element in the array?",
            a: "forEach()",
            b: "every()",
            c: "forEvery()",
            d: "each()",
            correct: "a"
        },
        {
            question: "5. How can you add a comment in JavaScript?",
            a: "!!-- This is a comment -->",
            b: "# This is a comment",
            c: "// This is a comment",
            d: "** This is a comment",
            correct: "c"
        },
    ]
    let Container = document.getElementById("container");
    let Answers = document.querySelectorAll(".answer");
    let Question = document.getElementById("question");
    let aLabel = document.getElementById('a-label');
    let bLabel = document.getElementById('b-label');
    let cLabel = document.getElementById('c-label');
    let dLabel = document.getElementById('d-label');
    let Button = document.getElementById("button");
    let currentQuiz = 0;
    let Score = 0;

    loadQuiz();

    function loadQuiz() {
        const currentQuizData = quizData[currentQuiz];
        Question.innerHTML = currentQuizData.question;
        aLabel.innerHTML = currentQuizData.a;
        bLabel.innerHTML = currentQuizData.b;
        cLabel.innerHTML = currentQuizData.c;
        dLabel.innerHTML = currentQuizData.d;
        deselectAnswers();
        resetBackgroundColor();
    }

    function deselectAnswers() {
        Answers.forEach(answerEl => answerEl.checked = false);
    }
    function resetBackgroundColor() {
        aLabel.parentElement.classList.remove("correct", "incorrect");
        b.parentElement.classList.remove("correct", "incorrect");
        c.parentElement.classList.remove("correct", "incorrect");
        d.parentElement.classList.remove("correct", "incorrect");
    }

    function getAnswer() {
        let checkedAnswer;
        Answers.forEach(answer => {
            if (answer.checked) {
                checkedAnswer = answer.id
            }
        })
        return checkedAnswer;
    }

    Button.addEventListener("click", () => {
        let answer = getAnswer();

        if (answer) {
            if (answer === quizData[currentQuiz].correct) {
                document.getElementById(answer + "-label").parentElement.classList.add("correct");
                Score++;
            } else {
                document.getElementById(answer + "-label").parentElement.classList.add("incorrect");
                document.getElementById(quizData[currentQuiz].correct + "-label").parentElement.classList.add("correct");
            }

            currentQuiz++;

            setTimeout(() => {
                if (currentQuiz < quizData.length) {
                    loadQuiz();
                } else {
                    window.alert(`your score is ${Score}/${quizData.length}`)
                    location.reload();
                }
            }, 1000);
        } else {
            window.alert("Please select an option!")
        }
    })