{/* <!-- This is the textbox--> */}
function addClick(){
var option = document.createElement("li");
var input = document.getElementById("addInput").value;
var textnode = document.createElement("p");
textnode.innerText = input;
document.getElementById("ulList").appendChild(option);
option.appendChild(textnode);
console.log("addClick")
// var textnode = document.createElement("li");
// .appendChild(document.createTextNode(s));
// document.getElementById("List").appendChild(node);
}



// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }


// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }


// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);


// Create a new list item when clicking on the "Add" button
// function addClick() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("addInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("Write something or it won't work!");
//   } else {
//     document.getElementById("ulList").appendChild(li);
//   }
//   document.getElementById("addInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// } 