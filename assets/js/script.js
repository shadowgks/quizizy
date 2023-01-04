// Select elements
const btn_start         = document.querySelector(".btn_start button");
const box_info          = document.querySelector(".box_info");
const box_user          = document.querySelector(".box_user");
const box_resultat      = document.querySelector(".box_resultat");
const box_quiz          = document.querySelector(".box_quiz");
const box_answers       = document.querySelector(".box_answers");
//Btns
const btn_end           = document.querySelectorAll("button.quit");
const btn_continue      = document.querySelectorAll("button.continue");
const btn_next          = document.querySelector("button.next");
const btn_submit        = document.querySelector("button.submit");
//time
const span_time_count   = document.querySelector(".box_quiz .count");
//icons
const icon_correct      = '<i class="fa-regular fa-circle-check good"></i>';
const icon_incorrect    = '<i class="fa-regular fa-circle-xmark faild"></i>';
//user input
const user_input        = document.querySelector('#name_user');
//img logo
const img_logo          = document.querySelector('.logo_image_side');
//count score user
let icrument_correct_answer = 0;

// ===========================================================================
//if clicked btn start Quiz
btn_start.addEventListener('click',()=>{
    box_info.style.display  = 'block';
    btn_start.style.display = 'none';
    img_logo.style.display  = 'none';
});

//if clicked btn end Quiz
btn_end.forEach(end => {
    end.addEventListener('click',()=>{
        box_info.style.display     = 'none';
        box_user.style.display     = 'none';
        box_resultat.style.display = 'none';
        box_answers.style.display  = 'none';
        btn_start.style.display    = 'block';
        window.location.reload();
    })
})

//if clicked btn continue Quiz
btn_continue[0].addEventListener('click',()=>{
    box_info.style.display = 'none';
    box_user.style.display = 'block';
});

let name_user;
btn_continue[1].addEventListener('click',()=>{
    //check value user
    if(user_input.value === ''){
        alert('Please entre your name!');
    }else{
        box_user.style.display = 'none';
        box_quiz.style.display = 'block';
        
        //name user
        name_user = user_input.value;

        //Dec Fun time and data
        showData(next_count);
        startTimer(time_value);
    }
});
    
btn_continue[2].addEventListener('click',()=>{
    box_resultat.style.display = 'none';
    box_answers.style.display = 'block';
});

// ===========================================================================
//Ajax Get Data
let reponseOfData; // declare global variable reponseOfData
$.ajax({
    url: "assets/js/newData.json",
    type: 'GET',
    success: function (res) {
        reponseOfData = res;
        console.log(reponseOfData);
    },
    async: false // make ajax request synchronous
});


// ===========================================================================
//if clicked btn next question
let next_count = 0;
let array_answers = [];
btn_next.addEventListener('click',nextQuestions);
function nextQuestions(){
    const question  = document.querySelectorAll('.questions .question');
    if(next_count < reponseOfData.length - 1){
        
        //Icrement data
        next_count++;
        //Declared Function
        showData(next_count);
        clearInterval(counter_interval);
        startTimer(time_value);

        //create object and add data
        let obj = {
            id          : user_answer_id,
            question    : reponseOfData[next_count].question,
            answer      : user_answer_content,
            explication : reponseOfData[next_count].explication,
        }
        //push obj from array 
        array_answers.push(obj);
        console.log(array_answers);
    }else{
        //btn submit display block
        btn_submit.style.display = 'block';
        //btn next display none
        btn_next.style.display = 'none';
        //loop questions and disabled him
        question.forEach(item=>{
            item.classList.add("disabled");
        })
    }
}

// ===========================================================================
//BoxQuizez
//Get data for random questions
const rand_data = reponseOfData.sort(()=>Math.random() - 0.5);
// const arr = [0,1,2,3];
// const rand_data_menu = arr.sort(()=>Math.random() - 0.5);
function showData(index){
    //Select box quiz
    const quiz_title         = document.querySelector('.box_quiz .title');
    const quiz_questions     = document.querySelector('.box_quiz .questions');
    quiz_title.innerHTML     = '<h2>'+ (index+1) +' - '+ rand_data[index].question +'</h2>';
    quiz_questions.innerHTML = '<div><div class="question" answer_id='+ rand_data[index].answer[0]['id'] +' onclick="questionSelected(this)"><p>'+ rand_data[index].answer[0]['choix'] +'</p></div>'
                            + '<div class="question" answer_id='+ rand_data[index].answer[1]['id'] +' onclick="questionSelected(this)"><p>'+ rand_data[index].answer[1]['choix'] +'</p></div></div>'
                            + '<div><div class="question" answer_id='+ rand_data[index].answer[2]['id'] +' onclick="questionSelected(this)"><p>'+ rand_data[index].answer[2]['choix'] +'</p></div>'
                            + '<div class="question" answer_id='+ rand_data[index].answer[3]['id'] +' onclick="questionSelected(this)"><p>'+ rand_data[index].answer[3]['choix'] +'</p></div></div>';

    //Counter questions
    countQuestions(index+1, reponseOfData.length);

    //btn submit turn false
    btn_next.disabled = true;
}


// ===========================================================================
//Selected questions
let user_answer_id;
let user_answer_content;
function questionSelected(answer){

    user_answer_id      = answer.getAttribute('answer_id');
    user_answer_content = answer.textContent;
    const question      = document.querySelectorAll('.questions .question');

    //loop question and remove selected
    question.forEach(item=>{
        item.classList.remove("selected");
    });
    answer.classList.toggle("selected");

    //btn submit turn false
    btn_next.disabled = false;
}

// ===========================================================================
// count question
function countQuestions(n,length_data){
    //Select Element
    const count_question_step = document.querySelector(".quiz_footer .step");
    const count_sum_question  = document.querySelector(".quiz_footer .all");
    count_question_step.innerHTML = n;
    count_sum_question.innerHTML  = length_data;
};

// ===========================================================================
//Counter interval 
let counter_interval;
//Time value
let time_value = 100;
function startTimer(time){
    function timer(){
        span_time_count.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter_interval);
            //btn submit turn false
            btn_next.disabled = false;
            btn_next.click();
        }
    }
    counter_interval = setInterval(timer,1000);
}

// ===========================================================================
//Resultat
function scoreUser(score){
    //Select Element
    const span_resultat = document.querySelector(".box_resultat .score p");
    const span_user     = document.querySelector(".box_resultat .name_user h4");

    span_user.textContent = name_user;
    span_resultat.children[0].textContent = score;
    span_resultat.children[1].textContent = reponseOfData.length;
}

//=======================================================================
//btn Submit
btn_submit.addEventListener('click',function(){

    //hide boxQuiz
    box_quiz.style.display = 'none';
    box_resultat.style.display = 'block';

    //clear interval
    clearInterval(counter_interval);
    array_answers.sort((a,b) => a.id - b.id);
    console.log(array_answers);
    //Ajax
    $.post("ControllerQuizizz.php",
    {
        your_answer : JSON.stringify(array_answers),
    },function(data){
        //parce data reponse
        data_parce = JSON.parse(data);

        //declared Function scoreUser and correctWrongAnswers
        correctWrongAnswers(data_parce['result']);
        scoreUser(data_parce['score']);
    }
    );
});

//=========================================================================
//Final partie Correction Answers Users Here!
function correctWrongAnswers(data){
    //Select Elements
    const answers_body = document.querySelector('.box_answers .answers_body');

    //Loop data
    for(let i=0; i<data.length; i++){
        answers_body.innerHTML += '<div class="row">'
                            + '<h3>'+ (i+1) +' - '+ data[i].question +'</h3>'
                            + '<div class="col"><span>Your Answer</span>'
                            + '<p class="your_answer">'+ data[i].wrong_answer +'</p>'
                            + '<span>Correct Answer</span>'
                            + '<p class="answer">'+ data[i].right_answer +'</p>'
                            + '<span>Explication</span>'
                            + '<p class="explication">'+ data[i].explication +'</p>'
                            + '</div><hr>'
                            +'</div>';
    }
}