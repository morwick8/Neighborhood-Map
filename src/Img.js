import React from 'react';
import PropTypes from 'prop-types'

class Img extends React.Component {

static propTypes = {
	id: PropTypes.number.isRequired,
	imgs: PropTypes.object.isRequired
};

render() {
		const imgs = this.props.imgs
		const img = imgs[this.props.id]

	return (
		<div>
		<a href={img.link}>
			<img src={img.url} alt={img.description} />
		</a>
		<p>
			<span>Photo by </span>
			<a href={img.user}>{img.name}</a>
			<a href={img.link}> See on Unsplash</a>
		</p>
		</div>
	)
}}

export default Img