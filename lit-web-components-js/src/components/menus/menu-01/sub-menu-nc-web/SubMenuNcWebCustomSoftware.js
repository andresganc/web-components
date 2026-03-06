import { LitElement, html, css } from 'lit'

export class SUbMenuNCWEbSoftware extends LitElement {

  render() {
    return html`
              <div class="submenu">
                <div class="submenu__list">
                  <div class='submenu__list-container'>
                  <div class="submenu__list-container-icon">
                    <svg viewBox="0 0 24 24"> <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                      <a href="#section_header"><p>Home</p> </a>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z" /></svg>
                      <p>Diseño Software</p>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M17 14L22 9L20.6 7.6L18 10.2V3H16V10.2L13.4 7.6L12 9L17 14M23 14V16C23 17.1 22.1 18 21 18H14V20H16V22H8V20H10V18H3C1.9 18 1 17.1 1 16V4C1 2.9 1.9 2 3 2H12V4H3V16H21V14H23Z" /></svg>
                      <p>Diseño Software Profesional</p>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M21 16H3V4H21M21 2H3C1.89 2 1 2.89 1 4V16C1 17.11 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.11 18 23 17.11 23 16V4C23 2.89 22.1 2 21 2M15 5.5L14.38 6.87L13 7.5L14.38 8.13L15 9.5L15.63 8.13L17 7.5L15.63 6.87L15 5.5M10.5 7.5L9.41 9.91L7 11L9.41 12.09L10.5 14.5L11.6 12.09L14 11L11.6 9.91L10.5 7.5" /></svg>
                      <p>Diseño Software Personalizado</p>
                    </div>
                  </div>
                </div>
              </div>
              `
  }

  static styles = css`
      :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
    }

    p {
      margin: .5rem;
      color:#004a72;;
      cursor: pointer;
    }

    a:link {
      color: #000000;
    }

    a:visited {
      text-decoration: none;
      color: #000000;
    }

    .submenu p {
      text-align: left;
     }

     .submenu__list-container-icon {
      display: flex;
      padding: .5rem 1rem;
      margin: .4rem;
    }

    .submenu__list-container-icon svg {
      width: 1.6rem;
      fill: #004a72;
    }

    .submenu__list-container-icon:hover {
      background-color: #c4dce9;
      border-radius: 0.5rem;
    }
    `

}
customElements.define('sub-menu-nc-web-software', SUbMenuNCWEbSoftware)
