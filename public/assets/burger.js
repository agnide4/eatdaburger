//Add aon click event functions here
console.log("hrer")
$(function(){
    console.log("in")
    $(".burgerWish").on("submit"), function(event){
        event.preventDefault();
        
        const newBurger = {
            burgerName: $("#newBurger")
            .val()
            .trim(),
            devoured: 0
        }

        $.ajax("api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        })
    }


    $(".devour").on("click", function(event){
        event.preventDefault()

        let id = $(this).data("id");
        const devouredState = {
            devoured: 1
        }

        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("burgered");
            location.reload();
        })


    })

    $(".trashit").on("click", function(event){
        event.preventDefault()

        let id = $(this).data("id");

        $.ajax("api/burgers/" + id, {
            type: "DELETE",
        }).then(function(){
            console.log("THRASHED");
            location.reload();
        })


    })

})