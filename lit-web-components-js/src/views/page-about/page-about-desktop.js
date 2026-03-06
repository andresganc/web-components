
import { LitElement, css, html } from 'lit'

// SECTIONS
import './sections/header/section-header-about-desktop'
import './sections/body/section-body-about-desktop'
import './sections/footer/section-footer-about-desktop'

class PageAboutDesktop extends LitElement {

    render() {
        return html`
                <p>Page About Desktop</p>
        `
    }
}

customElements.define('page-about-desktop', PageAboutDesktop)