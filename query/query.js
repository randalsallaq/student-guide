
'use strict';
var questionDiv = document.getElementById('questionDiv');
var resultDiv = document.getElementById('result');
var submitButton = document.getElementById('submitButton');
var answerDiv = document.getElementById('answerDiv');
var answer11 = document.getElementById('answer1');
var answer22 = document.getElementById('answer2');
var answer33 = document.getElementById('answer3');
var reTake = document.getElementById('re-takeButton');
var globalArr = [];
var firstChoiseHuman = 0;
var secondChoiseScience = 0;
var thirdChoiseIT = 0;
if(localStorage.getItem('human')) {
var humanCounter =JSON.parse(localStorage.getItem('human'));
}else{
    var humanCounter = 0;
}
if(localStorage.getItem('science')){
var scienceCounter = JSON.parse(localStorage.getItem('science'));
}else{
var scienceCounter = 0;
}
if(localStorage.getItem('IT')) {
var itCounter = JSON.parse(localStorage.getItem('IT'));
}else{
    var itCounter = 0;
}
if(localStorage.getItem('clicks')){
   var totalClicks =  JSON.parse(localStorage.getItem('clicks'));
}else{
var totalClicks = 0;

}
var x;

function MyQuestions(question, answer1, answer2, answer3) {
    this.question = question,
        this.answer1 = answer1,
        this.answer2 = answer2,
        this.answer3 = answer3,

        globalArr.push(this);

var x =1 ;

function MyQuestions(question,answer1,answer2,answer3) {
    this.question= question,
    this.answer1= answer1,
    this.answer2=answer2,
    this.answer3=answer3,
    globalArr.push(this);

};

new MyQuestions('Which school subjects do you prefer?', 'Art, Music, Languages', 'Physics, chemistry, mathematics', 'Computer science, logic');
new MyQuestions('What school activities do you prefer to participate in?', 'Arts festivals organized by the school', 'Science day', 'Not to participate in activities');
new MyQuestions('What method do you prefer to use when solving problems?', 'A method with simple steps that doesn’t require too much time', 'A method with comprehensive steps to follow that explain everything clearly', 'Coming up with new solution');
new MyQuestions('How do you rate your computer skills?', 'Low', 'Medium', 'High');
new MyQuestions('Which types of books do you prefer to read?', 'Poetry, Novel, Philosophy, History', 'Science fiction, Suspense and Thrillers', 'Detective novels');
new MyQuestions('What do you think of study group?', 'Pretty useful', 'No use I prefer to study by myself', 'They are great, I like helping others solve problems and sharing my studying tips')
new MyQuestions('If you have the chance to be someone else, who would you choose to be? ', 'An erudite/educator like Confucius', 'A genius in a specific field like Isaac Newton', 'Entrepreneur in technical field like Bill Gates');
new MyQuestions('Which TV series do you prefer?', 'This is us', 'Dark', 'Silicon Valley');
new MyQuestions('If you have some money to invest, you would invest in:', 'Creating small projects and education ', 'Scientific Research field', 'Upgrading computer and technical devices');
new MyQuestions('When solving a math problem, you usually:', 'If you can\'t solve this one\, move onto the next one', 'Stick with the problem until you figure it out', 'Solve the math problem in anyway possible, even if it takes creating new way');
new MyQuestions('You would prefer to sit in the same place for long hours and not to do physical actions?', 'No', 'Sometimes', 'Yes');
console.log(globalArr);



function displayQestions() {

    if (localStorage.getItem('question')) {
        var x = JSON.parse(localStorage.getItem('question'));
        var questionParagraph = document.getElementById('question');
        questionParagraph.textContent = globalArr[x - 1].question;

        var firstChoiseHuman = document.getElementById('answer1');
        firstChoiseHuman.textContent = globalArr[x - 1].answer1;

        var secondChoiseScience = document.getElementById('answer2');
        secondChoiseScience.textContent = globalArr[x - 1].answer2;

        var thirdChoiseIT = document.getElementById('answer3');
        thirdChoiseIT.textContent = globalArr[x - 1].answer3;
    } else {
        var questionParagraph = document.getElementById('question');
        questionParagraph.textContent = globalArr[0].question;

        var firstChoiseHuman = document.getElementById('answer1');
        firstChoiseHuman.textContent = globalArr[0].answer1;

        var secondChoiseScience = document.getElementById('answer2');
        secondChoiseScience.textContent = globalArr[0].answer2;

        var thirdChoiseIT = document.getElementById('answer3');
        thirdChoiseIT.textContent = globalArr[0].answer3;
    }
}
displayQestions();

function display() {

    if (localStorage.getItem('question')) {
        var x = JSON.parse(localStorage.getItem('question'));
        if (x < globalArr.length) {
            var questionParagraph = document.getElementById('question');
            questionParagraph.textContent = globalArr[x].question;

            var firstChoiseHuman = document.getElementById('answer1');
            firstChoiseHuman.textContent = globalArr[x].answer1;

            var secondChoiseScience = document.getElementById('answer2');
            secondChoiseScience.textContent = globalArr[x].answer2;

            var thirdChoiseIT = document.getElementById('answer3');
            thirdChoiseIT.textContent = globalArr[x].answer3;
            x++;
            localStorage.setItem('question', JSON.stringify(x));

        }
    } else {
        var x = 1;
        if (x < globalArr.length) {
            var questionParagraph = document.getElementById('question');
            questionParagraph.textContent = globalArr[x].question;

            var firstChoiseHuman = document.getElementById('answer1');
            firstChoiseHuman.textContent = globalArr[x].answer1;

            var secondChoiseScience = document.getElementById('answer2');
            secondChoiseScience.textContent = globalArr[x].answer2;

            var thirdChoiseIT = document.getElementById('answer3');
            thirdChoiseIT.textContent = globalArr[x].answer3;
            x++;
            localStorage.setItem('question', JSON.stringify(x));

        }
    }
   
}

answer11.addEventListener('click', ShwoResults);
answer22.addEventListener('click', ShwoResults);
answer33.addEventListener('click', ShwoResults);
function ShwoResults(event) {
    var clickedParagraph;

    if (event.target.id === 'answer1') {
        clickedParagraph = firstChoiseHuman;
        humanCounter++;
        localStorage.setItem('human',humanCounter);
        

    } else if (event.target.id === 'answer2') {
        clickedParagraph = secondChoiseScience;
        scienceCounter++;
        localStorage.setItem('science',scienceCounter);
    } else if (event.target.id === 'answer3') {
        clickedParagraph = thirdChoiseIT;
        itCounter++;
        localStorage.setItem('IT',itCounter);
    }


    display();
    totalClicks++;
    localStorage.setItem('clicks',totalClicks);

    if (totalClicks >= globalArr.length) {
        answerDiv.removeEventListener('click', ShwoResults);
        localStorage.clear();
        console.log(humanCounter);
        console.log(scienceCounter);
        console.log(itCounter);
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {

                labels: ['Arts & Humanities', 'Applied Science', 'Information Technology'],
                datasets: [{
                    backgroundColor: ['rgb(0, 0, 255)', 'rgb(128,0,0)', 'rgb(192,192,192)'],
                    borderColor: ['rgb(0, 0, 255)', 'rgb(128,0,0)', 'rgb(192,192,192)'],
                    data: [humanCounter, scienceCounter, itCounter],
                },]
            },

            // Configuration options go here
            options: {}
        });

    }

}

reTake.addEventListener('click',reTakeQuiz);

function reTakeQuiz(){
    localStorage.clear();
}