var getFirstSelector = (selector) => {return document.querySelector(selector)}

var nestedTarget = () => {return document.querySelector('div.target')}

var increaseRankBy = (n) => {var list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
for (let i=0, l=list.length; i<l; i++) {list[i].innerHTML = parseInt(list[i].innerHTML, 10) + n};
}

var deepestChild = () => {return document.querySelector('div#grand-node div')}
