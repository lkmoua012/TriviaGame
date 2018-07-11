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

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");

function buildQuiz(){}

    for (i = 0; i < myQuestions.length; i++){

        var quizHTML = "<h3>" + myQuestions[i].question + "</h3>"
        var answerHTML = "<div class='answers'><input type='radio' name ='answer"+[i]+"' value='a'>" + myQuestions[i].answers.a +
        "<br> <input type='radio' name ='answer"+i+"' value='b'>" + myQuestions[i].answers.b +
        "<br> <input type='radio' name ='answer"+i+"' value='c'>" + myQuestions[i].answers.c +
        "<br> <input type='radio' name ='answer"+i+"' value='d'>" + myQuestions[i].answers.d + "</div>"

        console.log(myQuestions[i].question);
        console.log(myQuestions[i].correct);
        console.log(answerHTML);
        $("#quiz").append(quizHTML, answerHTML);

    };
//end of buildQuiz

function showResults(){

    var numCorrect = 0;

    for (var i = 0; i < myQuestions.length; i++){

        var userAnswer = $( "input[type=radio][name='answer"+i+"']:checked" ).val();

        if (userAnswer === myQuestions[i].correct){
            numCorrect++;
        }

    };

    $("#results").text(numCorrect + " out of " + myQuestions.length);

};
//end of showResults

buildQuiz();

$("#submit").click(showResults);

// End of Document Ready
});