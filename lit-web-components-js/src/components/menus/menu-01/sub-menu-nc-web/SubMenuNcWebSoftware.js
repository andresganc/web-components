import { LitElement, html, css } from 'lit'

export class SubMenuNCWEbCrm extends LitElement {

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
                    <svg viewBox="0 0 24 24"><path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" /></svg>
                      <a href="#"></a><p>Software Facil de usar</p>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M23.5 17L18.5 22L15 18.5L16.5 17L18.5 19L22 15.5L23.5 17M6 2C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.45 21.38 13.2 20.7 13.08 20H6V4H13V9H18V13.08C18.33 13.03 18.67 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M8 12V14H16V12M8 16V18H13V16Z" /></svg>
                      <a href="#"></a><p>Documentacion</p>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M13,11H18L16.5,9.5L17.92,8.08L21.84,12L17.92,15.92L16.5,14.5L18,13H13V18L14.5,16.5L15.92,17.92L12,21.84L8.08,17.92L9.5,16.5L11,18V13H6L7.5,14.5L6.08,15.92L2.16,12L6.08,8.08L7.5,9.5L6,11H11V6L9.5,7.5L8.08,6.08L12,2.16L15.92,6.08L14.5,7.5L13,6V11Z" /></svg>
                      <a href="#"></a><p>Versatilidad</p>
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
customElements.define('sub-menu-nc-web-crm', SubMenuNCWEbCrm)
