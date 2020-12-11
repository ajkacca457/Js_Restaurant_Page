import map from './images/map.png';


function Contact() {
  const contactdiv = document.createElement('div');
  contactdiv.classList.add('contact', 'show');
  contactdiv.id = 'contact';
  const contactlocation = document.createElement('div');
  contactlocation.classList.add('contact-location');
  contactlocation.innerHTML = `
<h1 class="head1">CONTACT AND LOCATIONS</h1>
<h3>3 Locations Ready to Serve You our food</h3>
<img src="${map}" class="map">
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

  const workinghours = document.createElement('div');
  workinghours.classList.add('workinghours');
  workinghours.innerHTML = `
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

  const contactinfo = document.createElement('div');
  contactinfo.classList.add('contactinfo');
  contactinfo.innerHTML = `
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


export default Contact;
