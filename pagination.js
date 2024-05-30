import { Get } from "./renderingArticles.js";


let count = 1

export function pagination() {
    let list = document.querySelector(".articles");
    let buttomReturn = document.createElement("button");
    let buttomForward = document.createElement("button");
    let buttom1 = document.createElement("button");
    buttom1.textContent = "Начало";
    let buttom100 = document.createElement("button");
    buttom100.textContent = "Конец"

    buttom1.addEventListener("click", function(){
        list.innerHTML = "";
        buttomReturn.textContent = "1"
        buttomForward.textContent  = "2"
        Get(1);
        count = 1
    });
    
    buttom100.addEventListener("click", function(){
        list.innerHTML = "";
        buttomReturn.textContent = "99";
        buttomForward.textContent = "100";
        Get(100);
        count = 100
    });
    
    buttomReturn.addEventListener("click", function() {
        if (count > 1) {
            list.innerHTML = "";
            count -= 1
            Get(count);
            buttomReturn.textContent = count - 1;
            buttomForward.textContent  = count;
        } 
    });

    buttomForward.addEventListener("click", function() {
        if (count < 100) {
            list.innerHTML = "";
            count += 1
            console.log(count)
            Get(count);
            buttomReturn.textContent = count - 1;
            buttomForward.textContent  = count;
        } 
    });

    buttomReturn.textContent = count;
    buttomForward.textContent  = count + 1;
    document.body.append(buttom1, buttomReturn, buttomForward, buttom100);
}