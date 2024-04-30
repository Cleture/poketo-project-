$(document).ready(function () {
    $('#login-form').submit(function (event) {
        event.preventDefault();

        var email = $('#email').val();
        var password = $('#password').val();

        var formData = {
            email,
            password
        };

        $.ajax({
            type: "POST",
            url: "http://ecommerce.reworkstaging.name.ng/v2/merchants/login",
            data: formData,
            success: function (response) {
                var merchantEmail = response.email;
                var merchantId = response.id;
                alert("Processing.....");
                alert("Done!!");
                alert("Login successful!" + merchantEmail + "ID: " + merchantId);
                window.location.href = "./dashboard.html";
            },
            error: function (xhr, status, error) {
                alert("Login failed! Please try again.");
            }
        });
    });
});

