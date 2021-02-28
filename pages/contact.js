import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
    render() {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="Contact | Billy's Blog"
                    metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via discord or the links listed below."
                />
                <Header />
                <div className="contact-container">
                    <div className="contact-section">
                        <h1>Contact</h1>
                        <p>Hi, I’m Billy, I'm a programmer and a gamedev. I uses Unity engine for game development.</p>
                        <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to DM me in discord <b>billyeatcookies#0173</b></p>
                    </div>
                    <div className="contact-section">
                        <h2>Around the Web</h2>
                        <ul>
                            <li><strong>Email</strong>: billydevbusiness@gmail.com.com</li>
                            <li><strong>GitHub</strong>: <a href="https://github.com/billyeatcookies">billyeatcookies</a></li>
                            <li><strong>Twitter</strong>: <a href="https://twitter.com/billyeatcookies">billyeatcookies twitter</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}