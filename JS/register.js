$(document).ready(function () {
    // Handle form submission when the submit button is clicked
    $("#merchant-form").submit(function (e) {
        e.preventDefault();

        // Get form data
        let merchantData = {
            first_name: $("#fname").val(),
            last_name: $("#lname").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            store_name: $("#store-name").val(),
            descp: $("#description").val(),
            icon: $("#icon").val(),
            banner: $("#banner").val(),
            phones: $("#additional-phones").val().split(",").map(phone => phone.trim()),
            password: $("#password").val()
        };

        // Send AJAX request
        $.ajax({
            url: "http://ecommerce.reworkstaging.name.ng/v2/merchants",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(merchantData),
            success: function (response) {
                alert("Merchant account created successfully!");
                localStorage.setItem("OurMerchant_user", JSON.stringify(response.data));
                window.location.href = "./login_merchant.html"
                console.log(response);
            },
            error: function (err) {
                alert("Could not create merchant account");
                console.log(err);
            }
        });
    });

    $("#btn").click(function (e) {
        e.preventDefault();
        $("#merchant-form").submit(); 
    });
});
