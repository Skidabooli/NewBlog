export async function Get(page) {
    let responce = await fetch(`https://gorest.co.in/public/v2/posts?page=${page}`);
    window.location
    let result = await responce.json();
    createLi(result);
}


async function createLi(arr){
    let list = document.querySelector(".articles");
    for (let el of arr){
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.href = `index2.html?id=${el.id}`;
        li.classList.add("article");
        link.classList.add("link")
        link.textContent = el.title;
        li.append(link);
        list.append(li);
    }
}
