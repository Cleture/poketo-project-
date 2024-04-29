$(document).ready(function () {
    // Check if user is logged in
    let loggedUser = localStorage.getItem("OurMerchant_user");
    if (!loggedUser) {
        // Redirect or show login prompt if user is not logged in
        alert("Please log in to access the dashboard.");
        window.location.href = "./login_merchant.html"; // Redirect to login page
        return; // Stop further execution
    }

    // Form submission event handler
    $("#createCategoryForm").submit(function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get form data
        let formData = {
            merchant_id: "662fcfc1f7192e0c5d709b4b", // Replace with the actual merchant ID
            name: $("#categoryName").val(),
            image: $("#categoryImage").val()
        };

        // Send AJAX request to create category
        $.ajax({
            url: "http://ecommerce.reworkstaging.name.ng/v2/categories",
            method: "POST",
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function (response) {
                alert("Category created successfully");
                // Clear the form fields
                $("#categoryName").val("");
                $("#categoryImage").val("");
                // Add the newly created category to the list
                addCategoryToList(response);
            },
            error: function (err) {
                console.error("Error creating category:", err);
                alert("Failed to create category. Please try again later.");
            }
        });
    });

    // Function to add a category to the list
    function addCategoryToList(category) {
        $("#categories").append(`<li>${category.name}</li>`);
    }

    // Logout button click event handler
    $("#logoutBtn").click(function () {
        // Clear user session data and redirect to login page
        localStorage.removeItem("OurMerchant_user");
        alert("Logout successful");
        window.location.href = "../pages/login.html"; // Redirect to login page
    });

    // Call a function to fetch and display existing categories
    fetchAndDisplayCategories();
});

// Function to fetch and display existing categories
function fetchAndDisplayCategories() {
    // Implement logic to fetch categories from the backend and display them on the dashboard
    // This function can be called on page load to show existing categories

    function createProductCard(category) {
        const productCardsContainer = document.getElementById('productCards');
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const image = document.createElement('img');
        image.classList.add('product-image');
        image.src = category.image;
        image.alt = category.name;
        productCard.appendChild(image);

        const name = document.createElement('div');
        name.classList.add('product-name');
        name.textContent = category.name;
        productCard.appendChild(name);

        productCardsContainer.appendChild(productCard);
    }

    // Mock category data
    const categories = [
        { name: 'Category 1', image: 'https://via.placeholder.com/150' },
        { name: 'Category 2', image: 'https://via.placeholder.com/150' },
        { name: 'Category 3', image: 'https://via.placeholder.com/150' }
        // Add more categories as needed
    ];

    // Display categories as product cards
    categories.forEach(createProductCard);

}






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
