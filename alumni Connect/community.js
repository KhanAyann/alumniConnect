// Sample posts data
let posts = [
    {
        text: "This is a post about career guidance.",
        image: "",
        comments: [
            { text: "Great insights!" },
            { text: "Thanks for sharing!" }
        ]
    },
    {
        text: "Here’s a photo from my recent internship experience!",
        image: "internship.jpg",
        comments: [
            { text: "Looks amazing!" }
        ]
    }
];

// Select DOM elements
const postContainer = document.getElementById('postContainer');
const addPostBtn = document.getElementById('addPostBtn');
const postModal = document.getElementById('postModal');
const submitPostBtn = document.getElementById('submitPostBtn');
const cancelPostBtn = document.getElementById('cancelPostBtn');
const postText = document.getElementById('postText');
const postImage = document.getElementById('postImage');

// Function to display posts
function displayPosts() {
    postContainer.innerHTML = '';
    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <p>${post.text}</p>
        ${post.image ? `<img src="${post.image}" alt="Post Image">` : ''}
        <div class="comments">
          <h4>Comments:</h4>
          ${post.comments.map(comment => `<div class="comment">${comment.text}</div>`).join('')}
          <textarea placeholder="Write a comment..."></textarea>
          <button onclick="addComment(${index})">Reply</button>
        </div>
      `;
        postContainer.appendChild(postDiv);
    });
}

// Function to add a new comment
function addComment(postIndex) {
    const commentText = document.querySelectorAll('.comments textarea')[postIndex].value;
    if (commentText.trim()) {
        posts[postIndex].comments.push({ text: commentText });
        displayPosts();
    }
}

// Add post modal functionality
addPostBtn.addEventListener('click', () => {
    postModal.style.display = 'flex';
});

cancelPostBtn.addEventListener('click', () => {
    postModal.style.display = 'none';
    postText.value = '';
    postImage.value = '';
});

// Submit post
submitPostBtn.addEventListener('click', () => {
    const newPost = {
        text: postText.value,
        image: postImage.files[0] ? URL.createObjectURL(postImage.files[0]) : '',
        comments: []
    };
    posts.push(newPost);
    displayPosts();
    postModal.style.display = 'none';
    postText.value = '';
    postImage.value = '';
});

// Initial display of posts
displayPosts();
