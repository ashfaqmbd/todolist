let text=document.getElementById("text");
let items=document.getElementById("items");

function addItem(){
 if(!text.value){
  alert("Enter an item in todo list");
 }else{
  let newEle=document.createElement("ul");
  newEle.innerHTML = `${text.value} <i class="fa-solid fa-trash"></i>`;
  items.appendChild(newEle);
  text.value="";
  newEle.querySelector("i").addEventListener("click",remove)
   function remove(){
    newEle.remove();
   }
  }
 }
 

