
import { LitElement, css, html } from 'lit';

class TemplateComponents extends LitElement {

    render() {
        return html`
            <div class='template'>
                <div class='template__menu'>

                </div>
                <div class='template__body'>
                    <div class='template__body-header'>

                    </div>
                    <div class='template__body-main'>

                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('template-components', TemplateComponents);