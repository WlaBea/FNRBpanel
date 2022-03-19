const add_text = document.querySelector('.add_text');
const remarks_text = document.querySelector('.remarks_text');
const remarks_list = document.querySelector('.remarks_list');
const today = new Date();
const current_date = today.getDay()+'.'+today.getMonth()+'.'+today.getFullYear();

add_text.addEventListener('click', function(){
    remarks_list.innerHTML = current_date + '</br>' + remarks_text.value;     
});