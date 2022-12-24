// Select elements
const btn_start         = document.querySelector(".btn_start button");
const box_info          = document.querySelector(".box_info");
const box_user          = document.querySelector(".box_user");
const box_resultat      = document.querySelector(".box_resultat");
const box_quiz          = document.querySelector(".box_quiz");
//Btns
const btn_end           = document.querySelectorAll("button.quit");
const btn_continue      = document.querySelectorAll("button.continue");
const btn_next          = document.querySelector("button.next");
//time
const span_time_count   = document.querySelector(".box_quiz .count");
//icons
const icon_correct      = '<i class="fa-regular fa-circle-check good"></i>';
const icon_incorrect    = '<i class="fa-regular fa-circle-xmark faild"></i>';
//user input
const user_input        = document.querySelector('#name_user');
//count score user
let incrument_answer = 0;

// ===========================================================================
//if clicked btn start Quiz
btn_start.addEventListener('click',()=>{
    box_info.style.display  = 'block';
    btn_start.style.display = 'none';
});

//if clicked btn end Quiz
btn_end.forEach(end => {
    end.addEventListener('click',()=>{
        box_info.style.display     = 'none';
        box_user.style.display     = 'none';
        box_resultat.style.display = 'none';
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
    if(user_input.value === ''){
        alert('Please enre your name!');
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
    
// ===========================================================================
//Ajax
let responeOfData; // declare global variable test
$.ajax({
    url: "assets/js/quizizy.json",
    type: 'GET',
    success: function (res) {
        responeOfData = res;
    },
    async: false // make ajax request synchronous
});

// ===========================================================================
//if clicked btn next question
let next_count = 0;
btn_next.addEventListener('click',()=>{
    if(next_count < responeOfData.length - 1){  //ineed fix this
        next_count++;
        showData(next_count);
        clearInterval(counter_interval);
        startTimer(time_value);
    }else{
        box_quiz.style.display = 'none';
        box_resultat.style.display = 'block';
        resultatUser();
    }
})

// ===========================================================================
//BoxQuizez
function showData(index){

    // let rand_data = responeOfData[Math.floor(Math.random() * responeOfData.length)];
    // let rand_data = responeOfData[sort(()=>Math.random() - 0,5)];
    // console.log(rand_data);
    //Select box quiz
    const quiz_title         = document.querySelector('.box_quiz .title');
    const quiz_questions     = document.querySelector('.box_quiz .questions');
    quiz_title.innerHTML     = '<h2>'+ responeOfData[index].question +'</h2>';
    quiz_questions.innerHTML = '<div class="question"><p>'+ responeOfData[index].info[0] +'</p></div>'
                            + '<div class="question"><p>'+ responeOfData[index].info[1] +'</p></div>'
                            + '<div class="question"><p>'+ responeOfData[index].info[2] +'</p></div>'
                            + '<div class="question"><p>'+ responeOfData[index].info[3] +'</p></div>'

    //loop questions add add attribute onclick
    const question = document.querySelectorAll('.questions .question');
    question.forEach(item=>{
        item.setAttribute('onclick','questionSelected(this)');
    })

    //Counter questions
    countQuestions(index+1, responeOfData.length);

    //btn next add disabled
    btn_next.disabled = true;
}

// ===========================================================================
//Selected questions
function questionSelected(answer){
    let user_answer     = answer.textContent;
    let correct_answer  = responeOfData[next_count].answers;
    const question      = document.querySelectorAll('.questions .question');

    //Clear Interval
    clearInterval(counter_interval);

    if(user_answer === correct_answer){
        console.log("Answer Correct");
        answer.classList.add("correct");
        incrument_answer++;
        answer.insertAdjacentHTML('beforeend',icon_correct);
        //btn next remove disabled
        btn_next.disabled = false;
    }else{
        console.log("Answer Incorrect");
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML('beforeend',icon_incorrect);
        //btn next remove disabled
        btn_next.disabled = false;

        //auto selected correct answer
        question.forEach(item => {
            if(item.textContent == correct_answer){
                item.setAttribute("class","question correct");
                item.insertAdjacentHTML('beforeend',icon_correct);
            }
        })
    }

    //loop questions and disabled him
    question.forEach(item=>{
        item.classList.add("disabled");
    })
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
//Time 
let counter_interval;
//Time value
let time_value = 30;
function startTimer(time){
    function timer(){
        let correct_answer          = responeOfData[next_count].answers;
        const question              = document.querySelectorAll('.questions .question');
        span_time_count.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter_interval);
            //auto selected correct answer
            question.forEach(item => {
                console.log(item.textContent);
                if(item.textContent == correct_answer){
                    item.setAttribute("class","question correct");
                    item.insertAdjacentHTML('beforeend',icon_correct);
                }
            })
            //btn next remove disabled
            btn_next.disabled = false;
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
    span_resultat.children[0].textContent = incrument_answer;
    span_resultat.children[1].textContent = responeOfData.length;
}