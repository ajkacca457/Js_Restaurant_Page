import Patty from './images/wallpaper2.png';

const Homepage = () => {
  const homepage = document.createElement('div');
  homepage.classList.add('home', 'show', 'active');
  homepage.id = 'home';
  const homecont = document.createElement('div');
  const homecont2 = document.createElement('div');
  homecont.classList.add('home');
  homecont2.classList.add('home2');
  const homeinfo = document.createElement('div');
  homeinfo.classList.add('homeinfo');
  homeinfo.innerHTML = `
<h1 class="gold">"BLAZE"</h1>
<h1>Best Burger Joint In Town</h1>
<h2>We serve with passion and <br>
our food quality is our identity </h2>
<p>"Best ingredients, Family service, Freshness guarantee"</p>
`;
  homecont.appendChild(homeinfo);

  const detail = document.createElement('div');
  detail.classList.add('detail');
  detail.innerHTML = `
<img src="${Patty}" class="small"></img>
<div>
<h2 class="gold">Always expect</h2>
<h1 class="head1">GREAT TASTE, GOOD TIMES</h1>
<p class="text">Here at Barney’s Burgers we take pride in the quality of the meat used for each and every burger. If it’s not perfect and grilled just the way you ordered it, we won’t send it out.  We guarantee the burger delivered to your table is the best burger you could have ordered.</p>
<button class="reservation">Book Reservation</button>
</div>
`;
  homecont2.appendChild(detail);
  homepage.appendChild(homecont);
  homepage.appendChild(homecont2);
  document.body.appendChild(homepage);
};

export default Homepage;
