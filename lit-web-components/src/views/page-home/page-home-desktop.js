
import { LitElement, css, html } from 'lit'

// LAYOUT
import '@layouts/layout-main'

// SECTIONS
import './sections/header/section-header-home-desktop'
import './sections/body/section-body-home-desktop'
import './sections/footer/section-footer-home-desktop'

class PageHomeDesktop extends LitElement {

    render() {
        return html`
            <layout-main>
                <div slot='slot-header'>
                    <section-header-home-desktop></section-header-home-desktop>
                </div>
                <div slot='slot-body'>
                    <section-body-home-desktop></section-body-home-desktop>
                </div>
                <div slot='slot-footer'>
                    <section-footer-home-desktop></section-footer-home-desktop>
                </div>
            </layout-main>
        `
    }
}

customElements.define('page-home-desktop', PageHomeDesktop)