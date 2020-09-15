// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
  $("#enter-burger").on("submit", function (event) {
    event.preventDefault();
    const newBurger = $(this).children("#new-burger").val();
    // console.log(newBurger);
    if (newBurger !== "") {
      data = {
        burger_name: newBurger,
      };
      // console.log(data);
      $.post("/api/burgers", data, function (response) {
        console.log("My response is coming in here", response);
        window.location.href = "/";
      });
    } else {
      $("#new-burger").attr("placeholder", "Please Enter Burger Name");
      $("#new-burger").focus();
    }
  });

  $(".update-devoured").on("click", function (event) {
    event.preventDefault();
    const id = $(this).attr("id");
    const dataBurger = { id: id, devour_it: true };
    $.ajax("/api/burgers", {
      type: "PUT",
      data: dataBurger,
    }).then(function (result) {
      window.location.href = "/";
    });
  });

  $(".delete-devoured").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
