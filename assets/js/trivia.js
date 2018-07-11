const myQuestions =[

    {
        question: "In Resident Evil 2, who is the final boss?",
        answers: {
            a: "Tyrant",
            b: "Wesker",
            c: "Nemesis",
            d: "Las Plagas"
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

    {
        question: "Where does Resident Evil Revelations take place on the timeline?",
        answers: {
            a: "5 and 6",
            b: "3 and 4",
            c: "4 and 5",
            d: "6 and 7"
        },
        correct: "c"
    },

    {
        question: "How many Resident Evil games does Claire Redfield star in?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correct: "c"
    },

    {
        question: "Where does Resident Evil 4 take place?",
        answers: {
            a: "Spain",
            b: "England",
            c: "Raccoon City",
            d: "Shanghai"
        },
        correct: "a"
    },

    {
        question: "What is the first virus created by Umbrella Corporation?",
        answers: {
            a: "G-Virus",
            b: "T-Virus",
            c: "C-Virus",
            d: "Uroboros"
        },
        correct: "b"
    },

    {
        question: "Who is the main character in Resident Evil 7?",
        answers: {
            a: "Mia",
            b: "Leon",
            c: "Jake",
            d: "Ethan"
        },
        correct: "d"
    },

    {
        question: "What is the name of the mansion in Resident Evil 1?",
        answers: {
            a: "Arklay Mansion",
            b: "Spencer Mansion",
            c: "Nemesis Mansion",
            d: "Hive Mansion"
        },
        correct: "b"
    },

    {
        question: "What is the name of the spin-off that takes place during the Raccoon City incident?",
        answers: {
            a: "Umbrella Chronicles",
            b: "Gaiden",
            c: "Dead Aim",
            d: "Outbreak"
        },
        correct: "d"
    },

];


$(document).ready(function() {

    // AUDIO AND GLOBAL VARIABLES
    var bgm = new Audio("assets/audio/re2_save.mp3");
    var gameover = new Audio("assets/audio/r_evil.wav");
    var countdown = 31;
    var intervalID = setInterval(timer, 1000);

    // FUNCTIONS
    document.addEventListener("click", function(){
        bgm.play();
    });

    function timer(){

        countdown--;
        $("#timer").html("<h2>" + countdown + "</h2>");

        if (countdown === 0) {

            showResults();

        };

    };
    // end of timer

    function buildQuiz(){

        for (i = 0; i < myQuestions.length; i++){

            var quizHTML = "<h3>" + myQuestions[i].question + "</h3>"
            var answerHTML = "<span class='answers'><input type='radio' name ='answer"+[i]+"' value='a'>" + myQuestions[i].answers.a +
            "<input type='radio' name ='answer"+i+"' value='b'>" + myQuestions[i].answers.b +
            "<input type='radio' name ='answer"+i+"' value='c'>" + myQuestions[i].answers.c +
            "<input type='radio' name ='answer"+i+"' value='d'>" + myQuestions[i].answers.d + "</span> <br> <br>"

            $("#quiz").append(quizHTML, answerHTML);

        };
        // end of for loop

    };
    //end of buildQuiz

    function showResults(){

        clearInterval(intervalID);

        gameover.play();

        var numCorrect = 0;
        var numIncorrect = 0;
        var noAnswer = 0;

        for (var i = 0; i < myQuestions.length; i++){

            var userAnswer = $( "input[type=radio][name='answer"+i+"']:checked" ).val();

            if (userAnswer === myQuestions[i].correct){
                numCorrect++;
            } else {
                numIncorrect++;
            };

            if (!(userAnswer)){
                noAnswer++;
            }

        };

        $("#timer").text("Refresh to try again!");

        $("#quiz").remove();

        $("#submit").remove();

        var resultsHTML = "<p>Correct Answers: " + numCorrect + "</p>"
        + "<p>Incorrect Answers: " + numIncorrect + "</p>"
        + "<p>Unanswered Questions: " + noAnswer + "</p>";

        $("#results").html(resultsHTML);

    };
    //end of showResults

    // CALL FUNCTIONS AND EVENTS

    timer();

    buildQuiz();

    $("#submit").click(showResults);

    // End of Document Ready
});