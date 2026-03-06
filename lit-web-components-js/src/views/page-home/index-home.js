
import { LitElement, html } from 'lit';

import "./page-home-desktop";
import "./page-home-mobile";

export class IndexPageHome extends LitElement {
  render() {

    /* Desktop */
    if (window.screen.width > 1600) {
      return html`<page-home-desktop></page-home-desktop>`;
    }

    // /* Laptop */
    // if (window.screen.width > 1024 && window.screen.width <= 1600){
    //   return html`<section-home-laptop></section-home-laptop>`;
    // }

    // /* Tablet */
    // if (window.screen.width > 500 && window.screen.width <= 1024) {
    //   return html`<section-home-tablet></section-home-tablet>`;
    // }

    /* Mobile */
    if (window.screen.width <= 500) {
      return html`<page-home-desktop></page-home-desktop>`;
    }
    
    return html`Error al cargar la pagina`;
  }
}

customElements.define('index-page-home', IndexPageHome);