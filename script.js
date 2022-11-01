{/* <!-- This is the textbox--> */}
function add()
{
var x = document.getElementById("pre-selected-options1");
var option = document.createElement("option");
option.text = document.getElementById("inp").value;
x.add(option);
}