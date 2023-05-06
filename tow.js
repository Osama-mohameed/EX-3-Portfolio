let search_Btn = document.querySelector("#search_Btn");
let f_Search = document.querySelector(".f_Search");
let loginform = document.querySelector(".login-form");




function showbar(){
    // search_Btn.classList.toggle("")
    f_Search.classList.toggle("active")
}
function showform(){
    loginform.classList.add("active")
}
function hide(){
    loginform.classList.remove("active")
}