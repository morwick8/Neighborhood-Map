import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

class ImgList extends React.Component {

render() {
	const results = this.props.data;
		return (
	
			<ul className="img-list">
				{results.map(img =>
						<li>
							<a href={img.links.html}>
							<img src={img.urls.thumb} alt="Unsplash" />
						</a>
					<p>
					<span>Photo by </span>
					<a href={img.user.links.html}>{img.user.name}</a>
					<a href={img.links.html}> See on Unsplash</a>
				</p>
				</li>)}
			
		</ul>
	)
	}
}


export default ImgList