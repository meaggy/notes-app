$(".current-list").on("click", function(){
    const currentList = $(".current-list").html()
    // make a get request
    $.get('/append-note', function (response) {
        console.log(response);
        $('.current-list').html(currentList+response);
    });   
}
);

