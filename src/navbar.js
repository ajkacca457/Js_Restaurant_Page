function Navbar() {
  const navdiv = document.createElement('div');
  navdiv.classList.add('navbar');
  navdiv.id = 'navbar';
  const navlinkul = document.createElement('ul');
  navlinkul.classList.add('navlink');

  navlinkul.innerHTML = `
<li class="link" data-tab-target="#home">Home</li>
<li class="link" data-tab-target="#about">About</li>
<li class="link" data-tab-target="#menu">Menu</li>
<li class="link" data-tab-target="#contact">Contact</li>`;
  navdiv.appendChild(navlinkul);
  document.body.appendChild(navdiv);
}

export default Navbar;
