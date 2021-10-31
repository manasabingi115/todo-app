import "./styles.css";
const inputBox = document.getElementById("in");
const addBtn = document.getElementById("but");
const todoList = document.querySelector(".todoList");
const clearAll = document.getElementById("lastButton");

inputBox.onkeyup = () => {
  let userData = inputBox.value; //getting user entered value
  if (userData.trim() !== 0) {
    //if user values are not only spaces
    addBtn.classList.add("active"); //unactive the add button
  } else {
    addBtn.classList.remove("active");
  }
};
addBtn.onclick = () => {
  let listArray = [];
  let userData = inputBox.value; //getting user entered value
  let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
  if (getLocalStorage == null) {
    listArray = []; //creating blank array
  } else {
    listArray = JSON.parse(getLocalStorage); //transforming json string into a js object
  }
  listArray.unshift(userData); //adding user data
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transoforming js object into a json string
  showTasks();
};
function showTasks() {
  let listArray = [];
  let getLocalStorage = localStorage.getItem("New Todo"); //getting local storage
  if (getLocalStorage == null) {
    listArray = []; //creating blank array
  } else {
    listArray = JSON.parse(getLocalStorage); //transforming json string into a js object
  }
  const pendingNum = document.querySelector(".pendingNum");
  pendingNum.textContent = listArray.length;
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li class="listItems">${element}<span onclick="deleteTasks(${index})";><i class="fas fa-times"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; //adding new li tag in ul
  inputBox.value = ""; //once task added leave the input field empty
}
window.deleteTasks = function deleteTasks(index) {
  let listArray = [];
  let getLocalStorage = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorage);
  listArray.splice(index, 1); //remove the particular indexed li
  //after removing li again updating the local storage
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transoforming js object into a json string
  showTasks();
};
clearAll.onclick = () => {
  let listArray = [];
  localStorage.setItem("New Todo", JSON.stringify(listArray)); //transoforming js object into a json string
  showTasks();
};
showTasks();

// listItems.onclick = () => {
// // //   // const name = document.querySelector(".todoList");
//   const result = listItems.strike();
// //   // document.write(result);
//   document.querySelector(".listItems").innerHTML = result;
// };

// const array = [
//   {
//     text: "reading a book",
//     isCompleted: true
//   },
//   {
//     text: "talking with frnd",
//     isCompleted: false
//   },
//   {
//     text: "speeking",
//     isCompleted: true
//   }
// ];

// let newStr = "";

// array.forEach((element) => {
//   if (element.isCompleted === true) {
//     newStr += `<li class="listItems">${element.text}</li>`;
//   } else {
//     newStr += `<li></li>`;
//   }
// });

// adding new li tag in ul

// document.addEventListener("click", function () {
//   let listArray = [];
//   document.getElementById("demo").innerHTML = "listArray.strike()";
// });

// let listArray = [];
// let newLiTag = "";
//   listArray.forEach((element, index) => {
//     newLiTag += `<li class="listItems" onclick="listItem.strike(${index})">${element}</li>`;
//   });
//   todoList.innerHTML = newLiTag; //adding new li tag in ul

$("li").click(function () {
  $(this).css("text-decoration", "line-through");
});
