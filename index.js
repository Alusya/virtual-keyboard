const keyboardKeys = {
    ru: [
        {
            default: [
                {code: '`', name:'ё'},
                {code: 'Digit1', name:'1'},
                {code: 'Digit2', name:'2'},
                {code: 'Digit3', name:'3'},
                {code: 'Digit4', name:'4'},
                {code: 'Digit5', name:'5'},
                {code: 'Digit6', name:'6'},
                {code: 'Digit7', name:'7'},
                {code: 'Digit8', name:'8'},
                {code: 'Digit9', name:'9'},
                {code: 'Digit0', name:'0'},
                {code: 'Minus', name:'-'},
                {code: 'Equal', name:'='},
                {code: 'Backspace', name:'Backspace'}
            ],
            shift: [
                {code: '`', name:'Ё'},
                {code: 'Digit1', name:'!'},
                {code: 'Digit2', name:'"'},
                {code: 'Digit3', name:'№'},
                {code: 'Digit4', name:';'},
                {code: 'Digit5', name:'%'},
                {code: 'Digit6', name:':'},
                {code: 'Digit7', name:'?'},
                {code: 'Digit8', name:'*'},
                {code: 'Digit9', name:'('},
                {code: 'Digit0', name:')'},
                {code: 'Minus', name:'_'},
                {code: 'Equal', name:'+'},
                {code: 'Backspace', name:'Backspace'}
            ],
        },
        {
            default: [
                {code: 'Tab', name:'Tab'},
                {code: 'KeyQ', name:'й'},
                {code: 'KeyW', name:'ц'},
                {code: 'KeyE', name:'у'},
                {code: 'KeyR', name:'к'},
                {code: 'KeyT', name:'е'},
                {code: 'KeyY', name:'н'},
                {code: 'KeyU', name:'г'},
                {code: 'KeyI', name:'ш'},
                {code: 'KeyO', name:'щ'},
                {code: 'KeyP', name:'з'},
                {code: 'BracketLeft', name:'х'},
                {code: 'BracketRight', name:'ъ'},
                {code: 'Slash', name:'/'},
                {code: "Delete", name: "DEL"},
            ],
            shift: [
                {code: 'Tab', name:'Tab'},
                {code: 'KeyQ', name:'Й'},
                {code: 'KeyW', name:'Ц'},
                {code: 'KeyE', name:'У'},
                {code: 'KeyR', name:'К'},
                {code: 'KeyT', name:'Е'},
                {code: 'KeyY', name:'Н'},
                {code: 'KeyU', name:'Г'},
                {code: 'KeyI', name:'Ш'},
                {code: 'KeyO', name:'Щ'},
                {code: 'KeyP', name:'З'},
                {code: 'BracketLeft', name:'Х'},
                {code: 'BracketRight', name:'Ъ'},
                {code: 'Slash', name:'|'},
                {code: "Delete", name: "DEL"}
        ]
        },
        {
            default: [
                {code: 'CapsLock', name:'CapsLock'},
                {code: 'KeyA', name:'ф'},
                {code: 'KeyS', name:'ы'},
                {code: 'KeyD', name:'в'},
                {code: 'KeyF', name:'а'},
                {code: 'KeyG', name:'п'},
                {code: 'KeyH', name:'р'},
                {code: 'KeyJ', name:'о'},
                {code: 'KeyK', name:'л'},
                {code: 'KeyL', name:'д'},
                {code: 'Semicolon', name:'ж'},
                {code: 'Quote', name:'э'},
                {code: 'Enter', name:'Enter'}
            ],
            shift: [
                {code: 'CapsLock', name:'CapsLock'},
                {code: 'KeyA', name:'Ф'},
                {code: 'KeyS', name:'Ы'},
                {code: 'KeyD', name:'В'},
                {code: 'KeyF', name:'А'},
                {code: 'KeyG', name:'П'},
                {code: 'KeyH', name:'Р'},
                {code: 'KeyJ', name:'О'},
                {code: 'KeyK', name:'Л'},
                {code: 'KeyL', name:'Д'},
                {code: 'Semicolon', name:'Ж'},
                {code: 'Quote', name:'Э'},
                {code: 'Enter', name:'Enter'}
        ]
        },
        {
            default: [
                {code: 'ShiftLeft', name:'Shift'},
                {code: '', name: '\x5c'},
                {code: 'KeyZ', name:'я'},
                {code: 'KeyX', name:'ч'},
                {code: 'KeyC', name:'с'},
                {code: 'KeyV', name:'м'},
                {code: 'KeyB', name:'и'},
                {code: 'KeyN', name:'т'},
                {code: 'KeyM', name:'ь'},
                {code: 'Comma', name:'б'},
                {code: 'Period', name:'ю'},
                {code: 'Slash', name:'.'},
                {code: 'ArrowUp', name:'↑'},
                {code: 'ShiftRight', name:'Shift'}
            ],
            shift: [
                {code: 'ShiftLeft', name:'Shift'},
                {code: '', name: '\x5c'},
                {code: 'KeyZ', name:'Я'},
                {code: 'KeyX', name:'Ч'},
                {code: 'KeyC', name:'С'},
                {code: 'KeyV', name:'М'},
                {code: 'KeyB', name:'И'},
                {code: 'KeyN', name:'Т'},
                {code: 'KeyM', name:'Ь'},
                {code: 'Comma', name:'Б'},
                {code: 'Period', name:'Ю'},
                {code: 'Slash', name:','},
                {code: 'ArrowUp', name:'↑'},
                {code: 'ShiftRight', name:'Shift'}
            ],
        },
        {
            default: [
                {code: 'ControlLeft', name:'Ctrl'},
                {code: 'MetaLeft', name:'Win'},
                {code: 'AltLeft', name:'Alt'},
                {code: 'Space', name:'Spacebar'},
                {code: 'AltRight', name:'Alt'},
                {code: 'ControlRight', name:'Ctrl'},
                {code: 'ArrowLeft', name:'←'},
                {code: 'ArrowDown', name:'↓'},
                {code: 'ArrowRight', name:'→'}
            ],
            shift: [
                {code: 'ControlLeft', name:'Ctrl'},
                {code: 'MetaLeft', name:'Win'},
                {code: 'AltLeft', name:'Alt'},
                {code: 'Space', name:'Spacebar'},
                {code: 'AltRight', name:'Alt'},
                {code: 'ControlRight', name:'Ctrl'},
                {code: 'ArrowLeft', name:'←'},
                {code: 'ArrowDown', name:'↓'},
                {code: 'ArrowRight', name:'→'}
            ]
        }
    ],
    en: [
        {
            default: [
                {code: '`', name:'`'},
                {code: 'Digit1', name:'1'},
                {code: 'Digit2', name:'2'},
                {code: 'Digit3', name:'3'},
                {code: 'Digit4', name:'4'},
                {code: 'Digit5', name:'5'},
                {code: 'Digit6', name:'6'},
                {code: 'Digit7', name:'7'},
                {code: 'Digit8', name:'8'},
                {code: 'Digit9', name:'9'},
                {code: 'Digit0', name:'0'},
                {code: 'Minus', name:'-'},
                {code: 'Equal', name:'='},
                {code: 'Backspace', name:'Backspace'}
            ],
            shift: [
                {code: '`', name:'~'},
                {code: 'Digit1', name:'!'},
                {code: 'Digit2', name:'@'},
                {code: 'Digit3', name:'#'},
                {code: 'Digit4', name:'$'},
                {code: 'Digit5', name:'%'},
                {code: 'Digit6', name:'^'},
                {code: 'Digit7', name:'&'},
                {code: 'Digit8', name:'*'},
                {code: 'Digit9', name:'('},
                {code: 'Digit0', name:')'},
                {code: 'Minus', name:'_'},
                {code: 'Equal', name:'+'},
                {code: 'Backspace', name:'Backspace'}
            ],
        },
        {
            default: [
                {code: 'Tab', name:'Tab'},
                {code: 'KeyQ', name:'q'},
                {code: 'KeyW', name:'w'},
                {code: 'KeyE', name:'e'},
                {code: 'KeyR', name:'r'},
                {code: 'KeyT', name:'t'},
                {code: 'KeyY', name:'y'},
                {code: 'KeyU', name:'u'},
                {code: 'KeyI', name:'i'},
                {code: 'KeyO', name:'o'},
                {code: 'KeyP', name:'p'},
                {code: 'BracketLeft', name:'['},
                {code: 'BracketRight', name:']'},
                {code: 'Slash', name:'/'},
                {code: "Delete", name: "DEL"},
            ],
            shift: [
                {code: 'Tab', name:'Tab'},
                {code: 'KeyQ', name:'Q'},
                {code: 'KeyW', name:'W'},
                {code: 'KeyE', name:'E'},
                {code: 'KeyR', name:'R'},
                {code: 'KeyT', name:'T'},
                {code: 'KeyY', name:'Y'},
                {code: 'KeyU', name:'U'},
                {code: 'KeyI', name:'I'},
                {code: 'KeyO', name:'O'},
                {code: 'KeyP', name:'P'},
                {code: 'BracketLeft', name:'{'},
                {code: 'BracketRight', name:'}'},
                {code: 'Slash', name:'|'},
                {code: "Delete", name: "DEL"}
        ]
        },
        {
            default: [
                {code: 'CapsLock', name:'CapsLock'},
                {code: 'KeyA', name:'a'},
                {code: 'KeyS', name:'s'},
                {code: 'KeyD', name:'d'},
                {code: 'KeyF', name:'f'},
                {code: 'KeyG', name:'g'},
                {code: 'KeyH', name:'h'},
                {code: 'KeyJ', name:'j'},
                {code: 'KeyK', name:'k'},
                {code: 'KeyL', name:'l'},
                {code: 'Semicolon', name:';'},
                {code: 'Quote', name:'"'},
                {code: 'Enter', name:'Enter'}
            ],
            shift: [
                {code: 'CapsLock', name:'CapsLock'},
                {code: 'KeyA', name:'A'},
                {code: 'KeyS', name:'S'},
                {code: 'KeyD', name:'D'},
                {code: 'KeyF', name:'F'},
                {code: 'KeyG', name:'G'},
                {code: 'KeyH', name:'H'},
                {code: 'KeyJ', name:'J'},
                {code: 'KeyK', name:'K'},
                {code: 'KeyL', name:'L'},
                {code: 'Semicolon', name:':'},
                {code: 'Quote', name:'"'},
                {code: 'Enter', name:'Enter'}
        ]
        },
        {
            default: [
                {code: 'ShiftLeft', name:'Shift'},
                {code: '', name: '\x5c'},
                {code: 'KeyZ', name:'z'},
                {code: 'KeyX', name:'x'},
                {code: 'KeyC', name:'c'},
                {code: 'KeyV', name:'v'},
                {code: 'KeyB', name:'b'},
                {code: 'KeyN', name:'n'},
                {code: 'KeyM', name:'m'},
                {code: 'Comma', name:','},
                {code: 'Period', name:'.'},
                {code: 'Slash', name:'/'},
                {code: 'ArrowUp', name:'↑'},
                {code: 'ShiftRight', name:'Shift'}
            ],
            shift: [
                {code: 'ShiftLeft', name:'Shift'},
                {code: '', name: '\x5c'},
                {code: 'KeyZ', name:'Z'},
                {code: 'KeyX', name:'X'},
                {code: 'KeyC', name:'C'},
                {code: 'KeyV', name:'V'},
                {code: 'KeyB', name:'B'},
                {code: 'KeyN', name:'N'},
                {code: 'KeyM', name:'M'},
                {code: 'Comma', name:'<'},
                {code: 'Period', name:'>'},
                {code: 'Slash', name:'?'},
                {code: 'ArrowUp', name:'↑'},
                {code: 'ShiftRight', name:'Shift'}
            ],
        },
        {
            default: [
                {code: 'ControlLeft', name:'Ctrl'},
                {code: 'MetaLeft', name:'Win'},
                {code: 'AltLeft', name:'Alt'},
                {code: 'Space', name:'Spacebar'},
                {code: 'AltRight', name:'Alt'},
                {code: 'ControlRight', name:'Ctrl'},
                {code: 'ArrowLeft', name:'←'},
                {code: 'ArrowDown', name:'↓'},
                {code: 'ArrowRight', name:'→'}
            ],
            shift: [
                {code: 'ControlLeft', name:'Ctrl'},
                {code: 'MetaLeft', name:'Win'},
                {code: 'AltLeft', name:'Alt'},
                {code: 'Space', name:'Spacebar'},
                {code: 'AltRight', name:'Alt'},
                {code: 'ControlRight', name:'Ctrl'},
                {code: 'ArrowLeft', name:'←'},
                {code: 'ArrowDown', name:'↓'},
                {code: 'ArrowRight', name:'→'}
            ]
        }
    ]
}

let isShift = false;
let currentLanguage = 'ru';

const serviceKeys = ['Capslock', 'Spacebar', 'Alt', 'Ctrl', 'Backspace', 'Tab', 'DEL', 'left', 'up', 'down', 'right', 'Win', 'Enter', 'Shift']
const longKeys = ['CapsLock', 'Backspace', 'Enter', 'Shift']

function createKey(text, id, parent, isLong) {
    const key = document.createElement('div')
    key.classList.add('key')
    key.id = id;
    if (isLong && text !== 'Spacebar') {
        key.classList.add('long')
    }
    if (text === 'Spacebar') {
        key.classList.add('spacebar')
    }
    key.textContent = text;
    parent.appendChild(key);
}

const textarea = document.createElement('textarea')
textarea.classList.add('textarea')

const keyboard = document.createElement('div')
keyboard.classList.add('keyboard')

document.body.prepend(keyboard)
document.body.prepend(textarea)

function renderKeyboard(lang, isShift) {
    keyboardKeys[lang].forEach(row => {
        const newRow = document.createElement('div')
        newRow.classList.add('row');
        keyboard.appendChild(newRow)
        row[isShift ? "shift" : "default"].forEach(key => {
            const isLongKey = longKeys.some(name => key.name === name)
            createKey(key.name, key.code, newRow, isLongKey)
        })
    })
}

function rerenderKeyboard(lang, isShift) {
    keyboard.innerHTML = ''
    renderKeyboard(lang, isShift)
}

renderKeyboard('ru', false)

document.addEventListener('click', (event) => {
    console.log(event.target.id)
    if (event.target.classList.contains('key') && !serviceKeys.some(keyname => keyname === event.target.textContent)) {
        textarea.value = `${textarea.value}${event.target.textContent}`
    } else if (event.target.id === 'Backspace') {
        if (textarea.selectionStart !== textarea.selectionEnd) {
            const start = textarea.selectionStart
            const end = textarea.selectionEnd
            textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end)
            textarea.selectionStart = start
            textarea.selectionEnd = start
        } else {
            const selection = textarea.selectionStart
            textarea.value = textarea.value.slice(0, selection - 1) + textarea.value.slice(selection)
            textarea.selectionStart = selection - 1
            textarea.selectionEnd = selection - 1
        }
    } else if (event.target.id === 'Delete') {
        if (textarea.selectionStart !== textarea.selectionEnd) {
            const start = textarea.selectionStart
            const end = textarea.selectionEnd
            textarea.value = textarea.value.slice(0, start) + textarea.value.slice(end)
            textarea.selectionStart = start
            textarea.selectionEnd = start
        } else {
            const selection = textarea.selectionStart
            textarea.value = textarea.value.slice(0, selection) + textarea.value.slice(selection + 1)
            textarea.selectionStart = selection
            textarea.selectionEnd = selection
        }
        
    } else if (event.target.id === 'ArrowUp') {
        if (!isShift) {
            textarea.selectionStart = 0
            textarea.selectionEnd = 0
        } else {
            textarea.selectionStart = 0
        }
    }else if (event.target.id === 'ArrowDown') {
        if (!isShift) {
            textarea.selectionStart = textarea.value.length
            textarea.selectionEnd = textarea.value.length
        } else {
            textarea.selectionStart = textarea.value.length
        }
    }
    else if (event.target.id === 'ArrowLeft') {
        if (!isShift) {
            textarea.selectionStart -= 1
            textarea.selectionEnd = textarea.selectionStart
        } else {
            textarea.selectionEnd = textarea.selectionStart
            textarea.selectionStart = textarea.selectionStart - 1
        }
    }
    else if (event.target.id === 'ArrowRight') {
        if (!isShift) {
            textarea.selectionStart += 1
            textarea.selectionEnd = textarea.selectionStart
        } else {
            textarea.selectionEnd = textarea.selectionStart + 1
        }
    }
    textarea.focus()
})

document.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.key === 'Shift') {
        isShift = true;
        console.log('shift down')
        rerenderKeyboard(currentLanguage, isShift)
    }
    if (event.key === 'Alt' && isShift) {
        if (currentLanguage === 'ru') {
            currentLanguage = 'en'
        } else if (currentLanguage === 'en') {
            currentLanguage = 'ru'
        }
        isShift = false
        rerenderKeyboard(currentLanguage, isShift)
        event.preventDefault()
        console.log('lang change', currentLanguage)
    }
    [...document.querySelectorAll(`#${event.code}`)]
   .forEach(key => key.classList.add('active'))
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
        isShift = false;
        rerenderKeyboard(currentLanguage, isShift)
        console.log('shift up')
    }
    [...document.querySelectorAll(".active")]
   .forEach(key => key.classList.remove('active'))
})
const notes = document.createElement('div');
notes.textContent = 'To switch the language press Shift + Alt'
document.body.appendChild(notes);

