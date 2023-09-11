
// Store var to be used in new creation....
// $("#prev-reminder").change(function(){
//     console.log("change triggered from obj type: input");
//     let $this = $(this);
//     alert( "\nNow: " + $this.val());
// });


$(".creation-area").on("click", function(){
    const prevText = $("#prev-reminder").val();  
    let initlized;
    console.log(prevText);  
    if (typeof prevText === "undefined" || prevText.trim() === "") {
        // on first / initialization
        console.log("prev text IS null=>", prevText);
        $('#prev-reminder').focus();
        initlized = true;
    }
    else {
        console.log("prev text IS SOMETHING: =>", prevText);
        const prevNote = $("<input>").attr("type", "text").val(prevText);
        const addNote = $("<input>").attr({"type":"text", "id":"prev-reminder"});
        console.log(addNote);
        if (initlized === true){
            $('.reminders-list').html(prevNote);
            $('.reminders-list').append(addNote);
            initlized = false;
        }
        else {
            $('.reminders-list').append(addNote);
        };
    };   
    // TODO: ONE SHOULD REPLACE HTML THE OTHER SHOULD APPEND!
    // need logic for this ^^^
    
    // const currentList = $(".reminders-list").html();
    // const prevItem = $(".prev-reminder").val();
    // const addNote = '<div><input type="text" id="prev-reminder" class="reminder-box"></input></div>';    
    // $('.reminders-list').html(currentList+addNote);
    // $('#current-reminder').focus();
}
);





//TODO: persist data in text box... change element? replace? and use "this."
//TODO: switch to using a button to create new reminders
// must work on basic funcationality first

