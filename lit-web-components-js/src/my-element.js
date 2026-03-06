import { LitElement, css, html } from 'lit'

// Globla styles
import '@assets/css/global-styles.css'

// ROUTES
import '@router/main-router'


export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <main-router></main-router>
      </div>
    `
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0;
        padding: .5rem .5rem;
        text-align: center;
      }

    `
  }
}

window.customElements.define('my-element', MyElement)
