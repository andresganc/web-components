import { LitElement, html, css } from 'lit'

export class SUbMenuNCWEbSites extends LitElement {

  render() {
    return html`
              <div class="submenu">
                <div class="submenu__list">
                  <div class='submenu__list-container'>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"> <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
                      <a href="http://nc-web-sites.nc-web.com.co/#section-header" target="blank"><p>Home</p></a>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                      <a href="http://nc-web-sites.nc-web.com.co/#section-plan-basic" target="blank"><p>Diseño Basico</p></a>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25M22.61 18.36L18.36 22.61L13.16 17.41L14.93 15.64L15.93 16.64L18.4 14.16L19.82 15.58L18.36 17L19.42 18L20.84 16.6L22.61 18.36M6.61 10.83L1.39 5.64L5.64 1.39L7.4 3.16L4.93 5.64L6 6.7L8.46 4.22L9.88 5.64L8.46 7.05L9.46 8.05L6.61 10.83M20.71 7C21.1 6.61 21.1 6 20.71 5.59L18.37 3.29C18 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87L20.71 7Z" /></svg>
                      <a href="http://nc-web-sites.nc-web.com.co/#section-detalle-profesional" target="blank"><p>Diseño Profesional</p></a>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M20 6H4V4H20V6M15.69 14H14V15.69C13.37 16.64 13 17.77 13 19C13 19.34 13.04 19.67 13.09 20H4V14H3V12L4 7H20L21 12V13.35C20.37 13.13 19.7 13 19 13C17.77 13 16.64 13.37 15.69 14M12 14H6V18H12V14M21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z" /></svg>
                      <a href="http://nc-web-sites.nc-web.com.co/#section-virtual-store" target="blank"><p>Tiendas Virtuales</p></a>
                    </div>
                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M15 5H18L16.5 7L15 5M5 2H19C20.11 2 21 2.9 21 4V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V4C3 2.9 3.9 2 5 2M5 4V8H19V4H5M5 20H19V10H5V20M7 12H17V14H7V12M7 16H17V18H7V16Z" /></svg>
                      <a href="http://nc-web-sites.nc-web.com.co/#section-form" target="blank"><p>Formularios Web</p></a>
                    </div>

                    <div class='submenu__list-container-icon'>
                    <svg viewBox="0 0 24 24"><path d="M13,2.03C17.73,2.5 21.5,6.25 21.95,11C22.5,16.5 18.5,21.38 13,21.93V19.93C16.64,19.5 19.5,16.61 19.96,12.97C20.5,8.58 17.39,4.59 13,4.05V2.05L13,2.03M11,2.06V4.06C9.57,4.26 8.22,4.84 7.1,5.74L5.67,4.26C7.19,3 9.05,2.25 11,2.06M4.26,5.67L5.69,7.1C4.8,8.23 4.24,9.58 4.05,11H2.05C2.25,9.04 3,7.19 4.26,5.67M2.06,13H4.06C4.24,14.42 4.81,15.77 5.69,16.9L4.27,18.33C3.03,16.81 2.26,14.96 2.06,13M7.1,18.37C8.23,19.25 9.58,19.82 11,20V22C9.04,21.79 7.18,21 5.67,19.74L7.1,18.37M12,7.5L7.5,12H11V16H13V12H16.5L12,7.5Z" /></svg>
                      <a href="http://nc-web-sites.nc-web.com.co/#section-update" target="blank"><p>Actualizacion Web</p></a>
                    </div>
                  
                    <div class="submenu__list-container-icon">
                    <svg  viewBox="0 0 24 24"><path d="M6,2H18A2,2 0 0,1 20,4V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M6,16V20H18V16H6Z" /></svg>
                    <a href="http://nc-web-sites.nc-web.com.co/#section-footer" target="blank"> <p>Footer</p> </a>
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
customElements.define('sub-menu-nc-web-sites', SUbMenuNCWEbSites)
