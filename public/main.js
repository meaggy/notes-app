
// to do: 
// build vertically
// style input box
// look at code, seperatation of concerns
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

    // const currentList = $(".reminders-list").html();
    // const prevItem = $(".prev-reminder").val();
    // const addNote = '<div><input type="text" id="prev-reminder" class="reminder-box"></input></div>';    
    // $('.reminders-list').html(currentList+addNote);
    // $('#current-reminder').focus();

// Store var to be used in new creation....
// $("#prev-reminder").change(function(){
//     console.log("change triggered from obj type: input");
//     let $this = $(this);
//     alert( "\nNow: " + $this.val());
// });


