// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
        let id = $(this).data("id");
        let newEaten = $(this).data("neweat");

        console.log(newEaten)

        let newEatenState = {
            eaten: newEaten
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
                // console.log("changed sleep to", newSleep);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        let newBurger = {
            name: $("#burger").val().trim(),
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});