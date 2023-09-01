$(".current-list").on("click", function(){
    const currentList = $(".current-list").html()
    const addNote = '<input type="text" class="textbox"></input>';    
    // $.get('/append-note', function (response) {
    //     console.log(response);
        $('.current-list').html(currentList+addNote);
    // });   
}
);

