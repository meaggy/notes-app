
// Store var to be used in new creation....
// $("#prev-reminder").change(function(){
//     console.log("change triggered from obj type: input");
//     let $this = $(this);
//     alert( "\nNow: " + $this.val());
// });


$(".creation-area").on("click", function(){
    const prevText = $("#prev-reminder").val();  
    const addNote = $("<input>").attr({"type":"text", "id":"prev-reminder"});
    let initlized;
    //  can only create a new blank note when the previous one IS NOT empty
    // previous one can be marked by the id... 
      
    if (typeof prevText === "undefined" || prevText.trim() === "") {
        console.log("prev text IS null=>", prevText);
        $('#prev-reminder').focus();
        initlized = true;           
        // if (initlized === false) {
        //     console.log("trying to focus");
        //     ('#prev-reminder').focus();
        // };   
        // console.log("not initalized");
        // // $('.reminders-list').append(addNote); 
        // $('#prev-reminder').focus();
        // initlized = true;               
    }
    else {
        console.log("prev text IS SOMETHING: =>", prevText);
        const prevNote = $("<input>").attr({"type":"text", "id":"tester"}).val(prevText);

        // const addNote = $("<input>").attr({"type":"text", "id":"prev-reminder"});
        console.log(addNote);
        if (initlized === true){
            console.log("should overwtite HTML");
            $('.reminders-list').html(prevNote);
            $('.reminders-list').append(addNote);
            initlized = false;
        }
        else {
            console.log("append HTML");
            $("#prev-reminder").removeAttr("id");
            $('.reminders-list').append(addNote);
            $('#prev-reminder').focus();
        };
    };   
    // prevtext as soon as new note is added then, prev text should loose its id..... 
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

