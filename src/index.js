import './style.css';
import Navbar from './navbar';
import Homepage from './homepage';
import About from './about';
import Menu from './menu';
import Footer from './footer';
import Contact from './contact';


const init = () => {
  Navbar();
  Homepage();
  About();
  Menu();
  Contact();
  Footer();
};

init();


const tabs = document.querySelectorAll('[data-tab-target]');
const tabcontent = document.querySelectorAll('.show');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabcontent.forEach((content) => {
      content.classList.remove('active');
    });
    target.classList.add('active');
  });
});
