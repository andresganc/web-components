import { LitElement, html } from 'lit'

// Components
import './MenuHorizontalDoubleDesktop.js'
import './MenuHorizontalDoubleTableLaptop.js'
import './MenuHorizontalDoubleMobile.js'

export class IndexMenuHorizontalDouble extends LitElement {
  render() {
    if (window.screen.width > 1024) {
      return html` <menu-horizontal-double-desktop></menu-horizontal-double-desktop>`
    }
    if (window.screen.width > 425 && window.screen.width <= 1024) {
      return html` <menu-horizontal-double-table-laptop></menu-horizontal-double-table-laptop>`
    }
    if (
      window.screen.width <= 425 ||
      window.screen.width <= 375 ||
      window.screen.width <= 320
    ) {
      return html`
        <menu-horizontal-double-mobile></menu-horizontal-double-mobile>
      `
    }
    return html`Error al cargar el menu`
  }
}

customElements.define(
  'index-menu-horizontal-double',
  IndexMenuHorizontalDouble
)
