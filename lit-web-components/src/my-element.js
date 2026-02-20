import { LitElement, css, html } from 'lit'

// Globla styles
import '@assets/css/global-styles.css'

// PAGES
import '@views/page-home/index'


export class MyElement extends LitElement {
  
  render() {
    return html`
      <div>
        <index-page-home></index-page-home>
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
