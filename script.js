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
        defaultItem.remove();
        document.getElementById('defaultDoneButon').remove();
        document.getElementById('defaultDeleteButon').remove();
    }

    var ul = document.getElementById("list");
    //create item
    var li = document.createElement("li");
    li.id = todoText;
    li.textContent = todoText;
    li.className = "listItem";

    //create buttons
    var buttonDone = document.createElement("button");
    var buttonDelete = document.createElement("button");

    buttonDone.id = "done" + todoText;
    buttonDelete.id = "delete" + todoText;

    buttonDelete.title = "Permanently Delete";

    buttonDone.innerHTML = '<i class="fa fa-check"></i>';
    buttonDelete.innerHTML = '<i class="fa fa-trash-o"></i>';

    buttonDone.setAttribute('onclick', 'setTaskDone(this);');
    buttonDelete.setAttribute('onclick', 'setTaskDeleted(this);');

    ///append html
    ul.appendChild(li);
    ul.appendChild(buttonDone);
    ul.appendChild(buttonDelete);

    todoInput.focus();
    todoInput.select();
}

function setTaskDone(button) {
    var listItem = $(button).prev('li')[0];

    listItem.innerHTML = listItem.innerHTML.strike();
}

function setTaskDeleted(button) {

    var doneButton = $(button).prev('button')[0];
    var listItem = $(doneButton).prev('li')[0];

    button.remove();
    doneButton.remove();
    listItem.remove();
}
