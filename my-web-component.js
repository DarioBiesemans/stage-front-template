import {html, PolymerElement} from 'https://unpkg.com/polymer-cdn';

/**
 * `heatmap-bamboo`
 * An heatmap for bamboo
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyWebComponent extends PolymerElement {
    static get template() {
        return html`
<style >
:host {
    color: #585858;
    border-radius: 3px;
    border: 1px solid #888;
    padding: 10px;
    display: inline-block;
    width: auto;
    font-family: sans-serif;
    background-color: deeppink;
}

/* edit your CSS here */
p {
    color: #fff;
}
</style>
<div id="container">
    <!-- edit your HTML here -->
    <p>HTML works!</p>
    <p>[[someData]]</p>
</div>
    `;
    }

    static get properties() {
        return {
            someData: {
                type: String,
                value: "Databinding works!"
            }
        };
    }

    ready() {
        super.ready();
        alert('Javascript works!');
    }
}

window.customElements.define('my-web-component', MyWebComponent);
