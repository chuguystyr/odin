const container = document.getElementById('container');
const newBook = document.getElementById('newBook');
const form = document.getElementsByTagName('form')[0];
const formClose = document.getElementById('close');
let myLibrary = [];
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    Object.defineProperty(this, 'info', {
        value: function() {
            let info = `${this.title} written by ${this.author}, ${this.pages} pages`;
            this.read ? info += ' has already been read.' : info += ' hasn\'t been read yet.';
            return info;
        },
        enumerable: false
    });
}

const historyBook = new Book('Подолати минуле: глобальна історія України', 'Ярослав Грицак', '400', false);
const ukrainianLiterature = new Book('Інтернат', 'Сергій Жадан', '336', true);
myLibrary.push(historyBook, ukrainianLiterature);

newBook.addEventListener('click', () => form.style.display = 'block');
formClose.addEventListener('click', () => form.style.display = 'none');

const addBook = document.getElementById('add');
addBook.addEventListener('click', addBookToLibrary);

function addBookToLibrary() {
    event.preventDefault();
    form.style.display = 'none';
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    form.reset();
    container.replaceChildren();
    displayBooks();
}

function displayBooks() {
    for (const [index, book] of myLibrary.entries()) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('bookNumber', index);

        for (let key in book) {
            const el = document.createElement('p');
            el.setAttribute('class', key);
            el.innerText = `${key.toUpperCase()}: ${book[key]}`;
            card.appendChild(el);
        }

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', (event) => {
            myLibrary.splice(index, 1);
            container.replaceChildren();
            displayBooks();
        })
        card.appendChild(deleteButton);
        container.appendChild(card);
    }
}
document.addEventListener('DOMContentLoaded', () => displayBooks());