// use handlebars after load:
$(function() {
  
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
    };

    // POST request
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });

  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newStatus = $(this).data("newstatus");

    var newEatenStatus = {
      devoured: newStatus
    };

    // PUT:
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenStatus
    }).then(
      function() {
        console.log("changed status to", newStatus);
        // retrieves new list:
        
        
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // DELETE:
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted burger", id);
        location.reload();
      }
    );
  });
});
