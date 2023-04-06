

const addItem = document.getElementById("add-item");
const getItem = document.getElementById("input-item");
const outputItem = document.getElementById("output");
let error = document.getElementById("error");
let shoppingItems = [];


addItem.onclick = item;


function item(e){
    e.preventDefault();
    shoppingItems.push(getItem.value);
    renderItems()       
}

function renderItems(){
    if(!getItem.value){
        return error.textContent = "please enter a valid shopping item"
    }else{
        listItems = ""
    for(let i = 0; i < shoppingItems.length; i++){
        listItems += "<li>" + shoppingItems[i] + "</li>"        
    }
    outputItem.innerHTML = listItems
    }    
}

function clearList(){
    error.style.display = "none"
    listItems = ""
    outputItem.innerHTML = ""
    shoppingItems = [] 
    renderItems()   
}
console.log(error);
    

