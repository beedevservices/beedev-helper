class Footer extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2021-2023 BeeDev Services</p>
            </footer>
        `
    }
}
customElements.define('footer-component', Footer)