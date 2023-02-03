
$(document).ready(function () {
    $.get("https://63dce49f367aa5a7a4042394.mockapi.io/api/v1/todos",
        function (data, textStatus, jqXHR) {
            listOftodos(data);
        },
    );

});
function listOftodos(data) {
    for (let index = 0; index < data.length; index++) {
        let todo = data[index];
        $("#todoList").append(`<tr class ="listofnames "><td>${todo.name}<button class="remove-Todo" onclick="removeTodo(this)" todoId="${todo.id}">x</button> </td></tr>`);
    }
}
function addToList() {
    $.ajax({
        type: "post",
        url: "https://63dce49f367aa5a7a4042394.mockapi.io/api/v1/todos",
        data: {
            name: $("#input-name").val(),
            is_done: false
        },
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
    refreshList();
}
async function removeTodo(button){
    let todoid= button.getAttribute("todoId");
    await $.ajax({
        type: "delete",
        url: "https://63dce49f367aa5a7a4042394.mockapi.io/api/v1/todos/"+todoid,
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
    refreshList();
}
function refreshList(){
    $(".listofnames").remove();
    $.get("https://63dce49f367aa5a7a4042394.mockapi.io/api/v1/todos",
        function (data, textStatus, jqXHR) {
            listOftodos(data);
        },
    );
}