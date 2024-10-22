class Footer extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2021-2024 BeeDev Services</p>
            </footer>
            <script src="./js/smallScreen.js"></script>
        `
        console.log('Testing')
        const script = document.createElement('script');
        script.src = './js/smallScreen.js';
        script.onload = function() {
            console.log("smallScreen.js loaded successfully");
        };
        document.body.appendChild(script);
    }
}
customElements.define('footer-component', Footer)