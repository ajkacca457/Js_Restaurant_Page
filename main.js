function navbar(){
const navdiv=document.createElement("div");
navdiv.classList.add("navbar");
navdiv.id="navbar";
const navlinkul=document.createElement("ul");
navlinkul.classList.add("navlink")

navlinkul.innerHTML=`
<li class="link" data-tab-target="#home">Home</li>
<li class="link" data-tab-target="#about">About</li>
<li class="link" data-tab-target="#menu">Menu</li>
<li class="link" data-tab-target="#contact">Contact</li>`
navdiv.appendChild(navlinkul);
document.body.appendChild(navdiv);
}

function homepage(){

const homepage=document.createElement("div");
homepage.classList.add("home","show","active");
homepage.id="home";
const homecont=document.createElement("div");
const homecont2=document.createElement("div");
homecont.classList.add("home");
homecont2.classList.add("home2");
const homeinfo=document.createElement("div");
homeinfo.classList.add("homeinfo");
homeinfo.innerHTML=`
<h1 class="gold">"BLAZE"</h1>
<h1>Best Burger Joint In Town</h1>
<h2>We serve with passion and <br>
our food quality is our identity </h2>
<p>"Best ingredients, Family service, Freshness guarantee"</p>
`;
homecont.appendChild(homeinfo);

const detail=document.createElement("div");
detail.classList.add("detail");
detail.innerHTML=`
<img src="images/wallpaper2.png" class="small"></img>
<div>
<h2 class="gold">Always expect</h2>
<h1 class="head1">GREAT TASTE, GOOD TIMES</h1>
<p class="text">Here at Barney’s Burgers we take pride in the quality of the meat used for each and every burger. If it’s not perfect and grilled just the way you ordered it, we won’t send it out.  We guarantee the burger delivered to your table is the best burger you could have ordered.</p>
<button class="reservation">Book Reservation</button>
</div>
`
homecont2.appendChild(detail);
homepage.appendChild(homecont);
homepage.appendChild(homecont2);
document.body.appendChild(homepage);
}

function menu(){

const menudiv=document.createElement("div");
menudiv.classList.add("menu","show");
menudiv.id="menu";
const topimg=document.createElement("img");
topimg.src="images/foodbanner.jpg";
topimg.classList.add("banner");

const menuinfo=document.createElement("div");
menuinfo.classList.add("menuinfo");

menuinfo.innerHTML=`
<h1 class="gold">Our Menu</h1>
<img src="images/mainlogo.png" class="mlogo">

<div class="menu-list">

<h3 class="menu-head">SNACKS X SALADS</h3>
<div class="menu-cont-1">

<div class="item">
<div class="text">
<h3>Primavera Salad</h3>
<h4 class="price">$8</h4>
</div>
<p class="text-body">arugula, cherry tomato, shaved almonds,shallot vinaigrette</p>
</div>

<div class="item">
<div class="text">
<h3>Grilled Calamari</h3>
<h4 class="price">$12</h4>
</div>
<p class="text-body">tomato sauce, lemon, shaved almonds,shallot vinaigrette</p>
</div>


<div class="item">
<div class="text">
<h3>Mac and Cheese</h3>
<h4 class="price">$13</h4>
</div>
<p class="text-body">cheddar, gruyere, gouda, truffle oil,Shallor,red wine</p>
</div>

</div>


<h3 class="menu-head">SANDWICHES</h3>
<div class="menu-cont-1">

<div class="item">
<div class="text">
<h3>Alpine</h3>
<h4 class="price">$10</h4>
</div>
<p class="text-body">fontina, gruyere, truffle oil on multigrain toast</p>
</div>

<div class="item">
<div class="text">
<h3>Milanese</h3>
<h4 class="price">$13</h4>
</div>
<p class="text-body">fried chicken, lettuce, tomato, mayo on focaccia</p>
</div>

<div class="item">
<div class="text">
<h3>Flatiron</h3>
<h4 class="price">$15</h4>
</div>
<p class="text-body">steak, havarti, fried onions, chipotle mayo on challah</p>
</div>

<div class="item">
<div class="text">
<h3>Raleigh</h3>
<h4 class="price">$13</h4>
</div>
<p class="text-body">coleslaw, barbecue sauce, pickles on sesame roll</p>
</div>

</div>


<h3 class="menu-head">MAIN DISHES</h3>
<div class="menu-cont-1">

<div class="item">
<div class="text">
<h3>Braised Lamb</h3>
<h4 class="price">$35</h4>
</div>
<p class="text-body">jasmine rice pilaf, roasted almonds, sesame soy reduction</p>
</div>


<div class="item">
<div class="text">
<h3>Lobster Bolognese</h3>
<h4 class="price">$28</h4>
</div>
<p class="text-body">linguini, lobster tail, herbs in tomato & garlic broth</p>
</div>


<div class="item">
<div class="text">
<h3>Burger Steak</h3>
<h4 class="price">$29</h4>
</div>
<p class="text-body">Beef steak, havarti, fried onions, chipotle mayo on challah</p>
</div>


<div class="item">
<div class="text">
<h3>Burger</h3>
<h4 class="price">$20</h4>
</div>
<p class="text-body">gruyere, fried onions, special sauce on challah roll</p>
</div>

<div class="item">
<div class="text">
<h3>Dry-Aged Rib-Eye</h3>
<h4 class="price">$36</h4>
</div>
<p class="text-body">grass-fed, with arugula salad, smashed potatoes</p>
</div>

</div>

</div>
`
menudiv.appendChild(topimg);
menudiv.appendChild(menuinfo);
document.body.appendChild(menudiv);
}

function about() {

const aboutdiv=document.createElement("div");
aboutdiv.classList.add("about","show");
aboutdiv.id="about";

const title=document.createElement("div");
title.classList.add("about-title");
title.innerHTML=`
<h1>ONE PATTY AT A TIME</h1>
<p class="text-small">Traditional burgers tastes delicious both in fine dining restaurants and by a campfire out in the wilderness.
 Blazzers has great options for local culinary excursions
Be it a quick lunchtime snack, a tasty evening out or a refreshing drink you’re after, we’ve got a great selection for you.</p>
`

const cardcont=document.createElement("div");
cardcont.classList.add("card");
cardcont.innerHTML=`
<div class="card-item">
<img src="images/img1.png" class="card-img">
<div>
<h2>WE'RE HERE TO SERVE YOU</h2>
<p>With more than 15 years of experience,
we promise great and welcoming service to our customers.
Our relaxed atmosphere inspired by our homeland-style decor, will make your stay enjoyable.</p>
</div>
</div>

<div class="card-item">
<img src="images/img2.png" class="card-img">
<div>
<h2>A FAMILY GATHERING</h2>
<p>For larger parties, we offer a design custom menu to accommodate particular flavor requests.
Each menu is designed for parties of 20 guests or more. By using a pre-set menu,
 it allows us the opportunity to provide the quality of service and an excellent meal for your guest.</p>
</div>
</div>

`;

aboutdiv.appendChild(title);
aboutdiv.appendChild(cardcont);
document.body.appendChild(aboutdiv);
}

function contact(){
const contactdiv=document.createElement("div");
contactdiv.classList.add("contact","show");
contactdiv.id="contact";
const contactlocation=document.createElement("div");
contactlocation.classList.add("contact-location")
contactlocation.innerHTML=`
<h1 class="head1">CONTACT AND LOCATIONS</h1>
<h3>3 Locations Ready to Serve You our food</h3>
<img src="images/map.png" class="map">
<div class="location">

<div class="location-item">
<h2>185 Cedar St</h2>
<p>713.237.2485</p>
</div>

<div class="location-item">
<h2>17 Brookside Rd</h2>
<p>713.394.2834</p>
</div>

<div class="location-item">
<h2>124 W Orem Dr</h2>
<p>713.364.8462</p>
</div>
</div>
<hr class="divider">
`;

const workinghours=document.createElement("div");
workinghours.classList.add("workinghours");
workinghours.innerHTML=`
<h2 class="worktitle">Working Hour</h2>
<ul class="routine">
<li>Lunch 11:30am – 2:30pm</li>
<li>Dinner 5:30am – 10pm</li>
<li>Sun. Brunch 10:30am – 2:30pm</li>
<li>Sun. Dinner 5:30pm – 10pm</li>
<li>Happy Hour</li>
<li>Mon-Fri 5pm – 7pm</li>
</ul>
<hr class="divider">
`;

const contactinfo=document.createElement("div");
contactinfo.classList.add("contactinfo");
contactinfo.innerHTML=`
<div class="contactcont">

<div class="contact-item">
<h2>Address</h2>
<p>8500, Lorem Street, Chicago,<br>
IL, 55030</p>
</div>

<div class="contact-item">
<h2>Phone</h2>
<p>Online Reservations</p>
<p>0 800 555 44 11</p>
<p>0 800 555 40 11</p>
</div>

<div class="contact-item">
<h2>Email</h2>
<p>name@example.com</p>
<p>info@example.com</p>
</div>
</div>
`;

contactdiv.appendChild(contactlocation);
contactdiv.appendChild(workinghours);
contactdiv.appendChild(contactinfo);
document.body.appendChild(contactdiv);
}

function footer(){
  const footer=document.createElement("div");
  footer.classList.add("footer");
  const footerinfo=document.createElement("div");
  footerinfo.classList.add("footerinfo");
  footerinfo.innerHTML=`
  <img class="icon" src="images/fb.png">
  <img class="icon" src="images/insta.png">
  <img class="icon" src="images/twitter.png">
  <img class="icon" src="images/linked.png">
  <img class="icon" src="images/whatsapp.png">
  `;
  footer.appendChild(footerinfo);
  document.body.appendChild(footer);

}


navbar();
homepage();
menu();
about();
contact();
footer();


const tabs=document.querySelectorAll("[data-tab-target]");
const tabcontent=document.querySelectorAll(".show");

tabs.forEach((tab) => {
  tab.addEventListener("click",()=>{
   const target=document.querySelector(tab.dataset.tabTarget);
   tabcontent.forEach((content) => {
     content.classList.remove("active");
   });
   target.classList.add("active");
   console.log(target);
  })
});
