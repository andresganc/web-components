
import { LitElement, html } from 'lit';

import "./section-home-desktop";
import "./section-home-laptop";
import "./section-home-tablet";
import "./section-home-mobile";

export class IndexSectionHome extends LitElement {
  render() {

    /* Desktop */
    if (window.screen.width > 1600) {
      return html`<section-home-desktop></section-home-desktop>`;
    }

    /* Laptop */
    if (window.screen.width > 1024 && window.screen.width <= 1600){
      return html`<section-home-laptop></section-home-laptop>`;
    }

    /* Tablet */
    if (window.screen.width > 500 && window.screen.width <= 1024) {
      return html`<section-home-tablet></section-home-tablet>`;
    }

    /* Mobile */
    if (window.screen.width <= 500) {
      return html`<section-home-mobile></section-home-mobile>`;
    }
    
    return html`Error al cargar el menu`;
  }
}

customElements.define('index-section-home', IndexSectionHome);