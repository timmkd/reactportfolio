import React, {Component} from 'react';

export class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<h1 className="title">Tim McDonald<br/><span className="weight-thin">Front End Web Developer</span></h1>
					<ul className="social-icons">
						<li><a className="social-icons--icon icon-git" href="http://www.github.com/timmkd" target="_blank"><span>Git</span></a></li>
						<li><a className="social-icons--icon icon-twitter" href="http://www.twitter.com/timmkd" target="_blank"><span>Twitter</span></a></li>
						<li><a className="social-icons--icon icon-linkedin" href="https://uk.linkedin.com/in/tim-mcdonald-2232a531" target="_blank"><span>Linkedin</span></a></li>
						<li><a className="social-icons--icon icon-mail" href="mailto:tim.mkdonald@gmail.com" target="_blank"><span>Email</span></a></li>
						<li><span className="social-icons--icon icon-mobile"><span>Phone</span></span> 0770 3800 574</li>
					</ul>
					<div className="header--intro">
						<p className="h3 weight-thin">Hi, I&#39;m Tim McDonald. I am a London based contractor who specialises in <strong>Front End Web Development</strong>, with a background in <strong>design</strong>. I love taking great designs and making them into beautiful websites.</p>
						<p className="h3 weight-thin">You can see many of my recent projects below, and filter through by either using the search box or clicking on the skillsets listed underneath. I built this page with <strong>react.js</strong>. You can <strong><a href="https://github.com/timmkd/reactportfolio">view the source code on github</a></strong>.</p>
					</div>
				</div>
			</header>
		);
	}
}
