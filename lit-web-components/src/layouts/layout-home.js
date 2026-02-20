
import { LitElement, css, html } from 'lit';

// MENUS
import '@views/menus/main-menu'

class LayoutHome extends LitElement {

    render() {
        return html`
            <div class='template'>
                <div class='template__menu'>
                    <main-menu></main-menu>
                </div>
                <div class='template__body'>
                    <div class='template__body-header'>
                        <slot name='slot-header'></slot>
                    </div>
                    <div class='template__body-main'>
                        <slot name='slot-body'></slot>
                    </div>
                    <div class='template__body-footer'>
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

            .template {
                display: inline-block;
                padding: 1rem 2rem;
                background-color: #424242;
            }


        `
    }
}

customElements.define('layout-home', LayoutHome);