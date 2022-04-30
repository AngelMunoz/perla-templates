import './index.css';
//@ts-ignore
import { createSignal, onCleanup } from 'solid-js';
//@ts-ignore
import { render } from "solid-js/web";
//@ts-ignore
import html from "solid-js/html";
//@ts-ignore
import todos from './todos.json?module';


/**
 * 
 * @param {Todo[]} items 
 */
function todoList(items) {
    /**
     * 
     * @param {Todo} item 
     */
    function todoItem(item) {
        return html`<li>${item.title} - ${item.done ? 'done' : 'pending'}</li>`;
    }
    return html`
        <ul>
            ${items.map(todoItem)}
        </ul>
    `;
}


const App = () => {
    const [count, setCount] = createSignal(0),
        timer = setInterval(() => setCount(count() + 1), 1000);
    onCleanup(() => clearInterval(timer));
    return html`
        <h1>Hello <b>solid.js!</b> - ${count}</h1>
        ${todoList(todos)}
    `;
};
render(App, document.querySelector("#app"));
