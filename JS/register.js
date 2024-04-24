$(document).ready(function(){
    $("#btn").click(function (e) {
        e.preventDefault();

        let merchantData = {
            first_name: $("#fname").val(),
            last_name: $("#lname").val(),
            shop_name: $("#sname").val(),
            dscrptn: $("#description").val(),
        };

        $.ajax({
            url: "http://ecommerce.reworkstaging.name.ng/v2/merchants",
            method: "POST",
            data: JSON.stringify(merchantData),
            success: function (data) {
                alert("LOADING");
            },
            error: function (err) {
                alert("Could not register a user");
                console.log(err);
            },
        });
    });
});
