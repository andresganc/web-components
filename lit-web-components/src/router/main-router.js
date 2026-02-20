
import { LitElement, css, html} from 'lit'
import { Router } from '@lit-labs/router'

// LAYOUTS
import '@layouts/main-layout'
import '@layouts/component-layout'

class MainRouter extends LitElement {

    router = new Router(this, [
        {
            path: '/',
            // render: () => html`<index-page-home></index-page-home>`,
            // render: () => html`<page-home-desktop></page-home-desktop>`,
            render: () => html`<main-layout></main-layout>`
        },
        {
            path: '/components/:name',
            // render: () => html`<index-page-components></index-page-components>`,
            // render: () => html`<page-components-desktop></page-components-desktop>`,
            // render: () => html`<layout-component></layout-component>`,
            render: ({ params }) => html`<component-layout component=${params.name}></component-layout>`,
        },
        {
            path: '(.*)',
            render: () => html`<h2>Error 404 - Pagina no encontrada</h2>`
        },
    ])

    render() {
        return html`${this.router.outlet()}`
    }

}

customElements.define('main-router', MainRouter);