
import { LitElement, css, html } from 'lit';

class TemplateHome extends LitElement {

    render() {
        return html`
            <div class='template'>
                <div class='template__menu'>
                    <slot></slot>
                </div>
                <div class='template__body'>
                    <div class='template__body-header'>
                        <slot></slot>
                    </div>
                    <div class='template__body-main'>
                        <slot></slot>
                    </div>
                    <div class='template__body-footer'>
                        <slot></slot>
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

            template {
                padding: 1rem 2rem;
                background-color: #424242;
            }
        `
    }
}

customElements.define('template-home', TemplateHome);