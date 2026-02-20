
import { LitElement, css, html } from 'lit'

// LAYOUT
import '@layouts/layout-home'

// SECTIONS
import './sections/header/section-header-home-desktop'
import './sections/body/section-body-home-desktop'
import './sections/footer/section-footer-home-desktop'

class PageHomeDesktop extends LitElement {

    render() {
        return html`
            <layout-home>
                <div slot='slot-header'>
                    <section-header-home-desktop></section-header-home-desktop>
                </div>
                <div slot='slot-body'>
                    <section-body-home-desktop></section-body-home-desktop>
                </div>
                <div slot='slot-footer'>
                    <section-footer-home-desktop></section-footer-home-desktop>
                </div>
            </layout-home>
        `
    }
}

customElements.define('page-home-desktop', PageHomeDesktop)