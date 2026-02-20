
import { LitElement, css, html} from 'lit'
import { Router } from '@lit-labs/router'

// LAYOUTS
import '@layouts/main-layout'
import '@layouts/component-layout'

class MainRouter extends LitElement {

    constructor() {
    super();

        this.router = new Router(this, [
            {
                path: '/',
                // render: () => html`<index-page-home></index-page-home>`,
                // render: () => html`<page-home-desktop></page-home-desktop>`,
                render: () => html`<main-layout page='home'></main-layout>`
            },

            {
                path: '/about',
                // render: () => html`<index-page-home></index-page-home>`,
                // render: () => html`<page-home-desktop></page-home-desktop>`,
                render: () => html`<main-layout page='about'></main-layout>`
            },

            // Ruta base de componentes (SIN params)
            {
                path: '/components',
                render: () =>
                html`<components-layout component="home"></components-layout>`,
            },

            // Ruta con parámetro
            // {
            //     path: '/components/:name',
            //     render: (route) => {
            //     const name = route && route.params
            //         ? route.params.name
            //         : 'home';

            //     return html`<components-layout component="${name}"></components-layout>`;
            //     },

            //     // Uso para proyecto hecho Typescript
            //     // render: ({ params }) => html`<component-layout component=${params.name}></component-layout>`,
            // },

            {
                path: '/components/:name',
                render: (route) => {
                const name = route?.params?.name || 'button';

                return html`
                    <components-layout component="${name}"></components-layout>
                `;
                }
            },

            {
                path: '(.*)',
                render: () => html`<h2>Error 404 - Pagina no encontrada</h2>`
            },
        ])
    }

    render() {
        return html`${this.router.outlet()}`
    }

}

customElements.define('main-router', MainRouter);