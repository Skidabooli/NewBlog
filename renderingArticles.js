export function renderPosts(posts, container) {
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `<a href="post.html?id=${post.id}">${post.title}</a>`;
        container.appendChild(postElement);
    });
}