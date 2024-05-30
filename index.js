import { Get } from "./renderingArticles.js";
import { pagination } from "./pagination.js";


document.addEventListener("DOMContentLoaded", function() {
    Get();
    pagination();
});