class ToolNav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="../../index.html">Home</a>
                <a href="../../resources.html">Resources Wiki</a>
                <a href="../../about.html">About</a>
                <!-- Start of Web Fundamentals Pages -->
                <span>
                    <span id='showFundamentals'>HTML / CSS / JS</span>
                    <div id='hideFundamentals'>
                        <a href="../house.html">HTML - Building your Page</a>
                        <a href="../tools.html">CSS - Playgrounds</a>
                        <a href="../flexbox.html">CSS - Flexbox</a>
                        <a href="../shapes.html">CSS - Shapes</a>
                        <a href="../loops.html">JS - Loops</a>
                        <a href="../conditionals.html">JS - Conditionals</a>
                    </div>
                </span>
                <!-- Start of Python pages -->
                <span>
                    <span id='showPython'>Python / Flask / Django</span>
                        <div id='hidePython'>
                        <a href="../../python/basics.html">Python Basics</a>
                        <a href="../../python/loops.html">Python Loops</a>
                        <a href="../../python/iteratingData.html">IteratingData</a>
                        <a href="../../python/classes.html">Classes</a>
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
                        <a href="../../git/basics.html">Git Basics</a>
                    </div>
                </span>
            </nav>
        `
    }
}

customElements.define('tool-component', ToolNav)