// const quizContainer = $("#quiz");
// const resultsContainer = $("#results");
// const submitButton = $("#submit");

const myQuestions =[

    {
        question: "In Resident Evil 2, who is the final boss?",
        answers: {
            a: "Tyrant",
            b: "Wesker",
            c: "Nemesis",
            d: "LasPlagas"
        },
        correct: "a"
    },

    {
        question: "Who is not a playable character in Resident Evil 6?",
        answers: {
            a: "Ada",
            b: "Leon",
            c: "Jill",
            d: "Sherry"
        },
        correct: "c"
    },

    {
        question: "What is the name of the pharmaceutical company responsible for the virus outbreak in Resident Evil 5?",
        answers: {
            a: "Umbrella",
            b: "Tricell",
            c: "Terra Save",
            d: "BSAA"
        },
        correct: "b"
    },

];


$(document).ready(function() {

function buildQuiz(){}

    for (i = 0; i < myQuestions.length; i++){

        var quizHTML = "<h3>" + myQuestions[i].question + "</h3>"
        var answerHTML = "<div class='answers'><input type='radio' name ='answer' value='a'>" + myQuestions[i].answers.a +
        "<br> <input type='radio' name ='answer' value='b'>" + myQuestions[i].answers.b +
        "<br> <input type='radio' name ='answer' value='c'>" + myQuestions[i].answers.c +
        "<br> <input type='radio' name ='answer' value='d'>" + myQuestions[i].answers.d + "</div>"

        console.log(myQuestions[i].question);
        console.log(myQuestions[i].correct);
        $("#quiz").append(quizHTML, answerHTML);

    };
//end of buildQuiz

function showResults(){

    console.log("It works!");

}

buildQuiz();

$("#submit").click(showResults);

// End of Document Ready
});