$(document).ready(function () {
    $("#update-merchant-form").submit(function (e) {
        e.preventDefault();

        let merchantId = $("#update-merchant-id").val();

        let merchantData = {
            first_name: $("#fname").val(),
            last_name: $("#lname").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            store_name: $("#store-name").val(),
            descp: $("#description").val(),
            icon: $("#icon").val(),
            banner: $("#banner").val(),
            state: $("#state-name").val(),
            district: $("#district-name").val(), // corrected
            social: $("#social").val(), // corrected
            phones: $("#additional-phones").val().split(",").map(phone => phone.trim()),
        };

        // AJAX request.
        $.ajax({
            url: `http://ecommerce.reworkstaging.name.ng/v2/merchants/${merchantId}`, // corrected
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(merchantData),
            success: function (response) {
                alert("Merchant information updated successfully!");
                console.log(response);
            },
            error: function (err) {
                alert("Could not update merchant information");
                console.log(err);
            }
        });
    });

    $("#password-form").submit(function (e) {
        e.preventDefault();

        let merchantId = $("#update-merchant-id").val();

        let passwordData = {
            old_password: $("#old-password").val(),
            new_password: $("#new-password").val()
        };

        $.ajax({
            url: `http://ecommerce.reworkstaging.name.ng/merchants/${merchantId}/change-passwd`, // corrected
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(passwordData), // corrected
            success: function (response) {
                alert("Password changed successfully!");
                console.log(response);
            },
            error: function (err) {
                alert("Could not change password");
                console.log(err);
            }
        });
    });
});
