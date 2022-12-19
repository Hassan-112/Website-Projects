// // console.log("Hello! I am Muhammad Hassan Khurshid");
// // let a = window;


// // a = prompt('Hello Hassan');

// // a = confirm('are you sure to delete this page');



// // a=window.innerHeight;
// // a=window.innerWidth;
// // a=innerheight;
// // a=screenLeft;
// // a=scrollY;
// // a=location.toString();
// // a=window.history;
// // console.log(a);

// // console.log("Welcome");
// // let a = document;
// // a=document.all;
// // console.log(a);

// // Array.from(a).forEach(function(element){
// //     console.log(element);
// // })

// // a = document.links;
// // // a = document.links[0].href;
// // console.log(a);

// let element = document.getElementById('myfirst');
// // element = element.className;
// // element = element.childNodes;
// element = element.parentNode;
// element.style.color = 'red';
// element.style.background = 'gray';
// // element.innerText = 'My name is Hassan';
// // element.innerHTML = '<h1>Hello! I am Hassan</h1>';
// element.innerHTML = '<b>Hello! I am Hassan</b>';

// // console.log(element);
// // console.log(element.innerHTML);
// console.log(element.innerText);
// let has = document.querySelector('#myfirst');
// has = document.querySelector('.child');
// has = document.querySelector('div');
// has.style.color = 'blue';
 let elems = document.getElementsByClassName('child');
 elems = document.getElementsByClassName('container');
//  console.log(elems[0].getElementsByClassName('child'));

 elems = document.getElementsByClassName('div');
 console.log(elems);

//  Array.from(elems).forEach(element =>{
//     console.log(element);
//     element.style.color = 'red';
//  });
//  for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color = 'blue';
    
//  }

// document.getElementById('date').onclick = function() {Date()};
 
// function Date() {
//    let d = new Date();
//    document.getElementById('datee').innerHTML = d;
// }

// function hello(){
//    alert("Hello World");
// }

// let counter = 0;

// function count() {
//    counter++;
//    alert(counter);
// }

// function hi() {
//    document.querySelector('#heading').innerHTML = 'Hello! I am here';
// }

// function helloo(){
//    if (document.querySelector('#heading').innerHTML === 'Welcome to my Channel'){
//       document.querySelector('#heading').innerHTML = 'Hello ! World';
//    } else {
//       document.querySelector('#heading').innerHTML = 'Welcome to my Channel';
//    }
// }

function hello(){
   // let heading = document.querySelector('#heading');
   const heading = document.querySelector('#heading');
   if(heading.innerHTML === 'Welcome to my Channel'){
      heading.innerHTML = 'Hi Hassan';
   } else {
      heading.innerHTML = 'Welcome to my Channel';
   }
}
let counter = 0;
function count(){
   counter++;
  document.querySelector('h6').innerHTML = counter;
  if (counter % 10 === 0){
   alert(`Count is now ${counter}`);
  }
}
document.addEventListener('DOMContentLoaded', function(){
   // document.querySelector('#countt').addEventListener('click', count)
   document.querySelector('#countt').onclick = count;
});

