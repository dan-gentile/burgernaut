// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
        const changeEatenId = $(this).data("id");
        const isNewEaten = $(this).data("neweat");

        const newEatenState = {
            eaten: isNewEaten
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + changeEatenId, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete").on("click", function(event) {
        // Get the ID from the button.
        const deleteId = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burger/" + deleteId, {
            type: "DELETE"
        }).then(
            function() {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#burger").val().trim(),
        };

        if (newBurger.name === "") {
            alert("Please name you're burger")
        } else {
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function() {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
    });

});