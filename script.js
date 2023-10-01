const inputBox = document.getElementById("new-task"); 
const listContainer = document.getElementById("list-container"); 
const audio = new Audio("sound.mp3");

function addTask() {
  if(inputBox.value === ''){
    alert("You must write something!")
  }
  else{
    let li = document.createElement("li"); 
    li.innerHTML = inputBox.value; 
    listContainer.appendChild(li);
    let span = document.createElement("span"); 
     span.innerHTML = "\u00d7"; 
     li.appendChild(span);
     audio.play();
  }
  inputBox.value = ''; 
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked"); 
    saveData();
  } else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false); 

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML); 
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask(); 

const clickbutton = document.getElementById("clickbutton");

function playclicksound(){
  audio.play();
}; 

clickbutton.addEventListener("click", playclicksound);