var Topheader = document.querySelector("#Topheader");
var footer = document.querySelector("#Bottomfooter");
 
console.log(Topheader);

Topheader.innerHTML = `   <div class="menu">
<div class="menu-top">
    <div class="list"><a href="about.html">About Us</a></div>
    <div class="list">Privacy</div>
    <div class="list">FAQ</div>
    <div class="list">Careers</div>
</div>
<div class="menu-top-left">
    <div class="list-1"><a href="index.html">My website</a></div>

    <div class="list-1"><i class="fa-brands fa-instagram"></i></div>
    <div class="list-1"><i class="fa-brands fa-twitter"></i></div>
    <div class="list-1"><i class="fa-brands fa-linkedin"></i></div>
    <div class="list-1"><i class="fa-brands fa-youtube"></i></div>
</div>
</div>
<hr style="margin-top: 10px; color:gray">

<nav class="menu-2">
<div id="logo" class="menu-2-left"><b>Capital</b><span style="color: gray;"> Shop</span></div>

<div class="menu-2-left"><a href="index.html">Home</a></div>
<div class="menu-2-left"><a href="mens.html">Men</a></div>
<div class="menu-2-left"><a href="women-collection.html">Women</a> </div>
<div class="menu-2-left"><a href="baby.html">Baby Collection</a></div>
<div class="menu-2-left"><a href="baby.html">Collections</a></div>
<div class="menu-2-left"><a href="blogs.html">Blog</a></div>
<div class="menu-2-left"><a href="contact1.html">Contact</a></div>

<div class="icons-2-bar">
    <div class="icons-2" style="margin-top: 10px;"><a href="cart.html"><i
                class="fa-solid fa-cart-shopping"></i></a></div>
    <div class="icons-2"><i class="fa-solid fa-magnifying-glass"></i><input type="text" id="myInput"
            onkeyup="myFunction()" placeholder="Search here.." title="Type in a name">
    </div>


</div>
</nav>
`;


footer.innerHTML = ` <div class="footer-menu">
<ul class="footer">
    <li>Contact: 0305-4405900</li>
    <li><a href="facebook.com" style="text-decoration: none; color:aliceblue">Facebook</a></li>
</ul>
</div>`;