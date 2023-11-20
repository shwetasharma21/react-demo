import React from "react";

function ProfileCard({ title, handle, image, description }) {
	return (
		<div className="card mt-4">
			<div className="card-image-top">
				<img src={image} alt="logo" />
			</div>
			<div className="card-body">
				<h1 className="card-title">
					{title} {handle}
				</h1>
				<div>{description}</div>
			</div>
		</div>
	);
}

export default ProfileCard;
