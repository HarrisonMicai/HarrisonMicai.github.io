// Load posts from localStorage and display them
function loadPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';
  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    posts.forEach((post, index) => {
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

// Initialize the post list from localStorage
document.addEventListener('DOMContentLoaded', loadPosts);

// Handle form submission
document.getElementById('postForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form refresh

  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!title || !content) return; // Prevent empty submissions

  const newPost = {
    title: title,
    content: content,
    timestamp: new Date().toLocaleString(),
    likes: 0,
    dislikes: 0
  };

  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts.push(newPost);
  localStorage.setItem('posts', JSON.stringify(posts));

  document.getElementById('postForm').reset(); // Clear form
  loadPosts(); // Reload
});


// Like a post
function likePost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts[index].likes += 1;
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts();
}

// Dislike a post
function dislikePost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  posts[index].dislikes += 1;
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts();
}

// Edit a post
function editPost(index) {
  const posts = JSON.parse(localStorage.getItem('posts')) || [];
  const post = posts[index];

  document.getElementById('title').value = post.title;
  document.getElementById('content').value = post.content;

  // Remove it temporarily (will be re-added on resubmit)
  posts.splice(index, 1);
  localStorage.setItem('posts', JSON.stringify(posts));
  loadPosts();
}

// Search through posts
function searchPosts() {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const posts = JSON.parse(localStorage.getItem('posts')) || [];

  const filteredPosts = posts.filter((post) => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.content.toLowerCase().includes(searchTerm)
  );

  // Display only filtered posts
function displayFilteredPosts(filteredPosts) {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

  displayFilteredPosts(filteredPosts);
}


  filteredPosts.forEach((post, index) => {
    const li = document.createElement('li');
    li.id = `filtered-post-${index}`;

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

