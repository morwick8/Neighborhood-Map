import React from 'react';

const Img = props =>
	<li>
		<a href={props.link}>
			<img src={props.url} alt="Unsplash" />
		</a>
		<p>
			<span>Photo by </span>
			<a href={props.user}>{props.name}</a>
			<a href={props.link}> See on Unsplash</a>
		</p>
	</li>;

export default Img;