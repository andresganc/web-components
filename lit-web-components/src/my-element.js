import { LitElement, css, html } from 'lit'

// Globla styles
import '@assets/css/global-styles.css'

// TEMPLATES
import '@templates/template-home'

// STRUCTURE
import '@views/menu/main-menu.js'

// COMPONENTS
// Menus
import '@components/menus/menu-01/index.js'


export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <template-home>
          
        </template-home>
        <!-- <main-menu></main-menu>
        <slot></slot>
        <index-menu-horizontal-double></index-menu-horizontal-double> -->
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
