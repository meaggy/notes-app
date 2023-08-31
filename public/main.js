$(".current-list").on("click", function(){
    fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: null, // Convert data to JSON format
      });
    alert("hello!");
}
);