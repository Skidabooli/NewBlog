async function GetPost() {
    let URL = window.location.search;
    let Body = document.querySelector(".bodyArticles");
    let title = document.querySelector(".title");
    let responce = await fetch(`https://gorest.co.in/public/v2/posts/${URL}`);
    let result = await responce.json();
    await searchComments(URL.slice(URL.indexOf("=") + 1))
    title.textContent = result[0].title;
    Body.textContent = result[0].body;
}

async function searchComments(id) {
    let comments = await fetch(`https://gorest.co.in/public/v2/comments?post_id=${id}`);
    renderComment(await comments.json());
}

function renderComment(arr) {
    let list = document.querySelector(".comments");
    for (el of arr) {
        let li = document.createElement("li");
        let name = document.createElement("h3");
        let body = document.createElement('p');
        li.classList.add("comment");
        name.textContent = el.name;
        body.textContent = el.body;
        li.append(name, body);
        list.append(li);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    GetPost()
    let button = document.querySelector(".return");
    button.addEventListener("click", function() {
        window.location = "index.html";
    })
})
