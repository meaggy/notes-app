
// to do: // 
// style input box
// style background
// look at code, seperatation of concerns = function to create/add new item (because needs to be added either way)
// style button that create new item


function CreateNewNote() {
    const newNote = $("<div>", {
        html: '<input type="radio" class="check-radio-button"></input> <input type="text" class="reminder-item" id="prev-reminder"></input> <button class="delete-button"><span class="delete material-symbols-outlined">delete</span></button>'
        }
    );
    $("#prev-reminder").removeAttr("id");
    $('.reminders-list').append(newNote);
    $('#prev-reminder').focus();
};

$(document).on("click", ".check-radio-button", function() {
    const parentDiv = $(this).parent(); 
    console.log(parentDiv);
    parentDiv.children('.reminder-item').css({'color':'#efefef', 'border-color':'#efefef'});
    setTimeout(() => parentDiv.remove(), 1000);
});

$(document).on("click", ".delete-button", function() {
    const parentDiv = $(this).parent();    

    parentDiv.remove();
});

$(document).on("click", ".creation-area", function() {
    let prevText = $("#prev-reminder").val();  
    const newNote = $("<div>", {
        html: '<input type="radio" class="check-radio-button"></input> <input type="text" class="reminder-item" id="prev-reminder"></input> <button class="delete-button"><span class="delete material-symbols-outlined">delete</span></button>'
        }
    );
    if (!$("#prev-reminder").length){
        console.log("the prev reminder new does exist");
        $('.reminders-list').append(newNote);
        $('#prev-reminder').focus();
    }
    else { 
        if (prevText.trim() === "") {
            $('#prev-reminder').focus();
        }
        else {       
                $("#prev-reminder").removeAttr("id");
                $('.reminders-list').append(newNote);
                $('#prev-reminder').focus();
            }
    }});


$(document).on("click", "#new-reminder", function() {
    // function:
    let prevText = $("#prev-reminder").val();  
    const newNote = $("<div>", {
        html: '<input type="radio" class="check-radio-button"></input> <input type="text" class="reminder-item" id="prev-reminder"></input> <button class="delete-button"><span class="delete material-symbols-outlined">delete</span></button>'
        }
    );

    if (!$("#prev-reminder").length){
        console.log("the prev reminder new does exist");
        $('.reminders-list').append(newNote);
        $('#prev-reminder').focus();
    }
    else { 
        if (prevText.trim() === "") {
            $('#prev-reminder').focus();
        }
    else{
    console.log("new reminder button clicked");
    CreateNewNote();}
}});
