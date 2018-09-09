// console.dir(document);


//Get elements by tag name
// let tagList=document.getElementsByTagName("li");
// console.log(tagList);




//Get elements by class name
// let classList=document.getElementsByClassName("odd");
// console.log(classList);



//Get element by id
// let item=document.getElementById("li1");
// console.log(item);



//Changes on the item
// item.style.backgroundColor="red";
// item.style.fontSize="3em";
// item.innerText="I am the changed text"



//Traversing the DOM
let list = document.getElementById("list");

//This will have a text node, use elementChild instead
// console.log(list.firstChild);

//this will have first element child
// console.log(list.firstElementChild);

let item = document.getElementById('li1');

// console.log(item.parentNode);

// next sibling that is an element
console.log(item.nextElementSibling);

//previous sibling that is an element
console.log(item.previousElementSibling);

let newitem = document.createElement("li");
newitem.textContent = "Hey I am new li";
console.log(newitem);



//Append child to the list

list.appendChild(newitem);
console.log(list.classList)



let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    alert("heyyyyy")
})



//adding event to new item
newitem.addEventListener("mouseover", function () {
    alert("Don't move the mouse here")
})


