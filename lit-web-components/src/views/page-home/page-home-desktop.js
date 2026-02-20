
import { LitElement, css, html } from 'lit'

// LAYOUT
import '@layouts/main-layout'

// SECTIONS
import './sections/header/section-header-home-desktop'
import './sections/body/section-body-home-desktop'
import './sections/footer/section-footer-home-desktop'

class PageHomeDesktop extends LitElement {

    render() {
        return html`
            <main-layout>
                <p>Page home desktop</p>
                <!-- <div slot='slot-header'>
                    <section-header-home-desktop></section-header-home-desktop>
                </div>
                <div slot='slot-body'>
                    <section-body-home-desktop></section-body-home-desktop>
                </div>
                <div slot='slot-footer'>
                    <section-footer-home-desktop></section-footer-home-desktop>
                </div> -->
            </main-layout>
        `
    }
}

customElements.define('page-home-desktop', PageHomeDesktop)