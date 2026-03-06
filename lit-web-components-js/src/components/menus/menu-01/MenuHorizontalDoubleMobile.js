import { LitElement, html, css } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { animate } from '@lit-labs/motion'

// Components
import './sub-menu-nc-web/SubMenuNcWeb.js'
import './sub-menu-nc-web/SubMenuNcWebSites.js'
import './sub-menu-nc-web/SubMenuNcWebCustomSoftware.js'
import './sub-menu-nc-web/SubMenuNcWebSoftware.js'

// Img
const Logo = new URL(
  '../../public/img/img-mobile/ncwebwhite.webp',
  import.meta.url
).href

export class MenuHorizontalDoubleMobile extends LitElement {
  static properties = {
    propMenu: { type: Boolean,
      reflect: true },
    propSubMenu: { type: Boolean,
      reflect: true },
    propSubMenuSites: { type: Boolean,
      reflect: true },
    propSubMenuSoftware: { type: Boolean,
      reflect: true },
    propSubMenuCrm: { type: Boolean,
      reflect: true },
    slid: { type: Boolean }
  }

  constructor() {
    super()
    this.propMenu = false
    this.propSubMenu = false
    this.propSubMenuSites = false
    this.propSubMenuSoftware = false
    this.propSubMenuCrm = false
    this.slid = false
  }

  1

  handleMenu() {
    if (this.propMenu === false) {
      this.propMenu = true
      this.propSubMenu = false
      this.propSubMenuSites = false
      this.propSubMenuSoftware = false
      this.propSubMenuCrm = false
    } else {
      this.propMenu = false
    }
    this.slid = !this.slid
  }

  handleSubMenu() {
    if (this.propSubMenu === false) {
      this.propSubMenu = true
      this.propSubMenuSites = false
      this.propSubMenuSoftware = false
      this.propSubMenuCrm = false
    } else {
      this.propSubMenu = false
    }
    this.slid = !this.slid
  }

  handleSubMenuSites() {
    if (this.propSubMenuSites === false) {
      this.propSubMenu = false
      this.propSubMenuSites = true
      this.propSubMenuSoftware = false
      this.propSubMenuCrm = false
    } else {
      this.propSubMenuSites = false
    }
    this.slid = !this.slid
  }

  handleSubMenuSoftware() {
    if (this.propSubMenuSoftware === false) {
      this.propSubMenu = false
      this.propSubMenuSites = false
      this.propSubMenuSoftware = true
      this.propSubMenuCrm = false
    } else {
      this.propSubMenuSoftware = false
    }
    this.slid = !this.slid
  }

  handleSubMenuCrm() {
    if (this.propSubMenuCrm === false) {
      this.propSubMenu = false
      this.propSubMenuSites = false
      this.propSubMenuSoftware = false
      this.propSubMenuCrm = true
    } else {
      this.propSubMenuCrm = false
    }
    this.slid = !this.slid
  }

  render() {
    return html`
      <div class="main">
        <div class="menu">
          <a href="https://www.nc-web.com.co/">
            <div class="menu__company">
              <img class="menu__company-img" src=${Logo} alt="Logo" />
            </div>
          </a>

          <div
            class="menu__button"
            id="menu__button"
            @click=${this.handleMenu}
            @keyup=${this.handleMenu}
          >
            ${this.propMenu
    ? html`
                  <svg class="menu__button-svg" viewBox="0 0 24 24">
                    <title>menu</title>
                    <path
                      d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                    />
                  </svg>
                `
    : html`
                  <svg class="menu__button-svg" viewBox="0 0 24 24">
                    <title>menu</title>
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                  </svg>
                `}
          </div>
          <div>
            ${this.propMenu
    ? html`
                  <nav
                    class="menu__nav ${classMap({ slid: this.slid })}"
                    ${animate()}
                    id="menu__nav"
                  >
                    <ul class="menu__nav-ul-m">
                      <li>
                        <div
                          class="menu__nav-ul-m-container"
                          @click=${this.handleSubMenu}
                          @keyup=${this.handleSubMenu}
                        >
                          <div>
                            <svg class="icon" viewBox="0 0 24 24">
                              <path
                                d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p>NC WEB</p>
                          </div>
                        </div>
                        <div>
                          ${this.propSubMenu
    ? html`
                                <div
                                  class="menu__nav-ul-m-container-menu1 ${classMap(
    { slid: this.slid }
  )}"
                                  ${animate()}
                                >
                                  <sub-menu-nc-web></sub-menu-nc-web>
                                </div>
                              `
    : html``}
                        </div>
                      </li>
                    </ul>

                    <ul class="menu__nav-ul-m">
                      <li>
                        <div
                          class="menu__nav-ul-m-container"
                          @click=${this.handleSubMenuSites}
                          @keyup=${this.handleSubMenuSites}
                        >
                          <div>
                            <svg class="icon" viewBox="0 0 24 24">
                              <path
                                d="M11 20.1L19.2 11.9C19.7 11.4 20.3 11.1 21 11.1C21.7 11.1 22.3 11.4 22.8 11.9L23 12.1V4C23 2.9 22.1 2 21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H11V20.1M3 4H21V7H3V4M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9Z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p>WEB SITES</p>
                          </div>
                        </div>
                        <div>
                          ${this.propSubMenuSites
    ? html`
                                <div
                                  class="menu__nav-ul-m-container-menu2 ${classMap(
    { slid: this.slid }
  )}"
                                  ${animate()}
                                >
                                  <sub-menu-nc-web-sites></sub-menu-nc-web-sites>
                                </div>
                              `
    : html``}
                        </div>
                      </li>
                    </ul>

                    <!-- <ul class="menu__nav-ul-m">
                      <li>
                        <div
                          class="menu__nav-ul-m-container"
                          @click=${this.handleSubMenuCrm}
                          @keyup=${this.handleSubMenuCrm}
                        >
                          <div>
                            <svg class="icon" viewBox="0 0 24 24">
                              <path
                                d="M21.8,13H20V21H13V17.67L15.79,14.88L16.5,15C17.66,15 18.6,14.06 18.6,12.9C18.6,11.74 17.66,10.8 16.5,10.8A2.1,2.1 0 0,0 14.4,12.9L14.5,13.61L13,15.13V9.65C13.66,9.29 14.1,8.6 14.1,7.8A2.1,2.1 0 0,0 12,5.7A2.1,2.1 0 0,0 9.9,7.8C9.9,8.6 10.34,9.29 11,9.65V15.13L9.5,13.61L9.6,12.9A2.1,2.1 0 0,0 7.5,10.8A2.1,2.1 0 0,0 5.4,12.9A2.1,2.1 0 0,0 7.5,15L8.21,14.88L11,17.67V21H4V13H2.25C1.83,13 1.42,13 1.42,12.79C1.43,12.57 1.85,12.15 2.28,11.72L11,3C11.33,2.67 11.67,2.33 12,2.33C12.33,2.33 12.67,2.67 13,3L17,7V6H19V9L21.78,11.78C22.18,12.18 22.59,12.59 22.6,12.8C22.6,13 22.2,13 21.8,13M7.5,12A0.9,0.9 0 0,1 8.4,12.9A0.9,0.9 0 0,1 7.5,13.8A0.9,0.9 0 0,1 6.6,12.9A0.9,0.9 0 0,1 7.5,12M16.5,12C17,12 17.4,12.4 17.4,12.9C17.4,13.4 17,13.8 16.5,13.8A0.9,0.9 0 0,1 15.6,12.9A0.9,0.9 0 0,1 16.5,12M12,6.9C12.5,6.9 12.9,7.3 12.9,7.8C12.9,8.3 12.5,8.7 12,8.7C11.5,8.7 11.1,8.3 11.1,7.8C11.1,7.3 11.5,6.9 12,6.9Z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p>NC SOFTWARE</p>
                          </div>
                        </div>
                        <div>
                          ${this.propSubMenuCrm
    ? html`
                                <div
                                  class="menu__nav-ul-m-container-menu3 ${classMap(
    { slid: this.slid }
  )}"
                                  ${animate()}
                                >
                                  <sub-menu-nc-web-crm></sub-menu-nc-web-crm>
                                </div>
                              `
    : html``}
                        </div>
                      </li>
                    </ul> -->

                    <!-- <ul class="menu__nav-ul-m">
                      <li>
                        <div
                          class="menu__nav-ul-m-container"
                          @click=${this.handleSubMenuSoftware}
                          @keyup=${this.handleSubMenuSoftware}
                        >
                          <div>
                            <svg class="icon" viewBox="0 0 24 24">
                              <path
                                d="M3,2A2,2 0 0,0 1,4V16C1,17.11 1.9,18 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4A2,2 0 0,0 21,2M3,4H21V16H3M15,5L11.5,8.5L15,12L16.4,10.6L14.3,8.5L16.4,6.4M9,8L7.6,9.4L9.7,11.5L7.6,13.6L9,15L12.5,11.5"
                              />
                            </svg>
                          </div>
                          <div>
                            <p>SOFTWARE PERSONALIZADO</p>
                          </div>
                        </div>
                        <div>
                          ${this.propSubMenuSoftware
    ? html`
                                <div
                                  class="menu__nav-ul-m-container-menu4 ${classMap(
    { slid: this.slid }
  )}"
                                  ${animate()}
                                >
                                  <sub-menu-nc-web-Software></sub-menu-nc-web-Software>
                                </div>
                              `
    : html``}
                        </div>
                      </li>
                    </ul> -->

                    <ul class="menu__nav-ul-m">
                      <li>
                        <div class="menu__nav-ul-m-container">
                          <div>
                            <svg class="icon" viewBox="0 0 24 24">
                              <path
                                d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p>LOGIN / REGISTER</p>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul class="menu__nav-ul-m">
                      <li>
                        <div class="menu__nav-ul-m-container">
                          <div>
                            <svg class="icon" viewBox="0 0 24 24">
                              <path
                                d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p>LOGIN / REGISTER</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </nav>
                `
    : html``}
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
      font-size: 0.8rem;
    }

    p {
      margin: 0;
      font-size: 1rem;
      color: #d6d6d6;
      cursor: pointer;
    }

    a:link {
      color: #d6d6d6;
    }

    a:visited {
      color: #d6d6d6;
      text-decoration: none;
    }

    .menu__nav {
      display: grid;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 5rem;
      right: 0;
      width: 100%;
      padding: 1rem;
      color: #3a3a3a;
      list-style: none;
      border-bottom-left-radius: 0.8rem;
      background-color: #102936;
      z-index: 10;
      transform: translateX();
      animation: slid;
      animation-duration: 1s;
    }

    @keyframes slid {
      0% {
        transform: translateY(-100px);
      }

      100% {
        transform: translateY(0);
      }
    }

    a {
      text-decoration: none;
    }

    a:link {
      color: #263238;
    }

    a:visited {
      color: #263238;
      text-decoration: none;
    }

    ul {
      text-align: center;
      list-style: none;
      border-radius: 0.5rem;
    }

    .main {
      position: absolute;
      width: 100%;
      z-index: 101;
    }

    .icon {
      width: 1.3rem;
      fill: #e1e1e1;
    }

    .menu {
      position: sticky;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 5rem;
      background-color: #102936;
    }

    .menu__nav-ul-m-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .menu__nav-ul-m-container-menu1 {
      display: grid;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 5;
      padding: 0.5rem 1rem;
      border-radius: 0.8rem;
    }

    .menu__nav-ul-m-container-menu2 {
      display: grid;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 5;
      padding: 0.5rem 1rem;
      border-radius: 0.8rem;
    }

    .menu__nav-ul-m-container-menu3 {
      display: grid;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 5;
      padding: 0.5rem 1rem;
      border-radius: 0.8rem;
    }

    .menu__nav-ul-m-container-menu4 {
      display: grid;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 5;
      padding: 0.5rem 1rem;
      border-radius: 0.8rem;
    }

    .menu__company-img {
      margin-top: 1rem;
      margin-left: 1rem;
      width: 3rem;
    }

    .menu__button {
      position: absolute;
      top: 1.5rem;
      right: 2rem;
    }

    .menu__button-svg {
      width: 2rem;
      height: 2rem;
      margin-top: auto;
      padding: 0.4rem;
      border-radius: 50%;
      fill: #263238;
      background-color: #ffffff;
      cursor: pointer;
    }
  `
}

customElements.define(
  'menu-horizontal-double-mobile',
  MenuHorizontalDoubleMobile
)
