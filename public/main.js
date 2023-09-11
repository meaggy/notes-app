
// to do: 
// 
// style input box
// look at code, seperatation of concerns = function to create/add new item (because needs to be added either way)
// add delete feature with garbage icon
// add cross out feature
// style background
// fix div on click to create new
// add button to create new item

$(".creation-area").on("click", function(){
    const prevText = $("#prev-reminder").val();  
    const newInput = $("<input>").attr({"type":"text", "id":"prev-reminder", "class":"reminder-item"});
    const newNote = $("<div>").append(newInput);
    let initlized;
    if (typeof prevText === "undefined" || prevText.trim() === "") {
        $('#prev-reminder').focus();
        initlized = true;         
    }
    else {
        
        const replaceInput = $("<input>").attr({"type":"text","class":"reminder-item"}).val(prevText);
        const prevNote = $("<div>").append(replaceInput);
        if (initlized === true){
            $('.reminders-list').html(prevNote);
            $('.reminders-list').append(newNote);
            initlized = false;
        }
        else {
            $("#prev-reminder").removeAttr("id");
            $('.reminders-list').append(newNote);
            $('#prev-reminder').focus();
        };
    };   
}
);
