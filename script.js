// {/* <!-- This is the textbox--> */}
// function addClick(){
// var option = document.createElement("li");
// var input = document.getElementById("addInput").value;
// var textnode = document.createElement("p");
// textnode.innerText = input;
// document.getElementById("ulList").appendChild(option);
// option.appendChild(textnode);
// }


let input = document.querySelector('.enterList');
let addBtn = document.querySelector('.addList');
let tasks = document.querySelector('.task');

// add btn disabled

input.addEventListener('keyup', () => {
    if(input.value.trim() !== 0){
    } else {
        addBtn.classList.remove('active')
    }
})

// add new item to list

addBtn.addEventListener('click', () => {
  if (InputDeviceInfo.value.trim() !== 0) {
    let newItem = document.createElement('div');
    newItem.classList.add('item');
    newItem.innerHTML = `
    <p> $(input.value) </p>
    <div class="item-btn">
      <i class="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-xmark"></i>
    </div>
    `
    tasks.appendChild(newItem);
    input.value = '';
  } else {
      alert('Please enter a task')
  }
} )

// delete item from list

tasks.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-xmark'))
      e.target.parentElement.parentElement.remove();
})