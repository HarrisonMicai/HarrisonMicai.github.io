// Initialize the post list from localStorage
document.addEventListener('DOMContentLoaded', loadPosts);

// Handle form submission
document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // Create a new post object
  const newPost = {
    title: title,
    content: content,
    timestamp: new Date().toLocaleString(), // Adding timestamp to posts
    likes: 0, // Initialize like count
    dislikes: 0, // Initialize dislike count
  };

  // Save the new post to localStorage
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));

  // Clear the form inputs
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';

  // Reload the posts list
  loadPosts();
});

// Load posts from localStorage and display them
function loadPosts() {
  const postList = document.getElementById('postList');
  postList.innerHTML = ''; // Clear the current post list

  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.forEach((post, index) => {
    const li = document.createElement('li');
    li.id = `post-${index}`; // Assign an ID for each post

    li.innerHTML = `
      <strong>${post.title}</strong> <em>(${post.timestamp})</em><br>
      ${post.content}<br>
      <button onclick="likePost(${index})">Like (${post.likes})</button>
      <button onclick="dislikePost(${index})">Dislike (${post.dislikes})</button>
      <button onclick="editPost(${index})">Edit</button>
    `;

    postList.appendChild(li);
  });
}

// Like a post
function likePost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts[index].likes += 1;
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts(); // Reload the posts after updating
}

// Dislike a post
function dislikePost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts[index].dislikes += 1;
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts(); // Reload the posts after updating
}

// Edit a post
function editPost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const post = posts[index];
  document.getElementById('title').value = post.title;
  document.getElementById('content').value = post.content;

  // Remove the post from localStorage before editing
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts(); // Reload the posts after removing the post for editing
}

// Search through posts
function searchPosts() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchTerm) || post.content.toLowerCase().includes(searchTerm);
  });
  
  displayFilteredPosts(filteredPosts);
}

// Display filtered posts based on search
function displayFilteredPosts(filteredPosts) {
  const postList = document.getElementById('postList');
  postList.innerHTML = ''; // Clear the current post list

  filteredPosts.forEach((post, index) => {
    const li = document.createElement('li');
    li.id = `post-${index}`;

    li.innerHTML = `
      <strong>${post.title}</strong> <em>(${post.timestamp})</em><br>
      ${post.content}<br>
      <button onclick="likePost(${index})">Like (${post.likes})</button>
      <button onclick="dislikePost(${index})">Dislike (${post.dislikes})</button>
      <button onclick="editPost(${index})">Edit</button>
    `;

    postList.appendChild(li);
  });
}
