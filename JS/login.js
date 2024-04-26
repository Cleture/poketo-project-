$.document.ready(function () {
    $("#login-btn").click(function (e) {
        e.preventDefault();
        let login_email = $("#email");
        let login_pass = $("#password");

        if (login_email.val() == "" || login_pass.val() == "") {
            alert("Email and Password Are Required");
            return;
        }

        $.ajax({
            url: "http://ecommerce.reworkstaging.name.ng/v2/merchants/login",
            method: "POST",
        })
    })
})