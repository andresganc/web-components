
import { LitElement, css, html } from 'lit';

// MENUS
import '@views/menus/horizontal-menu'

// PAGES
import '@views/page-components/page-components-desktop'

class ComponentLayout extends LitElement {

    static properties = {
        component: { type: String}
    }

    constructor () {
        super()
        this.component = ''
    }

    renderComponent() {
        switch (this.component) {
        case 'components':
            return html`<page-components></page-components>`;
        case 'button':
        default:
            return html`<page-components-desktop></page-components-desktop>`;
        }
    }

    render() {
        return html`
            <div class='layout'>
                <div class='layout__menu'>
                    <!-- <slot name='slot-menu'></slot> -->
                    <horizontal-menu></horizontal-menu>
                </div>
                <main class='layout__body'>
                    <p>LAYOUT COMPONENT</p>
                    ${this.renderPage()}

                    <!-- <div class='layout__body-header'>
                        <slot name='slot-header'></slot>
                    </div>
                    <div class='layout__body-main'>
                        <slot name='slot-body'></slot>
                    </div>
                    <div class='layout__body-footer'>
                        <slot name='slot-footer'></slot>
                    </div> -->

                </main>
            </div>
        `
    }
}

customElements.define('component-layout', ComponentLayout);