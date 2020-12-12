import Img1 from './images/img1.png';
import Img2 from './images/img2.png';

const About = () => {
  const aboutdiv = document.createElement('div');
  aboutdiv.classList.add('about', 'show');
  aboutdiv.id = 'about';

  const title = document.createElement('div');
  title.classList.add('about-title');
  title.innerHTML = `
<h1>ONE PATTY AT A TIME</h1>
<p class="text-small">Traditional burgers tastes delicious both in fine dining restaurants and by a campfire out in the wilderness.
 Blazzers has great options for local culinary excursions
Be it a quick lunchtime snack, a tasty evening out or a refreshing drink you’re after, we’ve got a great selection for you.</p>
`;

  const cardcont = document.createElement('div');
  cardcont.classList.add('card');
  cardcont.innerHTML = `
<div class="card-item">
<img src="${Img1}" class="card-img">
<div>
<h2>WE'RE HERE TO SERVE YOU</h2>
<p>With more than 15 years of experience,
we promise great and welcoming service to our customers.
Our relaxed atmosphere inspired by our homeland-style decor, will make your stay enjoyable.</p>
</div>
</div>

<div class="card-item">
<img src="${Img2}" class="card-img">
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
};

export default About;
