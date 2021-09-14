import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetadata from "../components/headMetadata.js"

export default class extends Component {
    render() {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title="billyeatcookies blog"
                    metaDescription="programmer, gamedev, student."
                />
                <Header />
                <div className="homepage-container">
                    <div className="homepage-introduction">
                        <h1>👋 Hi, I'm Billy.</h1>
                        <p>I'm a Programmer and a GameDev.</p>
                    </div>
                    <div className="homepage-latest-blog-posts">
                        <h2>
                            Latest Blog Posts
                            <a className="homepage-latest-blog-posts-view-all" href="/blog">View all</a>
                        </h2>
                        <div className="homepage-latest-blog-posts-list">
                            <a href="/blog/ember/day-00">
                                <div className="homepage-latest-blog-post">
                                    <div className="homepage-latest-thumbnail">
                                        <img src="/ember-logo.png" />
                                    </div>
                                    <div className="homepage-latest-blog-post-title">
                                        <h3>Building a 3D Engine, <b>Ember</b>: Day 00</h3>
                                    </div>
                                </div>
                            </a>
                            {
                            /* <a href="/blog/post-title">
                                <div className="homepage-latest-blog-post">
                                    <div className="homepage-latest-thumbnail">
                                        <img src="/ember.png" />
                                    </div>
                                    <div className="homepage-latest-blog-post-title">
                                        <h3>Your Blog Post Title</h3>
                                    </div>
                                </div>
                            </a> */
                            }
                        </div>
                    </div>
                    <div className="homepage-projects">
                        <h2>My Projects</h2>
                        <div className="homepage-projects-list">

                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/billyeatcookies/Ember">
                                        <div className="homepage-project-icon">🔥</div>
                                        <div className="homepage-project-title">Ember</div>
                                    </a>
                                </h3>
                                <p>3D Engine project.</p>
                                <div className="homepage-project-btns">
                                    <a className="homepage-project-view-btn" href="https://github.com/billyeatcookies/Ember">View</a>
                                </div>
                            </div>

                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/kookielang/Kookie">
                                        <div className="homepage-project-icon">🍪</div>
                                        <div className="homepage-project-title">kookielang/Kookie</div>
                                    </a>
                                </h3>
                                <p>Untitiled compiler project.</p>
                                <div className="homepage-project-btns">
                                    <a className="homepage-project-view-btn" href="https://github.com/kookielang/Kookie">View</a>
                                </div>
                            </div>

                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/billyeatcookies/BILL">
                                        <div className="homepage-project-icon">💿</div>
                                        <div className="homepage-project-title">BILL</div>
                                    </a>
                                </h3>
                                <p>Chess module for Discord.py.</p>
                                <div className="homepage-project-btns">
                                    <a className="homepage-project-view-btn" href="https://github.com/billyeatcookies/BILL">View</a>
                                </div>
                            </div>

                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/billyeatcookies/Kale">
                                        <div className="homepage-project-icon">🥬</div>
                                        <div className="homepage-project-title">Kale</div>
                                    </a>
                                </h3>
                                <p>An API wrapper for <a href="https://paste.myst.rs">PasteMyst</a>.</p>
                                <div className="homepage-project-btns">
                                    <a className="homepage-project-view-btn" href="https://github.com/billyeatcookies/Kale">View</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
