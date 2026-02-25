let input = document.querySelector("#taskInput");
let button = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");


button.addEventListener("click", function () {

    let taskValue = input.value;
    
    if (taskValue.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerText = taskValue;

    li.style.backgroundColor = "#d4edda";
    li.style.padding = "8px";
    li.style.borderRadius = "5px";  
    li.setAttribute("class", "task-item");

    list.append(li);

    li.addEventListener("click", function () {
        li.remove();
    });   
    input.value = "";
});