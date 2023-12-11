class Nav extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <nav>
                <a href="index.html">Home</a>
                <a href="resources.html">Resources Wiki</a>
                <a href="about.html">About</a>
                <!-- Start of Git pages -->
                <span>
                    <span id="showCommands">Git / Terminal</span>
                    <div id="hideCommands">
                        <a href="git/basics.html">Git Basics</a>
                    </div>
                </span>
                <!-- Start of Web Fundamentals Pages -->
                <span>
                    <span id='showFundamentals'>Web Fundamentals</span>
                    <div id='hideFundamentals'>
                        <a href="fundamentals/house.html">HTML - Building your Page</a>
                        <a href="fundamentals/cssTools.html">CSS - Playgrounds</a>
                        <a href="fundamentals/flexbox.html">CSS - Flexbox</a>
                        <a href="fundamentals/shapes.html">CSS - Shapes</a>
                        <a href="fundamentals/jsTools.html">JS - Playground</a>
                        <a href="fundamentals/loops.html">JS - Loops</a>
                        <a href="fundamentals/conditionals.html">JS - Conditionals</a>
                    </div>
                </span>
                <!-- Start of Python pages -->
                <span>
                    <span id='showPython'>Python</span>
                        <div id='hidePython'>
                        <a href="python/basics.html">Python Basics</a>
                        <a href="python/loops.html">Python Loops</a>
                        <a href="python/iteratingData.html">IteratingData</a>
                        <a href="python/classes.html">Classes</a>
                        <span class="dropdown">
                            <span class="dropdown-header" id='showAdvancedPython'>Advanced Python </span>
                            <div class="dropdown-content" id='hideAdvancedPython'>
                                <a href="../python/oop.html">Object Oriented Programming</a>
                                <a href="../python/errorHandling.html">Error Handling</a>
                            </div>
                        </span>

                        <span class="dropdown">
                            <span class="dropdown-header" id='showWebDevPython'>Web Development with Python </span>
                            <div class="dropdown-content" id='hideWebDevPython'>
                                <a href="python/flask.html">Flask Framework</a>
                                <a href="#">Django Framework</a>
                            </div>
                        </span>

                    </div>
                </span>
                <!-- Start of MERN pages -->
                <span>
                    <span id='showReact'>React / Express / Node</span>
                    <div id='hideReact'>
                    <a href="react/hooks.html">React Hooks</a>
                    </div>
                </span>
                <!-- Start of Java pages -->
                <span>
                    <span id='showJava'>Java Fundamentals</span>
                    <div id='hideJava'>

                    </div>
                </span>
                <!-- Start of C# pages -->
                <span>
                    <span id='showCSharp'>C# / .NET</span>
                    <div id='hideCSharp'>

                    </div>
                </span>
                <!-- Start of Data Science pages -->
                <span>
                    <span id='showDataScience'>Data Science</span>
                    <div id='hideDataScience'>
                        <a href="DS/DS.html">Introduction</a>
                        <a href="DS/filtering.html">Filtering</a>
                        <a href="DS/functions.html">Functions</a>
                    </div>
                </span>
                <!-- Start of Cyber Security pages -->
                <span>
                    <span id='showCyberSecurity'>Cyber</span>
                    <div id='hideCyberSecurity'>
                        <a href="cyber/sqlInjectionScanner.html">SQL Injection Scanner</a>
                    </div>
                </span>
            </nav>
        `
    }
}

customElements.define('nav-component', Nav)
