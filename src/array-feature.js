import { forEach } from "lodash";

const arr = [];

const inputAdd = document.querySelector('#writable');
let updateValue = '';

const checkerL = () => {
  const inputCheck = document.querySelectorAll('.checky-left');
  const li = document.querySelectorAll('li');
  const long = li.length;
  for (let i = 0; i < long; i += 1) {
    if (arr[i].completed === true) {
      inputCheck[i].checked = true;
    } else {
      inputCheck[i].checked = false;
    }
  }
};

const add = () => {
  if (arr.length !== 0) {
    for (let y = 0; y < arr.length; y += 1) {
      arr[y].index = y;
    }
  }

  const obj = { description: inputAdd.value, completed: false, index: arr.length };
  arr.push(obj);
  localStorage.setItem('toDoList', JSON.stringify(arr));
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
    <span><input type="checkbox" class="padding checky" name="" id="${arr.length - 1}"><label for="${arr.length - 1}">${updateValue}
    </label><span>`;
  // articleRemove.appendChild(inputRemove);
  articleRemove.innerHTML = `<input type="checkbox" class="padding-left checky-left" name="" id="${arr.length - 1}">
    <input type='text' id='${inputId}' value='${obj.description}'>`;
  articleRemove.appendChild(deleteButton);
  articleRemove.style.backgroundColor = 'rgba(222, 238, 79, 0.8)';
  article.appendChild(span);
  article.classList.add('flex');
  articleRemove.classList.add('flex-around');
  articleRemove.style.display = 'none';
  const items = document.querySelectorAll('li');
  const last = items[items.length - 1];
  last.parentNode.insertBefore(lilast, last);
  lilast.appendChild(article);
  lilast.appendChild(articleRemove);
  inputAdd.value = '';
  span.addEventListener('click', () => {
    articleRemove.style.display = 'flex';
    article.style.display = 'none';
    checkerL();
  });
  deleteButton.addEventListener('click', () => {
    lilast.remove();
    arr.splice(arr.indexOf(obj), 1);
    arr.forEach((current, indexI) => current.index = indexI);
    localStorage.setItem('toDoList', JSON.stringify(arr));
  });
  articleRemove.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      arr[arr.indexOf(obj)].description = document.getElementById(inputId).value;
      updateValue = document.getElementById(inputId).value;
      articleRemove.style.display = 'none';
      article.style.display = 'flex';
      article.innerHTML = `
            <span><input type="checkbox" class="padding checky" name="" id="${arr.length - 1}"><label for="${arr.length - 1}">${updateValue}
            </label><span>`;
      article.appendChild(span);
      arr.forEach((current, indexI) => current.index = indexI);
      localStorage.setItem('toDoList', JSON.stringify(arr));
    }
  });
};

export {
  arr, add, inputAdd, checkerL,
};