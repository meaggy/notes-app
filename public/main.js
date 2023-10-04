// to do: 
// style input box
// style background
// look at code, seperatation of concerns = function to create/add new item (because needs to be added either way)
// style button that create new item
// todo: uncheck radio button...


// Helpers
function NetNewNote(){
    const newNote = $("<div>", {
        html: '<input type="radio" class="check-radio-button"></input> <input type="text" class="reminder-item" id="prev-reminder"></input> <button class="delete-button"><span class="delete material-symbols-outlined">delete</span></button>'
        }
    );
    $('.reminders-list').append(newNote);
    $('#prev-reminder').focus();
}

function CheckNote() {
    if ($(".reminders-list div").length === 0 || $("#prev-reminder").val().length > 0){
        $("#prev-reminder").removeAttr("id");
        NetNewNote();
    }
    else { 
        $("#prev-reminder").focus()
    };
}


// Event Listeners
$(document).on("click", ".check-radio-button", ()=> {
    const parentDiv = $(this).parent(); 
    parentDiv.children('.reminder-item').css({'color':'#efefef', 'border-color':'#efefef'});
    setTimeout(() => parentDiv.remove(), 1000);
});

$(document).on("click", ".delete-button", ()=> {
    const parentDiv = $(this).parent();  
    parentDiv.remove();
});

$(document).on("click", ".creation-area", CheckNote);

$(document).on("click", "#new-reminder-button", CheckNote);

