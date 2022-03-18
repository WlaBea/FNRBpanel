//SELECTORS
const todoList = document.querySelector(".tasks_list");

//EVENT LISTENERS
todoList.addEventListener('click', checked);

function checked(event){
    const item = event.target;
    if(item.classList[0]==="complete_btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

