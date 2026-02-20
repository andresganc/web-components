
import { LitElement, css, html } from 'lit';

// MENUS
import '@views/menus/horizontal-menu'

// PAGES
import '@views/page-components/page-components-desktop'
import '@views/page-components/page-comp-button-desk'

class ComponentLayout extends LitElement {

    static properties = {
        component: { type: String },
    };

    constructor() {
        super();
        this.component = "home";
    }

    renderComponent() {
        switch (this.component) {
        case 'button':
            return html`<page-comp-button-desk></page-comp-button-desk>`;
        case 'home':
        default:
            return html`<page-components-desktop></page-components-desktop>`;
        }
    }

    render() {
        return html`
            <div class='layout'>
                <div class='layout__menu'>
                    <horizontal-menu></horizontal-menu>
                </div>
                <main class='layout__body'>
                    ${this.renderComponent()}
                </main>
            </div>
        `
    }
}

customElements.define('component-layout', ComponentLayout);