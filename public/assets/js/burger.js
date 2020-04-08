$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("devoured");
  
      var devouredState = {
        devoured: newDevoured
      };
  
      // Sends the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
         
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
  
      // Sends the POST request.
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