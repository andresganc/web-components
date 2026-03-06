
import { LitElement, css, html } from 'lit'

// SECTIONS
import './sections/header/section-header-comp-desktop'
import './sections/body/section-body-comp-desktop'
import './sections/footer/section-footer-comp-desktop'

class PageComponentsDesktop extends LitElement {

    render() {
        return html`
                <p>Page components desktop</p>
        `
    }
}

customElements.define('page-components-desktop', PageComponentsDesktop)