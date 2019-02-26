import React from 'react';
import PropTypes from 'prop-types'

class Img extends React.Component {

static propTypes = {

	img: PropTypes.object.isRequired
}

render() {
		const {img} = this.props

	return (
		<div>
			<a href={img.links.html}>
				<img src={img.urls.thumb} alt={img.description} />
			</a>
		<p>
			<span>Photo by </span>
			<a href={img.user.links.html}>{img.user.name}</a>
			<a href={img.links.html}> See on Unsplash.com</a>
		</p>
		</div>
	)
}}

export default Img