import $ from "jquery";
import './style.css';
import {mood} from './button/button';
import image from './img/istockphoto-1345912457-612x612.jpg';
import log from './img/123.png';


mood();
const nik = () => console.log('Jake');
nik();

const picture = document.createElement('img');
picture.setAttribute('src', image);
document.querySelector('body').appendChild(picture);

const gif = document.createElement('img');
gif.setAttribute('src', log);
document.querySelector('body').appendChild(gif);

const text = document.createElement('span');
text.textContent = 'Wellcome';
document.querySelector('body').appendChild(text);
