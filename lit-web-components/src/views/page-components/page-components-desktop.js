
import { LitElement, css, html } from 'lit'

// LAYOUT
import '@layouts/component-layout'

// SECTIONS
import './sections/header/section-header-comp-desktop'
import './sections/body/section-body-comp-desktop'
import './sections/footer/section-footer-comp-desktop'

class PageComponentsDesktop extends LitElement {

    render() {
        return html`
            <component-layout>
                <div slot='slot-header'>
                    <section-header-comp-desktop></section-header-comp-desktop>
                </div>
                <div slot='slot-body'>
                    <section-body-comp-desktop></section-body-comp-desktop>
                </div>
                <div slot='slot-footer'>
                    <section-footer-comp-desktop></section-footer-comp-desktop>
                </div>
            </component-layout>
        `
    }
}

customElements.define('page-components-desktop', PageComponentsDesktop)