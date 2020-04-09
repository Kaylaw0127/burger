$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("devoured");

    var devourStatus = {
      devoured: newDevour
    };

    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourStatus
    }).then(
      function() {
        console.log("changed devour to", newDevour);
       
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      name: $("#bu").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

   
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
       
        location.reload();
      }
    );
  });
});