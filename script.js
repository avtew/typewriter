// Create keyboard layout

const body = document.querySelector('body');

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.appendChild(wrapper);

const header = document.createElement('div');
header.className = 'header';
wrapper.appendChild(header);

const logo = document.createElement('div');
logo.className = 'logo';
logo.style.backgroundImage = "url('./assets/logo.png')";
logo.style.backgroundSize = 'cover';
header.appendChild(logo);

const title = document.createElement('div');
title.className = 'title';
title.innerHTML = 'The Typewriter';
header.appendChild(title);

const input = document.createElement('textarea');
input.className = 'input';
wrapper.appendChild(input);

const boardTable = document.createElement('div');
boardTable.className = 'board-table';
wrapper.appendChild(boardTable);

const boardRow = document.createElement('div');
boardRow.className = 'board-row';

const key = document.createElement('div');
key.className = 'key';
for (let i = 0; i < 5; i += 1) {
  const clone = boardRow.cloneNode(true);
  boardTable.appendChild(clone);
}

const rows = document.querySelectorAll('.board-row');
for (let i = 0; i < 13; i += 1) {
  const clone = key.cloneNode(true);
  rows[0].appendChild(clone);
}
const backspace = document.createElement('div');
backspace.className = 'key backspace';
rows[0].appendChild(backspace);
for (let i = 0; i < 14; i += 1) {
  const clone = key.cloneNode(true);
  rows[1].appendChild(clone);
}
const tab = document.createElement('div');
tab.className = 'key tab';
rows[1].insertBefore(tab, rows[1].firstChild);
for (let i = 0; i < 11; i += 1) {
  const clone = key.cloneNode(true);
  rows[2].appendChild(clone);
}
const caps = document.createElement('div');
caps.className = 'key caps';
rows[2].insertBefore(caps, rows[2].firstChild);
const enter = document.createElement('div');
enter.className = 'key enter';
rows[2].appendChild(enter);
for (let i = 0; i < 11; i += 1) {
  const clone = key.cloneNode(true);
  rows[3].appendChild(clone);
}
const lshift = document.createElement('div');
lshift.className = 'key lshift';
rows[3].insertBefore(lshift, rows[3].firstChild);
const rshift = document.createElement('div');
rshift.className = 'key rshift';
rows[3].appendChild(rshift);
for (let i = 0; i < 8; i += 1) {
  const clone = key.cloneNode(true);
  rows[4].appendChild(clone);
}
const space = document.createElement('div');
space.className = 'key space';
rows[4].insertBefore(space, rows[4].children[3]);

document.getElementsByClassName('input')[0].placeholder = 'Type something... \nUse ctrl + alt for change language';

const keys = [
  {
    code: 'Backquote', en: '`', ru: 'ё', shiften: '~', shiftru: '~',
  },
  {
    code: 'Digit1', en: '1', ru: '1', shiften: '!', shiftru: '!',
  },
  {
    code: 'Digit2', en: '2', ru: '2', shiften: '@', shiftru: '@',
  },
  {
    code: 'Digit3', en: '3', ru: '3', shiften: '#', shiftru: '#',
  },
  {
    code: 'Digit4', en: '4', ru: '4', shiften: '$', shiftru: '$',
  },
  {
    code: 'Digit5', en: '5', ru: '5', shiften: '%', shiftru: '%',
  },
  {
    code: 'Digit6', en: '6', ru: '6', shiften: '^', shiftru: '^',
  },
  {
    code: 'Digit7', en: '7', ru: '7', shiften: '&', shiftru: '&',
  },
  {
    code: 'Digit8', en: '8', ru: '8', shiften: '*', shiftru: '*',
  },
  {
    code: 'Digit9', en: '9', ru: '9', shiften: '(', shiftru: '(',
  },
  {
    code: 'Digit0', en: '0', ru: '0', shiften: ')', shiftru: ')',
  },
  {
    code: 'Minus', en: '-', ru: '-', shiften: '_', shiftru: '_',
  },
  {
    code: 'Equal', en: '=', ru: '=', shiften: '+', shiftru: '+',
  },
  {
    code: 'Backspace', en: 'Backspace', ru: 'Backspace', shiften: 'Backspace', shiftru: 'Backspace',
  },
  {
    code: 'Tab', en: 'Tab', ru: 'Tab', shiften: 'Tab', shiftru: 'Tab',
  },
  {
    code: 'KeyQ', en: 'q', ru: 'й', shiften: 'Q', shiftru: 'Й',
  },
  {
    code: 'KeyW', en: 'w', ru: 'ц', shiften: 'W', shiftru: 'Ц',
  },
  {
    code: 'KeyE', en: 'e', ru: 'у', shiften: 'E', shiftru: 'У',
  },
  {
    code: 'KeyR', en: 'r', ru: 'к', shiften: 'R', shiftru: 'К',
  },
  {
    code: 'KeyT', en: 't', ru: 'е', shiften: 'T', shiftru: 'Е',
  },
  {
    code: 'KeyY', en: 'y', ru: 'н', shiften: 'Y', shiftru: 'Н',
  },
  {
    code: 'KeyU', en: 'u', ru: 'г', shiften: 'U', shiftru: 'Г',
  },
  {
    code: 'KeyI', en: 'i', ru: 'ш', shiften: 'I', shiftru: 'Ш',
  },
  {
    code: 'KeyO', en: 'o', ru: 'щ', shiften: 'O', shiftru: 'Щ',
  },
  {
    code: 'KeyP', en: 'p', ru: 'з', shiften: 'P', shiftru: 'З',
  },
  {
    code: 'BracketLeft', en: '[', ru: 'х', shiften: '{', shiftru: 'Х',
  },
  {
    code: 'BracketRight', en: ']', ru: 'ъ', shiften: '}', shiftru: 'Ъ',
  },
  {
    code: 'Backslash', en: '\\', ru: '\\', shiften: '|', shiftru: '|',
  },
  {
    code: 'Delete', en: 'Del', ru: 'Del', shiften: 'Del', shiftru: 'Del',
  },
  {
    code: 'CapsLock', en: 'Caps', ru: 'Caps', shiften: 'Caps', shiftru: 'Caps',
  },
  {
    code: 'KeyA', en: 'a', ru: 'ф', shiften: 'A', shiftru: 'Ф',
  },
  {
    code: 'KeyS', en: 's', ru: 'ы', shiften: 'S', shiftru: 'Ы',
  },
  {
    code: 'KeyD', en: 'd', ru: 'в', shiften: 'D', shiftru: 'В',
  },
  {
    code: 'KeyF', en: 'f', ru: 'а', shiften: 'F', shiftru: 'А',
  },
  {
    code: 'KeyG', en: 'g', ru: 'п', shiften: 'G', shiftru: 'П',
  },
  {
    code: 'KeyH', en: 'h', ru: 'р', shiften: 'H', shiftru: 'Р',
  },
  {
    code: 'KeyJ', en: 'j', ru: 'о', shiften: 'J', shiftru: 'О',
  },
  {
    code: 'KeyK', en: 'k', ru: 'л', shiften: 'K', shiftru: 'Л',
  },
  {
    code: 'KeyL', en: 'l', ru: 'д', shiften: 'L', shiftru: 'Д',
  },
  {
    code: 'Semicolon', en: ';', ru: 'ж', shiften: ':', shiftru: 'Ж',
  },
  {
    code: 'Quote', en: '\'', ru: 'э', shiften: '"', shiftru: 'Э',
  },
  {
    code: 'Enter', en: 'Enter', ru: 'Enter', shiften: 'Enter', shiftru: 'Enter',
  },
  {
    code: 'ShiftLeft', en: 'Shift', ru: 'Shift', shiften: 'Shift', shiftru: 'Shift',
  },
  {
    code: 'KeyZ', en: 'z', ru: 'я', shiften: 'Z', shiftru: 'Я',
  },
  {
    code: 'KeyX', en: 'x', ru: 'ч', shiften: 'X', shiftru: 'Ч',
  },
  {
    code: 'KeyC', en: 'c', ru: 'с', shiften: 'C', shiftru: 'С',
  },
  {
    code: 'KeyV', en: 'v', ru: 'м', shiften: 'V', shiftru: 'М',
  },
  {
    code: 'KeyB', en: 'b', ru: 'и', shiften: 'B', shiftru: 'И',
  },
  {
    code: 'KeyN', en: 'n', ru: 'т', shiften: 'N', shiftru: 'Т',
  },
  {
    code: 'KeyM', en: 'm', ru: 'ь', shiften: 'M', shiftru: 'Ь',
  },
  {
    code: 'Comma', en: ',', ru: 'б', shiften: '<', shiftru: 'Б',
  },
  {
    code: 'Period', en: '.', ru: 'ю', shiften: '>', shiftru: 'Ю',
  },
  {
    code: 'Slash', en: '/', ru: '/', shiften: '?', shiftru: '.',
  },
  {
    code: 'ArrowUp', en: '▲', ru: '▲', shiften: '▲', shiftru: '▲',
  },
  {
    code: 'ShiftRight', en: 'Shift', ru: 'Shift', shiften: 'Shift', shiftru: 'Shift',
  },
  {
    code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', shiften: 'Ctrl', shiftru: 'Ctrl',
  },
  {
    code: 'MetaLeft', en: 'Win', ru: 'Win', shiften: 'Win', shiftru: 'Win',
  },
  {
    code: 'AltLeft', en: 'Alt', ru: 'Alt', shiften: 'Alt', shiftru: 'Alt',
  },
  {
    code: 'Space', en: ' ', ru: ' ', shiften: ' ', shiftru: ' ',
  },
  {
    code: 'AltRight', en: 'Alt', ru: 'Alt', shiften: 'Alt', shiftru: 'Alt',
  },
  {
    code: 'ArrowLeft', en: '◄', ru: '◄', shiften: '◄', shiftru: '◄',
  },
  {
    code: 'ArrowDown', en: '▼', ru: '▼', shiften: '▼', shiftru: '▼',
  },
  {
    code: 'ArrowRight', en: '►', ru: '►', shiften: '►', shiftru: '►',
  },
  {
    code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', shiften: 'Ctrl', shiftru: 'Ctrl',
  },
];

const keyboard = document.querySelectorAll('.key');

// Change language display

let lang = 'en';
let isShifted = false;

for (let i = 0; i < keys.length; i += 1) {
  document.getElementsByClassName('key')[i].innerHTML = keys[i].en;
}

function focusOn() {
  document.querySelector('.input').focus();
}

document.addEventListener('keydown', (event) => {
  if (event.altKey && event.ctrlKey) {
    isShifted = false;
    if (lang === 'ru') {
      lang = 'en';
      for (let i = 0; i < keys.length; i += 1) {
        document.getElementsByClassName('key')[i].innerHTML = keys[i].en;
      }
    } else if (lang === 'en') {
      isShifted = false;
      lang = 'ru';
      for (let i = 0; i < keys.length; i += 1) {
        document.getElementsByClassName('key')[i].innerHTML = keys[i].ru;
      }
    }
  }
});

// Change case display

document.addEventListener('keydown', (event) => { // shift down
  if (event.key === 'Shift') {
    isShifted = true;
    if (lang === 'en') {
      for (let i = 0; i < keys.length; i += 1) {
        document.getElementsByClassName('key')[i].innerHTML = keys[i].shiften;
      }
    } else if (lang === 'ru') {
      for (let i = 0; i < keys.length; i += 1) {
        document.getElementsByClassName('key')[i].innerHTML = keys[i].shiftru;
      }
    }
  }
});

document.addEventListener('keyup', (event) => { // shift up
  if (event.key === 'Shift') {
    isShifted = false;
    if (lang === 'en') {
      for (let i = 0; i < keys.length; i += 1) {
        document.getElementsByClassName('key')[i].innerHTML = keys[i].en;
      }
    } else if (lang === 'ru') {
      for (let i = 0; i < keys.length; i += 1) {
        document.getElementsByClassName('key')[i].innerHTML = keys[i].ru;
      }
    }
  }
});

document.addEventListener('keydown', (event) => { // CapsLock
  if (event.key === 'CapsLock') {
    if (isShifted === false) {
      isShifted = true;
      document.getElementsByClassName('key')[29].classList.add('pressed');
      if (lang === 'en') {
        for (let i = 0; i < keys.length; i += 1) {
          document.getElementsByClassName('key')[i].innerHTML = keys[i].shiften;
        }
      } else if (lang === 'ru') {
        for (let i = 0; i < keys.length; i += 1) {
          document.getElementsByClassName('key')[i].innerHTML = keys[i].shiftru;
        }
      }
    } else {
      isShifted = false;
      document.getElementsByClassName('key')[29].classList.remove('pressed');
      if (lang === 'en') {
        for (let i = 0; i < keys.length; i += 1) {
          document.getElementsByClassName('key')[i].innerHTML = keys[i].en;
        }
      } else if (lang === 'ru') {
        for (let i = 0; i < keys.length; i += 1) {
          document.getElementsByClassName('key')[i].innerHTML = keys[i].ru;
        }
      }
    }
  }
});

document.addEventListener('keydown', (event) => { // Animation
  for (let i = 0; i < keys.length; i += 1) {
    if (event.code === keys[i].code && event.code !== 'CapsLock') {
      document.getElementsByClassName('key')[i].classList.add('pressed');
    }
  }
});
document.addEventListener('keyup', (event) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (event.code === keys[i].code && event.code !== 'CapsLock') {
      document.getElementsByClassName('key')[i].classList.remove('pressed');
    }
  }
});

function inputText() {
  for (let i = 0; i < keys.length; i += 1) {
    const index = [...keyboard].indexOf(this);
    if (index === i && index !== 13 && index !== 14 && index !== 28 && index !== 29 && index !== 41 && index !== 42 && index !== 54 && index !== 55 && index !== 56 && index !== 57 && index !== 59 && index !== 63) {
      if (isShifted === false && lang === 'en') {
        input.value += keys[i].en;
      } else if (isShifted === true && lang === 'en') {
        input.value += keys[i].shiften;
      } else if (isShifted === false && lang === 'ru') {
        input.value += keys[i].ru;
      } else if (isShifted === true && lang === 'ru') {
        input.value += keys[i].shiftru;
      }
    } else if (index === i && index === 29) {
      if (isShifted === false) {
        isShifted = true;
        document.getElementsByClassName('key')[29].classList.add('pressed');
        if (lang === 'en') {
          for (let j = 0; j < keys.length; j += 1) {
            document.getElementsByClassName('key')[j].innerHTML = keys[j].shiften;
          }
        } else if (lang === 'ru') {
          for (let j = 0; j < keys.length; j += 1) {
            document.getElementsByClassName('key')[j].innerHTML = keys[j].shiftru;
          }
        }
      } else {
        isShifted = false;
        document.getElementsByClassName('key')[29].classList.remove('pressed');
        if (lang === 'en') {
          for (let k = 0; k < keys.length; k += 1) {
            document.getElementsByClassName('key')[k].innerHTML = keys[k].en;
          }
        } else if (lang === 'ru') {
          for (let k = 0; k < keys.length; k += 1) {
            document.getElementsByClassName('key')[k].innerHTML = keys[k].ru;
          }
        }
      }
    } else if (index === i && index === 41) {
      input.value += '\n';
    } else if (index === i && index === 14) {
      input.value += '        ';
    } else if (index === i && index === 13) {
      const value = String(input.value);
      const start = input.selectionStart;
      const split = value.split('');
      split.splice(start - 1, 1);
      input.value = split.join('');
    } else if (index === i && index === 28) {
      const value = String(input.value);
      const start = input.selectionStart;
      const split = value.split('');
      split.splice(start, 1);
      input.value = split.join('');
      input.selectionStart = start;
    }
  }
}

function caseUp() {
  for (let i = 0; i < keys.length; i += 1) {
    const index = [...keyboard].indexOf(this);
    if (index === i && (index === 42 || index === 54)) {
      isShifted = true;
      if (lang === 'en') {
        for (let j = 0; j < keys.length; j += 1) {
          document.getElementsByClassName('key')[j].innerHTML = keys[j].shiften;
        }
      } else if (lang === 'ru') {
        for (let j = 0; j < keys.length; j += 1) {
          document.getElementsByClassName('key')[j].innerHTML = keys[j].shiftru;
        }
      }
    }
  }
}

function caseDown() {
  for (let i = 0; i < keys.length; i += 1) {
    const index = [...keyboard].indexOf(this);
    if (index === i && (index === 42 || index === 54)) {
      isShifted = false;
      if (lang === 'en') {
        for (let j = 0; j < keys.length; j += 1) {
          document.getElementsByClassName('key')[j].innerHTML = keys[j].en;
        }
      } else if (lang === 'ru') {
        for (let j = 0; j < keys.length; j += 1) {
          document.getElementsByClassName('key')[j].innerHTML = keys[j].ru;
        }
      }
    }
  }
}

document.addEventListener('keydown', focusOn);
keyboard.forEach((el) => el.addEventListener('click', inputText));
keyboard.forEach((el) => el.addEventListener('mousedown', caseUp));
keyboard.forEach((el) => el.addEventListener('mouseup', caseDown));
