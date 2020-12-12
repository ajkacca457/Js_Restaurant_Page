import facebook from './images/fb.png';
import instagram from './images/insta.png';
import twitter from './images/twitter.png';
import linkedin from './images/linked.png';
import whatsapp from './images/whatsapp.png';


const Footer = () => {
  const footer = document.createElement('div');
  footer.classList.add('footer');
  const footerinfo = document.createElement('div');
  footerinfo.classList.add('footerinfo');
  footerinfo.innerHTML = `
  <img class="icon" src="${facebook}">
  <img class="icon" src="${instagram}">
  <img class="icon" src="${twitter}">
  <img class="icon" src="${linkedin}">
  <img class="icon" src="${whatsapp}">
  `;
  footer.appendChild(footerinfo);
  document.body.appendChild(footer);
};

export default Footer;
