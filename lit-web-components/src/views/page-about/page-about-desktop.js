
import { LitElement, css, html } from 'lit'

// LAYOUT
import '@layouts/main-layout'

// SECTIONS
import './sections/header/section-header-about-desktop'
import './sections/body/section-body-about-desktop'
import './sections/footer/section-footer-about-desktop'

class PageAboutDesktop extends LitElement {

    render() {
        return html`
            <main-layout>
                <div slot='slot-header'>
                    <section-header-about-desktop></section-header-about-desktop>
                </div>
                <div slot='slot-body'>
                    <section-body-about-desktop></section-body-about-desktop>
                </div>
                <div slot='slot-footer'>
                    <section-footer-about-desktop></section-footer-about-desktop>
                </div>
            </main-layout>
        `
    }
}

customElements.define('page-about-desktop', PageAboutDesktop)