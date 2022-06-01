function initFunction() {

    var input = document.getElementById("toDoInput");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addItemToList();
        }
    });

    document.getElementById('toDoInput').value = '';
}


function addItemToList() {

    var todoInput = document.getElementById('toDoInput');

    var todoText = todoInput.value;

    todoInput.value = '';

    if (todoText == '' || todoText[0] == ' ') {
        alert('Please enter valid text content');
        return;
    }

    var defaultItem = document.getElementById('defaultItem');
    if (defaultItem != undefined) {
        defaultItem.setAttribute('hidden', '');
        document.getElementById('defaultDoneButon').setAttribute('hidden', '');
        document.getElementById('defaultDeleteButon').setAttribute('hidden', '');
    }

    var ul = document.getElementById("list");
    //create item
    var li = document.createElement("li");
    li.id = todoText;
    li.textContent = todoText;
    li.className = "listItem";
    ul.appendChild(li);
    //create buttons
    var buttonDone = document.createElement("button");
    var buttonDelete = document.createElement("button");
    buttonDone.id = "done"+todoText;
    buttonDelete.id = "delete"+todoText;
    buttonDone.textContent = "Done";
    buttonDelete.textContent = "Delete";
    buttonDone.setAttribute('onclick', 'setTaskDone(this);');
    buttonDelete.setAttribute('onclick', 'setTaskDeleted(this);');
    ul.appendChild(buttonDone);
    ul.appendChild(buttonDelete);
}

function setTaskDone(button) {
    button.prev('li');
}

function setTaskDeleted(button) {

    button.setAttribute('hidden', ''); 
    var doneButton = $(button).prev('button')[0];
    doneButton.setAttribute('hidden', '');
    var listItem = $(doneButton).prev('li')[0];
    listItem.setAttribute('hidden', '');
}
