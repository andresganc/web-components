
import { LitElement, css, html} from 'lit'


class VerticalMenu extends LitElement {

    render() {
        return html`
            <div class='menu'>
                <div class='menu__title'>
                    <div>

                    </div>
                    <div>
                        <p>COMPONENTS</p>
                    </div>
                </div>
                <div class='menu__nav'>
                    <nav class='menu__nav--nav'>

                        <div class='menu__nav--nav--item item'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24">
                                    <path
                                        d="M11 20.1L19.2 11.9C19.7 11.4 20.3 11.1 21 11.1C21.7 11.1 22.3 11.4 22.8 11.9L23 12.1V4C23 2.9 22.1 2 21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H11V20.1M3 4H21V7H3V4M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9Z"
                                    />
                                </svg>
                            </div>
                            <div><a href='/components'>HOME</a></div>
                        </div>

                        <div class='menu__nav--nav--item item'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24">
                                    <path
                                        d="M11 20.1L19.2 11.9C19.7 11.4 20.3 11.1 21 11.1C21.7 11.1 22.3 11.4 22.8 11.9L23 12.1V4C23 2.9 22.1 2 21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H11V20.1M3 4H21V7H3V4M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9Z"
                                    />
                                </svg>
                            </div>
                            <div><a href='/components/buttons'>BUTTONS</a></div>
                        </div>

                        <div class='menu__nav--nav-item item'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24">
                                    <path
                                        d="M11 20.1L19.2 11.9C19.7 11.4 20.3 11.1 21 11.1C21.7 11.1 22.3 11.4 22.8 11.9L23 12.1V4C23 2.9 22.1 2 21 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H11V20.1M3 4H21V7H3V4M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9Z"
                                    />
                                </svg>
                            </div>
                            <div><a href='/components/menus'>MENUS</a></div>
                        </div>

                    </nav>
                </div>
            </div>
            
        `
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                margin: 0 auto;
                padding: .5rem;
                text-align: center;
            }

            a {
                text-decoration: none;
                font-size: 0.8rem;
            }

            a:link {
                color: #d6d6d6;
            }

            a:visited {
                color: #d6d6d6;
                text-decoration: none;
            }

            p {
                margin: 0;
                font-size: 0.8rem;
                color: #d6d6d6;
                cursor: pointer;
            }

            .icon {
                width: 1.3rem;
                fill: #e1e1e1;
            }

            ul {
                text-align: center;
                list-style: none;
                margin: 0 0.3rem;
                padding: 0.2rem 0.8rem;
                border-radius: 0.5rem;
            }

            .menu {
                display: grid;
                justify-content: space-between;
                align-items: center;
                padding: .5rem;
            }

            .menu__title {
                display: inline-block
            }

            .menu__nav {
                display: inline-block 
            }

            .menu__nav--nav {
                display: inline-block;
                justify-content: space-between;
                align-items: center;                
                
                /* &--item {
                    display: block;
                    padding: .5rem;
                    background-color: #000000;
                } */
            }

            .item {
                display: flex;
                padding: .5rem;
            }
            
        `
    }
}

customElements.define('vertical-menu', VerticalMenu);