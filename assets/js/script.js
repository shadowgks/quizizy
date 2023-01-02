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

        //btn submit turn true
        btn_submit.disabled = true;
        
        //name user
        name_user = user_input.value;

        //Dec Fun time and data
        showData(0);
        startTimer(time_value);
    }
});
    
btn_continue[2].addEventListener('click',()=>{
    box_resultat.style.display = 'none';
    box_answers.style.display = 'block';
});

// ===========================================================================
//Ajax
let reponseOfData; // declare global variable test
$.ajax({
    url: "assets/js/quizizy.json",
    type: 'GET',
    success: function (res) {
        reponseOfData = res;
    },
    async: false // make ajax request synchronous
});

// ===========================================================================
//if clicked btn next question
let next_count = 0;
btn_next.addEventListener('click',nextQuestions);

function nextQuestions(){
    
    if(next_count < reponseOfData.length - 1){
        next_count++;
        showData(next_count);
        clearInterval(counter_interval);
        startTimer(time_value);
        // btn_next.disabled = true;
    }else{
        box_quiz.style.display = 'none';
        box_resultat.style.display = 'block';
        resultatUser();
    }
}

// ===========================================================================
//BoxQuizez
//Get data for random questions
const rand_data = reponseOfData.sort(()=>Math.random() - 0.5);
const arr = [0,1,2,3];
const rand_data_menu = arr.sort(()=>Math.random() - 0.5);
function showData(index){
    //Select box quiz
    const quiz_title         = document.querySelector('.box_quiz .title');
    const quiz_questions     = document.querySelector('.box_quiz .questions');
    quiz_title.innerHTML     = '<h2>'+ (index+1) +' - '+ rand_data[index].question +'</h2>';
    quiz_questions.innerHTML =    '<div><div class="question" onclick="questionSelected(this)"><p>'+ rand_data[index].info[rand_data_menu[0]] +'</p></div>'
                                + '<div class="question" onclick="questionSelected(this)"><p>'+ rand_data[index].info[rand_data_menu[1]] +'</p></div></div>'
                                + '<div><div class="question" onclick="questionSelected(this)"><p>'+ rand_data[index].info[rand_data_menu[2]] +'</p></div>'
                                + '<div class="question" onclick="questionSelected(this)"><p>'+ rand_data[index].info[rand_data_menu[3]] +'</p></div></div>';

    //Counter questions
    countQuestions(index+1, reponseOfData.length);

    //btn next turn true
    btn_next.disabled = true;
}


// ===========================================================================
//Selected questions
let user_answer;
function questionSelected(answer){
    //select element question
    user_answer     = answer;
    const question  = document.querySelectorAll('.questions .question');

    //loop question and remove selected
    question.forEach(item=>{
        item.classList.remove("selected");
    });
    user_answer.classList.toggle("selected");
    
    //btn submit turn false
    btn_submit.disabled = false;
}

//if click btn submit
btn_submit.addEventListener("click",()=>{
    //Select Element
    const correct_answer  = reponseOfData[next_count].answers;
    const question        = document.querySelectorAll('.questions .question');

    //Clear Interval
    clearInterval(counter_interval);

    //Check Answer
    if(user_answer.textContent === correct_answer){
        user_answer.classList.add("correct");
        icrument_correct_answer++;
        user_answer.insertAdjacentHTML('beforeend',icon_correct);
        //btn next turn true
        btn_next.disabled = false;
        //btn submit turn false
        btn_submit.disabled = true;
    }else{
        user_answer.classList.add("incorrect");
        user_answer.insertAdjacentHTML('beforeend',icon_incorrect);
        //btn next turn true
        btn_next.disabled = false;
        //btn submit turn false
        btn_submit.disabled = true;

        //Final partie Correction Answers Users Here!
        //Select Elements
        const answers_body = document.querySelector('.box_answers .answers_body');
        answers_body.innerHTML += '<div class="row">'
                                + '<h3>'+ reponseOfData[next_count].id +' - '+ reponseOfData[next_count].question +'</h3>'
                                + '<div class="col"><span>Your Answer</span>'
                                + '<p class="your_answer">'+ user_answer.textContent +'</p>'
                                + '<span>Correct Answer</span>'
                                + '<p class="answer">'+ correct_answer +'</p>'
                                + '<span>Explication</span>'
                                + '<p class="explication">'+ reponseOfData[next_count].explication +'</p>'
                                + '</div><hr>'
                                +'</div>';
    }

    //loop questions and disabled him
    question.forEach(item=>{
        item.classList.add("disabled");
    })
});

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
let time_value = 5;
function startTimer(time){
    function timer(){
        const correct_answer        = reponseOfData[next_count].answers;
        const question              = document.querySelectorAll('.questions .question');
        span_time_count.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter_interval);

            //auto selected correct answer
            question.forEach(item => {
                if(item.textContent == correct_answer){
                    item.setAttribute("class","question correct");
                    item.insertAdjacentHTML('beforeend',icon_correct);
                }
            })
            
            //btn next turn true
            btn_next.disabled = false;
            //btn submit turn false
            btn_submit.disabled = true;

            //loop questions and disabled him
            question.forEach(item=>{
            item.classList.add("disabled");
            })
        }
    }
    counter_interval = setInterval(timer,1000);
}

// ===========================================================================
//Resultat
function resultatUser(){
    //Select Element
    const span_resultat = document.querySelector(".box_resultat .score p");
    const span_user     = document.querySelector(".box_resultat .name_user h4");

    span_user.textContent = name_user;
    span_resultat.children[0].textContent = icrument_correct_answer;
    span_resultat.children[1].textContent = reponseOfData.length;
}