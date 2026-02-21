
import { LitElement, css, html } from 'lit';

// MENUS
import '@views/menus/horizontal-menu'

// PAGES
import '@views/page-home/index-home'
import '@views/page-about/index-about'

import '@views/page-home/page-home-desktop'
import '@views/page-about/page-about-desktop'

class MainLayout extends LitElement {

    static properties = {
        page: { type: String },
    };

    constructor() {
        super();
        this.page = 'home';
    }

    renderPage() {
        switch (this.page) {
        case 'about':
            return html`<page-about-desktop></page-about-desktop>`;
        case 'home':
            default:
            return html`<page-home-desktop></page-home-desktop>`;
        }
    }

    render() {
        return html`
            <div class='layout'>
                <div class='layout__menu'>
                    <horizontal-menu></horizontal-menu>
                </div>
                <div>
                    <main class='layout__body'>
                        ${this.renderPage()}
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

            /* .layout {
                display: inline-block;
                padding: 1rem 2rem;
                background-color: #424242;
            } */


        `
    }
}

customElements.define('main-layout', MainLayout);