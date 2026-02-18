import { LitElement, html, css } from 'lit'

export class SubMenuNcWebLogin extends LitElement {

  render() {
    return html`
              <div class="submenu">
                <div class="submenu__list">
                  <div class='submenu__list-container'>
                    <div class='submenu__list-container-icon'>
                      <svg viewBox="0 0 24 24">
                        <title>login</title>
                        <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z" />
                      </svg>
                      <a href="/login.html" target="blank"><p>Login</p></a>
                    </div>
                    <div class='submenu__list-container-icon'>
                      <svg viewBox="0 0 24 24">
                        <title>account-plus</title>
                        <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M6,10V7H4V10H1V12H4V15H6V12H9V10M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12Z" />
                      </svg>
                      <a href="/register.html" target="blank"><p>Register</p></a>
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
customElements.define('sub-menu-nc-web-login', SubMenuNcWebLogin)
