const completer = (arrs) => {
  const tbl = [];
  const inputCheck = document.querySelectorAll('.checky');
  const long = inputCheck.length;
  for (let i = 0; i < long; i += 1) {
    inputCheck[i].addEventListener('change', () => {
      if (inputCheck[i].checked) {
        inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'line-through';
        inputCheck[i].parentNode.childNodes[1].style.color = '#ddd';
        arrs[i].completed = true;
        for (let b = 0; b < arrs.length; b += 1) {
          tbl[b] = arrs[b];
        }
        localStorage.setItem('toDoList', JSON.stringify(tbl));
      } else {
        inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'none';
        inputCheck[i].parentNode.childNodes[1].style.color = '#000';
        arrs[i].completed = false;
        for (let b = 0; b < arrs.length; b += 1) {
          tbl[b] = arrs[b];
        }
        localStorage.setItem('toDoList', JSON.stringify(tbl));
      }
    });
  }
};

const checker = (arrs) => {
  const inputCheck = document.querySelectorAll('.checky');
  const long = inputCheck.length;
  for (let i = 0; i < long; i += 1) {
    if (arrs[i].completed === true) {
      inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'line-through';
      inputCheck[i].parentNode.childNodes[1].style.color = '#ddd';
      inputCheck[i].checked = true;
    } else {
      inputCheck[i].parentNode.childNodes[1].style.textDecoration = 'none';
      inputCheck[i].parentNode.childNodes[1].style.color = '#000';
    }
  }
};

export { completer, checker };