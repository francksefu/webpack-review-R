import _ from 'lodash';

import './style.css';

import {
  arr, add, inputAdd, checkerL,
} from './array-feature.js';

import { completer, checker } from './completeTask.js';

const use = _;

const ul = document.querySelector('ul');
const rmbtn = document.querySelector('.last-button');
let updateValue = '';
const restored = JSON.parse(localStorage.getItem('toDoList'));
const completeTask = () => {
  /**
   * Update index every time
   */

  if (arr.length !== 0 && use !== 1) {
    for (let y = 0; y < arr.length; y += 1) {
      arr[y].index = y;
    }
  }
  for (let p = 0; p < arr.length; p += 1) {
    const obj = arr[p];
    const lilast = document.createElement('li');
    const article = document.createElement('article');
    const articleRemove = document.createElement('article');
    const inputId = `in${arr.indexOf(obj)}`;
    updateValue = arr[arr.indexOf(obj)].description;

    const span = document.createElement('span');
    const deleteButton = document.createElement('span');
    span.classList.add('material-symbols-outlined', 'sombre', 'flotteur');
    deleteButton.classList.add('material-symbols-outlined', 'sombre');
    deleteButton.textContent = 'delete';
    span.textContent = 'more_vert';
    article.innerHTML = `
    <span><input type="checkbox" class="padding checky" name="" id="${arr.indexOf(obj)}"><label for="${p}">${updateValue}
    </label><span>`;
    articleRemove.innerHTML = `<input type="checkbox" class="padding-left checky-left" name="" id="r${p}">
    <input type='text' id='${inputId}' value='${obj.description}'>`;
    articleRemove.appendChild(deleteButton);
    articleRemove.style.backgroundColor = 'rgba(222, 238, 79, 0.8)';
    article.appendChild(span);
    article.classList.add('flex');
    articleRemove.classList.add('flex-around');
    articleRemove.style.display = 'none';
    const items = document.querySelectorAll('li');
    const last = items[items.length - 1];
    ul.insertBefore(lilast, last);
    lilast.appendChild(article);
    lilast.appendChild(articleRemove);
    inputAdd.value = '';
    span.addEventListener('click', () => {
      articleRemove.style.display = 'flex';
      article.style.display = 'none';
      checkerL();
    });

    /**
     * delete and update feature when page load
     */

    deleteButton.addEventListener('click', () => {
      lilast.remove();
      arr.splice(arr.indexOf(obj), 1);
      if (arr.length !== 0) {
        for (let y = 0; y < arr.length; y += 1) {
          arr[y].index = y;
        }
      }
      localStorage.setItem('toDoList', JSON.stringify(arr));
    });
    articleRemove.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        arr[arr.indexOf(obj)].description = document.getElementById(inputId).value;
        const upd = document.getElementById(inputId).value;
        articleRemove.style.display = 'none';
        article.style.display = 'flex';
        article.innerHTML = `
            <span><input type="checkbox" class="padding checky" name="" id="${arr.length - 1}"><label for="${arr.length - 1}">${upd}
            </label><span>`;
        article.appendChild(span);
        if (arr.length !== 0) {
          for (let y = 0; y < arr.length; y += 1) {
            arr[y].index = y;
          }
        }
        localStorage.setItem('toDoList', JSON.stringify(arr));
      }
    });
    checker(arr);
  }
};

window.addEventListener('load', () => {
  for (let k = 0; k < restored.length; k += 1) {
    arr[k] = restored[k];
  }
  completeTask();
  completer(arr);
});
inputAdd.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add();
  }
});

ul.addEventListener('click', () => {
  completer(arr);
});

rmbtn.addEventListener('click', () => {
  const tab = [];
  let m = 0;
  for (let t = 0; t < arr.length; t += 1) {
    if (arr[t].completed === true) {
      tab.push(t - m);
      m += 1;
    }
  }

  for (let p = 0; p < tab.length; p += 1) {
    document.querySelectorAll('li')[tab[p]].remove();
  }

  const avengers = arr.filter((character) => character.completed === false);
  arr.splice(0, arr.length);
  for (let j = 0; j < avengers.length; j += 1) {
    arr[j] = avengers[j];
    arr[j].index = j;
  }
  localStorage.setItem('toDoList', JSON.stringify(arr));
});
