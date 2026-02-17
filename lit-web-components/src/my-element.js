import { LitElement, css, html } from 'lit'

// Globla styles
import './assets/css/global-styles.css'

// Menus
import './views/menu/main-menu.js'

export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <main-menu></main-menu>
        <slot></slot>
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
