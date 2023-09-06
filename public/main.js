$(".creation-area").on("click", function(){
    const currentList = $(".reminders-list").html();
    // const currentContent = $(".reminder-box").value;
    // console.log(currentContent);
    const addNote = '<div><input type="text" id="current-reminder" class="reminder-box"></input></div>';    

    $('.reminders-list').html(currentList+addNote);

    $('#current-reminder').focus();
}
);

