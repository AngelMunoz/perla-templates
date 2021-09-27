import './index.css'
import { LitElement, html } from 'lit'
import { registerAll } from 'fsharp-components'
registerAll()
class MyApp extends LitElement {
    render() {
        return html`
        <article>
            <header>
                <button @click=${() => this.menuOpen = !this.menuOpen}>Menu</button>
                <fs-off-canvas closable ?is-open=${this.menuOpen} @fs-close-off-canvas=${() => this.menuOpen = false}>
                    <ul>
                        <li>Yup, using npm dependencies</li>
                        <li>Without Node and Npm!</li>
                    </ul>
                </fs-off-canvas>
            </header>
            <fs-message kind="danger" header="Look Ma' No complicated setup!">
                <h3>Hello there!</h3>
                <p>No local dependencies, all is on the cloud!</p>
                <p>Now with LiveReload!</p>
            </fs-message>
        </article>
        `
    }

    static get properties() {
        return { menuOpen: { state: true } }
    }

    constructor() {
        super()
        this.menuOpen = false
    }
}

customElements.define("my-app", MyApp)