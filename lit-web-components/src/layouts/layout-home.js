
import { LitElement, css, html } from 'lit';

// MENUS
import '@views/menus/main-menu'

class LayoutHome extends LitElement {

    render() {
        return html`
            <div class='layout'>
                <div class='layout__menu'>
                    <main-menu></main-menu>
                </div>
                <div class='layout__body'>
                    <div class='layout__body-header'>
                        <slot name='slot-header'></slot>
                    </div>
                    <div class='layout__body-main'>
                        <slot name='slot-body'></slot>
                    </div>
                    <div class='layout__body-footer'>
                        <slot name='slot-footer'></slot>
                    </div>
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
                padding: 1rem 2rem;
                background-color: #424242;
            }


        `
    }
}

customElements.define('layout-home', LayoutHome);