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
    const name = $(`#eater-name${id}`).val().trim();
    const dataCustomer = { name: name };

    if (name !== "") {
      $.post("api/burgers", dataCustomer, function (result) {
        const dataBurger = { id: id, CustomerId: result.id };
        $.ajax("/api/burgers", {
          type: "PUT",
          data: dataBurger,
        }).then(function (result) {
          window.location.href = "/";
        });
      });
    } else {
      $(`#eater-name${id}`).attr("placeholder", "please enter name");
      $(`#eater-name${id}`).focus();
    }
  });
});
