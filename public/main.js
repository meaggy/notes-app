
// to do: 
// 
// style input box
// add cross out feature
// style background
// look at code, seperatation of concerns = function to create/add new item (because needs to be added either way)
// fix div on click to create new
// add button to create new item

$(document).on("click", ".check-radio-button", function() {
    const parentDiv = $(this).parent();    
    console.log(parentDiv.children('.reminder-item'));
    parentDiv.style.opacity = '0';
    setTimeout(() => parentDiv.remove(), 1000);
});

$(document).on("click", ".delete-button", function() {
    const parentDiv = $(this).parent();    
    //should be if length of parent is 1 then don't delete, doesnt have to aact be fist
    if ($(".reminders-list div").length === 1) {
          // if length is one of reminder list is 1, keep the input and add the id = prev-reminder
          console.log("keeping");
          console.log(parentDiv.children('.reminder-item'));
          parentDiv.children('.reminder-item').val("");
          parentDiv.children('.reminder-item').children("input").attr("id", "prev-reminder") ;
          parentDiv.children('.reminder-item').focus();
    }
    else {
        console.log("removing");
        parentDiv.remove();
      
    }; 
    if (!$("#prev-reminder").length){
        // zero indexed
        console.log("previous reminder id does not exist");
        const mainList = $('.reminders-list div');
        const mainLen = mainList[mainList.length-1];
        $(mainLen).children("input").attr("id", "prev-reminder");
        console.log("previous reminder reassigned");


    };
});

$(document).on("click", ".creation-area", function() {
    if ($("#prev-reminder").length){
        console.log("the prev reminder new does exist");
        console.log("here is the value", $("#prev-reminder").val());
    };
    let prevText = $("#prev-reminder").val();  

    console.log("reponding to click in creation!!");
    console.log("pvalue of prev reminder id", $("#prev-reminder").val());

    const newInput = $("<input>").attr({"type":"text", "id":"prev-reminder", "class":"reminder-item"});
    // const newNote = $("<div>").append(newInput);
    const newNote = $("<div>", {
        html: '<input type="radio" class="check-radio-button"></input> <input type="text" class="reminder-item" id="prev-reminder"></input> <button class="delete-button"><span class="delete material-symbols-outlined">delete</span></button>'
        }
    );
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


