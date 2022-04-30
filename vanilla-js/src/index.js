import './index.css';

//@ts-ignore
import todos from './todos.json?module';

/**
 * 
 * @param {Todo} item 
 */
function todoItem(item) {
    const li = document.createElement('li');
    li.innerText = `${item.title} - ${item.done ? 'done' : 'pending'}`;
    return li;
}

/**
 * 
 * @param {Todo[]} items 
 */
function todoList(items) {
    const ul = document.createElement('ul');
    for (const item of items.map(todoItem)) {
        ul.appendChild(item);
    }
    return ul;
}

function h1(text) {
    const h1 = document.createElement('h1');
    h1.innerText = text;
    return h1;
}

class MyApp extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot?.appendChild(h1("Welcome to the vanilla JS sample :)"));
        this.shadowRoot?.appendChild(todoList(todos));
    }
}


//@ts-ignore
customElements.define("my-app", MyApp);
