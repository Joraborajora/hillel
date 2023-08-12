function searchPost() {
    const postIdInput = document.getElementById('postIdInput');
    const postId = parseInt(postIdInput.value, 10);
    if (isNaN(postId) || postId < 1 || postId > 100) {
      alert('Введіть дійсний ід від 1 до 100.');
      return;
    }
  
    fetchPost(postId)
      .then(post => displayPost(post))
      .catch(error => alert(error.message));
  }

  function fetchPost(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Пост не знайдено.');
        }
        return response.json();
      });
  }
  
  function fetchComments(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Коментарі не знайдено.');
        }
        return response.json();
      });
  }
  
  function displayPost(post) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = `
      <h2>Пост #${post.id}</h2>
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <button onclick="getComments(${post.id})">Отримати коментарі</button>
    `;
  }
  
  function displayComments(comments) {
    const postContainer = document.getElementById('postContainer');
    const commentsList = document.createElement('ul');
    comments.forEach(comment => {
      const commentItem = document.createElement('li');
      commentItem.textContent = `${comment.name}: ${comment.body}`;
      commentsList.appendChild(commentItem);
    });
    postContainer.appendChild(commentsList);
  }
  
  function getComments(postId) {
    fetchComments(postId)
      .then(comments => displayComments(comments))
      .catch(error => alert(error.message));
  }