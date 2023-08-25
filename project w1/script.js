
const Questions = [{
    q: "1.What is the full form of HTML ?",
    a: [{ text: "Hyber techinal Mark language", isCorrect: false },
    { text: "Hypertext Mark Language", isCorrect: false },
    { text: "Hypertext Markup Language", isCorrect: true },
    { text: "Hypertech Markup Language ", isCorrect: false }
    ]
 
},
{
    q: "2.Which of the following property is used to control the position of an image in the background?",
    a: [{ text: "Lbackground-color", isCorrect: false, isSelected: false },
    { text: "background-image", isCorrect: false },
    { text: "background-repeat", isCorrect: false },
    { text: "background-position", isCorrect: true }
    ]
 
},
{
    q: "3.Which of the following property is used to increase or decrease the size of a font?",
    a: [{ text: "font-size", isCorrect: true },
    { text: "font", isCorrect: false },
    { text: "font-variant", isCorrect: false },
    { text: "font-weight", isCorrect: false }
    ]
 
},
{
     q: "4.Which of the following property is used to set the opacity of an image?",
     a: [{ text: "border", isCorrect: false, isSelected: false },
     { text: "height", isCorrect: false },
     { text: "width", isCorrect: false },
     { text: "moz-opacity", isCorrect: true }
    ]
},
{
    q: "5.Which of the following property specifies the right padding of an element?",
    a: [{ text: "padding-bottom", isCorrect: false, isSelected: false },
    { text: "padding-top", isCorrect: false },
    { text: "padding-left", isCorrect: false },
    { text: "padding-right", isCorrect: true }
   ]
}
 
]
 
let currQuestion = 0
let score = 0
 
function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")
 
    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = Questions[currQuestion].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
 
loadQues();
 
function loadScore() {
    const totalScore = document.getElementById("score")
    totalScore.textContent = `HURRY YOU SUCCESSFULLY COMPLETED !!!`
    totalScore.textContent = ` HURRY You scored ${score} out of ${Questions.length} !!!`
}
 
 
function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}
 
function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        nextQuestion();
    }
}