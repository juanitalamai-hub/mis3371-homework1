/*
Name: Juanita Lamai
Date created: 02/17/2026
Date last edited: 02/26/2026
Version: 1.0
Description: Homework 1 JS 
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code
let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};
