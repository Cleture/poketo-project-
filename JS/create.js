$(document).ready(function () {
    $("#blogBtn").click(function (e) {
        e.preventDefault();
        // let loggedUser = JSON.parse(localStorage.getItem("OurMerchant_user"));
        if (loggedUser) {
            let merchant_details = loggedUser.id 
            console.log(loggedUser.id);
            let productDetails = {
                merchant_id: merchant_details,
                title: $("#title").val(),
                description: $("#descp").val(),
                price: $("#price").val(),
                brand: $("#brand").val(),
                quantity: $("#quantity").val(),
                image: $("#image").val(),
                currency: $("#currency").val(),
                min_qty: $("#min-qnty").val(), // Corrected the input id
                max_qty: $("#max-qnty").val(),
                discount: $("#discount").val(),
                discount_expiration: $("#discount-expire").val(),
                category_id: $("#category").val(),
            };
            $.ajax({
                url: "http://ecommerce.reworkstaging.name.ng/v2/products",
                method: "POST",
                data: productDetails,
                dataType: "json",
                success: function () {
                    alert("Product created successfully");
                    window.location.href = "./dashboard.html";
                },
                error: function (err) {
                    alert("Could not create product");
                    console.log(err);
                },
            });
        } else {
            alert("Please Login to create a product");
        }
    });

    // Get All Categories
    function getCategories() {
        $.ajax({
            url: "http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=662fcfc1f7192e0c5d709b4b",
            method: "GET",
            success: function (data) {
                let output1 = "";
                let output2 = "";
                $(data).each(function (index, element) {
                    output1 += `<li><a href="">${element.name}</a></li>`;
                    output2 += `<option value="${element.id}">${element.name}</option>`;
                });
                $("#category").html(output2); // Append the options to the select element
            },
        });
    }
    getCategories();
});






// $(document).ready(function () {
//     let loggedUser = localStorage.getItem("OurBlog_user");
//     $("#blogBtn").click(function (e) {
//         e.preventDefault();
//         if (loggedUser) {
//             let user_details = JSON.parse(loggedUser);
//             // Creating a blog post
//             $("#blogBtn").click(function (e) {
//                 e.preventDefault();
//                 // Getting data from inputs and storing in an object
//                 let blog_data = {
//                     user_id: user_details.id,
//                     title: $("#title").val(),
//                     description: $("#blog_body").val(),
//                     category_id: $("#category").val(),
//                     likes: 0,
//                     dislikes: 0,
//                     date_created: new Date().toLocaleDateString(),
//                 };
//                 // Create a blog
//                 $.ajax({
//                     url: "http://localhost:3010/blogs",
//                     method: "POST",
//                     data: JSON.stringify(blog_data),
//                     success: function () {
//                         alert("Blog created successfully");
//                         window.location.href = "../pages/blog.html";
//                     },
//                     error: function (err) {
//                         alert("Could not create blog");
//                         console.log(err);
//                     },
//                 });
//             });
//         } else {
//             alert("Please Login to create a blog");
//         }
//     });
// });