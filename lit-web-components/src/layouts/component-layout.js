
import { LitElement, css, html } from 'lit';

// MENUS
import '@views/menus/horizontal-menu'

class ComponentLayout extends LitElement {

    render() {
        return html`
            <div class='layout'>
                <div class='layout__menu'>
                    <!-- <slot name='slot-menu'></slot> -->
                    <horizontal-menu></horizontal-menu>
                </div>
                <div class='layout__body'>
                    <div class='layout__body-header'>
                        <slot name='slot-header'></slot>
                    </div>
                    <div class='layout__body-main'>
                        <slot name='slot-body'></slot>
                    </div>
                    <div class='layout__body-footer'>
                        <slot name='slot-footer'></slot>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('component-layout', ComponentLayout);