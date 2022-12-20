// Get elements
const btn_start    = document.querySelector(".btn_start button");
const box_info     = document.querySelector(".box_info");
const btn_end      = document.querySelector(".quit");
const btn_continue = document.querySelector(".continue");
const box_user     = document.querySelector(".box_user");

//if clicked btn start Quiz
btn_start.addEventListener('click',()=>{
    box_info.style.display = 'block';
    btn_start.style.display = 'none';
});

//if clicked btn end Quiz
btn_end.addEventListener('click',()=>{
    box_info.style.display = 'none';
    btn_start.style.display = 'block';
    box_user.style.display = 'none';
});

//if clicked btn continue Quiz
btn_continue.addEventListener('click',()=>{
    box_info.style.display = 'none';
    box_user.style.display = 'block';
});