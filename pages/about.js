import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
    render() {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="About Me | Billy's Blog"
                    metaDescription="Billy is aprogrammer, an indie gamedev and a student."
                />
                <Header />
                <div className="about-container">
                    <div className="about-section">
                        <h1>About Me</h1>
                        <p>I’m Billy, an indie gamedev and a student.</p>
                        <p>I started this website as a place to document everything I learned while going through a career change. I learn in public and write about everything I know.</p>
                    </div>
                    <div className="about-section">
                        <h2>My Projects</h2>
                        <ul>
                            <li><a href="https://github.com/billyeatcookies/Ember">Ember</a> – A Soft Engine which is on development. Made for UWP.</li>
                            <li><a href="https://github.com/billyeatcookies/untitled-compiler-project">Untitled</a> – A compiler written in pascal, on development.</li>
                            <li><a href="https://github.com/billyeatcookies/discord-chess">Discord.Chess</a> – Chess module for Discord.py.</li>
                            <li><a href="https://github.com/billyeatcookies/pastemyst-pas">PasteMyst.Pas</a> – An API wrapper for <a href="https://paste.myst.rs">PasteMyst</a> written in Pascal.</li>
                        </ul>
                    </div>
                    <div className="about-section">
                        <h2>This website was made with</h2>
                        <ul>
                            <li><strong>OS</strong>: <a href="https://www.linux.org/">Linux</a></li>
                            <li><strong>Editor</strong>: <a href="https://code.visualstudio.com/">VSCode</a>, <a href="https://neovim.io/">neovim</a></li>
                            <li><strong>Coding Framework</strong>: <a href="https://nextjs.org">Next.js</a></li>
                            <li><strong>Syntax Highlighting</strong>: <a href="https://prismjs.com">PrismJS</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}