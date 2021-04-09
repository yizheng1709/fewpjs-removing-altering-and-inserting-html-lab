// Write your code here!
document.getElementById("main").remove();
let h1 = document.createElement("h1")
document.body.appendChild(h1) 
h1.id = "victory"
// h1.id = "victory"
let newHeader = document.querySelector("h1#victory")
newHeader.innerHTML = "No one is the champion"