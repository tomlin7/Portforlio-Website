import { Component } from "react"
import Prism from "prismjs"

import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetadata from "../../components/headMetadata.js"

export default class extends Component {
	componentDidMount() {
		Prism.highlightAll()
	}

	render() {
		return (
			<div className="layout-wrapper">
				<HeadMetadata
					title="Your Blog Post Title | Billy's Blog"
					metaDescription="Your Blog Post Description."
				/>
				<Header />
				<div className="blog-post-container">
					<div className="blog-post-top-section">
						<h1>Your Blog Post Title</h1>
						<div className="blog-post-top-meta">
							<span>5/1/2020</span>
							<a className="blog-post-top-tag-btn" href="/blog/tags/javascript">
								<span>javascript</span>
							</a>
							<a className="blog-post-top-tag-btn" href="/blog/tags/css">
								<span>css</span>
							</a>
						</div>
					</div>
					<div className="blog-post-body-content">
						<p>Blog post content will go here!</p>
						<h2>h2 Section Heading</h2>
						<h3>h3 Section Heading</h3>
						<h4>h4 Section Heading</h4>
						<h5>h5 Section Heading</h5>
						<p>A short paragraph with a link to <a href="https://www.google.com">Google</a>.</p>
						<p>An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. And add as much additional content here as you want. An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. Also an example of a <a href="https://www.google.com">link could go here</a>.</p>
						<p>An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. And add as much additional content here as you want. An example of a longer paragraph that will be used in your blog posts when you create your own website or blog. Also an example of a <a href="https://www.google.com">link could go here</a>.</p>
						<p>Ordered List:</p>
						<ol>
							<li>A sentence goes here.</li>
							<li>A short code snippet: <code>code snippet</code></li>
							<li>A link inside a unordered list bullet <a href="https://www.google.com">Google</a></li>
						</ol>
						<p>Unordered List:</p>
						<ul>
							<li>A sentence goes here.</li>
							<li>A short code snippet: <code>code snippet</code></li>
							<li>A link inside a unordered list bullet <a href="https://www.google.com">Google</a></li>
						</ul>

						<div className="blog-post-body-code-snippet">
							<nav className="blog-post-body-code-snippet-header">
								<span>example.html</span>
							</nav>
							<pre className="line-numbers language-html">
								<code className="html language-html">
									{
										`
											<div>
												<p>Html code example</p>
											</div>
										`
									}
								</code>
							</pre>
						</div>
						<div className="blog-post-body-code-snippet">
							<nav className="blog-post-body-code-snippet-header">
								<span>example.css</span>
							</nav>
							<pre className="line-numbers language-css">
								<code className="css language-css">
									{
										`
											body {
												text-transform: uppercase;
												margin: 0;
											}
										`
									}
								</code>
							</pre>
						</div>

						<div className="blog-post-body-code-snippet">
							<nav className="blog-post-body-code-snippet-header">
								<span>example.js</span>
							</nav>
							<pre className="line-numbers language-js">
								<code className="js language-js">
									{
										`
											const stripe = require('stripe')('token')

											(async () => {
												const paymentIntent = await stripe.paymentIntents.create({
													amount: 1099,
													currency: 'usd',
												})
											})()
										`
									}
								</code>
							</pre>
						</div>

						<div className="blog-post-body-code-snippet">
							<nav className="blog-post-body-code-snippet-header">
								<span>Terminal</span>
							</nav>
							<pre className="language-bash">
								<code className="bash language-bash">
									{
										`
											npm install react
										`
									}
								</code>
							</pre>
						</div>

						<img src="https://assets.coderrocketfuel.com/css-article-image.png" />

						<blockquote>
							Warning or special message that you want to stand out should be placed in this blockquote element.
						</blockquote>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
