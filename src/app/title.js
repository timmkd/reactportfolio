import React, {Component} from 'react';

export class Title extends Component {
	render() {
		return (
			<div>
				<h1 className="title">Tim McDonald<br/><span className="weight-thin">Front End Web Developer</span></h1>
				<ul className="social-icons">
					<li><a className="social-icons--icon icon-git" href="http://www.github.com/timmkd" target="_blank"><span>Git</span></a></li>
					<li><a className="social-icons--icon icon-twitter" href="http://www.twitter.com/timmkd" target="_blank"><span>Twitter</span></a></li>
					<li><a className="social-icons--icon icon-mail" href="mailto:tim.mkdonald@gmail.com" target="_blank"><span>Email</span></a></li>
					<li><span className="social-icons--icon icon-mobile"><span>Phone</span></span> 0770 3800 574</li>
				</ul>
			</div>
		);
	}
}
