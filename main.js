function handleToDo(){
    let myForm = document.getElementById("todoList");
    myForm.addEventListener('submit',(e) => {
        let value = e.target.elements.task.value;
        e.preventDefault();
        
        let item = document.createElement('input');
        let label = document.createElement('label');
        let div = document.createElement('div');
        item.type="checkbox";
        
        let fieldset = document.getElementById("todofield");
        
        if(value == ""){
            alert("Task cannot be Empty!");
        }else{
            label.appendChild(item);
            label.setAttribute("class","list");
            item.classList = "itemClass"
            div.setAttribute('class',"taskContent");
            label.appendChild(document.createTextNode(value));
            div.appendChild(label)
            fieldset.appendChild(div);
            e.target.elements.task.value = "";
        }
    });
    myForm.removeEventListener("submit",handleToDo);
}

handleToDo();

function selectItems(){
    let itemlist=document.getElementsByClassName('taskContent');
    let totalitems = itemlist[itemlist.length-1];
    return totalitems;
}

function deleteList(){
    let totalitems = selectItems();
    console.log(totalitems)
    if(totalitems == ""){
        alert("Please select the items to delete");
    }else{
        totalitems.remove();
    }
}
