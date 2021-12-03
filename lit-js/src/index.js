import './index.css';
import './styles.css';
import { LitElement, html } from 'lit';
import todos from './todos.json?module';


class MyApp extends LitElement {

    constructor() {
        this.mouseCtrl = new MouseController(this);
    }

    render() {
        return html`
        <article>
            <h1>Hello, World!</h1>
            <p>Your mouse is at: (${this.mouseCtrl.x}, ${this.mouseCtrl.y})</p>
            <ul>
                ${todos.map(todo => html`<li>${todo.title} - ${todo.done ? "Done" : "Pending "}</li>`)}
            </ul>
        </article>
        `;
    }
}

export class MouseController {

    constructor(host) {
        this.host = host;
        host.addController(this);
        this.x = 0;
        this.y = 0;
    }

    _updatePosition =
        /**
         *
         * @param {MouseEvent} event
         */
        (event) => {
            this.x = event.x;
            this.y = event.y;
            this.host.requestUpdate();
        };

    hostConnected() {
        window.addEventListener('mousemove', this._updatePosition);
    }

    hostDisconnected() {
        window.removeEventListener('mousemove', this._updatePosition);
    }

}




customElements.define("my-app", MyApp);
