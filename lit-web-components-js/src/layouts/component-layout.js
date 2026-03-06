
import { LitElement, css, html } from 'lit';

// MENUS
import '@views/menus/horizontal-menu'
import '@views/menus/vertical-menu'

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
        case 'buttons':
            return html`<page-comp-button-desk></page-comp-button-desk>`;
        case 'menus':
            return html`<page-components-menus></page-components-menus>`;
        case 'home':
        default:
            return html`<page-components-desktop></page-components-desktop>`;
        }
    }

    render() {
        return html`
            <div class='layout'>
                <div class='layout__menu menu'>
                    <horizontal-menu></horizontal-menu>
                </div>
                <div class='layout__body body'>
                    <div class='layout__body--nav nav'>
                        <vertical-menu></vertical-menu>
                    </div>
                    <main class='layout__body--main main'>
                        ${this.renderComponent()}
                    </main>
                </div>     
            </div>
        `
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                margin: 0;
                padding: 0;
            }

            .layout {
                display: inline-block;
                padding: .5rem;
                /* background-color: #424242; */
            }

            .body {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            }


        `
    }
}

customElements.define('component-layout', ComponentLayout);