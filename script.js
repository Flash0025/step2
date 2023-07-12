var todoBox = document.getElementById('text');
todoBox.addEventListener('keypress', addTodo);

function addTodo(event){
    console.log(event.keyCode);
    if (event.keyCode == 13){
        var inputValue = document.getElementById('text').value;
        var newLi = document.createElement('li');
        var newTextNode = document.createTextNode(inputValue);
        newLi.appendChild(newTextNode);
        var newList = document.getElementById('list-items');
        newList.appendChild(newLi);
        document.getElementById('text').value= '';
    }
}


newList.addEventListener("click". Checked);
function checked(event){
    if(event.target.tagName === "li") {
        event.target.classList.toggle("checked");
    }
}