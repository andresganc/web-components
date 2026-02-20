
import { LitElement, css, html } from 'lit'

// LAYOUT
import '@layouts/layout-component'

// SECTIONS
import './sections/header/section-header-comp-desktop'
import './sections/body/section-body-comp-desktop'
import './sections/footer/section-footer-comp-desktop'

class PageComponentsDesktop extends LitElement {

    render() {
        return html`
            <layout-component>
                <div slot='slot-header'>
                    <section-header-comp-desktop></section-header-comp-desktop>
                </div>
                <div slot='slot-body'>
                    <section-body-comp-desktop></section-body-comp-desktop>
                </div>
                <div slot='slot-footer'>
                    <section-footer-comp-desktop></section-footer-comp-desktop>
                </div>
            </layout-component>
        `
    }
}

customElements.define('page-components-desktop', PageComponentsDesktop)