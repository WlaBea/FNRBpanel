const today = new Date();
const current_date = document.querySelector('.today_date');

current_date.addEventListener('click', function(){
    this.innerHTML = today.getFullYear()+'.'+today.getMonth()+'.'+today.getDay();
});