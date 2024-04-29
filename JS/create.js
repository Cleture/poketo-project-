$(document).ready(function () {
    $("#blogBtn").click(function (e) {
        e.preventDefault();
        // Check if user is logged in
        let loggedUser = localStorage.getItem("OurMerchant_user");
        if (loggedUser) {
            let merchant_details = JSON.parse(loggedUser);
            // Get product details
            let productDetails = {
                merchant_id: merchant_details.id,
                title: $("#title").val(),
                description: $("#blog_body").val(),
                category_id: $("#category").val(),
                likes: 0,
                dislikes: 0,
                date_created: new Date().toLocaleDateString(),
            };
            // Send AJAX request to create product
            $.ajax({
                url: "http://ecommerce.reworkstaging.name.ng/v2/products",
                method: "POST",
                data: JSON.stringify(productDetails),
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