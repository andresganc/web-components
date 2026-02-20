
import { LitElement, css, html } from 'lit';

// MENUS
import '@views/menus/horizontal-menu'

// PAGES
import '@views/page-home/index-home'
import '@views/page-about/index-about'
import '@views/page-components/index-components'

class MainLayout extends LitElement {

    static properties = {
        page: { type: String}
    }

    constructor () {
        super()
        this.page = ''
    }

    renderPage() {
    switch (this.page) {
      case 'about':
        return html`<index-about></index-about>`;
      default:
        return html`<index-home></index-home>`;
    }
  }

    render() {
        return html`
            <div class='layout'>
                <div class='layout__menu'>
                    <!-- <slot name='slot-menu'></slot> -->
                    <horizontal-menu></horizontal-menu>
                </div>
                <main class='layout__body'>
                    <p>LAYOUT MAIN</p>
                    ${this.renderPage()}
                    <!-- <div class='layout__body-header'>
                        <slot name='slot-header'></slot>
                    </div>
                    <div class='layout__body-main'>
                        <slot name='slot-body'></slot>
                    </div>
                    <div class='layout__body-footer'>
                        <slot name='slot-footer'></slot>
                    </div> -->
                </main>
            </div>
        `
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                margin: 0;
                padding: 0;
            }

            .layout {
                display: inline-block;
                padding: 1rem 2rem;
                background-color: #424242;
            }


        `
    }
}

customElements.define('main-layout', MainLayout);