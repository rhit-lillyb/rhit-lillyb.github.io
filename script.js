
document.addEventListener('DOMContentLoaded', () => {

let selector = document.getElementById("sectionSelector")
let tech = document.getElementById("Technologies");
let work = document.getElementById("Work");
let edu = document.getElementById("Education");

/* CITATION: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event */
selector.addEventListener("change", function(event){
    tech.classList.add("invisible-element");
    work.classList.add("invisible-element");
    edu.classList.add("invisible-element");
    document.getElementById(event.target.value).classList.remove("invisible-element");
});

});