const today = new Date();
const today_date = document.querySelector('.today_date');

const smallcr = document.querySelector('.small_cr');
const bigcr = document.querySelector('.big_cr');
const storagecr = document.querySelector('.storage_cr');

const morning_btn = document.querySelector('.morning_btn');
const afternoon_btn = document.querySelector('.afternoon_btn');
const container = document.querySelector('.container_data');

const morning = document.querySelectorAll('.morning');
const afternoon = document.querySelectorAll('.afternoon');

smallcr.addEventListener('click', function() {
    today_date.innerHTML = today.getFullYear()+'.'+today.getMonth()+'.'+today.getDay();
    document.getElementById("small_room").style.display = "grid";
    document.getElementById("big_room").style.display = "none";
    document.getElementById("storage_room").style.display = "none"; 
    for (let i = 0; i < morning.length; i++) {
       morning[i].style.display = "none";
    } 
    for (let i = 0; i < afternoon.length; i++) {
       afternoon[i].style.display = "none";
    }  
    container.style.display = "flex";       
});

bigcr.addEventListener('click', function() {
    today_date.innerHTML = today.getFullYear()+'.'+today.getMonth()+'.'+today.getDay();
    document.getElementById("small_room").style.display = "none";
    document.getElementById("big_room").style.display = "grid";
    document.getElementById("storage_room").style.display = "none"; 
    for (let i = 0; i < morning.length; i++) {
       morning[i].style.display = "none";
    } 
    for (let i = 0; i < afternoon.length; i++) {
       afternoon[i].style.display = "none";
    } 
    container.style.display = "flex";    
});

storagecr.addEventListener('click', function() {
    today_date.innerHTML = today.getFullYear()+'.'+today.getMonth()+'.'+today.getDay();
    document.getElementById("small_room").style.display = "none";
    document.getElementById("big_room").style.display = "none";
    document.getElementById("storage_room").style.display = "grid"; 
    for (let i = 0; i < morning.length; i++) {
       morning[i].style.display = "none";
    } 
    for (let i = 0; i < afternoon.length; i++) {
       afternoon[i].style.display = "none";
    } 
    container.style.display = "flex";    
});

morning_btn.addEventListener('click', function(){ 
    for (let i = 0; i < morning.length; i++) {
       morning[i].style.display = "flex";
    } 
    for (let i = 0; i < afternoon.length; i++) {
       afternoon[i].style.display = "none";
    } 
});

afternoon_btn.addEventListener('click', function(){ 
    for (let i = 0; i < morning.length; i++) {
       morning[i].style.display = "none";
    } 
    for (let i = 0; i < afternoon.length; i++) {
       afternoon[i].style.display = "flex";
    } 
});



const todoList = document.querySelectorAll(".medicine_list");

function checked(event){
    const item = event.target;
    if(item.classList[0]==="complete_btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

todoList.forEach(function(todol){
    todol.addEventListener("click", checked);
});
