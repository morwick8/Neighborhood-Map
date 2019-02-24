import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';

const ImgList = props => {
	const results = props.data;
	let imgs;
	if (results.length > 0) {
		imgs = results.map(img =>
			<Img
				url={img.urls.thumb}
				user={img.user.links.html}
				description={img.description}
				name={img.user.name}
				link={img.links.html}
				key={img.id}
			/>
		);
	} else {
		imgs = <NoImgs />;
	}
	return (
		<div className="img-list">
			{imgs[1]}
		</div>
	);
};

export default ImgList;