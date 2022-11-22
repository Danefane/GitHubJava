{/* <!-- This is the textbox--> */}
function addClick(){
    console.log("addClick");
    var option = document.createElement("li");
    var input = document.getElementById("addInput").value;
    var textnode = document.createElement("p");
    textnode.innerText = input;
    document.getElementById("ulList").appendChild(option);
    option.appendChild(textnode);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
