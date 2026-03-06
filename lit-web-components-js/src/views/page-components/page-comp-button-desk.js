
import { LitElement, css, html } from 'lit'

class PageCompButtonDesk extends LitElement {

    render() {
        return html`
            <h2>Button Component</h2>
            <button>Click me</button>
        `
    }
}

customElements.define('page-comp-button-desk', PageCompButtonDesk)