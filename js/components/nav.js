class Nav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="https://helper.beedev-services.com/">Home</a>
                <a href="https://helper.beedev-services.com/resources.html">Resources Wiki</a>
                <a href="https://helper.beedev-services.com/about.html">About</a>
                <!-- Start of Web Fundamentals Pages -->
                <span>
                    <span id='showFundamentals'>HTML / CSS / JS</span>
                    <div id='hideFundamentals'>
                        <a href="https://helper.beedev-services.com/fundamentals/house.html">HTML - Building your Page</a>
                        <a href="https://helper.beedev-services.com/fundamentals/tools.html">CSS - Playgrounds</a>
                        <a href="https://helper.beedev-services.com/fundamentals/flexbox.html">CSS - Flexbox</a>
                        <a href="https://helper.beedev-services.com/fundamentals/shapes.html">CSS - Shapes</a>
                        <a href="https://helper.beedev-services.com/fundamentals/jsTools.html">JS - Playground</a>
                        <a href="https://helper.beedev-services.com/fundamentals/loops.html">JS - Loops</a>
                        <a href="https://helper.beedev-services.com/fundamentals/conditionals.html">JS - Conditionals</a>
                    </div>
                </span>
                <!-- Start of Python pages -->
                <span>
                    <span id='showPython'>Python / Flask / Django</span>
                        <div id='hidePython'>
                        <a href="https://helper.beedev-services.com/python/basics.html">Python Basics</a>
                        <a href="https://helper.beedev-services.com/python/loops.html">Python Loops</a>
                        <a href="https://helper.beedev-services.com/python/iteratingData.html">IteratingData</a>
                        <a href="https://helper.beedev-services.com/python/classes.html">Classes</a>
                    </div>
                </span>
                <!-- Start of MERN pages -->
                <span>
                    <span id='showReact'>React / Express / Node</span>
                    <div id='hideReact'>

                    </div>
                </span>
                <!-- Start of Java pages -->
                <span>
                    <span id='showJava'>Java / Sprint Boot</span>
                    <div id='hideJava'>

                    </div>
                </span>
                <!-- Start of C# pages -->
                <span>
                    <span id='showCSharp'>C# / .NET</span>
                    <div id='hideCSharp'>

                    </div>
                </span>
                <!-- Start of Git pages -->
                <span>
                    <span id="showCommands">Git / Terminal</span>
                    <div id="hideCommands">
                        <a href="https://helper.beedev-services.com/git/basics.html">Git Basics</a>
                    </div>
                </span>
            </nav>
        `
    }
}

customElements.define('nav-component', Nav)