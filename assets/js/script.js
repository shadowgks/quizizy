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

//Ajax
var responeOfData; // declare global variable test
$.ajax({
    url: "assets/js/quizizy.json",
    type: 'GET',
    success: function (res) {
        responeOfData = res;
    },
    async: false // make ajax request synchronous
});

//if clicked btn next question
let next_count = 0;
btn_next.addEventListener('click',()=>{
    if(next_count < responeOfData.length - 1){  //ineed fix this
        next_count++;
        showQuestions();
    }else{
        console.log("good");
    }
})

//Declared Functions
function showQuestions(){
    //Dec fun boxQuiz
    boxQuiz(responeOfData,next_count);
}

//BoxQuizez
function boxQuiz(responeOfData,index){

    // let rand_data = responeOfData[Math.floor(Math.random() * responeOfData.length)];
    // let rand_data = responeOfData[sort(()=>Math.random() - 0,5)];
    // console.log(rand_data);
    //Select box quiz
    const quiz_title         = document.querySelector('.box_quiz .title');
    const quiz_questions     = document.querySelector('.box_quiz .questions');
    quiz_title.innerHTML     = '<h2>'+ responeOfData[index].id +'. '+ responeOfData[index].question +'</h2>';
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
}

let sum = 0;
//Selected questions
function questionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = responeOfData[next_count].answers;
    const question = document.querySelectorAll('.questions .question');
    
    if(userAnswer === correctAnswer){
        console.log("Answer Correct");
        answer.classList.add("correct");
        sum +=10;
        console.log(sum);
    }else{
        console.log("Answer Incorrect");
        answer.classList.add("incorrect");

        //auto selected answer question
        question.forEach(item => {
            // if(item.children.textContent == correctAnswer){
            //     answer.setAttribute("class","question correct")
            // }
            console.log(item.children.textContent);
        })
    }
    
    question.forEach(item=>{
        item.classList.add("disabled");
        // console.log(item);
    })
    //loop questions and disabled him
    // console.log(question[0]);
    // question.forEach(item=>{
    //     // item.setAttribute('onclick','questionSelected(this)');
    //     console.log(item);
    // })
}

// count question
function countQuestions(n,length_data){
    const count_question_step = document.querySelector(".quiz_footer .step");
    const count_sum_question  = document.querySelector(".quiz_footer .all");
    count_question_step.innerHTML = n;
    count_sum_question.innerHTML  = length_data;
};






// =========================================================
// function showQuestions(){
//     // // return new Promise((resolve,reject)=>{
//     // Get Info JSON
//     let myRequest = new XMLHttpRequest();
//     myRequest.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             //Convert To Object JS
//             let obj_js = JSON.parse(this.responseText);
//             // resolve(objJS)

//             //Dec fun boxQuiz
//             boxQuiz(obj_js,next_count);
//             // //Fun Selected questions
//             // questionSelected(index);
//         }
//     }
//     myRequest.open("GET","assets/js/quizizy.json",true);
//     myRequest.send();
//     // })
// }
// =========================================================