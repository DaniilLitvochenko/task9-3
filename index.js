const moment = require('moment');

const pre=document.createElement('pre');
document.body.appendChild(pre);
pre.textContent+='\n';
pre.textContent+='Здарова';
pre.textContent+='\n';
pre.textContent+='Привет';
pre.textContent+='\n';
pre.textContent+=moment().format('DD.MM.YY');

const h4=document.createElement('h4');
document.body.appendChild(h4);
h4.setAttribute('title','GossJS');
h4.setAttribute('id','author');
h4.textContent+='Litovchenko Daniil';
