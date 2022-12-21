// Get elements
const btn_start    = document.querySelector(".btn_start button");
const box_info     = document.querySelector(".box_info");
const btn_end      = document.querySelectorAll("button.quit");
const btn_continue = document.querySelectorAll("button.continue");
const box_user     = document.querySelector(".box_user");
const box_resultat = document.querySelector(".box_resultat");
const box_quiz     = document.querySelector(".box_quiz");

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
});

// Get Info JSON
function Show(){
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = () => {
        if(this.readyState === 4 && this.readyState === 200){
            console.log(this.responseText);
        }
    }

    myRequest.open("GET","assets/js/quizizy.json",true);
    myRequest.send();
}
Show();