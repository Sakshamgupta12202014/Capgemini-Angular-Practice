// let addBtn = document.getElementsByClassName("add")[0];
// let removeBtn;

// let todoList = document.getElementsByClassName("list")[0];
// let todoTitle = document.getElementById("title");
// let span = document.getElementById("span");

// getData();

// function getData() {
//   for(let i = 0; i<localStorage.length; i++) {
//     const currentKey = localStorage.key(i);
//     const currentValue = localStorage.getItem(currentKey);

//     let customDiv = document.createElement("div");
//     let removeBtn = document.createElement("button");

//     removeBtn.textContent = "Remove todo"
//     removeBtn.classList.add("btn");

//     customDiv.classList.add("listItemShow");
//     customDiv.innerHTML += `<p>Todo: ${currentValue}</p>`;
//     todoList.appendChild(customDiv);
//   }
// }

// function clearLocalStorage() {
//   localStorage.clear();
// }


// addBtn.addEventListener("click", () => {
//   let getTodoTitle = todoTitle.value.trim();

//   if (getTodoTitle === "") {
//     span.classList.add("showError");
//     span.textContent = "* Enter something in the box";
//     console.log("title is empty");
//   } else if (getTodoTitle.length < 10) {
//     span.classList.replace("hideError", "showError");
//     span.textContent = "* content length should be at least 10 chars";
//   } else {

//     localStorage.setItem("title" , getTodoTitle);
//     let customDiv = document.createElement("div");
//     removeBtn = document.createElement("button");

//     removeBtn.textContent = "Remove todo"
//     removeBtn.classList.add("btn");

//     customDiv.classList.add("listItemShow");
//     customDiv.innerHTML += `<p>Todo: ${getTodoTitle}</p>`;
//     todoList.appendChild(customDiv);
//     customDiv.appendChild(removeBtn);

//   }

//   console.log(getTodoTitle);
// });

// todoTitle.addEventListener("keypress", () => {
//   span.classList.replace("showError", "hideError");
// });


let addBtn = document.getElementsByClassName("add")[0];
let todoList = document.getElementsByClassName("list")[0];
let todoTitle = document.getElementById("title");
let span = document.getElementById("span");

let titlesArray = JSON.parse(localStorage.getItem("titlesList")) || [];

getData();

function getData() {
  todoList.innerHTML = ""; 

  for(let i = 0; i < titlesArray.length; i++) {
    let customDiv = document.createElement("div");
    customDiv.classList.add("listItemShow");

    let pTag = document.createElement("p");
    pTag.textContent = `Todo: ${titlesArray[i]}`;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove todo";
    removeBtn.classList.add("btn");

    removeBtn.addEventListener("click", () => {
      titlesArray.splice(i, 1); 
      localStorage.setItem("titlesList", JSON.stringify(titlesArray)); 
      getData(); 
    });

    customDiv.appendChild(pTag);
    customDiv.appendChild(removeBtn);
    todoList.appendChild(customDiv);
  }
}

addBtn.addEventListener("click", () => {
  let getTodoTitle = todoTitle.value.trim();

  if (getTodoTitle === "") {
    span.classList.add("showError");
    span.classList.remove("hideError");
    span.textContent = "* Enter something in the box";
  } else if (getTodoTitle.length < 10) {
    span.classList.add("showError");
    span.classList.remove("hideError");
    span.textContent = "* content length should be at least 10 chars";
  } else {
    titlesArray.push(getTodoTitle);
    localStorage.setItem("titlesList", JSON.stringify(titlesArray));
    
    getData(); 
    todoTitle.value = ""; 
  }
});

todoTitle.addEventListener("keypress", () => {
  span.classList.add("hideError");
  span.classList.remove("showError");
});