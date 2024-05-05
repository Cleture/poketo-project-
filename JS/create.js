$(document).ready(function() {
    $('#submitBtn').click(function(e) {
        e.preventDefault();

        var fileInput = $('#fileInput')[0].files;
        var id = '662fcfc1f7192e0c5d709b4b';
        var merchantDetails = JSON.parse(localStorage.getItem("OurMerchant_user"));
        
        if (!merchantDetails) {
            console.error('Merchant details not found in local storage.');
            return;
        }
        
        var formData = new FormData();
        formData.append('id', id);

        for (var i = 0; i < fileInput.length; i++) {
            formData.append('image', fileInput[i]);
        }

        $.ajax({
            url: 'http://ecommerce.reworkstaging.name.ng/v2/categories',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false, 
            success: function(response) {
                $('#response').text(response);
                console.log(response);
                alert("Merchant Has Successfully Uploaded Image");
                
                var title = $('#title').val(); 
                var descp = $('#descp').val();
                var price = $('#price').val();
                var brand = $('#brand').val();
                var quantity = $('#quantity').val();
                var currency = $('#currency').val();
                var min_qty = $('#min-qnty').val();
                var max_qty = $('#max-qnty').val();
                var discount = $('#discount').val();
                var discount_expiration = $('#discount_expiration').val();
                var has_refund_policy = $('#has_refund_policy').val();
                var has_discount = $('#has_discount').val();
                var has_shipment = $('#has_shipment').val();
                var has_variation = $('#has_variation').val();
                var shipping_locations = $('#shipping_locations').val();
                var attrib = $('#attrib').val();
                var category_id = $('#category').val();
                var merchant_id = merchantDetails.id;

                var productData = {
                    title: title,
                    descp: descp,
                    price: price,
                    brand: brand,
                    quantity: quantity,
                    images: response, 
                    currency: currency,
                    min_qty: min_qty,
                    max_qty: max_qty,
                    discount: discount,
                    discount_expiration: discount_expiration,
                    has_refund_policy: has_refund_policy,
                    has_discount: has_discount,
                    has_shipment: has_shipment,
                    has_variation: has_variation,
                    shipping_locations: shipping_locations,
                    attrib: attrib,
                    category_id: category_id,
                    merchant_id: merchant_id
                };

                $.ajax({
                    url: 'http://ecommerce.reworkstaging.name.ng/v2/products',
                    type: 'POST',
                    data: JSON.stringify(productData),
                    contentType: 'application/json',
                    success: function(productResponse) {
                        console.log(productResponse)
                        $('#productResponse').text('Product created successfully.');
                    },
                    error: function(xhr, status, error) {
                        console.error('Error creating product:', error);
                        $('#productResponse').text('Error creating product.');
                    }
                });
            },
            error: function(xhr, status, error) {
                console.error('Error uploading image:', error);
                $('#response').text('Error uploading image.');
            }
        });
    });

    function getCategories() {
        var merchantDetails = JSON.parse(localStorage.getItem("OurMerchant_user"));
        
        if (!merchantDetails) {
            console.error('Merchant details not found in local storage.');
            return;
        }
        $.ajax({
            url: 'http://ecommerce.reworkstaging.name.ng/v2/categories',
            method: 'GET',
            success: function(data) {
                var optionsHtml = '<option value="">Select</option>';
                data.forEach(function(category) {
                    optionsHtml += `<option value="${category.id}">${category.name}</option>`;
                });
                $('#category').html(optionsHtml);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching categories:', error);
            }
        })
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