// Select elements
const btn_start    = document.querySelector(".btn_start button");
const box_info     = document.querySelector(".box_info");
const box_user     = document.querySelector(".box_user");
const box_resultat = document.querySelector(".box_resultat");
const box_quiz     = document.querySelector(".box_quiz");
//Btn
const btn_end      = document.querySelectorAll("button.quit");
const btn_continue = document.querySelectorAll("button.continue");
const btn_next     = document.querySelector("button.next");




//if clicked btn start Quiz
btn_start.addEventListener('click',()=>{
    box_info.style.display = 'block';
    btn_start.style.display = 'none';
});

//if clicked btn end Quiz
btn_end[0].addEventListener('click',()=>{
    box_info.style.display = 'none';
    btn_start.style.display = 'block';
});
btn_end[1].addEventListener('click',()=>{
    box_user.style.display = 'none';
    btn_start.style.display = 'block';
});
btn_end[2].addEventListener('click',()=>{
    box_resultat.style.display = 'none';
    btn_start.style.display = 'block';
});


//if clicked btn continue Quiz
btn_continue[0].addEventListener('click',()=>{
    box_info.style.display = 'none';
    box_user.style.display = 'block';
});
btn_continue[1].addEventListener('click',()=>{
    box_user.style.display = 'none';
    box_quiz.style.display = 'block';
    showQuestions(0);
});


//if clicked btn next question
let next_count = 0;
let count_question = 1;
btn_next.addEventListener('click',()=>{
    if(next_count < 9){  //ineed fix this
        next_count++;
        count_question++;
        showQuestions();
    }else{
        console.log("good");
    }
})

function showQuestions(){
    // return new Promise((resolve,reject)=>{
    // Get Info JSON
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            //Convert To Object JS
            let obj_js = JSON.parse(this.responseText);
            // resolve(objJS)

            //Dec fun boxQuiz
            boxQuiz(obj_js,next_count);
            // //Fun Selected questions
            // questionSelected(index);
        }
    }
    myRequest.open("GET","assets/js/quizizy.json",true);
    myRequest.send();   
    // })
}

//BoxQuizez
function boxQuiz(data,index){
    //Select box quiz
    const quiz_title         = document.querySelector('.box_quiz .title');
    const quiz_questions     = document.querySelector('.box_quiz .questions');
    quiz_title.innerHTML     = '<h2>'+ data[index].id +'. '+ data[index].question +'</h2>';
    quiz_questions.innerHTML = '<div class="question"><p>'+ data[index].info[0] +'</p></div>'
                            + '<div class="question"><p>'+ data[index].info[1] +'</p></div>'
                            + '<div class="question"><p>'+ data[index].info[2] +'</p></div>'
                            + '<div class="question"><p>'+ data[index].info[3] +'</p></div>'

    //loop questions add add attribute onclick
    const question = document.querySelectorAll('.questions .question');
    question.forEach(item=>{
        item.setAttribute('onclick','questionSelected(this,data)');
    })

    //Counter questions
    countQuestions(index+1,data.length);
    
}

//Selected questions
function questionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = data[next_count].answers;
    console.log(correctAnswer);
    console.log(userAnswer);
}

// count question
function countQuestions(n,lengthdata){
    const count_question_step = document.querySelector(".quiz_footer .step");
    const count_sum_question  = document.querySelector(".quiz_footer .all");
    count_question_step.innerHTML = n;
    count_sum_question.innerHTML  = lengthdata;
};
