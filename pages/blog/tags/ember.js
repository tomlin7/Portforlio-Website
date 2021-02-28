import { Component } from "react"

import Header from "../../../components/header.js"
import Footer from "../../../components/footer.js"
import HeadMetadata from "../../../components/headMetadata.js"

export default class extends Component {
    static async getInitialProps({ query }) {
        return {
            tag: query.tag
        }
    }

    render() {
        return (
            <div className="layout-wrapper">
                <HeadMetadata
                    title={`Blog posts tagged as "${this.props.tag}" | Billy's Blog`}
                    metaDescription={`All blog posts tagged as "${this.props.tag}".`}
                />
                <Header />
                <div className="blog-posts-container">
                    <h1>Blog posts tagged as <u>{this.props.tag}</u></h1>
                    <div className="blog-posts-list">
                        <a href="/blog/ember/day-00">
                            <div className="blog-posts-list-item">
                                <div className="blog-posts-thumbnail">
                                    <img src="/ember-logo.png" />
                                </div>
                                <div className="blog-posts-list-item-title-and-date">
                                    <h2>Building a 3D Engine, <b>Ember</b>: Day 00</h2>
                                    <div className="blog-posts-list-item-date">
                                        <span>2/28/2020</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
