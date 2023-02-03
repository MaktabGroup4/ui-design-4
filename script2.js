$(document).ready(function () {
    $.get("https://reqres.in/api/users?page=1",
        function (data, textStatus, jqXHR) {
            listOfprofiles(data);
        },
    );
    $.get("https://reqres.in/api/users?page=2",
        function (data, textStatus, jqXHR) {
            listOfprofiles(data);
        },
    );
});
function listOfprofiles(data) {
    // debugger
    for (let index = 0; index < Math.ceil(data.data.length /2); index+=2) {
        for (let i = index; i < index + 3 && i<data.data.length; i++) {
            let profile = data.data[i];
            $("#profile-card").append(`
              <td class="columns"><div class=card><img src="${profile.avatar}" alt="">
               <p>${profile.first_name}</br>${profile.last_name} </br>
                ${profile.email}</p></div></td>`);
        }
        $("#profile-card").append(`<tr></tr>`);
    }
}