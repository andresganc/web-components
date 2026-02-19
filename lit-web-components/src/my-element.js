import { LitElement, css, html } from 'lit'

// Globla styles
import '@assets/css/global-styles.css'

// LAYOUTS
import '@layouts/layout-home'

// VIEWS
import '@views/menus/main-menu.js'

// COMPONENTS
// Menus
import '@components/menus/menu-01/index.js'


export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <home-template>

        </home-template>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

    `
  }
}

window.customElements.define('my-element', MyElement)
