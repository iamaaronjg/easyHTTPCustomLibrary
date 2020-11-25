// Instantiate easyHTTP
const http = new easyHTTP;

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(posts);
//     }
// });

// Get single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// Create data to post
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// Make delete request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log(response);
    }
});