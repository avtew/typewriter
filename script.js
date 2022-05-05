// Keyboard layout

const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
body.appendChild(wrapper);
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
for (let i = 0; i < 5; i++) {
    let clone = boardRow.cloneNode(true);
    boardTable.appendChild(clone);
}
const rows = document.querySelectorAll('.board-row');

for (let i = 0; i < 13; i++) {
    let clone = key.cloneNode(true);
    rows[0].appendChild(clone);
}
const backspace = document.createElement('div');
backspace.className = 'key backspace';
rows[0].appendChild(backspace);

for (let i = 0; i < 14; i++) {
    let clone = key.cloneNode(true);
    rows[1].appendChild(clone);
}
const tab = document.createElement('div');
tab.className = 'key tab';
rows[1].insertBefore(tab, rows[1].firstChild);
for (let i = 0; i < 11; i++) {
    let clone = key.cloneNode(true);
    rows[2].appendChild(clone);
}
const caps = document.createElement('div');
caps.className = 'key caps';
rows[2].insertBefore(caps, rows[2].firstChild);
const enter = document.createElement('div');
enter.className = 'key enter';
rows[2].appendChild(enter);
for (let i = 0; i < 11; i++) {
    let clone = key.cloneNode(true);
    rows[3].appendChild(clone);
}
const lshift = document.createElement('div');
lshift.className = 'key lshift';
rows[3].insertBefore(lshift, rows[3].firstChild);
const rshift = document.createElement('div');
rshift.className = 'key rshift';
rows[3].appendChild(rshift);
for (let i = 0; i < 8; i++) {
    let clone = key.cloneNode(true);
    rows[4].appendChild(clone);
}
const space = document.createElement('div');
space.className = 'key space';
rows[4].insertBefore(space, rows[4].children[3]);

let keys = [
    { en: '`', ru: 'ё'}, { en: '1'}, { en: '2'}, { en: '3'}, { en: '4'}, { en: '5'}, { en: '6'},
    { en: '7'}, { en: '8'}, { en: '9'}, { en: '0'}, { en: '-'}, { en: '+'}, { en: 'Backspace'},
    { en: 'Tab'}, { en: 'Q', ru: 'й'}, { en: 'W', ru: 'ц'}, { en: 'E', ru: 'ц'}, { en: 'R', ru: 'ц'}, 
    { en: 'T', ru: 'ц'}, { en: 'Y', ru: 'ц'}, { en: 'U', ru: 'ц'}, { en: 'I', ru: 'ц'}, { en: 'O', ru: 'ц'},
    { en: 'P', ru: 'ц'}, { en: '[', ru: 'ц'}, { en: ']', ru: 'ц'}, { en: '\\', ru: 'ц'}, { en: 'Del', ru: 'ц'},
    { en: 'Caps', ru: 'ц'}, { en: 'A', ru: 'ц'}, { en: 'S', ru: 'ц'}, { en: 'D', ru: 'ц'}, { en: 'F', ru: 'ц'},
    { en: 'G', ru: 'ц'}, { en: 'H', ru: 'ц'}, { en: 'J', ru: 'ц'}, { en: 'K', ru: 'ц'},{ en: 'L', ru: 'ц'},
    { en: ';', ru: 'ц'}, { en: '\'', ru: 'ц'}, { en: 'Enter'}, { en: 'Shift', ru: 'ц'}, { en: 'Z', ru: 'ц'},
    { en: 'X', ru: 'ц'}, { en: 'C', ru: 'ц'}, { en: 'V', ru: 'ц'}, { en: 'B', ru: 'ц'}, { en: 'N', ru: 'ц'},
    { en: 'M', ru: 'ц'}, { en: ',', ru: 'ц'}, { en: '.', ru: 'ц'}, { en: '/', ru: 'ц'}, { en: '▲', ru: 'ц'},
    { en: 'Shift', ru: 'ц'}, { en: 'Ctrl', ru: 'ц'}, { en: 'Win', ru: 'ц'}, { en: 'Alt', ru: 'ц'}, { en: 'Space', ru: 'ц'},
    { en: 'Alt', ru: 'ц'}, { en: '◄', ru: 'ц'}, { en: '▼', ru: 'ц'}, { en: '►', ru: 'ц'}, { en: 'Ctrl', ru: 'ц'},
]

for (let i = 0; i < keys.length; i++) {
    document.getElementsByClassName('key')[i].innerHTML = keys[i].en;
}


