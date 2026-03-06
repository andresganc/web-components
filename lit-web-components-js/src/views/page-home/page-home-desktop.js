
import { LitElement, css, html } from 'lit'

// SECTIONS
import './sections/header/section-header-home-desktop'
import './sections/body/section-body-home-desktop'
import './sections/footer/section-footer-home-desktop'

class PageHomeDesktop extends LitElement {

    render() {
        return html`
                <p>Page home desktop</p>
        `
    }
}

customElements.define('page-home-desktop', PageHomeDesktop)