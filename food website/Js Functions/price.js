console.log("how are you");
console.log("how are you");
console.log("how are you");

// var card = document.querySelectorAll(".card");
// !important note 
    // place your js file at the end of document for proper work some time you 
    // may be not abbl to get acess of element 

var card2 = document.getElementsByClassName('card');
var ca = document.querySelector("#C");
   
ca.addEventListener("click",(e)=>{
    // alert("you clicked")
    if(e.target.tagName == "BUTTON"){
        console.log("btn");
    }
    let card = e.target.parentNode;
    console.log(e.target.tagName);
})

function testJS() {
    var b = document.getElementById('name').value,
        url = 'http://Accounts/Website-Projects/food website/deals.html?name=' + encodeURIComponent(b);
        // H:http://Accounts/Website-Projects/food website/deals.html
    document.location.href = url;
}
//use the following code where you want to receive data
window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    document.getElementById('here').innerHTML = data.name;
}
    console.log(ca);
// console.log(card2);
// card2.addEventListener("click", (e)=>{
//     alert("you clicked");
// });