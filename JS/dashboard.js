$(document).ready(function() {
    $('#createCategoryForm').submit(function(event) {
        event.preventDefault();

        var categoryName = $('#categoryName').val();

        var requestBody = {
            "merchant_id": "662fcfc1f7192e0c5d709b4b",
            "name": categoryName
        };

        $.ajax({
            url: 'http://ecommerce.reworkstaging.name.ng/v2/categories',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(requestBody),
            success: function(response) {
                console.log('Category created successfully:', response);
            },
            error: function(xhr, status, error) {
                console.error('Error creating category:', error);
            }
        });
    });

    $('#showCategoryFormBtn').click(function() {
        $('#categoryForm').toggle();
    });
    $('#closeCategoryFormBtn').click(function() {
        $('#categoryForm').hide();
    });
});









// $(document).ready(function () {
//     // Check if user is Logged in
//     let loggedUser = localStorage.getItem("OurBlog_user");
//     if (loggedUser) {
//         let user_details = JSON.parse(loggedUser);
//         $("#blog_links").prepend(`<button>Logout</button>`);
//         $("#blog_links").prepend(`<h3>Welcome, ${user_details.first_name} ${user_details.last_name}</h3>`);
//     } else {
//         $("#blog_links").prepend('<a href="../pages/registration.html" class="link1">Sign Up</a>');
//         $("#blog_links").prepend('<a href="../pages/login.html" class="link2">Login</a>');
//     }
//     // Show Category Modal
//     $("#categoryModalBtn").click(function () {
//         $("#category_modal").addClass("active");
//     });
//     $("#close_modal").click(function () {
//         $("#category_modal").removeClass("active");
//     });

//     // Creating a Category
//     $("#addCategoryBtn").click(function (e) {
//         e.preventDefault();
//         let category_details = {
//             name: $("#category_name").val(),
//         };
//         $.ajax({
//             url: "http://localhost:3010/categories",
//             method: "POST",
//             data: JSON.stringify(category_details),
//             success: function () {
//                 alert("Category Created");
//                 $("#category_modal").removeClass("active");
//                 $("#category_name").val("");
//                 getCategories();
//             },
//             error: function (err) {
//                 console.log(err);
//                 alert("Could not create a category");
//             },
//         });
//     });

//     // Get All Categories
//     function getCategories() {
//         $.ajax({
//             url: "http://localhost:3010/categories",
//             method: "GET",
//             success: function (data) {
//                 let output1 = "";
//                 let output2 = "";
//                 $(data).each(function (index, element) {
//                     output1 += `
//         <li><a href="">${element.name}</a></li>
//         `;
//                     output2 += `
//           <option value="${element.id}">${element.name}</option>
//         `;
//                 });
//                 $("#category_list").html(output1);
//                 $("#category").append(output2);
//             },
//         });
//     }
//     getCategories();

//     $.ajax({
//         url: "http://localhost:3010/blogs",
//         method: "GET",
//         success: function (data) {
//             let output = "";
//             if (data.length > 0) {
//                 $(data).each(function (index, post) {
//                     output += `
//           <div class="post">
//           <h4 class="post_heading">User. ${post.date_created}</h4>
//           <h3>${post.title}</h3>
//           <p>${post.description}</p>
//           <div class="post_bottom">
//             <div class="post_like">
//               <img src="../images/like.png" alt="Likes" />
//               <p>${post.likes}</p>
//             </div>
//             <div class="post_dislike">
//               <img src="../images/dislike.png" alt="Dislikes" />
//               <p>${post.dislikes}</p>
//             </div>
//           </div>
//         </div>
//         `;
//                 });
//                 $("#posts").html(output);
//             } else {
//                 $("#posts").html("<h2>No Posts Created</h2>");
//             }
//         },
//         error: function (err) {
//             console.log(err);
//         },
//     });
// });
