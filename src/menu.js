import Banner from './images/foodbanner.jpg';
import Logo from './images/mainlogo.png';

function Menu() {
  const menudiv = document.createElement('div');
  menudiv.classList.add('menu', 'show');
  menudiv.id = 'menu';
  const topimg = document.createElement('img');
  topimg.src = Banner;
  topimg.classList.add('banner');

  const menuinfo = document.createElement('div');
  menuinfo.classList.add('menuinfo');

  menuinfo.innerHTML = `
<h1 class="gold">Our Menu</h1>
<img src="${Logo}" class="mlogo">

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
`;
  menudiv.appendChild(topimg);
  menudiv.appendChild(menuinfo);
  document.body.appendChild(menudiv);
}

export default Menu;
