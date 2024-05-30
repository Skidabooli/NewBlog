import { createPagination } from "./pagination.js";
import { renderPosts } from "./renderingArticles.js";


document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.querySelector('.articles');
    const paginationContainer = document.getElementById('pagination');
    const pageParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(pageParams.get('page')) || 1;

    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${currentPage}`);
    const result = await response.json();
    const posts = result.data;
    const pagination = result.meta.pagination;

    // Очистка контейнеров
    postsContainer.innerHTML = '';
    paginationContainer.innerHTML = '';

    // Отображение статей
    renderPosts(posts, postsContainer);

    // Создание навигационных ссылок
    createPagination(pagination, paginationContainer);
});