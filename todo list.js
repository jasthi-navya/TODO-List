const Inputbox = document.querySelector(".inputfield input");
const addbutton = document.querySelector(".inputfield button");
const thelist = document.querySelector(".thelist");
const deleteallbtn = document.querySelector(".allclear button");

Inputbox.onkeyup = function() { 
    let giveninput = Inputbox.value;
    if(giveninput.trim() != 0){
        addbutton.classList.add("active");
    }
    else{
        addbutton.classList.remove("active");
    }
 }

 addbutton.onclick = () => {
     let giveninput = Inputbox.value;
     let storage = localStorage.getItem("new todo");
     if(storage == null){
         listArr= [];
     }
     else{
         listArr = JSON.parse(storage);
     }
     listArr.push(giveninput);
     localStorage.setItem("new todo",JSON.stringify(listArr));
     addbutton.classList.remove("active");
     showTasks();
 }

 function showTasks(){
     let storage = localStorage.getItem("new todo");
     if(storage == null)
     {
         listArr = [];
     }
     else{
         listArr = JSON.parse(storage);
     }
     const pendingtasks = document.querySelector(".allclear .pendingtasks");
     pendingtasks.textContent = listArr.length;
     if(listArr.length > 0)
     {
         deleteallbtn.classList.add("active");
     }
     else{
        
        deleteallbtn.classList.remove("active");
     }
     let newLiTag = '';
     listArr.forEach((element,index) => {
         newLiTag += `<li>${element}<span onclick =  "deleteTask(${index})" ;>remove</span></li>`
     });
     thelist.innerHTML = newLiTag;
     Inputbox.value = "";
 }

function deleteTask(index){
    let storage = localStorage.getItem("new todo");
    listArr = JSON.parse(storage);
    listArr.splice(index, 1);
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showTasks();
}

deleteallbtn.onclick = () => {
    listArr = [];
    localStorage.setItem("new todo",JSON.stringify(listArr)); 
    showTasks();
}

